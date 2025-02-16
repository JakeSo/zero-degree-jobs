import { Box, Container, Text, HStack } from '@chakra-ui/react';

export default function Footer() {
  
  
  return (
    <Box
    className='dark-glassy'
      as="footer"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      borderTopWidth="1px"
      zIndex="sticky"
      padding="10px"
    >
      <HStack
        w={"100%"}
        gap={10}
        justifyContent={'center'}
        py={4}
        textAlign="center"
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} zero&deg;. All Rights Reserved.
        </Text>
        <Text fontSize={"sm"}>
          <a href='https://www.tearthepaperceiling.org/'>#TearThePaperCeiling</a>
        </Text>
      </HStack>
    </Box>
  );
}
