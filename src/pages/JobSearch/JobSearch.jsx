import React, { useState, useEffect } from "react";
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  HStack,
  Stack,
  Text,
  Switch,
  Box,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import JobListItem from "../../components/JobListItem";
import JobDetailsPane from "../../components/JobDetailsPane";
import { useLoaderData } from "react-router-dom";
const JobSearch = () => {
  const { jobType, location } = useLoaderData();
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: "",
    remote: false,
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobResults, setJobResults] = useState([]);
  const handleSearch = () => {
    // Mock search logic
    const mockResults = [
      {
        id: 1,
        title: "Software Engineer",
        company: "Tech Corp",
        location: "Remote",
        datePosted: "2025-08-01",
      },
      {
        id: 2,
        title: "Product Manager",
        company: "Innovate Inc",
        location: "New York, NY",
        datePosted: "2025-07-30",
      },
    ];
    setJobResults(mockResults);
  };

  useEffect(() => {
    if (jobType || location) {
      setSearchParams({
        title: jobType || "",
        location: location || "",
        remote: false,
      });
      handleSearch();
    }
  }, [jobType, location]);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading
          as="h1"
          size="2xl"
          textAlign="left"
          color="white"
          fontFamily={"Nunito"}
        >
          Job Search
        </Heading>
        {/* Search Bar */}
        <Box
          bgColor={"brand.600"}
          p={4}
          borderRadius="xl"
          boxShadow="md"
          mb={8}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={8}
            align="center"
          >
            <Field label="Job Title">
              <Input
                placeholder=""
                id="title"
                value={searchParams.title}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, title: e.target.value })
                }
                variant="flushed"
                bg="brand.600"
                borderColor={"brand.400"}
                color="white"
              />
            </Field>
            <Field label="Location">
              <Input
                placeholder=""
                id="location"
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
                variant="flushed"
                bg="brand.600"
                borderColor={"brand.400"}
                color="white"
              />
            </Field>

            <HStack spacing={2}>
              <Text color="gray.300">Remote</Text>
              <Switch.Root
                checked={searchParams.remote}
                onCheckedChange={({ checked }) =>
                  setSearchParams({ ...searchParams, remote: checked })
                }
                id="remote-switch"
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
              </Switch.Root>
            </HStack>

            <Button
              onClick={handleSearch}
              size="lg"
              px={6}
              borderRadius="full"
              bgColor={"brand.100"}
              boxShadow={"xs"}
              color="white"
              _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)" }}
            >
              Search
            </Button>
          </Stack>
        </Box>
        {/* Results */}
        <HStack
          align="start"
          gap={6}
          justify="space-between"
          alignItems={"stretch"}
          position="relative"
          transition="all 0.3s ease-in-out"
        >
          {/* Job List Container */}
          <VStack
            width={selectedJob ? "48%" : "100%"}
            align="stretch"
            justifyContent={'start'}
            gap={4}
            alignItems="stretch"
            transition="width 0.3s ease-in-out"
          >
            {jobResults.map((job) => (
              <JobListItem
                key={job.id}
                job={job}
                selected={selectedJob && selectedJob.id === job.id}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </VStack>

          {/* Details Pane - slides in from right */}
          {selectedJob && (
            <JobDetailsPane
              job={selectedJob}
              onClose={() => setSelectedJob(null)}
            />
          )}
        </HStack>
      </VStack>
    </Container>
  );
};

export default JobSearch;
