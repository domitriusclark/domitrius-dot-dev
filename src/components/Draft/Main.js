import * as React from 'react';

import { useFormContext } from 'react-hook-form';
import {
  Box,
  Flex,
  Input,
  HStack,
  FormControl,
  FormLabel,
  Select,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

import Editor from '@components/Editor';

function InputGroup({ post }) {
  // const [title, setTitle] = React.useState(post ? post.title : '');
  const { register, watch } = useFormContext();

  console.log(watch());
  const [contentType, setContentType] = React.useState('Garden');
  return (
    <HStack>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          bg="white"
          color="black"
          _placeholder={{
            color: 'black',
          }}
          {...register('title', { required: 'This is required' })}
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
    <Flex
      direction="column"
      mt={3}
      p={7}
      minW="100%"
      flexGrow="1"
      bg="gray.100"
      boxShadow="xl"
      rounded="md"
    >
      <Tabs h="100%" variant="enclosed">
        <TabList>
          <Tab>Write</Tab>
          <Tab>Preview</Tab>
        </TabList>
        <TabPanels h="100%">
          <TabPanel as={Flex} justify="center" align="center" h="100%" p={0}>
            <Box minH="90%" bg="white" w="100%" p={3}>
              <Editor value={body} setValue={setBody} />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>Preview (Coming soon!)</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
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
