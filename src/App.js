import React, { useState } from 'react';
// You can import your CSS styles here
import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';

import './App.css';

function App() {

  // Define state variables for the form inputs
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

  // Function to handle form submission (you can add your logic here)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the jobType and location values
    console.log(`Looking for a ${jobType} job in ${location}`);
  };

  const exampleJobs = ["Web Developer", "Data Analyst", "Customer Service", "Social Media Manager"];


  return (
    <div className="App">
      <Navbar bg="navbar dark-glassy" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#jobs">Job Listings</Nav.Link>
              <Nav.Link href="#profile">Your Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Container className="App-header" fluid >
          <h1>Welcome to SkillSell</h1>
          <Form inline className='frontpage-form' onSubmit={handleFormSubmit}>
                <Form.Label htmlFor="jobType">
                  I am looking for a
                </Form.Label>
                <Form.Control
                  type="text"
                  id="jobType"
                  placeholder={exampleJobs[0]}
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                />
                <Form.Label htmlFor="jobType">
                  job in
                </Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  placeholder="New York, NY"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  Search
                </Button>
          </Form>
        </Container>

        <Row>
          <Col>
            {/* Replace this placeholder with your job listings component */}
            <section className="job-listings">
              <h2>Latest Job Listings</h2>
            </section>
          </Col>
          <Col>
            {/* Replace this placeholder with your user profile component */}
            <section className="user-profile">
              <h2>Your Profile</h2>
            </section>
          </Col>
        </Row>
      </Container>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
