import { Flex, Text, HStack } from '@chakra-ui/react';
import Link from '@components/Link';
import Image from '@components/Image';

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
        <Flex>
          <Image
            src="/anime-dom.png"
            height={400}
            width={295}
            sx={{ marginRight: '30px!important' }}
          />
        </Flex>

        <Text mt={8}>
          Domitrius Clark | Jamstack Community Engineer{' '}
          <Link href="https://www.netlify.com" _hover={{ color: '#00AD9F' }}>
            @Netlify
          </Link>
          <br />
        </Text>
      </Flex>
    </Flex>
  );
}
