// import { BLOG_CONTENT_PATH } from '@config/constants';
// import { getLocalMdx } from '@utils/get-mdx-content';
// import components from '@components/MdxComponents';
// import { MDXRemote } from 'next-mdx-remote';
import { Box, Heading } from '@chakra-ui/react';

import supabase from '@utils/initSupabase';
import serialize from '@utils/serializeSlateToJsx';

export default function BlogPost({ source, frontMatter }) {
  const { title, description, cover, tags } = frontMatter;

  return (
    <Box>
      <Heading as="h1" pb="1rem">
        {title}
      </Heading>
      {serialize(source[0])}
    </Box>
  );
}

export async function getStaticPaths() {
  const { data } = await supabase.from('Posts').select();
  const posts = data;
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postSlug = slug.join('/');
  const { data } = await supabase
    .from('Posts')
    .select()
    .match({ slug: postSlug });
  const post = data[0];

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      source: post.body,
      frontMatter: {
        title: post.title,
        description: post.description,
        slug: post.slug,
        cover: post.cover_image,
        tags: post.tags,
      },
    },
  };
}
