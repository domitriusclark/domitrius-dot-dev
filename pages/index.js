import { Flex, Text } from '@chakra-ui/react';
import Link from '@components/Link';

export default function Index() {
  return (
    <Flex direction="column" m={16} alignItems="center" justify="center">
      <Flex direction="column" alignItems="center" textAlign="center" w="50%">
        <Text
          bgClip="text"
          bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
          ]}
          fontSize="50px"
          mt={8}
        >
          Welcome 👋
        </Text>
        <Text mt={8}>
          Domitrius Clark | Jamstack Comunity Engineer{' '}
          <Link href="https://www.netlify.com" _hover={{ color: '#00AD9F' }}>
            @Netlify
          </Link>
          <br />
        </Text>
      </Flex>
    </Flex>
  );
}
