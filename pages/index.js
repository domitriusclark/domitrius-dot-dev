import { Image, Flex, VStack, Heading } from '@chakra-ui/react';

function CharacterCard({ title, image, setSelectedCharacter }) {
  return (
    <VStack
      as="button"
      borderRadius="6px"
      onClick={() => setSelectedCharacter(title)}
      _hover={{
        border: '8px solid white',
        marginBottom: '60px!important',
      }}
      h="700px"
      w="300px"
      border="1px solid white"
      justify="space-between"
    >
      <Heading mt={8}>{title}</Heading>
      <Image src={image} />
    </VStack>
  );
}

function CharacterPicker({ setSelectedCharacter }) {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} sx={{ gap: '8px' }}>
      <CharacterCard
        setSelectedCharacter={setSelectedCharacter}
        image="/anime-domitrius.png"
        title="anime"
      />
      <CharacterCard
        setSelectedCharacter={setSelectedCharacter}
        image="/domitrius.png"
        title="code"
      />
      <CharacterCard
        setSelectedCharacter={setSelectedCharacter}
        image="/domitrius-gamer.png"
        title="games"
      />
    </Flex>
  );
}

export default function Index({ selectedCharacter, setSelectedCharacter }) {
  if (selectedCharacter === 'anime') {
    return (
      <Flex direction="column" m={16} alignItems="center" justify="center">
        <Flex direction="column" alignItems="center" textAlign="center" w="50%">
          <Heading as="h1">
            Here's the anime and mange you should check out
          </Heading>
        </Flex>
      </Flex>
    );
  } else if (selectedCharacter === 'code') {
    return (
      <Flex direction="column" m={16} alignItems="center" justify="center">
        <Flex direction="column" alignItems="center" textAlign="center" w="50%">
          <Heading as="h1">DX & Community tool creator</Heading>
        </Flex>
      </Flex>
    );
  } else if (selectedCharacter === 'games') {
    return (
      <Flex direction="column" m={16} alignItems="center" justify="center">
        <Heading as="h1">Here's a list of the games I'm playing</Heading>
      </Flex>
    );
  } else {
    return (
      <Flex direction="column" m={4} alignItems="center" justify="center">
        <Heading
          color="gray.300"
          as="h1"
          textDecor="underline"
          alignSelf="center"
          justifySelf="center"
          mb={8}
        >
          Choose Your Character
        </Heading>
        <Flex direction="column" alignItems="center" textAlign="center">
          <CharacterPicker setSelectedCharacter={setSelectedCharacter} />
        </Flex>
      </Flex>
    );
  }
}
