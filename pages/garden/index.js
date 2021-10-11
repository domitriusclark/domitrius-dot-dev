import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import ContentBox from '@components/ContentBox';
import Search from '@components/Search';
import supabase from '@utils/initSupabase';

export default function BlogPage({ posts }) {
  const [filteredPosts, setFilteredPosts] = React.useState(posts);

  console.log(filteredPosts);

  const handleFilter = (data) => {
    setFilteredPosts(data);
  };

  return (
    <Box pb={3}>
      {/* Content Area + Input + Tag filter */}
      <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
        <Search posts={posts} handleFilter={handleFilter} />
        <Stack spacing={[2, 6, 12]}>
          {filteredPosts?.map((post) => (
            <ContentBox key={post.slug} post={post} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export async function getStaticProps() {
  const { data } = await supabase.from('Posts').select();

  return {
    props: {
      posts: data,
    },
  };
}
