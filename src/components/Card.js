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
  const icon = () => {
    switch (contentType) {
      case 'lesson':
        return <FcPodiumWithSpeaker />;
      case 'snippets':
        return <FcEngineering />;
      case 'garden':
        return <FcLandscape />;
      case 'notes':
        return <FcDocument />;
      default:
        return null;
    }
  };

  return <Icon as={icon} w={7} h={7} />;
}

export default function Card({ post, width, height = 'auto' }) {
  return (
    <LinkBox
      key={post.id}
      width={width}
      height={height}
      color="white"
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.05)',
        transition: 'all 0.1s ease-in-out',
        border: '1px solid #fff',
        borderRadius: 'lg',
      }}
    >
      <Flex p={4} h="100%">
        <VStack align="flex-start" w="100%">
          <LinkOverlay href={`/garden/${post.id}`} p={1} rounded="lg">
            <Text fontSize="md">{post.title}</Text>
          </LinkOverlay>
          <HStack>
            {post.tags.map((tag) => (
              <Tag colorScheme="cyan" size="sm">
                {tag}
              </Tag>
            ))}
            <ContentIcon contentType={post.content_type} />
          </HStack>
        </VStack>
      </Flex>
    </LinkBox>
  );
}
