import React from 'react';
import { Box, Text, VStack, HStack, Button } from '@chakra-ui/react';
import { Collapsible } from '@chakra-ui/react';

const dateFormatter = new Intl.DateTimeFormat('en-US', { 
  year: 'numeric', 
  month: 'short', 
  day: '2-digit' 
});

const ExpandableJobCard = ({ job, selected, onClick }) => {
  return (
    <Box className={`job-list-item ${selected ? 'selected' : ''}`} position="relative" mb={4}>
      {/* Main Job Card */}
      <Box
        borderWidth={1}
        borderRadius="xl"
        borderRightRadius={selected ? "none" : "xl"}
        bgColor={selected ? "brand.400" : "whiteAlpha.100"}
        borderColor={selected ? "brand.200" : "transparent"}
        borderRightColor={selected ? "transparent" : (selected ? "brand.200" : "transparent")}
        boxShadow={selected ? "none" : "sm"}
        boxShadowColor="brand.900"
        transition="all 0.3s ease-in-out"
        cursor="pointer"
        width={selected ? "52%": "auto"} // Fixed width for consistency
        _hover={
          selected
            ? {}
            : {
                bg: "whiteAlpha.200",
                transform: "scale(1.01)",
                boxShadow: "md"
              }
        }
        onClick={!selected ? onClick : undefined}
        p={5}
        zIndex={selected ? 10 : 1}
        position="relative"
      >
        <VStack align="start" spacing={2}>
          <HStack justify="space-between" width="100%">
            <Text fontWeight="bold" fontSize="xl" color="white">
              {job.title}
            </Text>
            {selected && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                size="sm"
                variant="ghost"
                color="gray.300"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                ✕
              </Button>
            )}
          </HStack>
          
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

      {/* Details Panel - Absolutely positioned */}
      <Collapsible.Root open={selected}>
        <Collapsible.Content>
          <Box
            position="absolute"
            top={0}
            left="52%" // Start right where the card ends
            borderWidth={1}
            borderLeftWidth={0}
            borderRadius="xl"
            borderLeftRadius="none"
            bgColor="brand.400"
            borderColor="brand.200"
            width="50%"
            minWidth="500px"
            p={6}
            zIndex={10}
            transition="all 0.3s ease-in-out"
          >
            <VStack align="start" spacing={4}>
              {/* Company Details Row */}
              <HStack spacing={8} width="100%" wrap="wrap">
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                    COMPANY
                  </Text>
                  <Text fontSize="md" color="white">
                    {job.company}
                  </Text>
                </VStack>
                
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                    LOCATION
                  </Text>
                  <Text fontSize="md" color="white">
                    {job.location}
                  </Text>
                </VStack>
                
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                    DATE POSTED
                  </Text>
                  <Text fontSize="md" color="white">
                    {dateFormatter.format(new Date(job.datePosted))}
                  </Text>
                </VStack>
              </HStack>

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
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

export default ExpandableJobCard;