<?php

namespace Database\Seeders;

use App\Http\HelperClasses\UsersClass\InfluencerClass;
use App\Models\Marketer;
use App\Models\Project;
use App\Models\ProjectRequirements;
use App\Models\User;
use Database\Seeders\SeederApplicationClasses\DataCollector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;

class ProjectsSeeder extends Seeder
{
    use DataCollector;

    private $workBook;

    public function run(): void
    {
        $mode = 'T';
        try {

            $reader = IOFactory::createReader('Xlsx');

            if ($mode == 'T') {
                $this->workBook = $reader->load("./database/Data/TestData/data_dump.xlsx");
            } else {
                $this->workBook = $reader->load("../database/Data/TestData/data_dump.xlsx");
            }



            $activeSheet = $this->workBook->setActiveSheetIndexByName('Projects');

            $data_set = $this->collect($activeSheet);

            $this->addProjects($data_set);

            $this->pullRequirements();

        } catch (Exception $e) {
            dump($e);
        } finally {
            if ($this->workBook) {
                $this->workBook->disconnectWorksheets();
            }
            unset($this->workBook);
            unset($reader);
        }
    }

    public function addProjects($data_set)
    {
        foreach ($data_set as $value) {
            if ($value != null) {

                $marketer = User::where('email',$value['marketer_email'])->first()->marketer()->first();


                if($marketer){

                    if (Project::find($value['ref'])){
                        continue;
                    }else{
                        $project = $marketer->projects()->create([
                            "id" => $value['ref'],
                            "title" => $value['title'],
                            "type" => $value['type'],
                            "description" => $value['description'],
                            "budget" => $value['budget'],
                            "metrics" => $value['metrics'],
                            "runtime" => $value['runtime'],
                            "notes" => $value['notes'],
                            "location" => $value['location'],
                            "status" => $value['status'],
                            "created_at" => $value['created_at'],
                        ]);
                    }

                }
            }
        }
    }

    public function pullRequirements(): array
    {
        $data_set = [];

        $activeSheet = $this->workBook->setActiveSheetIndexByName('Project Requirements');

        $temp_data = $this->collect($activeSheet);


        foreach ($temp_data as $key => $value){

            $influencer_class = DB::table('platformview')
                ->where('platform_name',$value['platform'])
                ->where('influencer_class_name',$value['influencer_class'])
                ->first()->ic_id;

            ProjectRequirements::create([
                'project_id' => $value['project_id'],
                'post_location' => $value['post_location'],
                'influencer_classes_id' => $influencer_class,
            ]);

        }

        return $data_set;
    }
}
