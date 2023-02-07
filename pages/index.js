import { collection, addDoc, getDocs } from "firebase/firestore";

import { database } from "@/utils/firebaseConfig";

import { levels } from "@/utils/levelData";
import { StageCard } from "@/components/StageCard";

import {
  Flex,
  Grid,
} from "@chakra-ui/react";

export default function Home({ allLevels }) {
  // const saveAllLevels = async () => {
  //   try {
  //     for( let i = 0; i < levels.length; i++ ) {
  //       const data = await addDoc( collection( database, 'levels' ), {
  //         ...levels[i]
  //       });

  //       console.log( `Document save with ID: ${ data.id }` );
  //     };

  //     console.log( 'finished' );
  //   }
  //   catch( error ) {
  //     console.log({ error });
  //   }
  // };

  return (
    <Flex
      direction='column'
    >

      <Grid
        gridTemplateColumns={{ base: 'repeat( 2, 1fr)', lg: 'repeat( 4, 1fr )' }}
        gridGap={{ base: '20px', lg: '50px' }}
        padding={{ base: '20px', lg: '10px 100px' }}
      >
        {
          allLevels.map(( elem ) => {
            return <StageCard key={ elem.name } objData={ elem } />
          })
        }
      </Grid>

    </Flex>
  )
}

export async function getServerSideProps() {
  try {
    const res = await getDocs( collection( database, 'levels' ));
    const data = res.docs.map(( item ) => {
      return {
        ...item.data(),
        id: item.id
      }
    })

    return {
      props: {
        allLevels: data,
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