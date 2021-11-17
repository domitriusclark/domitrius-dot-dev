import * as React from 'react';

import { Text, Button, Input, Flex, Image } from '@chakra-ui/react';

export default function UploadFile({ title, image, setImage }) {
  const [fileToUpload, setFileToUpload] = React.useState();

  function onChange(e) {
    setFileToUpload({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  }

  function onSubmit() {
    if (!title) {
      throw new Error('Need a title');
    }
    let formData = new FormData();
    formData.append('image', fileToUpload.file);
    formData.append('folder', 'blog');
    formData.append('public_id', title);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
      headers: { 'Content-Key': 'application/json' },
    })
      .then((res) => res.json())
      .then((result) => setImage(result.url));
  }

  return (
    <Flex direction="column">
      <Input border="none" type="file" onChange={onChange} my={5} />
      {fileToUpload && <Image src={fileToUpload.preview} h="300" w="620" />}
      <Button my={5} onClick={() => onSubmit(fileToUpload)}>
        Upload Photo
      </Button>
      {image && <Text textDecor="underline">{image}</Text>}
    </Flex>
  );
}
