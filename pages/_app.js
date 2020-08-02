import { MDXProvider } from "@mdx-js/react";

import {
  ChakraProvider,
  CSSReset,
  InitializeColorMode
} from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import Navbar from '../components/navbar'
import Code from '../components/code';

const components = {
  code: Code
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <CSSReset />
        <InitializeColorMode />
        <Navbar />
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default App;