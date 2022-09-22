import { fetchTableById } from '@lib/notion';
import getRandomItem from '@utils/getRandomItem';

import { HStack, Flex, Text, VStack } from '@chakra-ui/react';
import Card from '@components/Card';
import Image from '@components/Image';
import GradientText from '@components/GradientText';

export const getServerSideProps = async () => {
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  /* TODO: There's definitely a better way to create an array filled with random items from multiple other arrays */
  const lessons = posts.filter((post) => post.content_type === 'lesson');
  const snippets = posts.filter((post) => post.content_type === 'snippets');
  const gardenPosts = posts.filter((post) => post.content_type === 'garden');
  const notes = posts.filter((post) => post.content_type === 'notes');

  const randomPosts = [
    getRandomItem(lessons),
    getRandomItem(snippets),
    getRandomItem(gardenPosts),
    getRandomItem(notes),
  ];

  return {
    props: {
      posts: randomPosts,
    },
  };
};

export default function Index({ posts }) {
  return (
    <Flex
      h="100%"
      p={4}
      align="center"
      justify="space-around"
      direction={{ base: 'column', lg: 'row' }}
    >
      <Flex
        align="center"
        justify="center"
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        <Image
          src="/anime-dom.png"
          height={400}
          width={295}
          sx={{ marginRight: '30px!important' }}
        />
        <Text
          color="white"
          maxW="350px"
          margin="auto"
          fontSize="3xl"
          mt={8}
          boxDecorationBreak="clone"
          pl="8px'
          pr='8px"
        >
          My name's Domitrius Clark. I build{' '}
          <GradientText direction="to-br" from="#DA22FF" to="#9733EE">
            {' '}
            communities
          </GradientText>{' '}
          and teach people to{' '}
          <GradientText direction="to-br" from="#DA22FF" to="#9733EE">
            code
          </GradientText>
        </Text>
      </Flex>
      <Flex>
        <VStack justify="space-between" spacing={5} p={2} mt={10}>
          {posts.map((post) => (
            <Card post={post} width="100%" />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}
