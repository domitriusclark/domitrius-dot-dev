import { FormProvider, useForm } from 'react-hook-form';
import { Flex } from '@chakra-ui/react';
import Main from './Main';
import Meta from './Meta';

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export default function Draft({ post }) {
  const defaultValues = {
    title: post ? post.title : '',
    contentType: post ? post.contentType : 'Garden',
    date: today,
    tag: '',
    description: post ? post.description : '',
    body: post
      ? post.body
      : [{ type: 'paragraph', children: [{ text: '', marks: '' }] }],
    coverImage: post ? post.cover_image : '',
  };
  const methods = useForm({ defaultValues });
  console.log(methods.watch());
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
        <Meta post={post} />
      </Flex>
    </FormProvider>
  );
}
