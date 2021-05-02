import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Covid Help Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="patient" >Patient</Nav.Link>
                        <Nav.Link href="volunteer" >Volunteer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );

}

export default NavigationBar;