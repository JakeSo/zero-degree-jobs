import React from 'react';
import { Box, Text, VStack, Button, HStack, Heading } from '@chakra-ui/react';

const dateFormatter = new Intl.DateTimeFormat('en-US', { 
  year: 'numeric', 
  month: 'short', 
  day: '2-digit' 
});

const JobDetailsPane = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <Box
            position="relative"
            borderWidth={1}
            borderLeftWidth={0}
            borderRadius="xl"
            border
            bgColor="brand.400"
            borderColor="brand.200"
            width="50%"
            height={"100%"}
            p={6}
            pb={2}
            zIndex={10}
            transition="all 0.3s ease-in-out"
          >
            <VStack align="start" spacing={4}>
              {/* Company Details Row */}
              <Heading size={["lg","xl"]} color="white" mb={2}>
                {job.title} @ {job.company}
              </Heading>
                <Text fontSize="md" color="white">
                  {job.location}
                </Text>
                
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                    DATE POSTED
                  </Text>
                  <Text fontSize="md" color="white">
                    {dateFormatter.format(new Date(job.datePosted))}
                  </Text>
                </VStack>

              {/* Job Description */}
              <Box width="100%">
                <Text fontSize="sm" color="gray.400" fontWeight="semibold" mb={2}>
                  DESCRIPTION
                </Text>
                <Text fontSize="md" color="gray.200" lineHeight="1.6">
                  {job.description || "We are looking for a talented professional to join our growing team. This is an excellent opportunity to work with cutting-edge technologies and make a meaningful impact on our products and services."}
                </Text>
              </Box>

              {/* Salary */}
              {job.salary && (
                <Box width="100%">
                  <Text fontSize="sm" color="gray.400" fontWeight="semibold" mb={2}>
                    SALARY RANGE
                  </Text>
                  <Text fontSize="lg" color="white" fontWeight="semibold">
                    {job.salary}
                  </Text>
                </Box>
              )}

              {/* Requirements */}
              <Box width="100%">
                <Text fontSize="sm" color="gray.400" fontWeight="semibold" mb={2}>
                  KEY REQUIREMENTS
                </Text>
                <VStack align="start" spacing={1}>
                  {job.requirements ? job.requirements.map((req, index) => (
                    <Text key={index} fontSize="sm" color="gray.300">
                      • {req}
                    </Text>
                  )) : (
                    <>
                      <Text fontSize="sm" color="gray.300">
                        • Bachelor's degree or equivalent experience
                      </Text>
                      <Text fontSize="sm" color="gray.300">
                        • Strong communication and problem-solving skills
                      </Text>
                      <Text fontSize="sm" color="gray.300">
                        • Ability to work in a fast-paced environment
                      </Text>
                    </>
                  )}
                </VStack>
              </Box>

              {/* Action Buttons */}
              <HStack spacing={3} width="100%" pt={2}>
                <Button
                  bgColor="brand.100"
                  color="white"
                  size="md"
                  borderRadius="full"
                  _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  borderColor="brand.200"
                  color="white"
                  size="md"
                  borderRadius="full"
                  _hover={{ bg: "whiteAlpha.200" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Save Job
                </Button>
                <Button
                  variant="ghost"
                  color="gray.300"
                  size="md"
                  borderRadius="full"
                  _hover={{ bg: "whiteAlpha.200" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Share
                </Button>
              </HStack>
            </VStack>
          </Box>
  );
};

export default JobDetailsPane;