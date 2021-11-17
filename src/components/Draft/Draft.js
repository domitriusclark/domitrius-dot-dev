import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Flex } from '@chakra-ui/react';
import Main from './Main';
import Meta from './Meta';

import slugify from '@utils/slugify';

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export default function Draft({ post }) {
  const defaultValues = {
    title: post ? post.title : '',
    content_type: post ? post.content_type : 'Garden',
    date: today,
    tag: '',
    description: post ? post.description : '',
    cover_image: post ? post.cover_image : '',
  };

  const methods = useForm({ defaultValues });

  const [body, setBody] = React.useState(
    post
      ? post.body
      : [{ type: 'paragraph', children: [{ text: '', marks: '' }] }],
  );

  async function createPost({
    title,
    tags,
    description,
    cover_image,
    content_type,
  }) {
    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        tags,
        description,
        content_type,
        cover_image: cover_image,
        slug: slugify(title),
        created_at: date.toISOString().toLocaleString('en-US'),
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
        onSubmit={methods.handleSubmit(createPost)}
      >
        <Main post={post} body={body} setBody={setBody} />
        <Meta post={post} />
      </Flex>
    </FormProvider>
  );
}
