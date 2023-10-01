import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'


function CustomNavbar() {

    const currentPage = useLocation().pathname;

    return <Navbar Fill bg="navbar dark-glassy" data-bs-theme="dark" expand="lg">
        <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mx-auto'>
                    <Nav.Link active={currentPage==="/About"} as={Link} href="/About">About</Nav.Link>
                    <Nav.Link active={currentPage==="/Search"} as={Link} href="/Search">Search</Nav.Link>
                    <Nav.Link active={currentPage==="/Profile"} as={Link} href="/Profile">Your Profile</Nav.Link>
                </Nav>
                <Nav className='end-0 position-absolute'>
                    <Nav.Link active={currentPage==="/Employer/"} as={Link} href="/Employer">Employer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default CustomNavbar;