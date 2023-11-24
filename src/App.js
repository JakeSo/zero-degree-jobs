import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import Welcome from './pages/employer/Welcome';

function App() {
 return (
      <div className="App">
        <CustomNavbar /> {/* Include your Navbar */}
        <Container fluid>
          {/* Set up routes */}
          <Routes>
            <Route path="/" element={<Navigate to={"/Search"} />} />
            <Route path="/Search" exact element={<Home />} />{/* Home page */}
            <Route path="/Employer/Welcome" element={<Welcome />} />
          </Routes>
        </Container>
        <Footer />
      </div>
  );
}

export default App;
