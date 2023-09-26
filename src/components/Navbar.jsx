import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';



function CustomNavbar() {

    return <Navbar bg="navbar dark-glassy" data-bs-theme="dark" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#jobs">Job Listings</Nav.Link>
                    <Nav.Link href="#profile">Your Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default CustomNavbar;