import 'react-notion/src/styles.css';
import '../src/styles/prism-atom-dark.css';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import Layout from '@components/Layout';

import { extendTheme } from '@chakra-ui/react';
import '@fontsource/nunito';

const theme = extendTheme({
  fonts: {
    main: ['Nunito Sans', 'sans-serif'],
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
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
