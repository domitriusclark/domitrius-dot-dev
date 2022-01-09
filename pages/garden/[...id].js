import fetchPageById from '@lib/notion/fetchPageById';
import { NotionRenderer } from 'react-notion';

import { Container, Text, Heading, Flex } from '@chakra-ui/react';
import Code from '@components/Code';
import CopyButton from '@components/CopyButton.js';

export const PostPage = ({ blocks }) => {
  return (
    <Container>
      <NotionRenderer
        blockMap={blocks}
        customBlockComponents={{
          text: ({ renderComponent }) => {
            return (
              <Text color="white.300" size="xl">
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
          code: ({ blockValue, renderComponent }) => {
            const content = blockValue.properties.title[0][0];
            const language = blockValue.properties.language[0][0];

            return (
              <Flex
                p={4}
                bg="rgb(30, 30, 30)"
                justify="space-around"
                align="center"
              >
                {renderComponent()}
                <CopyButton
                  ml={10}
                  alignSelf="flex-start"
                  value={content.trim()}
                />
              </Flex>
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
