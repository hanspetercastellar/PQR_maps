import Form from "react-bootstrap/Form";
import React, { useState } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {jsonp} from "esri-leaflet/src/Request";

const Formulario = ({dataForm})=> {
    const [validated, setValidated] = useState(false);

    var [problem,infr] = dataForm;

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.log(dataForm)
    };


    return (

        <>
            <h1>Registrar PQR</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Tipo de Infraestructura</Form.Label>
                        <Form.Control name='infraestructura' as="select">

                        {/*    {infr.map((el,i)=>(
                                    <option key={i+1} value={el.id}>{el.descripcion}</option>
                                )
                            )}*/}
                        </Form.Control>
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Codigo de infraestructura</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="codigo"
                            placeholder="Alfanumerico"
                            defaultValue="Otto"
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
                        <Form.Control name='tipoProblema' as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Barrio</Form.Label>
                        <Form.Control type="text" name="barrio" placeholder="Barrio" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Direccion del Barrio</Form.Label>
                        <Form.Control type="text" name="direccion" placeholder="Direccion" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Latitud</Form.Label>
                        <Form.Control type="text" name="latitud" placeholder="Barrio" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="text" name="longitud" placeholder="Direccion" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Descripcion del Problema</Form.Label>
                        <Form.Control as="textarea" name="descripcion" rows="3" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name="nombre" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" name="apellido" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" name="telefono" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button block size="lg" variant="success"  type="submit">Registrar</Button>
            </Form>
            </>

    );
}

export default Formulario
