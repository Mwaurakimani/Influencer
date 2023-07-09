<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Http\HelperClasses\UsersClass\MarketerClass;
use App\Http\HelperClasses\UsersClass\InfluencerClass;
use App\Http\HelperClasses\UsersClass\UserClass;
use App\Models\Platform;
use Illuminate\Database\Seeder;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;

class DatabaseSeeder extends Seeder
{
    protected $workBook;
    public function run()
    {

        $this->call(PlatformSeeder::class);
        $this->call(UsersSeeder::class);
    }
}
