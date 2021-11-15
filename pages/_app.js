import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

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
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
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
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
