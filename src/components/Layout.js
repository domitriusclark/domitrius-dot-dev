import React from 'react';

import Navbar from '@components/Navbar';
import { Box } from '@chakra-ui/react';

export default function Layout({ children, bg }) {
  return (
    <Box minW="100%" minH="100%" backgroundColor={bg}>
      <Navbar />
      {children}
    </Box>
  );
}
