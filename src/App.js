import React, { useState } from 'react';
// You can import your CSS styles here
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CustomNavbar from './Navbar';
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
      
      <CustomNavbar />
      <Container fluid>
        <Container className="header" fluid >
          <h1 className='name'>zero°</h1>
          <h3 className='my-5'>Connecting Talent, Ignoring Degrees</h3>
          <Form inline className='frontpage-form' onSubmit={handleFormSubmit}>
                <Form.Label className='my-0' htmlFor="jobType">
                  I am looking for a
                </Form.Label>
                <Form.Control
                  type="text"
                  id="jobType"
                  placeholder={exampleJobs[0]}
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                />
                <Form.Label className='my-0' htmlFor="jobType">
                  job in
                </Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  placeholder="New York, NY"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button variant="outline-secondary" type="submit">
                  Search
                </Button>
          </Form>
        </Container>
        <Row>
            <section className="job-listings">
              <h2>Just listed</h2>
            </section>
        </Row>
      </Container>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
