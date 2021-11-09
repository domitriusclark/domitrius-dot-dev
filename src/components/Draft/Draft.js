import { Flex } from '@chakra-ui/react';
import Main from './Main';
import Meta from './Meta';

export default function Draft({ post }) {
  return (
    <Flex
      as="form"
      w="100%"
      minH="100%"
      p={10}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Main post={post} />
      <Meta />
    </Flex>
  );
}
