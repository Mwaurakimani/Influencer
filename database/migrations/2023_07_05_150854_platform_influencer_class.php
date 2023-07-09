<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("
        CREATE OR REPLACE VIEW PlatformInfluencerView AS
        select
            platforms.name as platform_name,
            ic.name as influencer_class_name,
            platforms.id as platform_id,
            ic.id as influencer_class_id,
            ic.min_count,
            ic.max_count
        from platforms
        join influencer_classes ic on platforms.id = ic.platform_id
        ");


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        DB::statement("DROP VIEW PlatformInfluencerView");
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
