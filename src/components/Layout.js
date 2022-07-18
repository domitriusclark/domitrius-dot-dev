import Navbar from '@components/Navbar';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Flex h="100vh" direction="column" bg="blackAlpha.900" fontFamily="main">
      <Navbar />
      <Box color="purple.300" flex="1">
        {children}
      </Box>
    </Flex>
  );
}
