import { Box, Text, HStack } from '@chakra-ui/react';

export default function Footer() {
  
  
  return (
    <Box
    className='dark-glassy'
      as="footer"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      zIndex="sticky"
      padding="10 px"
    >
      <HStack
        w={"100%"}
        gap={10}
        justifyContent={'center'}
        py={4}
        textAlign="center"
      >
        <Text fontSize={["xs","sm"]}>
          &copy; {new Date().getFullYear()} zero&deg;. All Rights Reserved.
        </Text>
        <Text fontSize={["xs","sm"]}>
          <a href='https://www.tearthepaperceiling.org/'>#TearThePaperCeiling</a>
        </Text>
      </HStack>
    </Box>
  );
}
