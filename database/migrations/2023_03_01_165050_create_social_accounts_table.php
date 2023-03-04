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
        Schema::create('social_accounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('influencer_id');
            $table->unsignedBigInteger('platform_id');
            $table->unsignedBigInteger('influencer_class_id')->nullable();
            $table->string('username');
            $table->decimal('following',10,0)->default(0);
            $table->string('status')->default('unverified');
            $table->timestamps();

            $table->foreign('influencer_id')->references('id')->on('influencers');
            $table->foreign('platform_id')->references('id')->on('platforms');
            $table->foreign('influencer_class_id')->references('id')->on('influencer_classes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_accounts');
    }
};
