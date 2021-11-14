import * as React from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import Link from '@components/Link';
import { AssetDrawerContext } from '@components/AssetDrawer';
import useHotKey from '@hooks/useHotkey';

const sequence = ['Meta', 'k'];

export default function Navbar() {
  const { onOpen } = React.useContext(AssetDrawerContext);

  const [keysPressed, setKeysPressed] = React.useState(false);
  useHotKey(sequence, () => setKeysPressed(true));

  React.useEffect(() => {
    if (keysPressed) {
      onOpen();
      setKeysPressed(false);
    }
  }, [keysPressed]);

  return (
    <Flex
      w="100%"
      px={8}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      bg="gray.800"
      color="#ECF1F2"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Text pl={3}>Domitrius Clark </Text>
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
            <Link px={2} href="/garden/write">
              Write
            </Link>
            <Button color="gray.800" size="sm" ml={3} onClick={onOpen}>
              Assets
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
}
