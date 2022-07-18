import Navbar from '@components/Navbar';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Flex direction="column" fontFamily="main" h="full">
      <Navbar />
      {children}
    </Flex>
  );
}
