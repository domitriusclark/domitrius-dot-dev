import * as React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import Link from '@components/Link';

export default function Navbar() {
  return (
    <Flex
      w="100%"
      px={8}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      color="#ECF1F2"
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      ></Flex>
      <Box>
        <Link m={4} href="/">
          Home
        </Link>
        <Link m={4} href="/garden">
          Garden
        </Link>
      </Box>
    </Flex>
  );
}
