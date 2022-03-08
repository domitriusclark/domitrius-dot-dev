import {
  LinkBox,
  LinkOverlay,
  Flex,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react';

export default function PostCard({ post }) {
  return (
    <LinkBox
      key={post.id}
      borderRadius="md"
      boxShadow="lg"
      ml={8}
      height="300px"
      width="200px"
      bgImage={post.banner}
      bgSize="cover"
      bgPosition="center"
      bg={!post.banner ? 'black' : ''}
    >
      <Flex h="100%" direction="column" justify="flex-end" p={4} h="100%">
        <VStack mb={post.tags.length > 2 ? 8 : 0} align="flex-start" maxH="50%">
          <LinkOverlay href={`/garden/${post.id}`} bg="white" p={1}>
            {post.title}
          </LinkOverlay>
          <Text
            textOverflow="ellipsis"
            maxW="75ch"
            textOverflow="ellipsis"
            overflow="hidden"
            bg="white"
            p={1}
          >
            {post.description}
          </Text>

          <Wrap>
            {post.tags.map((tag) => (
              <WrapItem>
                <Tag colorScheme="cyan" size="sm">
                  {tag}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </Flex>
    </LinkBox>
  );
}
