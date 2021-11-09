import { Flex } from '@chakra-ui/react';
import Main from './Main';
import Meta from './Meta';

export default function Draft({ post }) {
  async function createPost() {
    if (
      !title ||
      !body ||
      !tagGroup ||
      !body ||
      !coverImageUrl ||
      !description
    ) {
      return;
    }

    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        tags: tagGroup,
        description,
        cover_image: coverImageUrl,
        slug: slugify(title),
      }),
    });
  }

  return (
    <Flex
      as="form"
      w="100%"
      minH="100%"
      p={10}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Main post={post} />
      <Meta />
    </Flex>
  );
}
