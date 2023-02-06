import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'white'
      }
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeTag</title>
      </Head>
      <ChakraProvider theme={ theme } >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
