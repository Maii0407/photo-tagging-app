import { useContext } from "react";

import { LevelContext } from "@/pages/[id]";

import {
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

export const DropdownMenu = () => {
  const { setShowMenu, findList, setFindList, found, setFound } = useContext( LevelContext );

  const handleClick = ( obj ) => {
    if( obj.name === found ) {
      //remove found item
      const filter = findList.filter( element => element.name !== found );
      setFindList( filter );
      setShowMenu( false );
      setFound('');
    }
    else {
      setShowMenu( false );
      setFound('');
    }
  };

  return (
    <Flex
      direction='column'
      position='fixed'
      top='50vh'
      right='50vw'
      gap='5px'
    >
      {
        findList.map(( element ) => {
          return <Flex
            onClick={ () => handleClick( element ) }
            key={ element.name }
            backgroundColor='gray.900'
            direction='row'
            alignItems='center'
            padding='10px'
            border='5px solid'
            borderColor='gray.500'
            borderRadius='10px'
          >
            <Image
              src={ element.image }
              alt={ element.name }
              width='50px'
            />
            <Text>
              { element.name }
            </Text>
          </Flex>
        })
      }
    </Flex>
  )
}