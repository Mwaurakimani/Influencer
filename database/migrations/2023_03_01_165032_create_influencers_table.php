<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('influencers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->text('gender')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->text('country')->nullable();
            $table->text('location')->nullable();
            $table->string('role')->default('influencer');
            $table->text('bio')->nullable();
            $table->string('image_path')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade')
            ;
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
        Schema::dropIfExists('influencers');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
