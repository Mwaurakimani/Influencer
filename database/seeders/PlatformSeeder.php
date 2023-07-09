<?php

namespace Database\Seeders;

use App\Models\Platform;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $platforms = Platform::all();

        if(count($platforms) == 0){

            $platforms = array(
                [
                    'name' => 'facebook',
                    'link' => 'http://www.facebook.com',
                    'icon' => 'facebook.png',
                ],
                [
                    'name' => 'twitter',
                    'link' => 'http://twitter.com',
                    'icon' => 'twitter.png',
                ],
                [
                    'name' => 'instagram',
                    'link' => 'http://instagram.com',
                    'icon' => 'instagram.png',
                ],
                [
                    'name' => 'tiktok',
                    'link' => 'http://tiktok',
                    'icon' => 'tiktok.png',
                ],
            );

            /*
            Nano-Influencer (1K - 10K )
            Micro-Influencer (10K - 100K )
            Macro-Influencer (100K - 500K )
            Meta-Influencer (500K - 1M )
            Mega-Influencer (1M+)
             * */

            $influencer_classes = [
                [
                    'name' => 'Nano-Influencer',
                    'min_count' => 1000,
                    'max_count' => 10_000
                ],
                [
                    'name' => 'Micro-Influencer',
                    'min_count' => 10_001,
                    'max_count' => 100_001,
                ],
                [
                    'name' => 'Macro-Influencer',
                    'min_count' => 100_001,
                    'max_count' => 500_000,
                ],
                [
                    'name' => 'Meta-Influencer',
                    'min_count' => 500_001,
                    'max_count' => 1_000_000
                ],
                [
                    'name' => 'Mega-Influencer',
                    'min_count' => 1_000_001,
                    'max_count' => 100_000_00
                ]
            ];

            $platforms = collect($platforms);

            $platforms->each(function ($platform) use ($influencer_classes) {
                $platformModel = new \App\Models\Platform();

                $platformModel->name = $platform['name'];
                $platformModel->link = $platform['link'];
                $platformModel->icon = $platform['icon'];

                $platformModel->save();

                foreach ($influencer_classes as $influencer_class) {
                    $platformModel->influencerClass()->create([
                        'name' => $influencer_class['name'],
                        'min_count' => $influencer_class['min_count'],
                        'max_count' => $influencer_class['max_count']
                    ]);
                }
            });
        }

    }
}
