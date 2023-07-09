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
        Schema::table('assignments', function (Blueprint $table) {
            $table->integer('marketer_rating_count')->nullable();
            $table->text('marketer_comment')->nullable();
            $table->integer('influencer_rating_count')->nullable();
            $table->text('influencer_comment')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        Schema::table('assignments', function (Blueprint $table) {
            $table->dropColumn('marketer_rating_count');
            $table->dropColumn('marketer_comment');
            $table->dropColumn('influencer_rating_count');
            $table->dropColumn('influencer_comment');
        });
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

    }
};
