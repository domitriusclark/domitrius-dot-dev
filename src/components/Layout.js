import Navbar from '@components/Navbar';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Flex h="100vh" direction="column">
      <Navbar />
      <Box bg="gray.600" flex="1">
        {children}
      </Box>
    </Flex>
  );
}
