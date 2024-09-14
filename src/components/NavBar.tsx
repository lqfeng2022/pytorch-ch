import { Container, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container 
      maxW='1200px' 
      px='12px'
      position='fixed' 
      top='0' 
      left='0' 
      right='0' 
      zIndex='1000' 
      bg='white' // Ensure the background is white or your desired color
    >
      <HStack justifyContent='space-between' py='10px' my={2} spacing={3}>
        <Link to={'/'}>
          <Text 
            as='b' 
            whiteSpace='nowrap' 
            fontSize='2xl' 
            color='tomato'
            _hover={{ color: '#E53E3E' }}
          >
            AI &nbsp;WITH &nbsp;PYTORCH
          </Text>
        </Link>
        <Text as='b' fontSize='xl' color='gray.500' fontWeight='light'>李 形状</Text>
      </HStack>
    </Container>
  );
};

export default NavBar;
