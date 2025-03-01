import React from 'react';
import { 
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  VStack,
  Text
} from '@chakra-ui/react';

function Welcome() {
  return (
    <Container maxW="3xl" py={10}>
      <VStack gap={9} align="center" textAlign="center">
        {/* Header Section */}
        <Box my={8}>
          <Heading as="h1" size="5xl" mb={4}>
            Welcome, Employers!
          </Heading>
          <Heading as="h3" size="4xl" color="gray.400">
            Unlock the Potential of Diverse Talent
          </Heading>
        </Box>

        {/* Mission Section */}
        <Box className='dark-glassy' p={8} borderRadius="lg" maxW="3xl">
          <Text fontSize={["xl","2xl"]} mb={4}>
            <Box as="span" fontFamily={"Nunito"} fontWeight="bold" fontSize={["3xl","4xl"]}>zero&deg;</Box> is a job board that connects employers with qualified candidates, regardless of their education.
          </Text>
          <Text fontSize={["xl","2xl"]}>
            We put skills before schools to better match dependable candidates to open jobs.
          </Text>
        </Box>

        {/* Stats Section */}
        <Flex 
          direction={{ base: 'column', lg: 'row' }} 
          className='dark-glassy'
          p={8} 
          borderRadius="lg"
          gap={8}
        >
          <Box flex={1}>
            <Heading as="h1" fontSize={["3xl","4xl"]} lineHeight={"1"} mb={[0,4]}>
              Why Go <Box fontWeight={"bold"} fontSize={["4xl","5xl"]} fontFamily={"Nunito"} as="span">zero&deg;</Box>?
            </Heading>
          </Box>
          <Box flex={2}>
            <List.Root spacing={4} fontSize={["xl","2xl"]} textAlign={'left'}>
              <List.Item>
                In 2021, The U.S. Census Bureau reported <Box as="span" fontWeight="bold">55%</Box> of adults didn't have a college degree.
                <Link href="https://www.census.gov/data/tables/2021/demo/educational-attainment/cps-detailed-tables.html" isExternal ml={1}>[1]</Link>
              </List.Item>
              <List.Item>
                Nearly <Box as="span" fontWeight="bold">70%</Box> of all jobs in the U.S. economy require higher education.
                <Link href="https://opportunityatwork.org/thepaperceiling" isExternal  ml={1}>[2]</Link>
              </List.Item>
            </List.Root>
            <Text mt={4} fontWeight="bold" fontSize={["xl","2xl"]}>
              This <Link href="https://opportunityatwork.org/thepaperceiling" isExternal >"paper ceiling"</Link> prevents employers from accessing a large pool of qualified workers, leading to hiring challenges and lost productivity.
            </Text>
          </Box>
        </Flex>

        {/* Call to Action Section */}
        <Box className='dark-glassy' p={8} borderRadius="lg" textAlign="center">
          <Heading as="h1" size="4xl" mb={6}>
            Shred the Paper Ceiling
          </Heading>
          <Button 
            size={["lg","2xl"]}
            variant={"outline"}
            // TODO: Link login/signup page
          >
            Post Your Job
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default Welcome;
