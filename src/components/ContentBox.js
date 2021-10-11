import NextLink from 'next/link';
import {
  Flex,
  Box,
  IconButton,
  Link,
  Heading,
  Text,
  Stack,
  Tag,
} from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function ContentBox({ post }) {
  const { title, author, description, tags, id } = post;

  async function deletePost(id) {
    await fetch('/api/post', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
  }

  return (
    <Flex
      role="group"
      maxW="500px"
      border="1px"
      borderColor="black"
      borderRadius="8px"
      p={8}
    >
      <Stack>
        <Box>
          <NextLink href={`/garden/${post.slug}`} passHref>
            <Link _hover={{ textDecor: 'none' }}>
              <Heading
                as="h2"
                size="lg"
                _groupHover={{ textDecor: 'underline' }}
              >
                {title}
              </Heading>
            </Link>
          </NextLink>
          <Heading as="h3" size="md" pb="0.5rem">
            By: {post.author}
          </Heading>
          <Text pb="0.5rem">{description}</Text>
        </Box>
        <Stack direction="row" spacing={3}>
          {tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </Stack>
      </Stack>
      {process.env.NODE_ENV === 'development' && (
        <Flex>
          <IconButton icon={<FaTrash />} onClick={() => deletePost(id)} />
          <NextLink href={`/garden/author/${id}`} passHref>
            <IconButton as={Link} icon={<FaEdit />} />
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
}
