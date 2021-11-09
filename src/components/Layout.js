import * as React from 'react';
import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import AssetDrawer, { AssetDrawerProvider } from '@components/AssetDrawer';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({
  title,
  description,
  twitter,
  openGraph,
  children,
}) {
  return (
    <AssetDrawerProvider>
      <AssetDrawer />
      <Flex h="100vh" direction="column">
        <Navbar />
        <Box flex="1">{children}</Box>
      </Flex>
    </AssetDrawerProvider>
  );
}
