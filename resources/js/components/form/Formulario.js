import Form from "react-bootstrap/Form";
import React, { useState,useEffect } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {jsonp} from "esri-leaflet/src/Request";
import PropTypes from 'prop-types';

const Formulario = ({submit,change})=> {
    const [validated, setValidated] = useState(false);
    const [infra,setInfra] = useState([])
    const [problem,setProblem] = useState([])
    const [isRndered, setIsrendered] = useState(false)
    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        submit(event)
    };


    const getData = async () => {
        try {

            let problems = await fetch('/getFormData/1');
            problems = await problems.json();
            let Infrs = await fetch('/getFormData');
            let infrs_data = await Infrs.json();
            setInfra(infrs_data)
            setProblem(problems)


        }catch (e) {

        }
    }
    useEffect(()=>{
        if(!isRndered){
            getData()
            setIsrendered(true)
        }
    })
    return (

        <>

            <h1>Registrar PQR</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Tipo de Infraestructura</Form.Label>
                        <Form.Control name='infraestructura'  onChange={change} as="select">
                            {
                                infra.map((el,i)=>(
                                    <option key={i} value={el.id}>{el.descripcion}</option>
                                ))
                            }
                        </Form.Control>
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Codigo de infraestructura</Form.Label>
                        <Form.Control
                            onChange={change}
                            required
                            type="text"
                            name="codigo"
                            placeholder="Alfanumerico"
                        />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Tipo de Problema</Form.Label>
                        <Form.Control name='tipoProblema' as="select" onChange={change}>
                            {
                                problem.map((el,i)=>(
                                    <option key={i} value={el.id}>{el.descripcion}</option>
                                ))
                            }
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Barrio</Form.Label>
                        <Form.Control type="text" name="barrio" onChange={change} placeholder="Barrio" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Direccion del Barrio</Form.Label>
                        <Form.Control type="text" name="direccion" onChange={change} placeholder="Direccion" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Latitud</Form.Label>
                        <Form.Control type="text" name="latitud" onChange={change} placeholder="Barrio" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="text" name="longitud" onChange={change} placeholder="Direccion" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Descripcion del Problema</Form.Label>
                        <Form.Control as="textarea" onChange={change} name="descripcion" rows="3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" onChange={change} name="nombre" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" onChange={change} name="apellido" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" onChange={change} name="telefono" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button block size="lg" variant="success"  type="submit">Registrar</Button>
            </Form>
            </>

    );
}

Formulario.PropTypes = {

}
export default Formulario
