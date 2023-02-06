import { levels } from "@/utils/levelData";
import { StageCard } from "@/components/StageCard";

import {
  Flex,
  Grid
} from "@chakra-ui/react";

export default function Home() {
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
          levels.map(( elem ) => {
            return <StageCard key={ elem.id } objData={ elem } />
          })
        }
      </Grid>
    </Flex>
  )
}