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

export default function Meta({ post }) {
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
        <Button bg="gray.500" color="white">
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
          <Button bg="gray.500" color="white" w="100%">
            Media Library
          </Button>
          <Text size="lg">OR</Text>
          <Input placeholder="URL"></Input>
          <Text size="lg">OR</Text>
          <Input type="file" />
        </VStack>
      </FormControl>
      <FormControl h="100%">
        <FormLabel>Description</FormLabel>
        <Textarea size="2xl" />
      </FormControl>
    </Flex>
  );
}
