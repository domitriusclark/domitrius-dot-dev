import { Container } from '@chakra-ui/react';
import { NotionRenderer } from 'react-notion';

const overrides = {
  '.notion': {
    color: 'red.300',
  },
  '.notion-bookmark-title': {
    color: 'purple.200',
  },
};

export default function Notion({ blocks }) {
  return (
    <Container maxW="xl" centerContent pt={10} sx={overrides}>
      <NotionRenderer blockMap={blocks} />
    </Container>
  );
}
