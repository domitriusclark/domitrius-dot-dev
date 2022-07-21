import {
  Tooltip,
  Box,
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';

import {
  FcLandscape,
  FcEngineering,
  FcPodiumWithSpeaker,
  FcDocument,
} from 'react-icons/fc';

function ContentIcon({ contentType }) {
  if (contentType === 'lesson') {
    return (
      <Flex
        as="span"
        align="center"
        justify="center"
        border="2px solid black"
        rounded="lg"
        py={2}
        px={4}
        bg="whiteAlpha.400"
      >
        <Icon alignSelf="center" as={FcPodiumWithSpeaker} w={8} h={8} />
      </Flex>
    );
  } else if (contentType === 'snippets') {
    return (
      <Flex
        as="span"
        align="center"
        justify="center"
        border="2px solid black"
        rounded="lg"
        py={2}
        px={4}
        bg="whiteAlpha.400"
      >
        <Icon
          alignSelf="center"
          as={FcEngineering}
          w={8}
          h={8}
          color="blue.500"
        />
      </Flex>
    );
  } else if (contentType === 'garden') {
    return (
      <Flex
        as="span"
        align="center"
        justify="center"
        border="2px solid black"
        rounded="lg"
        py={2}
        px={4}
        bg="whiteAlpha.400"
      >
        <Icon
          alignSelf="center"
          as={FcLandscape}
          w={8}
          h={8}
          color="yellow.500"
        />
      </Flex>
    );
  } else if (contentType === 'notes') {
    return (
      <Flex
        as="span"
        align="center"
        justify="center"
        border="2px solid black"
        rounded="lg"
        py={2}
        px={4}
        bg="whiteAlpha.400"
      >
        <Icon
          alignSelf="center"
          m={2}
          as={FcDocument}
          w={4}
          h={4}
          color="red.500"
        />
      </Flex>
    );
  }
}

export default function Card({ post, width, height = 'auto' }) {
  return (
    <LinkBox
      key={post.id}
      borderRadius="md"
      boxShadow="lg"
      width={width}
      height={height}
      bgImage={post.banner}
      bgSize="cover"
      bgPosition="center"
      color="black"
      border="2px solid white"
    >
      <Flex p={4} h="100%">
        <VStack align="flex-start" w="100%">
          <LinkOverlay
            href={`/garden/${post.id}`}
            bg="white"
            p={2}
            rounded="lg"
            border="1px solid black"
          >
            <Text fontSize="sm">{post.title}</Text>
          </LinkOverlay>
          <HStack>
            {post.tags.map((tag) => (
              <Tag colorScheme="cyan" size="sm">
                {tag}
              </Tag>
            ))}
          </HStack>
        </VStack>
        <ContentIcon contentType={post.content_type} />
      </Flex>
    </LinkBox>
  );
}
