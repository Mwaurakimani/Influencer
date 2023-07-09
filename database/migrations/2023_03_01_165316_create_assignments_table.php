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
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bid_id');
            $table->decimal('agreed_price',15,2);
            $table->string('marketer_status')->default('running');
            $table->string('influencer_status')->default('running');
            $table->string('general_status')->default('running');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('bid_id')
                ->references('id')
                ->on('bids')
                ->onUpdate('cascade')
                ->onDelete('restrict');

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
        Schema::dropIfExists('assignments');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
