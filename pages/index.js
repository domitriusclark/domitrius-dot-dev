import { Flex, Text } from '@chakra-ui/react';
import Link from '@components/Link';

export default function Index() {
  return (
    <Flex direction="column" m={16} alignItems="center" justify="center">
      <Flex direction="column" alignItems="center" textAlign="center" w="50%">
        <Text fontSize="50px" mt={8}>
          Welcome 👋
        </Text>
        <Text mt={8}>
          My name is Domitrius | Jamstack Comunity Engineer{' '}
          <Link _hover={{ color: '#00AD9F' }} href="wwww.netlify.com">
            @Netlify
          </Link>
          <br />
        </Text>
      </Flex>
    </Flex>
  );
}
