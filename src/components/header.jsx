import React, { Component } from 'react';
import { Nav,Navbar, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div style={{}}>
                    <Navbar sticky="sticky-top" collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand className="navbar-brand" href="#home"><img style={{height:60, width:120, }} src="./images/logo1.jpg" alt="logo"></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                      <Nav.Link href="#features">Overview</Nav.Link>
                                      <Nav.Link href="#pricing">Sensors</Nav.Link>
                                    </Nav>
                                    <Nav>
                                      <Nav.Link href="#deets">Projects</Nav.Link>
                                      <Nav.Link eventKey={2} href="#memes">About</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
        )
    }
}