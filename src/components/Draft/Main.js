import * as React from 'react';

import {
  Box,
  Flex,
  Input,
  HStack,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';

import Editor from '@components/Editor';

function InputGroup({ post }) {
  const [title, setTitle] = React.useState(post ? post.title : '');
  const [contentType, setContentType] = React.useState('Garden');
  return (
    <HStack>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          bg="white"
          value={title}
          color="black"
          _placeholder={{
            color: 'black',
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Content-Type</FormLabel>
        <Select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          placeholder="Select option"
        >
          <option value="Garden">Garden</option>
          <option value="Daily">Daily</option>
        </Select>
      </FormControl>
    </HStack>
  );
}

function EditorArea({ post }) {
  const [body, setBody] = React.useState(
    post
      ? post.body
      : [{ type: 'paragraph', children: [{ text: '', marks: '' }] }],
  );
  return (
    <Flex mt={3} p={7} minW="100%" bg="gray.100" rounded="md">
      <Box minH="100%" bg="white" w="100%" p={3}>
        <Editor value={body} setValue={setBody} />
      </Box>
    </Flex>
  );
}

export default function Main({ post }) {
  return (
    <Flex direction="column" minH="100%" w="70%">
      <InputGroup post={post} />
      <EditorArea post={post} />
    </Flex>
  );
}
