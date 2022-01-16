// libs
import fetchTableById from '@lib/notion/fetchTableById';

// components
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

const PostsPage = ({ posts }) => {
  return (
    <HStack spacing={10} pt={10}>
      {posts.map((post) => {
        console.log(post);
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
