import Navbar from '@components/Navbar';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export default function Layout({ children }) {
  const [selectedCharacter, setSelectedCharacter] = React.useState('');
  return (
    <Flex h="100vh" direction="column">
      <Navbar
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      <Box color="purple.300" bg="gray.800" flex="1">
        {React.cloneElement(children, {
          selectedCharacter,
          setSelectedCharacter,
        })}
      </Box>
    </Flex>
  );
}
