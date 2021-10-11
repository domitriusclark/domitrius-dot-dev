import {
  Flex,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react';

import React from 'react';

function UploadImage({ publicId, path }) {
  const [fileToUpload, setFileToUpload] = React.useState();

  function onChange(e) {
    setFileToUpload({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  }

  async function onSubmit() {
    const readData = (f) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(f);
      });
    const data = await readData(fileToUpload.file);

    fetch('/api/media/upload', {
      method: 'POST',
      body: JSON.stringify({
        file: data,
        public_id: publicId,
        folder: path,
      }),
    })
      .then((res) => res.json())
      .then((result) => result);
  }

  return (
    <Flex direction="column">
      <Input border="none" type="file" onChange={onChange} my={5} />
      {fileToUpload && <Image src={fileToUpload.preview} h="300" w="620" />}
      <Button my={5} onClick={() => onSubmit(fileToUpload)}>
        Upload Photo
      </Button>
    </Flex>
  );
}

export default function UploadView({ state, dispatch }) {
  const [publicId, setPublicId] = React.useState('');
  const [path, setPath] = React.useState(
    state.currentFolder ? state.currentFolder.path : '',
  );
  return (
    <Flex w="100%" diretion="column">
      <Tabs w="100%" isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Image</Tab>
          <Tab>Video</Tab>
        </TabList>
        <TabPanels>
          <TabPanel as={Flex} direction="column" sx={{ gap: '12px' }}>
            <Heading as="h2">Image Upload</Heading>
            <Input
              placeholder="Folder path for upload e.g mdnext-v2/images..."
              value={path}
              onChange={(e) => setPath(e.target.value)}
            />
            <Input
              placeholder="Image publcic ID"
              value={publicId}
              onChange={(e) => setPublicId(e.target.value)}
            />
            <UploadImage path={path} publicId={publicId} />
          </TabPanel>
          <TabPanel>
            <Heading as="h2">Video Course Upload</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
