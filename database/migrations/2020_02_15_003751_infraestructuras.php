<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Infraestructuras extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infraestructuras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('ifr_id');
            $table->foreign('ifr_id')->references('id')->on('infraestructuras');
            $table->integer('usuario_id');
            $table->foreign('usuario_id')->references('id')->on('usuarios');
            $table->string('barrio');
            $table->string('direccion');
            $table->integer('latitud');
            $table->integer('longitud');
            $table->string('descripcion');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
