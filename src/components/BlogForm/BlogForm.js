import React from 'react';
import {
  Icon,
  Box,
  Flex,
  Input,
  InputGroup,
  Button,
  Textarea,
  InputRightAddon,
} from '@chakra-ui/react';
import Editor from '@components/Editor';
import UploadFile from '@components/UploadFile';
import { FaTrash } from 'react-icons/fa';
import slugify from '@utils/slugify';

export default function BlogForm({ post }) {
  const [title, setTitle] = React.useState(post ? post.title : '');
  const [tag, setTag] = React.useState('');
  const [tagGroup, setTagGroup] = React.useState(post ? post.tags : []);
  const [description, setDescription] = React.useState(
    post ? post.description : '',
  );
  const [coverImageUrl, setCoverImageUrl] = React.useState(
    post ? post.cover_image : '',
  );
  const [body, setBody] = React.useState(
    post
      ? post.body
      : [{ type: 'paragraph', children: [{ text: '', marks: '' }] }],
  );

  function addTag(tag) {
    if (tagGroup.some((t) => tag === t)) {
      setTag('');
      return;
    }

    setTagGroup((prev) => [tag, ...prev]);
    setTag('');
  }

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
    <Flex w="100%" direction="column" justify="center" align="center">
      <Flex direction="column" w="800px">
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          bg="white"
          value={title}
          color="black"
          _placeholder={{
            color: 'black',
          }}
        />

        <UploadFile
          title={title}
          image={coverImageUrl}
          setImage={setCoverImageUrl}
        />

        <Flex direction="column" mt={4}>
          <InputGroup w="420px">
            <Input
              bg="white"
              color="black"
              _placeholder={{ color: 'black' }}
              value={tag}
              placeholder="Tags..."
              onChange={(e) => setTag(e.target.value)}
            />
            <InputRightAddon bg="none" border="none">
              <Button onClick={() => addTag(tag)}>+</Button>
            </InputRightAddon>
          </InputGroup>
          <Flex>
            {tagGroup.length > 0 &&
              tagGroup.map((tag) => (
                <Button
                  onClick={() =>
                    setTagGroup((prev) => prev.filter((t) => tag !== t))
                  }
                  leftIcon={<Icon as={FaTrash} color="red" />}
                  mr={6}
                  mt={6}
                >
                  {tag}
                </Button>
              ))}
          </Flex>
        </Flex>

        <Textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the topic..."
          mt={4}
          value={description}
          bg="white"
          color="black"
          _placeholder={{
            color: 'black',
          }}
        />

        <Box
          bg="white"
          h="400px"
          mt={4}
          border="2px solid black"
          wrap="wrap"
          color="black"
          p={4}
        >
          <Editor value={body} setValue={setBody} />
        </Box>
        {post ? (
          <Button mt={4} onClick={editPost}>
            Save Changes
          </Button>
        ) : (
          <Button mt={4} onClick={createPost}>
            Create Post
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
