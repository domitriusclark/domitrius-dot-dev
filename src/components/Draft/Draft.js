import { FormProvider, useForm } from 'react-hook-form';
import { Flex } from '@chakra-ui/react';
import Main from './Main';
import Meta from './Meta';

export default function Draft({ post }) {
  const methods = useForm();
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
    <FormProvider {...methods}>
      <Flex
        as="form"
        w="100%"
        minH="100%"
        p={10}
        onSubmit={() => methods.handleSubmit(createPost())}
      >
        <Main post={post} />
        <Meta />
      </Flex>
    </FormProvider>
  );
}
