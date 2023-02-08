import NextLink from 'next/link';

import {
  Flex,
  Text
} from "@chakra-ui/react"

export const Layout = ({ children }) => {
  return (
    <Flex
      direction='column'
    >
      <Text
        as={ NextLink }
        href='/'
        textStyle='pixel'
        color='gray.900'
        backgroundColor='gray.500'
        fontWeight='bold'
        padding='10px'
        textAlign={{ base: 'center', lg: 'left' }}
      >
        PokeSeek
      </Text>
      { children }
    </Flex>
  )
}