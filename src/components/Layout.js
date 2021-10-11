import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import AssetDrawer from '@components/AssetDrawer';
import { useDisclosure } from '@chakra-ui/react';

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
      <Navbar onOpen={onOpen} />
      {children}
    </>
  );
}
