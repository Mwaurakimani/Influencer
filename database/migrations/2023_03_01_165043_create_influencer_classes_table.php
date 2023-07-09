<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('influencer_classes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('platform_id');
            $table->string('name');
            $table->decimal('min_count',15,0)->default(0);
            $table->decimal('max_count',15,0)->default(0);
            $table->timestamps();

            $table->foreign('platform_id')
                ->references('id')
                ->on('platforms')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        Schema::dropIfExists('influencer_classes');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
