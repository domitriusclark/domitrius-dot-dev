import { fetchTableById } from '@lib/notion';

import { VStack } from '@chakra-ui/react';
import Card from '@components/Card';

export const getServerSideProps = async () => {
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }) {
  return (
    <VStack justify="space-between" spacing={5} p={3} mt={20}>
      {posts.map((post) => (
        <Card post={post} width={{ base: '100%', lg: '40%' }} />
      ))}
    </VStack>
  );
}
