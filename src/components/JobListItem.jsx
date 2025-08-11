import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const JobListItem = ({ job, onClick }) => {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
      onClick={onClick}
    >
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">{job.title}</Text>
        <Text>{job.company}</Text>
        <Text fontSize="sm" color="gray.500">{job.location}</Text>
        <Text fontSize="xs" color="gray.400">Posted on {job.datePosted}</Text>
      </VStack>
    </Box>
  );
};

export default JobListItem;