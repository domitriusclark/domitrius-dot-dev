import { useImage } from 'use-cloudinary';

import { Flex, Image, Text } from '@chakra-ui/core';

import { Chakra } from '@components/Chakra';

export default function Index({ cookies }) {
  const { generateUrl, url, isLoading } = useImage({
    cloudName: 'testing-hooks-upload',
  });

  React.useEffect(() => {
    generateUrl({ publicId: 'transparent_dom_logo', transformations: {} });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Chakra cookies={cookies}>
      <Flex direction="column" m={16} alignItems="center" justify="center">
        <Image src={url} />
        <Flex direction="column" alignItems="center" textAlign="center" w="50%">
          <Text fontSize="50px" mt={8}>
            Welcome 👋
          </Text>
          <Text mt={8}>
            My name is Domitrius. I'm an Advocate Engineer at Cloudinary. I
            stream on Twitch. I make educational content on egghead. All my
            other time is consumed by video games
          </Text>
        </Flex>
      </Flex>
    </Chakra>
  );
}

export { getServerSideProps } from '@components/Chakra';
