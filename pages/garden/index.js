// libs
import fetchTableById from '@lib/notion/fetchTableById';

// components
import {
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

const PostsPage = ({ posts }) => {
  return (
    <HStack spacing={10} pt={10}>
      {posts.map((post) => {
        return (
          <LinkBox
            key={post.id}
            borderRadius="md"
            boxShadow="lg"
            bg="whitesmoke"
            ml={8}
          >
            <Flex justify="flex-start" p={4}>
              <VStack>
                <LinkOverlay href={`/garden/${post.id}`}>
                  {post.title}
                </LinkOverlay>
                <Text>{post.description}</Text>
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
      })}
    </HStack>
  );
};

export const getServerSideProps = async () => {
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
