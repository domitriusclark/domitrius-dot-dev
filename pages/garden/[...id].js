import fetchPageById from '@lib/notion/fetchPageById';
import { NotionRenderer } from 'react-notion';

import { Container, Text, Heading } from '@chakra-ui/react';

export const PostPage = ({ blocks }) => {
  return (
    <Container>
      <NotionRenderer
        blockMap={blocks}
        customBlockComponents={{
          text: ({ renderComponent }) => {
            return (
              <Text color="purple.500" size="xl">
                {renderComponent()}
              </Text>
            );
          },
          header: ({ renderComponent }) => {
            return (
              <Heading as="h1" color="red.300">
                {renderComponent()}
              </Heading>
            );
          },
        }}
      />
    </Container>
  );
};

export const getServerSideProps = async ({ params }) => {
  const blocks = await fetchPageById(params.id[0]);

  return {
    props: {
      blocks,
    },
  };
};

export default PostPage;
