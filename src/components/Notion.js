import { Container, Image } from '@chakra-ui/react';
import { NotionRenderer } from 'react-notion';

const overrides = {
  '.notion': {
    color: 'red.300',
    width: '100%',
    marginBottom: '32px',
  },
  '.notion-bookmark-title': {
    color: 'purple.200',
  },
};

export default function Notion({ blocks, post }) {
  console.log({ post });
  return (
    <Container maxW="3xl" centerContent pt={10} sx={overrides}>
      <Image borderRadius="lg" w="100%" src={post.banner} mb={6} />
      <NotionRenderer blockMap={blocks} />
    </Container>
  );
}
