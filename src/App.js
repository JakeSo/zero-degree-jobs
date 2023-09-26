import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
 return (
  <Router>
      <div className="App">
        <CustomNavbar /> {/* Include your Navbar */}
        <Container fluid>
          {/* Set up routes */}
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Home page */}
            {/* <Route path="/job/:id" component={JobDetail} /> Job detail page */}
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
