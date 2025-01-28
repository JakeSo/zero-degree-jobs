// NewJob.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import supabase from '../util/supabase';

const NewJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: null,
    skills: [],
    remote: false,
    date_posted: new Date().toISOString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('jobs').upsert([jobData]);

      if (error) {
        console.error('Error adding a new job:', error);
        return;
      }

      console.log('New job added successfully:', data);

      // Redirect to the job listing page or perform any other action
    } catch (error) {
      console.error('Error adding a new job:', error);
    }
  };

  return (
    <Container>
      <h2>Add a New Job</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {/* Add other form fields for salary, skills, remote, etc. */}
        <Button variant="primary" type="submit">
          Add Job
        </Button>
      </Form>
    </Container>
  );
};

export default NewJob;
