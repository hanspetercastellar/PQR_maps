import React from "react";
import Formulario from "../form/Formulario";
import {Col, Container, Row} from "react-bootstrap";
import Mapa from "../mapa/Mapa";
import swal from "sweetalert";
 class SidebarSection extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             dataForm:{
                 infraestructura:'',
                 codigo:'',
                 tipoProblema:'',
                 barrio:'',
                 direccion:'',
                 latitud:'',
                 longitud:'',
                 descripcion:'',
                 nombre:'',
                 apellido:'',
                 telefono:'',
              
             },
             pqrs:[],
             error:null,
             status:false,
             loader:true
         }
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleChange = this.handleChange.bind(this)
         this.setError = this.setError.bind(this)
     }
     

    async handleSubmit(e){
         e.preventDefault()
        try {
            let config = {
                 method: 'POST',
                 headers:{
                     'Accept':'application/json',
                     'Content-Type': 'application/json',
                     'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                     
                 },
                 body: JSON.stringify({...this.state.dataForm})
             }
             let res = await fetch('/store',config)
             let data = await res.json()

             if(data.success){
                this.setState({
                    pqrs:this.state.pqrs.concat(data.data),
                    status:true
                })
             }else{
                 this.setState({
                     status:'error'
                 })
             }
           
            console.log(data)
        }catch(error){

        }
    }
    async handleChange(e){
        var alfaumerico = /^[a-zA-Z0-9]+$/;
        switch(e.target.name){
            case 'infraestructura':
                if(e.target.value==0){
                    alert('Seleccione una Infraestructura')
                }
                break;
                case 'codigo':
                  if(!alfaumerico.test(e.target.value)){
                      swal('!Ups','El codigo debe tener formato almanumerico','error')
                      e.target.value = ''
                      e.target.focus()
                  }
                    break;
        }

         this.setState({
             dataForm:{
                 ...this.state.dataForm,
                 [e.target.name]: e.target.value
             }

         })
    
    }
    setError(type){
         if(type==="error"){
             this.setState({
                 status:false
             })
         }else if(type==='success'){
             this.setState({
                 status:false
             })
         }
    }
    render(){

        if(this.state.status){
            swal("Buen Trabajo!", "Acabas de Registrar Un PQR", "success");

        }else if(this.state.status==="error"){
            swal("Ups ocurrio un error al registrar los datos", "error");
        }
        return (
            <>
               
                <div className={'content-body'}>
                     <Col md={4} className={'formuContent'} >
                     <section className={'section-form-content'}>
                     <Formulario submit={this.handleSubmit} change={this.handleChange} />
                     </section>
                     
                     </Col>
                     <Col md={8}>
                         <Mapa pqrs={this.state.pqrs}  />
                     </Col>
                 </div>
            </>
        )
    }

}

export default SidebarSection
