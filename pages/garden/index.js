import fetchTableById from '@lib/notion/fetchTableById';

import { HStack } from '@chakra-ui/react';
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
    <HStack spacing={10} pt={10}>
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </HStack>
  );
}
