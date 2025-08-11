import React, { useState, useEffect } from 'react';
import { Container, VStack, Heading, Input, Button, Checkbox, Stack, Box } from '@chakra-ui/react';
import JobListItem from '../../components/JobListItem';
import JobDetailsPane from '../../components/JobDetailsPane';
import { useLoaderData } from 'react-router-dom';
const JobSearch = () => {
    const [searchParams, setSearchParams] = useState({ title: '', location: '', remote: false });
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobResults, setJobResults] = useState([]);
    const { jobType, location } = useLoaderData();
    const handleSearch = () => {
        // Mock search logic
        const mockResults = [
            { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Remote', datePosted: '2025-08-01' },
            { id: 2, title: 'Product Manager', company: 'Innovate Inc', location: 'New York, NY', datePosted: '2025-07-30' },
        ];
        setJobResults(mockResults);
    };

    useEffect(() => {
        if (jobType || location) {
            setSearchParams({ title: jobType || '', location: location || '', remote: false });
            handleSearch();
        }
    }, [jobType, location]);

    return (
        <Container maxW="container.lg" py={10}>
            <VStack spacing={6} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">Job Search</Heading>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
                    <Input
                        placeholder="Job Title"
                        value={searchParams.title}
                        onChange={(e) => setSearchParams({ ...searchParams, title: e.target.value })}
                    />
                    <Input
                        placeholder="Location"
                        value={searchParams.location}
                        onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                    />
                    <Checkbox
                        isChecked={searchParams.remote}
                        onChange={(e) => setSearchParams({ ...searchParams, remote: e.target.checked })}
                    >
                        Remote
                    </Checkbox>
                    <Button onClick={handleSearch}>Search</Button>
                </Stack>
                <Box>
                    {jobResults.map((job) => (
                        <JobListItem key={job.id} job={job} onClick={() => setSelectedJob(job)} />
                    ))}
                </Box>
                {selectedJob && <JobDetailsPane job={selectedJob} onClose={() => setSelectedJob(null)} />}
            </VStack>
        </Container>
    );
};

export default JobSearch;