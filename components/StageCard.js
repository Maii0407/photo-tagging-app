import {
  Flex,
  Text,
  Image
} from "@chakra-ui/react";

export const StageCard = ({ objData }) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      gap='10px'
      _hover={{
        cursor: 'pointer',
        backgroundColor: 'gray.500',
        padding: '5px',
        borderRadius: '10px',
        color: 'gray.900'
      }}
    >
      <Image
        src={ objData.image }
        alt={ objData.name }
        borderRadius='10px'
      />
      <Text>
        { objData.name }
      </Text>
    </Flex>
  );
};