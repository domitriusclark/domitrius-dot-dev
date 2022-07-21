import {
  Flex,
  HStack,
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
    return <Icon alignSelf="center" as={FcPodiumWithSpeaker} w={5} h={5} />;
  } else if (contentType === 'snippets') {
    return <Icon alignSelf="center" as={FcEngineering} w={5} h={5} />;
  } else if (contentType === 'garden') {
    return <Icon alignSelf="center" as={FcLandscape} w={5} h={5} />;
  } else if (contentType === 'notes') {
    return <Icon alignSelf="center" as={FcDocument} w={5} h={5} />;
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
            p={1}
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
