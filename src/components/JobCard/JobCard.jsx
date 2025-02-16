import { Card, Heading, Text, Skeleton, DialogTrigger,DialogRoot } from '@chakra-ui/react';
import { useState } from 'react';
import JobModal from '../JobModal/JobModal';

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false)
  const daysSincePosted = Math.floor((new Date() - new Date(job.date_posted)) / (1000 * 60 * 60 * 24));
  // console.dir(job)
  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
    <DialogTrigger>
      <Card.Root
        bg="rgba(32, 58, 67, 0.8)"
        border="brand.200 solid"
        color="gray.200"
        transition="all 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12)"
        _hover={{
          transform: 'scale(1.05)',
          shadow: 'lg'
        }}
      >
        <Card.Body>
          {job.title ? (
            <Heading size="md" fontWeight="600" mb="1">
              {job.title}
            </Heading>
          ) : (
            <Skeleton height="24px" width="60%" mb="1" bg={'brand.100'} />
          )}

          {job.company ? (
            <Text fontSize="sm" mb="1">
              {job.company}
            </Text>
          ) : (
            <Skeleton height="16px" width="40%" mb="1" bg={'brand.100'} />
          )}

          {job.location ? (
            <Text fontSize="sm">{job.location}</Text>
          ) : (
            <Skeleton height="16px" width="50%" bg={'brand.100'}/>
          )}
        </Card.Body>

        {job.date_posted && (
          <Card.Footer>
            <Text fontSize="xs" color="gray.400">
              Posted {daysSincePosted} days ago
            </Text>
          </Card.Footer>
        )}
      </Card.Root>
      </DialogTrigger>

      <JobModal jobId={job.job_id} />
    </DialogRoot>
  );
}

export default JobCard;