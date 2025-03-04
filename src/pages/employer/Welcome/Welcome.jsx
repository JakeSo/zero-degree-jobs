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
      <VStack w={'full'} gap={9} align="center" textAlign="center">
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
        <Box className='dark-glassy' p={8} borderRadius="lg" w={'full'}>
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
              As of 2023, <b>45.1%</b> of working-age adults in the United States have  not earned a college degree or other postsecondary credential.
                <Link href="https://www.forbes.com/sites/michaeltnietzel/2025/01/30/percentage-of-adults-with-college-degree-hits-new-high-finds-lumina/" isExternal fontSize={"sm"} ml={1}>[Source]</Link>
              </List.Item>
              <List.Item>
              By 2031, it's projected that <b>72%</b> of jobs in the U.S. will require postsecondary education or training. 
                <Link fontSize={"sm"} href="https://cew.georgetown.edu/cew-reports/projections2031/" isExternal  ml={1}>[Source]</Link>
              </List.Item>
            </List.Root>
            <Text mt={4} fontWeight="bold" fontSize={["xl","2xl"]}>
              This <Link href="https://opportunityatwork.org/thepaperceiling" isExternal >"paper ceiling"</Link> limits employers from tapping into a vast pool of skilled, qualified workers who lack formal degrees—creating hiring challenges and reducing productivity.
            </Text>
          </Box>
        </Flex>

        {/* Call to Action Section */}
        <Box className='dark-glassy' p={8} w={'full'} borderRadius="lg" textAlign="center">
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
