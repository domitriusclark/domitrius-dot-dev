import { Link as NextLink } from 'next/link';
import { Box, Link, Text, Flex } from '@chakra-ui/core';

export default function ContentBox({ seed }) {
  return (
    <Link as={NextLink} href={`/garden/${seed.slug}`}>
      <Box w="500px" border="1px solid black" borderRadius="8px" p={8}>
        <Text>{seed.title}</Text>
        <Text> By: {seed.author}</Text>
        <Text>{seed.description}</Text>
        <Flex>
          {seed.tags.map((tag) => (
            <Text mt="8px" mr={8} key="tag">
              #{tag}
            </Text>
          ))}
        </Flex>
      </Box>
    </Link>
  );
}
