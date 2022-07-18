import { Button, Container } from '@chakra-ui/react';
import { NotionRenderer } from 'react-notion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const overrides = {
  '.notion': {},
  '.notion-bookmark-title': {
    color: 'purple.200',
  },
  '.notion-page-link': {
    color: 'white',
  },
};

export default function Notion({ blocks }) {
  const router = useRouter();
  return (
    <Container maxW="5xl" sx={overrides} h="auto">
      <Button onClick={() => router.back()}>Go back</Button>
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
