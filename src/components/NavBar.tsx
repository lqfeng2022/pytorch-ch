import { Container, HStack, Icon, Text } from '@chakra-ui/react';
import { HiLanguage } from 'react-icons/hi2';

const NavBar = () => {
  return (
    <Container 
      maxW='1200px' 
      px='10px'
      position='fixed' 
      top='0' 
      left='0' 
      right='0' 
      zIndex='1000' 
      bg='white' // Ensure the background is white or your desired color
    >
      <HStack justifyContent='space-between' py='10px' my={2} spacing={3}>
        <Text as='b' whiteSpace='nowrap' fontSize='2xl' color='tomato'>
          AI &nbsp;WITH &nbsp;PYTORCH
        </Text>
        <Icon boxSize='25px' as={HiLanguage} />
      </HStack>
    </Container>
  );
};

export default NavBar;
