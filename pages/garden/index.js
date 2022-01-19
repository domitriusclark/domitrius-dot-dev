// libs
import fetchTableById from '@lib/notion/fetchTableById';

// components
import { Heading, Flex, Container, VStack } from '@chakra-ui/react';

import PostCard from '@components/PostCard';

const PostsPage = ({ lessons, notes, garden }) => {
  return (
    <Container maxW="3xl">
      <Flex justify="space-around" pt={10}>
        <VStack spacing={6}>
          <Heading as="h1" textDecor="underline">
            Garden
          </Heading>
          {garden.map((post) => (
            <PostCard post={post} />
          ))}
        </VStack>

        <VStack spacing={6}>
          <Heading as="h1" textDecor="underline">
            Notes
          </Heading>
          {notes.map((post) => (
            <PostCard post={post} />
          ))}
        </VStack>

        <VStack spacing={6}>
          <Heading as="h1" textDecor="underline">
            Lessons
          </Heading>
          {lessons.map((post) => (
            <PostCard post={post} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  const notes = posts.filter((post) => post.content_type === 'notes');
  const garden = posts.filter((post) => post.content_type === 'garden');
  const lessons = posts.filter((post) => post.content_type === 'lesson');

  return {
    props: {
      notes,
      garden,
      lessons,
    },
  };
};

export default PostsPage;
