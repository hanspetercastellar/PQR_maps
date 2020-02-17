<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Infraestructura extends Model
{
    protected $table = 'infraestructuras';

    protected $fillable =['descripcion'];

    public function table_pqrs(){
        return $this->hasMany(Table_pqr::class,'ifr_id');
    }

}
