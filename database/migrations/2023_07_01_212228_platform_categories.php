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
        CREATE OR REPLACE VIEW PlatformView AS
        SELECT
            p.id as p_id,
            ic.id as ic_id,
            p.name as platform_name,
            ic.name as influencer_class_name,
            p.icon,
            ic.min_count,
            ic.max_count
        from platforms p
        join influencer_classes ic on p.id = ic.platform_id
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        DB::statement("DROP VIEW PlatformView");
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
