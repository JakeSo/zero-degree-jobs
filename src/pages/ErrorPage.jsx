import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
        <Heading as={'h1'} fontFamily={'Nunito'} my={4} size={'7xl'}>404</Heading>
      <Heading as="h1" size="2xl" mb={4}>
        Oops! Something went wrong.
      </Heading>
      <Text fontSize="lg" mb={6}>
        We couldn't find the page you're looking for.
      </Text>
      <Button colorScheme="red" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;