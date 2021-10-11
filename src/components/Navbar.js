import { Flex, Text, Box, Button } from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import Link from '@components/Link';

export default function Navbar({ onOpen }) {
  return (
    <Flex
      w="100%"
      px={8}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Text pl={3}>MDNEXT</Text>
      </Flex>
      <Box>
        <ThemeTogglebutton />
        <Link m={4} href="/">
          Home
        </Link>
        <Link m={4} href="/garden">
          Blog
        </Link>
        {process.env.NODE_ENV === 'development' && (
          <>
            <Link px={2} href="/garden/author">
              Write
            </Link>
            <Button size="sm" ml={3} onClick={onOpen}>
              Assets
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
}
