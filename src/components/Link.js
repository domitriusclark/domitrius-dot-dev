import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
}
