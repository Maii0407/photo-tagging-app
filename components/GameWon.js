import NextLink from 'next/link';

import {
  Flex,
  Text,
  Button
} from "@chakra-ui/react";

export const GameWonMenu = () => {
  return (
    <Flex
      width='100%'
      height='100%'
      backgroundColor='rgba(0,0,0,0.7)'
      position='fixed'
      zIndex='2'
      top='0'
      right='0'
      justifyContent='center'
      alignItems='center'
    >

      <Flex
        direction='column'
        backgroundColor='gray.900'
        padding='20px'
        borderRadius='10px'
        alignItems='center'
      >
        <Text
          textStyle='pixel'
        >
          You Win!!!
        </Text>
        <Text>
          Thank You For Playing
        </Text>

        <Button
          as={ NextLink }
          href='/'
          variant='outline'
          colorScheme='green'
          textStyle='pixel'
          marginTop='10px'
        >
          Go Back
        </Button>
      </Flex>
      
    </Flex>
  )
};