import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import AssetDrawer from '@components/AssetDrawer';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

export default function Layout({
  title,
  description,
  twitter,
  openGraph,
  children,
}) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <AssetDrawer onClose={onClose} isOpen={isOpen} />
      <Flex h="100vh" direction="column">
        <Navbar onOpen={onOpen} />
        <Box flex="1">{children}</Box>
      </Flex>
    </>
  );
}
