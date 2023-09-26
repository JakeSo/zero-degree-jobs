import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import supabase from '../util/supabase';

const JobModal = ({ show, onHide, jobId }) => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    if (jobId) {
      const fetchJobData = async () => {
        try {
          const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .eq('job_id', jobId)
            .single();

          if (error) {
            console.error('Error fetching job data:', error);
          } else {
            setJobData(data);
          }
        } catch (error) {
          console.error('Error fetching job data:', error);
        }
      };

      fetchJobData();
    }
  }, [jobId]);

  return (
    <Modal size='lg' show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{jobData ? jobData.title : 'Loading...'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {jobData ? (
          <div>
            <h4>Description:</h4>
            <p>{jobData.description}</p>
            <p>Salary: {jobData.salary}</p>
          </div>
        ) : (
          <p>Loading job data...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobModal;
