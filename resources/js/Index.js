/*
* Fecha 12/02/2020
* Por: Hans castellar
* Descripcion: Componente para manejar el estado y presentar el mapa y el formulario
* */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Importando estylos de bootstrap
import '../sass/bootstrap.min.css'
import '../sass/app.css'
import 'leaflet/dist/leaflet.css'

//iniciando componentes de presentacion
import Landing from "./components/landing/landing";
import Nav from "./components/navbar/Navbar";
import SidebarSection from "./components/sidebar/SidebarSection";

//Componentes de Terceros
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";




export default class Index extends Component {

    constructor(props){

        super(props)
        this.state = {

            pqrList:[]
        }
        this.setPqrs = this.setPqrs.bind(this)
    }

    setPqrs(pqr){
        
        this.setState = {
            pqrList:pqr
        }
    }

    render() {

        return (
        <Router>
             <Nav></Nav>
              <SidebarSection/>
            <Switch>
                <Route path={"/"} />
            </Switch>
        </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
