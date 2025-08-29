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
  Text,
  SimpleGrid,
  HStack,
  Icon,
  Span
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faChartLine, 
  faHandshake, 
  faBullhorn,
  faRocket,
  faShield,
  faStar
} from '@fortawesome/free-solid-svg-icons';

function Welcome() {
  const features = [
    {
      icon: faUsers,
      title: "Diverse Talent Pool",
      description: "Access skilled candidates from all backgrounds, not just traditional college graduates"
    },
    {
      icon: faChartLine,
      title: "Better ROI",
      description: "Reduce hiring costs and time-to-fill with our skills-first approach"
    },
    {
      icon: faHandshake,
      title: "Quality Matches",
      description: "Connect with candidates who have proven abilities, not just credentials"
    }
  ];

  const stats = [
    { number: "45%", label: "of adults lack college degrees", accent: true },
    { number: "72%", label: "of jobs will require training by 2031", accent: false },
    { number: "3x", label: "faster hiring with skills-based recruiting", accent: true }
  ];

  return (
    <Container maxW="6xl" py={10}>
      <VStack w={'full'} gap={12} align="center">
        {/* Hero Section with Animation */}
        <Box 
          position="relative"
          textAlign="center"
          py={16}
          px={8}
          w="full"
          overflow="hidden"
        >
          {/* Background Accent */}
          <Box
            position="absolute"
            top="-50%"
            left="-50%"
            width="200%"
            height="200%"
            pointerEvents="none"
          />
          
          <VStack spacing={6} position="relative">
            <Box>
              <Text 
                fontSize="lg" 
                color="teal.300" 
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={2}
              >
                Welcome to the Future of Hiring
              </Text>
              <Heading 
                as="h1" 
                fontSize={["4xl", "5xl", "6xl"]} 
                lineHeight="1.1"
                mb={4}
                bgGradient="linear(to-r, white, teal.200)"
                bgClip="text"
              >
                Unlock the Power of
                <Text 
                  as="span" 
                  fontFamily="Nunito" 
                  fontWeight="bold" 
                  color="teal.300"
                  display="block"
                >
                  Skills-First Hiring
                </Text>
              </Heading>
              <Text 
                fontSize={["xl", "2xl"]} 
                color="gray.300" 
                maxW="3xl"
                mx="auto"
                lineHeight="1.6"
              >
                Connect with qualified candidates based on what they can do, 
                not where they went to school
              </Text>
            </Box>
            
            <HStack spacing={6} pt={4}>
              <Button 
                size="lg"
                bgGradient={"to-r"}
                gradientFrom="teal.500"
                gradientTo="blue.500"
                color="white"
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="xl"
                border={'none'}
                _hover={{ 
                  transform: "translateY(-2px)",
                  shadow: "xl",
                  gradientFrom:"teal.400",
                  gradientTo:"blue.400"
                }}
                transition="all 0.3s ease"
                onClick={() => window.location.href = '/employer/signup'}
              >
                <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} />
                Start Hiring Today
              </Button>
              <Button 
                size="lg"
                variant="outline"
                borderColor="teal.300"
                color="teal.300"
                className='dark-glassy'
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="xl"
                _hover={{ 
                  bg: "teal.900",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s ease"
              >
                Learn More
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Stats Section */}
        <Box w="full" py={8}>
          <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {stats.map((stat, index) => (
              <Box
                key={index}
                className="dark-glassy"
                p={8}
                borderRadius="2xl"
                textAlign="center"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "2xl"
                }}
                transition="all 0.3s ease"
              >
                {stat.accent && (
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="4px"
                    bg="gradient-to-r from-teal.500 to-blue.500"
                  />
                )}
                <Text 
                  fontSize={["3xl", "4xl"]} 
                  fontWeight="bold" 
                  color={stat.accent ? "teal.300" : "white"}
                  mb={2}
                >
                  {stat.number}
                </Text>
                <Text fontSize="lg" color="gray.300">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Features Section */}
        <Box w="full" py={8}>
          <VStack spacing={8} mb={12}>
            <Heading 
              as="h2" 
              fontSize={["3xl", "4xl"]} 
              textAlign="center"
              bgGradient="to-r"
              gradientFrom={'white'}
              gradientTo={'teal.200'}
              bgClip="text"
              py={2}
            >
              Why Choose <Span fontSize={'5xl'} fontFamily={"Nunito, sans-serif"}>zero°</Span>?
            </Heading>
            <Text fontSize="xl" color="gray.300" textAlign="center" maxW="3xl">
              Transform your hiring process with our innovative approach to talent acquisition
            </Text>
          </VStack>
          
          <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {features.map((feature, index) => (
              <Box
                key={index}
                className="dark-glassy"
                p={8}
                borderRadius="2xl"
                textAlign="center"
                position="relative"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "2xl"
                }}
                transition="all 0.3s ease"
              >
                <Box
                  mb={6}
                  display="inline-flex"
                  p={4}
                  borderRadius="full"
                  bg="gradient-to-r from-teal.500 to-blue.500"
                  color="white"
                >
                  <FontAwesomeIcon icon={feature.icon} size="2x" />
                </Box>
                <Heading as="h3" size="lg" mb={4} color="white">
                  {feature.title}
                </Heading>
                <Text color="gray.300" lineHeight="1.6">
                  {feature.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Problem/Solution Section */}
        <Box 
          className="dark-glassy" 
          p={10} 
          borderRadius="3xl"
          w="full"
          position="relative"
          overflow="hidden"
        >
          {/* Accent border */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            height="6px"
            bg="gradient-to-r from-teal.500 via-blue.500 to-purple.500"
          />
          
          <Flex 
            direction={{ base: 'column', lg: 'row' }} 
            gap={12}
            align="center"
          >
            <Box flex={1}>
              <VStack spacing={6} align="start">
                <Box>
                  <Text 
                    fontSize="sm"
                    color="teal.300"
                    fontWeight="600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    mb={2}
                  >
                    The Challenge
                  </Text>
                  <Heading 
                    as="h2" 
                    fontSize={["2xl", "3xl"]} 
                    mb={4}
                    color="white"
                  >
                    Breaking the Paper Ceiling
                  </Heading>
                </Box>
                
                <Text fontSize="lg" color="gray.300" lineHeight="1.6">
                  Traditional hiring practices exclude millions of skilled workers simply 
                  because they lack formal degrees. This creates a massive talent gap 
                  that hurts both employers and job seekers.
                </Text>
              </VStack>
            </Box>
            
            <Box flex={2}>
              <VStack spacing={6} align="stretch">
                <Box 
                  p={6} 
                  bg="rgba(255,255,255,0.05)" 
                  borderRadius="xl"
                  borderLeft="4px solid"
                  borderColor="teal.400"
                >
                  <HStack spacing={4} mb={3}>
                    <FontAwesomeIcon icon={faShield} color="teal" />
                    <Text fontSize="lg" fontWeight="600" color="white">
                      The Reality
                    </Text>
                  </HStack>
                  <List.Root spacing={3} fontSize="lg" listStyle={'none'}>
                    <List.Item color="gray.300">
                      <strong>45.1%</strong> of working-age adults lack college degrees{' '}
                      <Link 
                        href="https://www.forbes.com/sites/michaeltnietzel/2025/01/30/percentage-of-adults-with-college-degree-hits-new-high-finds-lumina/" 
                        isExternal 
                        fontSize="sm" 
                        color="teal.300"
                      >
                        [Source]
                      </Link>
                    </List.Item>
                    <List.Item color="gray.300">
                      <strong>72%</strong> of jobs will require postsecondary education by 2031{' '}
                      <Link 
                        fontSize="sm" 
                        href="https://cew.georgetown.edu/cew-reports/projections2031/" 
                        isExternal 
                        color="teal.300"
                      >
                        [Source]
                      </Link>
                    </List.Item>
                  </List.Root>
                </Box>

                <Box 
                  p={6} 
                  bg="rgba(34, 211, 238, 0.1)" 
                  borderRadius="xl"
                  border="1px solid rgba(34, 211, 238, 0.3)"
                >
                  <HStack spacing={4} mb={3}>
                    <FontAwesomeIcon icon={faStar} color="cyan" />
                    <Text fontSize="lg" fontWeight="600" color="teal.200">
                      The Solution
                    </Text>
                  </HStack>
                  <Text fontSize="lg" color="gray.200" lineHeight="1.6">
                    The{' '}
                    <Link 
                      href="https://opportunityatwork.org/thepaperceiling" 
                      isExternal 
                      color="teal.300"
                      fontWeight="600"
                    >
                      "paper ceiling"
                    </Link>{' '}
                    limits access to qualified workers. zero° removes these barriers, 
                    connecting you with skilled professionals based on ability, not credentials.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>

        {/* CTA Section */}
        <Box 
          w="full" 
          py={16}
          textAlign="center"
          position="relative"
          overflow="hidden"
        >
          {/* Background glow */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="400px"
            height="400px"
            background="radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)"
            borderRadius="full"
            pointerEvents="none"
          />
          
          <VStack spacing={8} position="relative">
            <VStack spacing={4}>
              <Text 
                fontSize="lg"
                color="teal.300"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Ready to Transform Your Hiring?
              </Text>
              <Heading 
                as="h2" 
                fontSize={["3xl", "4xl", "5xl"]} 
                bgGradient="linear(to-r, white, teal.200)"
                bgClip="text"
              >
                Shred the Paper Ceiling
              </Heading>
              <Text fontSize="xl" color="gray.300" maxW="2xl">
                Join forward-thinking companies that prioritize skills over schools
              </Text>
            </VStack>
            
            <HStack spacing={6}>
              <Button 
                size="2xl"
                border={'none'}
                bgGradient={"to-r"}
                gradientFrom="teal.500"
                gradientTo="blue.500"
                color="white"
                px={12}
                py={8}
                fontSize="xl"
                borderRadius="2xl"
                _hover={{ 
                  transform: "translateY(-2px)",
                  shadow: "2xl",
                  gradientFrom:"teal.400",
                  gradientTo:"blue.400"
                }}
                transition="all 0.3s ease"
                onClick={() => window.location.href = '/employer/signup'}
              >
                <FontAwesomeIcon icon={faBullhorn} style={{ marginRight: '12px' }} />
                Post Your Job
              </Button>
            </HStack>
            
            <Text fontSize="sm" color="gray.400" mt={4}>
              Join thousands of employers already hiring with zero°
            </Text>
          </VStack>
        </Box>
      </VStack>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
    </Container>
  );
}

export default Welcome;