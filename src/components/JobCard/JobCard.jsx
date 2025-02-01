import React, { useState } from 'react'
import { Card, Col, Placeholder } from "react-bootstrap"
import JobModal from '../JobModal/JobModal'
import "./JobCard.css"
function JobCard({ job }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () =>
    setShowModal(true)


  const handleCloseModal = () =>
    setShowModal(false)

  const daysSincePosted = Math.floor((new Date() - new Date(job.date_posted)) / (1000 * 60 * 60 * 24))


  return (
    <>
      <Col sm={6} lg={3}>
        <Card className='jobCard' onClick={handleOpenModal}>
          <Card.Body>
            {job.title ? <Card.Title>{job.title}</Card.Title> : 
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>}
            {job.company ? <Card.Subtitle>{job.company}</Card.Subtitle> : 
            <Placeholder as={Card.Subtitle} animation="glow">
              <Placeholder xs={4} />
            </Placeholder>}
            {job.location ? <Card.Subtitle>{job.location}</Card.Subtitle> : 
            <Placeholder as={Card.Subtitle} animation="glow">
              <Placeholder xs={4} />
            </Placeholder>}
          </Card.Body>
          {job.date_posted ? <Card.Footer>
            <small>Posted {daysSincePosted} days ago</small>
          </Card.Footer> : undefined}
        </Card>
      </Col>
      <JobModal show={showModal} jobId={job.job_id} onHide={handleCloseModal} />
    </>
  )
}

export default JobCard;