<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Bid;
use App\Models\Chat;
use App\Models\Influencer;
use App\Models\InfluencerClass;
use App\Models\Marketer;
use App\Models\Media;
use App\Models\Platform;
use App\Models\Project;
use App\Models\SocialAccount;
use App\Models\Transfer;
use Exception;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\UnsupportedMediaTypeHttpException;

class InfluencerController extends Controller
{
    /**
     * @throws Exception
     */
    public function createInfluencer(Request $request): string
    {
        //TODO:Validation is required

        DB::beginTransaction();

        try {

            //create the user
            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'password' => bcrypt($request['password']),
            ]);

            //attach Influencer Details
            $influencer = $user->influencer()->create([
                'bio' => $request['bio'],
            ]);


            if (count($request['social_account']) > 0) {
                foreach ($request['social_account'] as $key => $socialAccount) {

                    //get platform
                    $platform = Platform::where('name', $key)->first();

                    //confirm the platform exist in database
                    if ($platform == null) {
                        throw new Exception("Could not find ${key} in platforms");
                    }

                    //confirm the account username and influencer exist in request
                    if ($socialAccount['username'] == null || $socialAccount['influencerClass'] == null) {

                        //if it doesn't exist then skip this platform the influencer has no account in this platform
                        continue;
                    }

                    $influencerClass = InfluencerClass::where('platform_id', $platform->id)
                        ->where('name', $socialAccount['influencerClass'])
                        ->first();

                    if ($influencerClass != null) {
                        $social_account = $influencer->socialAccount()->create([
                            'influencer_class_id' => $influencerClass->id,
                            'username' => $socialAccount['username'],
                            'status' => 'unverified'
                        ]);
                    }
                }
            }

            DB::commit();

        } catch (Exception $e) {
            DB::rollBack();

            throw new Exception($e->getMessage());
        }

        return true;
    }

    //This method receives a user and returns the user with theis social media account information
    public function attachSocialMediaAccounts(Request $request, $user): Collection
    {
        $modifiedUser = collect();
        if ($user) {
            $modifiedUser = collect($user)->map(function ($item, $key) {
                if ($key == 'influencer') {
                    $social_accounts = [];

                    $item['social_accounts'] = SocialAccount::with('influencerClass')->where('influencer_id', $item['id'])->get();
                }
                return $item;
            });
        }


        return $modifiedUser;
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::user()->id);
        $userUpdate = $request['user'];
        $influencerUpdate = Influencer::where('user_id', $user->id)->first();
        $social_accountUpdate = $userUpdate['social_account'];
        $file = $request['formData'];


        DB::beginTransaction();

        try {
            $file_path = null;

            if ($file) {
                if ($influencerUpdate->image_path) {
                    Storage::delete('public/' . $influencerUpdate->image_path);
                    $influencerUpdate->image_path = null;
                    $influencerUpdate->save();
                    $file_path = $this->uploadProfilePicture($file);
                } else {
                    $file_path = $this->uploadProfilePicture($file);
                }
            }

            $user->update([
                'first_name' => $userUpdate['first_name'],
                'last_name' => $userUpdate['last_name'],
                'email' => $userUpdate['email'],
                'phone' => $userUpdate['phone'],
            ]);


            $influencerUpdate->update([
                'bio' => $userUpdate['bio'],
            ]);


            if ($file) {
                $influencerUpdate->update([
                    'image_path' => $file_path
                ]);
            }

            foreach ($social_accountUpdate as $key => $socialAccount) {
                $input_platform = $key;

                if (($socialAccount['username'] == null)) {
                    continue;
                }
                $platform_id = Platform::where('name', $input_platform)->first()->id;

                if ($platform_id != null) {

                    $account_exist = function ($user, $platform) {
                        $platform_ids = InfluencerClass::where('platform_id', $platform->id)->get('id')->values();
                        $influencer = $user->influencer()->first();
                        return SocialAccount::where('influencer_id', $influencer->id)->whereIn('influencer_class_id', $platform_ids)->first();
                    };

                    $social_account = $account_exist($user, Platform::find($platform_id));

                    if ($social_account != null) {

                        $social_account->username = $social_account['username'];
                        $social_account->influencer_class_id = $this->getInfluencerClassID($platform_id, $socialAccount['influencerClass']);
                        $social_account->status = 'unverified';

                        $social_account->save();
                    } //                    else create
                    else {
                        $influencer = $user->influencer()->first();

                        $influencer->socialAccount()->create([
                            'influencer_class_id' => $this->getInfluencerClassID($platform_id, $socialAccount['influencerClass']),
                            'username' => $socialAccount['username'],
                        ]);
                    }
                } else {
                    throw new Exception("Platform does not exist");
                }
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e);
        }

        return ['success'];
    }

    public function getInfluencerClassID(mixed $platform_id, mixed $class_name)
    {

        return InfluencerClass::where('name', 'LIKE', $class_name)
            ->where('platform_id', $platform_id)->first()->id;
    }

    public function ViewProject(Request $request, $id)
    {
        $user = User::find(Auth::user()->id);
        $influencer = $user->influencer()->first();

        if ($influencer == null) {
            return redirect()->to('/');
        }

        $project = Project::where('id', $id)->with('bids', 'projectRequirements')->first();

        if ($project == null) {
            return redirect()->to('/');
        }

        $project->bids->transform(function ($item) use (&$project) {
            $user = $item->influencer()->first()->user()->first();
            $user->load('influencer');
            $user->influencer->load('socialAccount');
            $item->user = $user;
            $item->load('assignment');

            if ($item->assignment != null) {
                $item->assignment->load('chats');
                $project['assignment'] = $item->assignment;
                $project['chats'] = $item->assignment->chats;
                $project['media'] = $item->assignment->media()->get();
            }

            return $item;
        });

        $userArray = User::with('influencer')->find($user->id);
        $influencerArray = $userArray->toArray();

        $userMarketer = User::find(Marketer::find($project->marketer_id)->user_id);
        $userMarketerArray = $userMarketer->toArray();

        $project->influencer = $influencerArray;
        $project['marketer']['user'] = $userMarketerArray;

        return Inertia::render('Influencer/ViewProject', [
            'project' => $project,
            'marketer' => $this->getMarketerRelatedContent(Marketer::find($project->marketer_id))
        ]);
    }

    public function getMarketerRelatedContent($marketer){
        $assigned_projects = DB::select('select count(project_id) as assigned_projects from ProjectAssignment where marketer_id=?',[$marketer->id]);

        if (count($assigned_projects) > 0){
            $assigned_projects = $assigned_projects[0]->assigned_projects;
        }else{
            $assigned_projects = 0;
        }

        return [
            'posted_projects' => $projects_posted = count(Project::where('marketer_id',$marketer->id)->get()),
            'assigned_projects' => $assigned_projects,
            'total_spent' => Transfer::where('from',User::find($marketer->user_id)->id)->sum('amount')
        ];
    }

    public function getActiveProjects(Request $request)
    {
        $influencer = User::find(Auth::user()->id)->influencer()->first();

        if ($influencer == null) {
            return redirect('/');
        }

        $active_bids = collect(DB::select("select id from projects where id IN (select project_id from bids where influencer_id = ?);",[$influencer->id]))->pluck("id")->values()->toArray();

        $projects = Project::whereIn('id',$active_bids)->with('projectRequirements')->get();

        return Inertia::render('Influencer/MyProjects', [
            'projects' => $projects
        ]);
    }

    private function uploadProfilePicture(array|UploadedFile $file)
    {
        $uploadedFile = new UploadedFile($file, $file->getClientOriginalName());
        $filePath = $uploadedFile->getPathname();
        $mimeType = null;
        if (extension_loaded('fileinfo')) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mimeType = finfo_file($finfo, $filePath);
            finfo_close($finfo);
        } else {
            $fileObj = new File($filePath);
            $mimeType = $fileObj->getMimeType();
        }

        $type = (function ($mimeType) {

            $file_types_image = [
                'image/jpeg',
                'image/png',
            ];


            if (in_array($mimeType, $file_types_image)) {
                return 'image';
            } else {
                return 'N/A';
            }
        })($mimeType);

        if ($type == 'N/A') {
            throw new UnsupportedMediaTypeHttpException();
        }

        return $file->storeAs('ProfilePictures', time() . '_' . Auth::user()->id . '_' . $file->getClientOriginalName(), 'public');
    }

    public function removeAccount(Request $request, $id, $account)
    {

        $user = Influencer::where('user_id', $id)->first();
        $platform = Platform::where('name', 'LIKE', '%' . $account . '%')->first()->id;
        $influencerClasses = InfluencerClass::where('platform_id', $platform)->get('id')->values();
        $account = SocialAccount::where('influencer_id', $user->id)->whereIn('influencer_class_id', $influencerClasses)->first();
        $account->delete();
    }
}
