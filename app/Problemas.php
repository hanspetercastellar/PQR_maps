<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Problemas extends Model
{
    protected $table = 'problemas';

    protected $fillable = ['descripcion'];

    public function table_pqrs(){
        return $this->belongsTo(Table_pqr::class);
    }
}
