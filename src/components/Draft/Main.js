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

function InputGroup() {
  const { register } = useFormContext();

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
          bg="white"
          placeholder="Select option"
          {...register('contentType')}
        >
          <option value="Garden">Garden</option>
          <option value="Daily">Daily</option>
        </Select>
      </FormControl>
    </HStack>
  );
}

function EditorArea({ post, body, setBody }) {
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
      <Tabs color="black" h="100%" variant="enclosed">
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

export default function Main({ post, body, setBody }) {
  return (
    <Flex direction="column" minH="100%" w="70%">
      <InputGroup post={post} />
      <EditorArea post={post} body={body} setBody={setBody} />
    </Flex>
  );
}
