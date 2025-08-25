import React from 'react';
import { Box, Text, VStack, Button, HStack } from '@chakra-ui/react';

const dateFormatter = new Intl.DateTimeFormat('en-US', { 
  year: 'numeric', 
  month: 'short', 
  day: '2-digit' 
});

// Enhanced JobListItem with connection indicator
const JobListItem = ({ job, selected, onClick }) => {
  return (
    <Box
      p={5}
      borderWidth={1}
      borderRadius="xl"
      borderRight={selected ? "none" : "inherit"}
      borderEndRadius={selected ? "none" : "xl"}
      bgColor={selected ? "brand.400" : "whiteAlpha.100"}
      borderColor={selected ? "brand.200" : "transparent"}
      width={selected ? "105%": "100%"}
      boxShadow={selected ? "none" : "md"}
      boxShadowColor="brand.900"
      transition="all 0.3s ease-in-out"
      position="relative"
      _hover={
        selected
          ? {}
          : {
              bg: "whiteAlpha.200",
              cursor: "pointer",
              transform: "scale(1.02)",
              boxShadow: "md"
            }
      }
      onClick={onClick}
      // Add a slight transform when selected to show connection
      transform={selected ? "translateX(8px)" : "translateX(0)"}
    >
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="xl" color="white">
          {job.title}
        </Text>
        <Text fontSize="md" color="gray.200">
          {job.company}
        </Text>
        <Box 
          px={3} 
          py={1} 
          bg="brand.100" 
          borderRadius="md" 
          fontSize="sm" 
          color="white"
          display="inline-block"
        >
          {job.location}
        </Box>
        <Text fontSize="xs" color="gray.400" mt={2}>
          Posted on {dateFormatter.format(new Date(job.datePosted))}
        </Text>
      </VStack>
    </Box>
  );
};

// Container component to manage the connection
const ConnectedJobSearch = ({ jobResults, selectedJob, setSelectedJob }) => {
  return (
    <HStack 
      align="start" 
      gap={6} 
      justify="space-between"
      position="relative"
    >
      {/* Job List */}
      <VStack width="50%" align="stretch" spacing={4}>
        {jobResults.map((job) => (
          <JobListItem
            key={job.id}
            job={job}
            selected={selectedJob && selectedJob.id === job.id}
            onClick={() => setSelectedJob(job)}
          />
        ))}
      </VStack>

      {/* Details Pane */}
      {selectedJob && (
        <JobDetailsPane
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </HStack>
  );
};

export default JobListItem;