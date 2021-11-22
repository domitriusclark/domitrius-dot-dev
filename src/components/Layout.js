import Navbar from '@components/Navbar';
import PauseMenu, { PauseMenuProvider } from '@components/PauseMenu';
import { Box, Input, Flex } from '@chakra-ui/react';

function MenuContent() {
  return (
    <Flex>
      <Input
        mt={2}
        p={1}
        bg="white"
        borderRadius="lg"
        placeholder="Search..."
        size="xl"
      />
    </Flex>
  );
}

export default function Layout({ children }) {
  return (
    <PauseMenuProvider>
      <PauseMenu content={<MenuContent />} />
      <Flex h="100vh" direction="column">
        <Navbar />
        <Box color="gray.100" bg="gray.600" flex="1">
          {children}
        </Box>
      </Flex>
    </PauseMenuProvider>
  );
}
