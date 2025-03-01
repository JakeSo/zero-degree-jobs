import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import JobCard from "./JobCard"
import { useState, useEffect} from 'react'
import { fetchNewJobListings } from '../util/jobUtils';

const JobsSection = ({title, resolver}) => {
    const [newJobs, setNewJobs] = useState([]);
    useEffect(() => {
        const loadJobListings = async () => {
          try {
            const listings = await resolver();
            setNewJobs(listings);
          } catch (error) {
            console.error('Failed to load jobs:', error);
          }
        };
        loadJobListings();
      }, []);
    return (
    <Container w={"80%"} maxW="breakpoint-2xl" py={10} px={4}>
        <Heading as="h3" size={["lg","xl","3xl"]} mb={6} textStyle="heading.xl">
          {title}
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
          {newJobs.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
          {Array.from({ length: Math.max(0, 4 - newJobs.length) }).map((_, i) => (
            <JobCard key={`placeholder-${i}`} job={{}} />
          ))}
        </SimpleGrid>
      </Container>)
}

export default JobsSection;