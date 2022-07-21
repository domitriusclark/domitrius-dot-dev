import { Text } from '@chakra-ui/react';

export default function GradientText({ children, direction, from, to }) {
  return (
    <Text
      as="span"
      bgClip="text"
      bgGradient={`linear(${direction}, ${from}, ${to})`}
    >
      {children}
    </Text>
  );
}
