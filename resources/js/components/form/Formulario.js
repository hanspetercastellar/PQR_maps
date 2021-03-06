import Form from "react-bootstrap/Form";
import React, { useState,useEffect } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Loader from '../loader/loader'

const Formulario = ({submit,change})=> {
    const [validated, setValidated] = useState(false);
    const [infra,setInfra] = useState([])
    const [problem,setProblem] = useState([])
    const [isRndered, setIsrendered] = useState(false)
    const [loader,setLoader] = useState(true)
    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        }else{
           submit(form)
        }
        setValidated(true);
       
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
                        <option key={1} value={0}>Seleccione una</option>
                            {
                                infra.map((el,i)=>( 
                                    <option key={i+1} value={el.id}>{el.descripcion}</option>
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
                            Solo se admiten alfanumericos
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
                        <Form.Control type="number" step="any" pattern="^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}" name="latitud" onChange={change} placeholder="77.4488" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            No se admite este formato
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="text" step="any" pattern="^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}" name="longitud" onChange={change} placeholder="-47.2255" required />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        No se admite este formato
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
                        <Form.Control type="text"  placeholder="Nombre" onChange={change} name="nombre" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control   placeholder="Apellidos" onChange={change} name="apellido" required />
                        <Form.Control.Feedback type="invalid">
                            Este Campo es Requerido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="tel" maxlength="11" placeholder="Telefono" onChange={change} name="telefono" required />
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


export default Formulario
