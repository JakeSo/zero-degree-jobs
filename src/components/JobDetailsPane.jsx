import React from 'react';
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const JobDetailsPane = ({ job, onClose }) => {
  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      width="400px"
      height="100%"
      bg="white"
      boxShadow="lg"
      p={6}
      overflowY="auto"
    >
      <VStack align="start" spacing={4}>
        <Heading size="lg">{job.title}</Heading>
        <Text fontWeight="bold">Company: {job.company}</Text>
        <Text>Location: {job.location}</Text>
        <Text>Date Posted: {job.datePosted}</Text>
        <Text>Description: {job.description || 'No description available.'}</Text>
        <Button onClick={onClose} colorScheme="blue">Close</Button>
      </VStack>
    </Box>
  );
};

export default JobDetailsPane;