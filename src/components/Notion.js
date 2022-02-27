import { Container, Image } from '@chakra-ui/react';
import { NotionRenderer } from 'react-notion';
import Link from 'next/link';

const overrides = {
  '.notion': {
    width: '100%',
    marginBottom: '32px',
    minWidth: '100%',
    color: 'gray.400',
  },
  '.notion-bookmark-title': {
    color: 'purple.200',
  },
};

export default function Notion({ blocks, post }) {
  return (
    <Container maxW="3xl" centerContent pt={10} sx={overrides}>
      {post ? (
        <Image borderRadius="lg" w="100%" src={post.banner} mb={6} />
      ) : null}
      <NotionRenderer
        blockMap={blocks}
        customBlockComponents={{
          page: ({ blockValue, renderComponent }) => (
            <Link href={`/garden/${blockValue.id}`}>{renderComponent()}</Link>
          ),
        }}
      />
    </Container>
  );
}
