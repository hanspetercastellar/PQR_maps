/*
* Fecha 12/02/2020
* Por: Hans castellar
* Descripcion: Componente principar, Aqui se inicia toda la aplicacion
* */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Importando estylos de bootstrap
import '../sass/bootstrap.min.css'
import '../sass/app.css'

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
    render() {
        return (
        <Router>
             <Nav></Nav>

                 <div>
                     <Col md={4}>
                         <SidebarSection/>
                     </Col>
                     <Col md={8}>
                         <h1>Aqui va el mapa</h1>
                     </Col>
                 </div>

            <Switch>
                <Route path={"/"}  />

            </Switch>
        </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
