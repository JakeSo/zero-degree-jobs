import React, { useState } from 'react';
// You can import your CSS styles here
import { Container, Row, Form, Button } from 'react-bootstrap';
import JobCard from '../JobCard';

function Home() {

  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');



  // Function to handle form submission (you can add your logic here)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the jobType and location values
    console.log(`Looking for a ${jobType} job in ${location}`);
  };

  const exampleJobs = ["Web Developer", "Data Analyst", "Customer Service", "Social Media Manager"];
  const dummyJob = {
    id: 1,
    title: "Senior Data Analyst",
    location: "Charlotte, NC",
    company: "Google"
  }

  return (
    <Container>
      <Container className="header" fluid >
        <h1 className='name'>&nbsp;zero°</h1>
        <h3 className='slogan'>Connecting Talent, <strong>Ignoring Degrees</strong></h3>
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
      <Container fluid className='content'>
        <Container className="job-listings">
          <h2>New postings</h2>
          <Row class='jobs'>
            <JobCard key={dummyJob.id} job={dummyJob} />
          </Row>
        </Container>
      </Container>

      <footer>
        {/* Footer content */}
      </footer>
    </Container>
  );
}

export default Home;
