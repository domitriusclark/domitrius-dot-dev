import React from 'react';
import { Flex } from '@chakra-ui/react';
import BlogForm from '@components/BlogForm';
import supabase from '@utils/initSupabase';

export default function AuthorPost({ post }) {
  return (
    <Flex
      as="form"
      w="100%"
      h="100%"
      p={10}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {post ? <BlogForm post={post} /> : <BlogForm />}
    </Flex>
  );
}

export async function getServerSideProps(context) {
  // Check for an ID in the route so we can know if we're editing or creating a post
  if (context.query.hasOwnProperty('id')) {
    const res = await supabase
      .from('Posts')
      .select()
      .match({ id: context.query.id });

    const post = res.data[0];

    return {
      props: {
        post,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
