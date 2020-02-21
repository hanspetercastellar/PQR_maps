<?php

namespace App\Http\Controllers;
use App\Usuario;
use Illuminate\Http\Request;
use App\Infraestructura;
use App\Problemas;
use DB;
use App\Table_pqr;
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
    public function store(Request $request){

              $validator= $this->validate($request, [
                    'infraestructura' => 'required',
                    'codigo' => 'required',
                    'tipoProblema' => 'required',
                    'barrio' => 'required',
                    'direccion' => 'required',
                    'latitud' => 'required',
                    'longitud' => 'required',
                    'descripcion' => 'required',
                    'nombre' => 'required',
                    'apellido' => 'required',
                    'telefono' => 'required',
                    'nombre' => 'required|max:255',
                    'descripcion' => 'required',

                ]);

       $idUser = DB::table('usuarios')->insertGetId(
            ['nombre'=> $request->nombre,'apellido'=>$request->apellido,'telefono'=>$request->telefono]
        );

        if($idUser){

          $saved =  DB::table('table_pqr')->insert(
                [
                    'ifr_id'=>$request->infraestructura,
                     'codigo_infraestructura' =>$request->codigo,
                      'usuario_id' => $idUser,
                      'barrio' => $request->barrio,
                      'direccion' => $request->direccion,
                      'latitud' => $request->latitud,
                      'longitud' =>$request->longitud,
                      'descripcion'=>$request->descripcion,
                      'tipo_problema_id'=>$request->tipoProblema
                ]
                );

                if($saved){
                    $lastData = json_decode($this->getLastData());
                    return response()->json([
                        'success'=>'Record is successfully added',
                        'data'=>$lastData
                        ]);
                }else{
                    DB::table('usuarios')->where('id', '=', $idUser)->delete();
                }
                
                
        }
         
                    
                  





    }

    public function getData(){

       return DB::table('table_pqr')
       ->join('usuarios','table_pqr.usuario_id','=','usuarios.id')
       ->join('infraestructuras','table_pqr.ifr_id','=','infraestructuras.id')
       ->join('tipo_problemas','table_pqr.tipo_problema_id','=','tipo_problemas.id')
       ->select('infraestructuras.descripcion as infr',
                'tipo_problemas.descripcion as problema',
                'codigo_infraestructura',
                'barrio',
                'direccion',
                'latitud',
                'longitud',
                'table_pqr.descripcion',
                'usuarios.nombre',
                'usuarios.apellido',
                'usuarios.telefono',
                'table_pqr.created_at as fecha'
                )->get();
    }

    private function getLastData(){

       return DB::table('table_pqr')
       ->join('usuarios','table_pqr.usuario_id','=','usuarios.id')
       ->join('infraestructuras','table_pqr.ifr_id','=','infraestructuras.id')
       ->join('tipo_problemas','table_pqr.tipo_problema_id','=','tipo_problemas.id')
       ->select('infraestructuras.descripcion as infr',
                'tipo_problemas.descripcion as problema',
                'codigo_infraestructura',
                'barrio',
                'direccion',
                'latitud',
                'longitud',
                'table_pqr.descripcion',
                'usuarios.nombre',
                'usuarios.apellido',
                'usuarios.telefono',
                'table_pqr.created_at as fecha'
                )->order_by('itable_pqr.id', 'desc')->first();
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
