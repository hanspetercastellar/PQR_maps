import React from "react";
import Formulario from "../form/Formulario";

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
             error:null
         }
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleChange = this.handleChange.bind(this)
     }
    async handleSubmit(e){
         e.preventDefault()
        try {
      /*       let config = {
                 method: 'POST',
                 headers:{
                     'Accept':'application/json',
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(this.state.dataForm)
             }
             let res = await fetch()
             let data = await res.json()*/

            this.setState({
                pqrs:this.state.pqrs.concat(this.state.dataForm)
            })
            console.log(this.state.pqrs)
        }catch(error){

        }
    }
    async handleChange(e){

         this.setState({
             dataForm:{
                 ...this.state.dataForm,
                 [e.target.name]: e.target.value
             }

         })
        console.log(this.state.dataForm)
    }
    render(){

        return (
            <>
                <section className={'section-form-content'}>
                    <Formulario submit={this.handleSubmit} change={this.handleChange} />
                </section>
            </>
        )
    }

}

export default SidebarSection
