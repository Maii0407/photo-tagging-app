import { doc, getDoc } from "firebase/firestore";

import { database } from "@/utils/firebaseConfig";

import {
  Flex,
  Image
} from "@chakra-ui/react";

export default function Level({ level }) {
  console.log( level );

  return (
    <Flex
      direction='column'
    >
      <Image
        src={ level.image }
        alt={ level.name }
        width='100%'
        _hover={{
          cursor: 'pointer'
        }}
      />
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