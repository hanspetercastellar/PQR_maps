<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Table_pqr extends Model
{

    protected $table = 'table_pqr';

    protected $fillable = [
        'ifr_id','tipo_problema_id' ,'codigo_infraestructura', 'usuario_id','barrio','direccion','latitud','longitud','descripcion','created_at'
    ];

    public function user(){
        return $this->belonhagsTo(User::class);
    }
    public function infraestructura(){
        return $this->belongsTo(Infraestructura::class);
    }

    public function problema(){
        return $this->belongsTo(Problemas::class);
    }

}
