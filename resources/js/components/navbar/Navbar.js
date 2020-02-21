import React  from 'react'
import Navbar from "react-bootstrap/Navbar";

const  Nav = () => {

    return(
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    PQR
                </Navbar.Brand>
            </Navbar>
    )
}

export default Nav

