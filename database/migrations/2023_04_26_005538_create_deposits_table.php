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
        Schema::create('deposits', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('agent_id');
            $table->unsignedBigInteger('user_id');
            $table->decimal('amount');
            $table->string('phone');
            $table->text('transaction_code');
            $table->string('status')->default('Unprocessed');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('restrict');

            $table->foreign('agent_id')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('deposits');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
