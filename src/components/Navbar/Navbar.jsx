import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, ToggleButton } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';
import supabase from '../../util/supabase';

function CustomNavbar() {

    const currentPage = useLocation().pathname;

    const isEmployer = currentPage.startsWith("/Employer");

    const [user, setUser] = useState(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => authListener.subscription.unsubscribe();
    }, []);

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
                  <div className="mode-switch dark-glassy">
                    <Nav.Link 
                      as={Link} 
                      to="/Employer/Welcome" 
                      className={`switch-option ${isEmployer ? 'active' : ''}`}
                    >
                      Employer
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/"  // Update this route to match your Seeker page
                      className={`switch-option ${!isEmployer ? 'active' : ''}`}
                    >
                      Seeker
                    </Nav.Link>
                    <div className={`slider ${isEmployer ? 'left' : 'right'}`}></div>
                  </div>
                </Nav>
                {user ? (
                  <Nav.Link onClick={() => supabase.auth.signOut()}>Logout</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                )}
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default CustomNavbar;