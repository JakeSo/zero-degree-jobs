'use client';
import { useState, useEffect } from 'react';
import { 
  Heading,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Input,
  Container,
  Text
} from '@chakra-ui/react';
import { Field } from '../../components/ui/field';
import JobCard from '../../components/JobCard/JobCard';
import { fetchNewJobListings } from '../../util/jobUtils';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  jobType: z.string().min(1, 'Job type is required'),
  location: z.string().min(1, 'Location is required')
});

export default function Home() {
  const [newJobs, setNewJobs] = useState([]);

  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    const loadJobListings = async () => {
      try {
        const listings = await fetchNewJobListings();
        setNewJobs(listings);
      } catch (error) {
        console.error('Failed to load jobs:', error);
      }
    };
    loadJobListings();
  }, []);

  const onSubmit = (data) => {
    console.log('Job search:', data);
  };

  return (
    <VStack spacing={0} align="stretch">
      <VStack 
        as="header" 
        py={20} 
        // bg="bg.subtle"
        spacing={6}
        px={4}
      >
        <Heading as="h1" size={["2xl","7xl"]} >
          zero°
        </Heading>
        <Heading as="h2" size={["md","lg","xl", "2xl"]} textStyle="heading.lg" color="fg.muted" mb={10}>
          Connecting Talent, <strong>Ignoring Degrees</strong>
        </Heading>

        <HStack 
          as="form" 
          onSubmit={handleSubmit(onSubmit)} 
          flex={"1 0 auto"}
          w="auto"
          spacing={2}
        >
          <Text fontSize={["md","lg","2xl"]} whiteSpace="nowrap">
            I am looking for a
          </Text>

          <Field minW="200px" w={"auto"}>
            <Input
              placeholder="Web Developer"
              variant="unstyled"
              borderBottom="2px dashed"
              borderRadius="2"
              className='dark-glassy'
              fontSize={["sm","md","lg"]}
              px="2"
              py="1"
              _placeholder={{ color: "fg.subtle", opacity: 0.8 }}
              {...register('jobType')}
              textAlign="center"
              maxWidth="none"
            />
          </Field>

          <Text fontSize={["md","lg","2xl"]} mx={'2'} whiteSpace="nowrap" flexShrink={0} flex="0 0 auto">
            job in
          </Text>

          <Field  minW="160px" w={"auto"}>
            <Input
              placeholder="New York, NY"
              variant="unstyled"
              borderBottom="2px dashed"
              borderRadius="2"
              className='dark-glassy'
              fontSize={["sm","md","lg"]}
              px="2"
              py="1"
              _placeholder={{ color: "fg.subtle", opacity: 0.8 }}
              {...register('location')}
              textAlign="center"
              minW="100px"
            />
          </Field>

          <Button 
            type="submit"
            size={["sm","lg"]}
            variant="subtle"
            className='dark-glassy'
            bg={ {_hover: 'gray.900'} }
            alignSelf="center"
            ml={4}
          >
            Search
          </Button>
        </HStack>
      </VStack>

      <Container w={"80%"} maxW="breakpoint-2xl" py={10} px={4}>
        <Heading as="h3" size={["lg","xl","3xl"]} mb={6} textStyle="heading.xl">
          New postings
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
          {newJobs.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
          {Array.from({ length: Math.max(0, 4 - newJobs.length) }).map((_, i) => (
            <JobCard key={`placeholder-${i}`} job={{}} />
          ))}
        </SimpleGrid>
      </Container>
    </VStack>
  );
}
