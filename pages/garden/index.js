// libs
import fetchTableById from '@lib/notion/fetchTableById';

// components
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

const PostsPage = ({ posts }) => {
  return (
    <Flex>
      {posts.map((post) => {
        console.log(post);
        return (
          <Link key={post.id} href={`/garden/${post.id}`}>
            {post.title}
          </Link>
        );
      })}
    </Flex>
  );
};

export const getStaticProps = async () => {
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
