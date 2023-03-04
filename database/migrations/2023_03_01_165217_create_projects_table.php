<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->text('description');
            $table->string('location')->nullable();
            $table->text('notes')->nullable();
            $table->string('kpi');
            $table->string('runtime');
            $table->string('metrics');
            $table->string('position');
            $table->string('status')->default('active');
            $table->string('tags')->nullable();
            $table->timestamps();

            $table->foreign('marketer_id')->references('id')->on('marketers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
};
