<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("
            CREATE OR REPLACE VIEW ProjectAssignment AS
            select
                p.id as project_id,
                m.id as marketer_id,
                i.id as influencer_id,
                b.id as bid_id,
                assignments.id
            from assignments
            join bids b on b.id = assignments.bid_id
            join projects p on b.project_id = p.id
            join influencers i on b.influencer_id = i.id
            join marketers m on p.marketer_id = m.id;
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        DB::statement("DROP VIEW ProjectAssignment");
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
