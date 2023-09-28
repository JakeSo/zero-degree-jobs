import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
 return (
      <div className="App">
        <CustomNavbar /> {/* Include your Navbar */}
        <Container fluid>
          {/* Set up routes */}
          <Routes>
            <Route path="/" exact element={<Home />} />{/* Home page */}
            {/* <Route path="/job/:id" component={JobDetail} /> Job detail page */}
          </Routes>
        </Container>
      </div>
  );
}

export default App;
