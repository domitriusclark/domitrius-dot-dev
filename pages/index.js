import { Container, Flex, Text } from '@chakra-ui/react';
import Image from '@components/Image';

function GradientText({ children, direction, from, to }) {
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

export default function Index() {
  return (
    <Flex direction="column" m={16} alignItems="center" justify="center">
      <Container
        size="2xl"
        direction="column"
        alignItems="center"
        textAlign="center"
        w="50%"
      >
        <Text
          color="white"
          maxW="400px"
          margin="auto"
          fontSize="3xl"
          mt={8}
          boxDecorationBreak="clone"
          pl="8px'
          pr='8px"
        >
          I'm Domitrius Clark. I build{' '}
          <GradientText direction="to-br" from="#DA22FF" to="#9733EE">
            {' '}
            communities
          </GradientText>{' '}
          and teach people to{' '}
          <GradientText direction="to-br" from="#DA22FF" to="#9733EE">
            code
          </GradientText>
        </Text>
        <Image
          src="/anime-dom.png"
          height={400}
          width={295}
          sx={{ marginRight: '30px!important' }}
        />
      </Container>
    </Flex>
  );
}
