import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Placeholder } from 'react-bootstrap';
import JobCard from '../../components/JobCard/JobCard';
import { fetchNewJobListings} from '../../util/jobUtils';
import './Home.css';
function Home() {

  const [newJobs, setNewJobs] = useState([]);
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    async function loadJobListings() {
      const newJobs = await fetchNewJobListings();
      setNewJobs(newJobs);
    }
    loadJobListings();
  }, []);
  
  const placeholders = Array.from({ length: Math.max(0, 4 - newJobs.length) });


  // Function to handle form submission (you can add your logic here)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the jobType and location values
    console.log(`Looking for a ${jobType} job in ${location}`);
  };

  const exampleJobs = ["Web Developer", "Data Analyst", "Customer Service", "Social Media Manager"];

  return (
    <Container fluid>
      <Container className="header" fluid >
        <h1 className='name'>zero°</h1>
        <h3 className='slogan'>Connecting Talent, <strong>Ignoring Degrees</strong></h3>
        <Form className='frontpage-form' onSubmit={handleFormSubmit}>
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
          <Button variant="outline-secondary" type="submit" size='lg'>
            Search
          </Button>
        </Form>
      </Container>
      <Container fluid className='content'>
        <Container className="job-listings">
          <h2>New postings</h2>
          <Row className='jobs'>
            {newJobs.map((job) => (
              <JobCard key={job.job_id} job={job} />
            ))}
            {placeholders.map((_, index) => (
              <JobCard key={index} job={{}} />
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
