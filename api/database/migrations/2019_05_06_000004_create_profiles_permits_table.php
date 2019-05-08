<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesPermitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles_permits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_permit')->unsigned();
            $table->unsignedBigInteger('id_role')->unsigned();
            $table->string('active');
            $table->timestamps();
            $table->foreign('id_permit')->references('id')->on('permits')->onDelete('cascade');;
            $table->foreign('id_role')->references('id')->on('profiles')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles_permits');
    }
}
