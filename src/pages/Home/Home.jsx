'use client';
import { 
  Heading,
  Button,
  VStack,
  Stack,
  Input,
  Text
} from '@chakra-ui/react';
import { Field } from '../../components/ui/field';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JobsSection from '../../components/NewJobsSection';
import { fetchNewJobListings } from '../../util/jobUtils';

const formSchema = z.object({
  jobType: z.string().min(1, 'Job type is required'),
  location: z.string().min(1, 'Location is required')
});

export default function Home() {

  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  });


  const onSubmit = (data) => {
    alert("Yet to be implemented")
    console.log('Job search:', data);
  };

  return (
    <VStack spacing={0} align="stretch">
      <VStack 
        as="header" 
        pt={20} 
        pb={[0,20]}
        // bg="bg.subtle"
        spacing={6}
        px={4}
      >
        <Heading fontFamily={"Nunito"} as="h1" size={["5xl","7xl"]} >
          zero°
        </Heading>
        <Heading as="h2" size={["md","lg","xl", "2xl"]} textStyle="heading.lg" color="fg.muted" mb={10}>
          Connecting Talent, <strong>Ignoring Degrees</strong>
        </Heading>

        <Stack 
          as="form" 
          onSubmit={handleSubmit(onSubmit)} 
          flex={"1 0 auto"}
          w={["3/4","auto"]}
          justifyContent={'center'}
          gap={2}
          direction={["column", "row"]}
        >
          <Text fontSize={["lg","2xl"]} whiteSpace="nowrap">
            I am looking for a
          </Text>

          <Field minW="200px" w={"auto"}>
            <Input
              placeholder="Web Developer"
              variant="unstyled"
              borderBottom="2px dashed"
              borderRadius="2"
              className='dark-glassy'
              fontSize={["md","lg"]}
              textAlign={'center'}
              px="2"
              py="1"
              _placeholder={{ color: "fg.subtle", opacity: 0.8 }}
              {...register('jobType')}
              maxWidth="none"
            />
          </Field>

          <Text fontSize={["lg","2xl"]} mx={'2'} whiteSpace="nowrap" flexShrink={0} flex="0 0 auto">
            job in
          </Text>

          <Field  minW="160px" w={"auto"}>
            <Input
              placeholder="New York, NY"
              variant="unstyled"
              borderBottom="2px dashed"
              borderRadius="2"
              className='dark-glassy'
              fontSize={["md","lg"]}
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
            w={['full', 'inherit']}
            variant="subtle"
            className='dark-glassy'
            bg={ {_hover: 'gray.900'} }
            alignSelf="center"
            ml={[0,4]}
          >
            Search
          </Button>
        </Stack>
      </VStack>


      {/*New Jobs*/}
      <JobsSection title={"New postings"} resolver={fetchNewJobListings} />
      
    </VStack>
  );
}
