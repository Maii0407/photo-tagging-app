import { useEffect, useState, createContext } from "react";
import { doc, getDoc } from "firebase/firestore";

import { database } from "@/utils/firebaseConfig";

import { DropdownMenu } from "@/components/Dropdown";
import { GameWonMenu } from "@/components/GameWon";

import {
  Button,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";

export const LevelContext = createContext( null );

export default function Level({ level }) {
  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ found, setFound ] = useState('');
  const [ findList, setFindList ] = useState([]);

  const [ showMenu, setShowMenu ] = useState( false );
  const [ gameStart, setGameStart ] = useState( false );
  const [ win, setWin ] = useState( false );

  //original image resolution
  const originalWidth = 900;
  const originalHeight = 1200;

  //function to return coords of each area map based on level.hotspots
  const returnAreaMap = ( obj ) => {
    const x1 = obj.coords[0] * ( width / originalWidth );
    const y1 = obj.coords[1] * ( height / originalHeight );
    const x2 = obj.coords[2] * ( width / originalWidth );
    const y2 = obj.coords[3] * ( height / originalHeight );

    return `${ x1 }, ${ y1 }, ${ x2 }, ${ y2 }`
  };

  const handleAreaClick = ( obj ) => {
    if( showMenu ) {
      setShowMenu( false );
    }
    if( !showMenu ) {
      setShowMenu( true );
    }

    console.log( obj.name );
    setFound( obj.name );
  };

  const handleImageClick = () => {
    if( showMenu ) {
      setShowMenu( false );
    }
    if( !showMenu ) {
      setShowMenu( true );
    }

    setFound('');
  };

  useEffect(() => {
    const image = document.querySelector( '#level-image' );
    setWidth( image.clientWidth );
    setHeight( image.clientHeight );

    const handleResize = () => {
      setWidth( image.clientWidth );
      setHeight( image.clientHeight );
    }

    window.addEventListener( 'resize', handleResize );

    return () => {
      window.removeEventListener( 'resize', handleResize );
    }
  }, [])

  useEffect(() => {
  //onload check if find list is empty
    if( findList.length === 0 && !gameStart ) {
      setFindList( level.hotspots );
      setGameStart( true );
    }
    if( findList.length === 0 && gameStart ) {
      setWin( true );
    }
  }, [ findList ])

  return (
    <Flex
      direction='column'
    >
      <LevelContext.Provider value={{
        showMenu, setShowMenu,
        findList, setFindList,
        found, setFound
      }}>

        <Grid
          gridTemplateColumns={{ base: 'repeat( 3, 1fr )', md: 'repeat( 3, 110px )' }}
          gridGap='10px'
          padding='10px'
        >
          {
            findList.map(( element ) => {
              return <Image
                key={ element.name }
                src={ element.image }
                alt={ element.name }
                border='2px solid'
                borderColor='gray.500'
                borderRadius='10px'
                padding='5px'
              />
            })
          }

        </Grid>

        <Flex
          direction='column'
          _hover={{
            cursor: 'pointer'
          }}
        >
          <map name='levelMap' >
            {
              level[ 'hotspots' ].map(( element ) => {
                return <area
                  key={ element.name }
                  shape='rect'
                  alt={ element.name }
                  coords={ returnAreaMap( element ) }
                  onClick={ () => handleAreaClick( element ) }
                />
              })
            }
          </map>
          
          <Image
            onClick={ () => handleImageClick() }
            id='level-image'
            useMap='#levelMap'
            src={ level.image }
            alt={ level.name }
            width='100%'          
          />
        </Flex>

        {
          showMenu ? <DropdownMenu />
          : null
        }
        {
          win ? <GameWonMenu />
          : null
        }

      </LevelContext.Provider>

      <Text
        padding='10px'
        textAlign='center'
      >
        Art by: dragumagu
      </Text>

    </Flex>
  )
};

export async function getServerSideProps( context ) {
  try {
    const { id } = context.query;

    const docRef = doc( database, 'levels', `${ id }` )
    const res = await getDoc( docRef );
    const data = {
      ...res.data(),
      id: res.id
    }

    return {
      props: {
        level: data,
      },
    }
  }
  catch( error ) {
    console.log( error );
    return {
      notFound: true,
    }
  }
};