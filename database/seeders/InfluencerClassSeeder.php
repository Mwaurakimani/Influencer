<?php

namespace Database\Seeders;

use App\Models\InfluencerClass;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InfluencerClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public static function run($model,$file)
    {
        $json_data = json_decode(file_get_contents());

        $db_table_data= InfluencerClass::all();

        if(count($json_data) && count($db_table_data) <= 0){
            collect($json_data)->each(function($item) use ($model) {
                foreach ($item as $key => $value){
                    $model[$key] = $item[$key];
                }

                $model->save();
            });
        }

    }
}
