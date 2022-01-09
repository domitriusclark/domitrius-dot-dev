import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import Layout from '@components/Layout';

const theme = extendTheme({
  styles: {
    global: {
      'input, textarea': {
        color: 'gray.900',
      },
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Domitrius' Personal Lair"
        description="On this site you'll learn about who Domitrius is and why you should get to know him."
        url="https://domitrius.dev"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
