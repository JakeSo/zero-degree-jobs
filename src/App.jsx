import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react'; 
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
 return (
      <main>
        <CustomNavbar />
        <Container >
          <Outlet />
        </Container>
        <Footer />
      </main>
  );
}

export default App;
