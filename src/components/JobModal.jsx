import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogCloseTrigger,
  DialogBackdrop
} from '../components/ui/dialog'
import { Button, Skeleton, Text, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fetchJobData } from '../util/jobUtils'
const JobModal = ({ jobId }) => {
  const [jobData, setJobData] = useState(null)

  useEffect( () => {
    fetchJobData(jobId).then((response) => setJobData(response))
  }, [jobId])

  return (
      <DialogContent
        size="2xl"
        bg="rgba(32, 58, 67, 0.95)"
        color="white"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(20px)"
      >
        <DialogHeader borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.1)">
          <DialogTitle>
            {jobData?.title || <Skeleton height="28px" width="60%" />}
          </DialogTitle>
          <DialogCloseTrigger 
            position="absolute" 
            top="2" 
            right="2" 
            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
          />
        </DialogHeader>

        <DialogBody py={6}>
          {jobData ? (
            <>
              <Text fontSize="lg" mb={4} fontWeight="500">
                Description:
              </Text>
              <Box 
                dangerouslySetInnerHTML={{ __html: jobData.description.replaceAll('\n', '<br />') }}
                sx={{
                  '& br': { marginBottom: '1rem' },
                  '& p': { marginBottom: '1rem', lineHeight: '1.6' }
                }}
              />
              {jobData.salary && (
                <Text mt={4} fontWeight="500">
                  Salary: <Text as="span" fontWeight="normal">{jobData.salary}</Text>
                </Text>
              )}
            </>
          ) : (
            <Box>
              <Skeleton height="20px" mb={2} width="80%" />
              <Skeleton height="16px" mb={2} width="90%" />
              <Skeleton height="16px" mb={2} width="85%" />
            </Box>
          )}
        </DialogBody>

        <DialogFooter borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.1)">
          <Button 
            variant="ghost" 
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          >
            Close
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
  )
}

export default JobModal