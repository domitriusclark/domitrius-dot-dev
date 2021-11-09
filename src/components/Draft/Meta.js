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
} from '@chakra-ui/react';
import { AssetDrawerContext } from '@components/AssetDrawer';

export default function Meta({ post }) {
  const { onOpen } = React.useContext(AssetDrawerContext);

  const [tag, setTag] = React.useState('');
  const [tagGroup, setTagGroup] = React.useState(post ? post.tags : []);

  const [description, setDescription] = React.useState(
    post ? post.description : '',
  );
  const [coverImageUrl, setCoverImageUrl] = React.useState(
    post ? post.cover_image : '',
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
        <Button bg="gray.500" color="white" type="submit">
          Save
        </Button>
        <Button flex="1" bg="gray.500" color="white" onSubmit={() => {}}>
          Publish
        </Button>
      </HStack>
      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input type="date" />
      </FormControl>
      <FormControl>
        <FormLabel>Tags</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Banner</FormLabel>
        <VStack spacing="6px">
          <Button onClick={onOpen} bg="gray.500" color="white" w="100%">
            Media Library
          </Button>
          <Text size="lg">OR</Text>
          <Input placeholder="URL"></Input>
        </VStack>
      </FormControl>
      <FormControl h="100%">
        <FormLabel>Description</FormLabel>
        <Textarea onClick={(e) => setDescriptin(e.target.value)} size="2xl" />
      </FormControl>
    </Flex>
  );
}
