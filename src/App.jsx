import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';

function App() {
 return (
      <main>
        <Navbar />
        <Container >
          <Outlet />
        </Container>
        <Footer />
        <SpeedInsights />
      </main>
  );
}

export default App;
