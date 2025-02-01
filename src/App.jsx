import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import CustomNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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
