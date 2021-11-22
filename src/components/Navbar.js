import * as React from 'react';
import {
  Tooltip,
  Icon,
  Flex,
  Text,
  Button,
  QuestionIcon,
} from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import Link from '@components/Link';
import { PauseMenuContext } from '@components/PauseMenu';
import useHotKey from '@hooks/useHotKey';

const sequence = ['Meta', 'k'];

export default function Navbar() {
  const { onOpen } = React.useContext(PauseMenuContext);

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
      <Flex>
        <Text pl={3}>Domitrius Clark </Text>
      </Flex>
      <Flex align="center" justify="center">
        <Flex
          direction="column"
          align="center"
          justify="center"
          color="gray.200"
          borderRadius="full"
          w="100px"
          border="1px solid white"
          p={2}
        >
          <Text>CMD + K</Text>
        </Flex>
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
      </Flex>
    </Flex>
  );
}
