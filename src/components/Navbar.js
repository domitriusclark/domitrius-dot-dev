import { Flex, Box, AvatarGroup } from '@chakra-ui/react';
import AvatarButton from '@components/AvatarButton';
import Link from '@components/Link';

export default function Navbar({ selectedCharacter, setSelectedCharacter }) {
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
      {selectedCharacter.length === 0 ? (
        <span />
      ) : (
        <AvatarGroup>
          <AvatarButton
            image="/anime-domitrius.png"
            tooltip="anime"
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          <AvatarButton
            image="/domitrius.png"
            tooltip="code"
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          <AvatarButton
            image="/domitrius-gamer.png"
            tooltip="games"
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </AvatarGroup>
      )}

      <Box>
        <Link m={4} href="/" onClick={() => setSelectedCharacter('')}>
          Home
        </Link>
        <Link m={4} href="/garden">
          Garden
        </Link>
      </Box>
    </Flex>
  );
}
