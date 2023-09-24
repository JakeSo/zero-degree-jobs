import React, { useState } from 'react'
import { Button, Card, Col, Container } from "react-bootstrap"
import { JobModal } from './JobModal'

function JobCard({ job }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () =>
        setShowModal(true)


    const handleCloseModal = () =>
        setShowModal(false)


    return (
        <>
            <Col sm={6} lg={3}>
                <Card className='jobCard' onClick={handleOpenModal}>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle>{job.company}</Card.Subtitle>
                        <Card.Subtitle>{job.location}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <JobModal show={showModal} job={job} onHide={handleCloseModal}/>
        </>
    )
}

export default JobCard;