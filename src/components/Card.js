import {
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Card({ post }) {
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
      color="black"
      border="2px solid white"
    >
      <Flex direction="column" justify="flex-end" p={4} h="100%">
        <VStack align="flex-start" maxH="50%">
          <LinkOverlay href={`/garden/${post.id}`} bg="white" p={1}>
            {post.title}
          </LinkOverlay>
          <Text bg="white" p={1}>
            {post.description}
          </Text>
          <HStack>
            {post.tags.map((tag) => (
              <Tag colorScheme="cyan" size="sm">
                {tag}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </Flex>
    </LinkBox>
  );
}
