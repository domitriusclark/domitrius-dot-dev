import fetchTableById from '@lib/notion/fetchTableById';

import { Container, Heading, Flex, Text } from '@chakra-ui/react';
import Image from '@components/Image';

export const getServerSideProps = async () => {
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  /*
    We need to: 
    - get all of the posts
    - find each post type and collect them
    - grab a random item from each collection
    - combine those into a single array and return to the page with it
  */

  return {
    props: {
      randomPosts: posts,
    },
  };
};

function GradientText({ children, direction, from, to }) {
  return (
    <Text
      as="span"
      bgClip="text"
      bgGradient={`linear(${direction}, ${from}, ${to})`}
    >
      {children}
    </Text>
  );
}

export default function Index({ randomPosts }) {
  return (
    <Flex
      h="auto"
      p={4}
      align="center"
      justify="space-around"
      direction={{ base: 'column', lg: 'row' }}
    >
      <Flex
        h="full"
        direction="column"
        m={16}
        alignItems="center"
        justify="center"
      >
        <Container
          size="2xl"
          direction="column"
          alignItems="center"
          textAlign="center"
        >
          <Text
            color="white"
            maxW="400px"
            margin="auto"
            fontSize="3xl"
            mt={8}
            boxDecorationBreak="clone"
            pl="8px'
          pr='8px"
          >
            I'm Domitrius Clark. I build{' '}
            <GradientText direction="to-br" from="#DA22FF" to="#9733EE">
              {' '}
              communities
            </GradientText>{' '}
            and teach people to{' '}
            <GradientText direction="to-br" from="#DA22FF" to="#9733EE">
              code
            </GradientText>
          </Text>
          <Image
            src="/anime-dom.png"
            height={400}
            width={295}
            sx={{ marginRight: '30px!important' }}
          />
        </Container>
      </Flex>
      <Flex>
        <Heading as="h1">Lets make this work</Heading>
      </Flex>
    </Flex>
  );
}
