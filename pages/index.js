import { Flex, Text } from '@chakra-ui/react';

export default function Index() {
  return (
    <Flex direction="column" m={16} alignItems="center" justify="center">
      <Flex direction="column" alignItems="center" textAlign="center" w="50%">
        <Text fontSize="50px" mt={8}>
          Welcome 👋
        </Text>
        <Text mt={8}>
          My name is Domitrius. I'm an Advocate Engineer at Cloudinary. I stream
          on Twitch. I make educational content on Egghead. All my other time is
          consumed by video games
        </Text>
      </Flex>
    </Flex>
  );
}
