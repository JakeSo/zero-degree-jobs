import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'


function CustomNavbar() {

    const currentPage = useLocation().pathname;

    return <Navbar bg="navbar dark-glassy" data-bs-theme="dark" expand="lg">
        <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mainNav'>
                    <Nav.Link active={currentPage==="/About"} as={Link} to="/About">About</Nav.Link>
                    <Nav.Link active={currentPage==="/Search"} as={Link} to="/Search">Search</Nav.Link>
                    <Nav.Link active={currentPage==="/Profile"} as={Link} to="/Profile">Your Profile</Nav.Link>
                </Nav>
                <Nav className='employerLink'>
                    <Nav.Link active={currentPage==="/Employer/Welcome"} as={Link} to="/Employer/Welcome">Employer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default CustomNavbar;