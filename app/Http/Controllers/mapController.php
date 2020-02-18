<?php

namespace App\Http\Controllers;
use App\Usuario;
use Illuminate\Http\Request;
use App\Infraestructura;
use App\Problemas;
class mapController extends Controller
{

    public function getUsers(Request $request){

        $usuarios=new Usuario();

        return json_decode($usuarios::all());

    }


    /*
     * Function: @storePQR
     * Descripcion: ALmacena en la base de datos un PQR
     * Autor: Hans Castellar
     * Fecha: feb, 16 del 2020
     * */
    public function storePQR(Request $request){

        if($request->ajax()){

          return json_decode($request->all());
        }

    }

    /*
   * Function: @storePQR
   * Descripcion: Retorna toda la lista de infraestructuras
   * Autor: Hans Castellar
   * Fecha: feb, 16 del 2020
   * */
    public function getFormData($id=false){
        if($id){
           return  $this->getProblems();
        }else{
          return  $this->getInfrs();
        }

    }

    /*
    * Function: @storePQR
    * Descripcion: Retorna toda la lista de infraestructuras
    * Autor: Hans Castellar
    * Fecha: feb, 16 del 2020
    * */
    private function getInfrs(){
        return json_encode(Infraestructura::all());
    }
   /*
    * Function: @storePQR
    * Descripcion: Retorna toda la lista de infraestructuras
    * Autor: Hans Castellar
    * Fecha: feb, 16 del 2020
    * */
    private function getProblems(){
        return json_encode(Problemas::all());
    }

}
