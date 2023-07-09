<?php

namespace Database\Seeders;

use App\Http\HelperClasses\UsersClass\InfluencerClass;
use App\Http\HelperClasses\UsersClass\MarketerClass;
use App\Http\HelperClasses\UsersClass\UserClass;
use Database\Seeders\SeederApplicationClasses\DataCollector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;

/**
 * Inserts User data into the database
 */
class UsersSeeder extends Seeder
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

            $activeSheet = $this->workBook->setActiveSheetIndexByName('Users');

            $data_set = $this->collect($activeSheet);

            $this->addUsers($data_set);

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

    private function addUsers($data_set): void
    {
        $adminDesignations = ['Administrator', 'Agent', 'Moderator', 'Manager'];

        if (count($data_set) > 0) {
            foreach ($data_set as $row) {
                $row['password'] = bcrypt('password');

                try {
                    if ($row['designation'] == 'Marketer') {
                        $this->addMarketer($row);
                    } elseif ($row['designation'] == 'Influencer') {
                        $this->addInfluencer($row);
                    } elseif (in_array($row['designation'], $adminDesignations)) {
                        $this->addAdmin($row);
                    }
                } catch (\Exception $e) {
                    dd($e);
                }
            }
        }
    }

    /**
     * @throws \Exception
     */
    public function addMarketer($row): void
    {
        $user = new MarketerClass($row);
    }

    /**
     * @throws \Exception
     */
    public function addInfluencer($row): void
    {
        $row['socialAccounts'] = [];

        //facebook
        if (isset($row['facebook'])) {
            $temp_array = [];
            $temp_array['platform'] = 'facebook';
            $temp_array['username'] = $row['facebook'];
            $temp_array['influencerClass'] = $row['facebook_class'];
            array_push($row['socialAccounts'], $temp_array);
        }

        //twitter
        if (isset($row['twitter'])) {
            $temp_array = [];
            $temp_array['platform'] = 'twitter';
            $temp_array['username'] = $row['twitter'];
            $temp_array['influencerClass'] = $row['twitter_class'];
            array_push($row['socialAccounts'], $temp_array);
        }

        //instagram
        if (isset($row['instagram'])) {
            $temp_array = [];
            $temp_array['platform'] = 'instagram';
            $temp_array['username'] = $row['instagram'];
            $temp_array['influencerClass'] = $row['instagram_class'];
            array_push($row['socialAccounts'], $temp_array);
        }

        //tiktok
        if (isset($row['tiktok'])) {
            $temp_array = [];
            $temp_array['platform'] = 'tiktok';
            $temp_array['username'] = $row['tiktok'];
            $temp_array['influencerClass'] = $row['tiktok_class'];
            array_push($row['socialAccounts'], $temp_array);
        }


        $user = new InfluencerClass($row);
    }

    /**
     * @throws \Exception
     */
    public function addAdmin($row): void
    {
        $user = new UserClass($row);
    }
}
