<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssignmentFileUploadRequest;
use App\Models\Assignment;
use App\Models\Bid;
use App\Models\InfluencerClass;
use App\Models\Media;
use App\Models\Platform;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\UnsupportedMediaTypeHttpException;

class ProjectsController extends Controller
{
    public function createProject(Request $request)
    {
        $project = null;
        $user = User::find(Auth::user()->id);
        $marketer = $user->marketer;

        DB::beginTransaction();

        try {

            $project = $marketer->projects()->create([
                'title' => $request['title'],
                'description' => $request['description'],
                'location' => $request['location'],
                'notes' => $request['notes'],
                'kpi' => $request['kpi'],
                'runtime' => $request['runtime'],
                'metrics' => $request['metric'],
                'position' => $request['position'],
            ]);

            foreach ($request['social'] as $key => $value) {
                if (!$value['active']) {
                    continue;
                }
                $platform_id = $this->getPlatformByName($value['name']);
                $influencer_class_id = $this->getInfluencerClassByNameAndPlatformID($platform_id, $value['influencerClass']);


                $projectRequirements = $project->projectRequirements()->create([
                    'influencer_classes_id' => $influencer_class_id,
                    'platform_id' => $platform_id,
                    'targetValue' => $value['targetValue'],
                    'price' => 0,
                ]);
            }

            DB::commit();
        } catch (Exception $e) {
            return $e;
            DB::rollBack();
        }

        return [
            "status" => true,
            "project" => $project
        ];
    }

    public function getPlatformByName($name)
    {
        $platform = Platform::where('name', $name)->get();

        return $platform[0]->id;
    }

    public function getInfluencerClassByNameAndPlatformID($platformID, $name)
    {
        $class = InfluencerClass::where('platform_id', $platformID)->where('name', $name)->get();

        return $class[0]->id;
    }

    public function fileUpload(AssignmentFileUploadRequest $request)
    {
        try {
            $file = $request->file()['fileData']['data'];
            $project = $request['project'][0];


            $media = new Media();
            $media->assignment_id = (function ($project) {
                $project_id = $project['id'];
                $bid = Bid::where('project_id', $project_id)->first();
                $assignment = Assignment::where('bid_id', $bid->id)->first();
                return $assignment->id;
            })($project);
            $media->type = (function ($file) {
                $type = $file->extension();


                if ($type == 'jpg') {
                    return 'image';
                } elseif ($type == 'pdf') {
                    return 'PDF';
                } else {
                    return 'N/A';
                }
            })($file);

            if ($media->type == 'N/A') {
                throw new UnsupportedMediaTypeHttpException();
            }

            $filePath = $file->storeAs('uploads', time() . '_' . $file->getClientOriginalName(), 'public');
            $media->path = $filePath;
            $media->name = $file->getClientOriginalName();

            $media->save();

            return [
                'status' => true,
                'message' => "uploaded"
            ];
        } catch (Exception $e) {
            return [
                'status' => false,
                'error' => "Unsupported File was sent"
            ];
        }
    }
}
