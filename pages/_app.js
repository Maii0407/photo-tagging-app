import '@fontsource/press-start-2p';
import '@fontsource/big-shoulders-display'

import { Layout } from '@/components/Layout';

import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    pixel: {
      fontFamily: `'Press Start 2P', cursive`
    }
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'white',
        fontFamily: `'Big Shoulders Display', cursive`
      }
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeSeek</title>
      </Head>
      <ChakraProvider theme={ theme } >

        <Layout>
          <Component {...pageProps} />
        </Layout>
        
      </ChakraProvider>
    </>
  )
}
