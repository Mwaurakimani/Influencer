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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('marketer_id');
            $table->string('title');
            $table->string('type');
            $table->text('description')->nullable();
            $table->string('budget');
            $table->string('metrics');
            $table->string('runtime');
            $table->text('notes')->nullable();
            $table->string('location')->nullable();
            $table->enum('status',['Active','Inactive'])->default('Active');
            $table->timestamps();
            $table->softDeletes();


            $table->foreign('marketer_id')
                ->references('id')
                ->on('marketers')
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
        Schema::dropIfExists('projects');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
