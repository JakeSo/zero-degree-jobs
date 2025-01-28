import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
 return (
      <main>
        <CustomNavbar />
        <Container fluid>
          <Outlet />
        </Container>
        <Footer />
      </main>
  );
}

export default App;
