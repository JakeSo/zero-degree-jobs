import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const JobModal = ({ show, onHide, jobId }) => {
 const [jobData, setJobData] = useState(null);

 useEffect(() => {
    if (jobId) {
      const jobRef = firebase.database().ref(`jobs/${jobId}`);
      jobRef.on('value', (snapshot) => {
        setJobData(snapshot.val());
      });

      return () => {
        jobRef.off('value');
      };
    }
 }, [jobId]);

 return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{jobData ? jobData.title : 'Loading...'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {jobData ? (
          <div>
            <p>Description: {jobData.description}</p>
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