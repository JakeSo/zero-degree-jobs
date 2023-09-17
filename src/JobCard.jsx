import React from 'react'
import { Card } from "react-bootstrap"

function JobCard({ job }) {
    return (
        <Card className='w-auto jobCard'>
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle>{job.company}</Card.Subtitle>
                <Card.Subtitle>{job.location}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default JobCard;