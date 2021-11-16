import * as React from 'react';
import {
  Flex,
  HStack,
  VStack,
  Button,
  FormLabel,
  FormControl,
  Input,
  Text,
  Textarea,
  Icon,
} from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { AssetDrawerContext } from '@components/AssetDrawer';
import { useFormContext } from 'react-hook-form';

const Circle = ({ color }) => <Icon as={FaCircle} color={color} size="sm" />;

export default function Meta({ post }) {
  const { register } = useFormContext();
  const { onOpen } = React.useContext(AssetDrawerContext);
  const [tagGroup, setTagGroup] = React.useState(post ? post.tags : []);
  const [published, setPublished] = React.useState(
    post ? post.published : false,
  );

  function addTag(tag) {
    if (tagGroup.some((t) => tag === t)) {
      setTag('');
      return;
    }

    setTagGroup((prev) => [tag, ...prev]);
    setTag('');
  }

  async function editPost() {
    await fetch('/api/post', {
      method: 'PUT',
      body: JSON.stringify({
        id: post.id,
        title,
        body,
        tags: tagGroup,
        description,
        cover_image: coverImageUrl,
        slug: slugify(title),
      }),
    });
  }

  async function publishDraft() {
    if (!post.title && !post.body && !description) {
      return;
    }
    await fetch('/api/post/publish', {
      method: 'PUT',
      body: JSON.stringify({
        id: post.id,
        published: !published,
      }),
    });

    setPublished((prev) => !prev);
  }

  return (
    <Flex
      direction="column"
      sx={{ gap: '20px' }}
      flex="1"
      h="100%"
      justify="center"
      align="center"
      ml={8}
    >
      <HStack w="100%">
        <Button bg="green.500" color="white" type="submit">
          Save
        </Button>

        <Button
          rightIcon={
            post && post.published ? (
              <Circle color="green.300" />
            ) : (
              <Circle color="red.300" />
            )
          }
          flex="1"
          bg="gray.500"
          color="white"
          onClick={() => publishDraft()}
        >
          {post && post.published ? 'Unpublish' : 'Publish'}
        </Button>
      </HStack>
      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input bg="white" disabled type="date" {...register('date')} />
      </FormControl>
      <FormControl>
        <FormLabel>Tags</FormLabel>
        <Input bg="white" type="text" {...register('tag')} />
      </FormControl>
      <FormControl>
        <FormLabel>Banner</FormLabel>
        <VStack spacing="6px">
          <Button onClick={onOpen} bg="gray.500" color="white" w="100%">
            Media Library
          </Button>
          <Text size="lg">OR</Text>
          <Input bg="white" placeholder="URL" {...register('cover_image')} />
        </VStack>
      </FormControl>
      <FormControl h="100%">
        <FormLabel>Description</FormLabel>
        <Textarea bg="white" size="2xl" {...register('description')} />
      </FormControl>
    </Flex>
  );
}
