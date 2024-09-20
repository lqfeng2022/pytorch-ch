import { 
  Box,
  Button,
  Center, 
  HStack, 
  Image, 
  Stack, 
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import book_img from '../src/assets/book_cover.jpeg';
import book_img_2 from '../src/assets/book_cover_2.jpeg';
import { useState } from 'react';
import BookList from './components/BookList';

function HomePage() {
  const [show, setShow] = useState(false)
  const bookImage = useBreakpointValue({ 
    base: book_img, lg: book_img_2 
  });

  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const showContent = isLargeScreen || !show;

  const handleShow = () => { setShow(true)}
  const handleHide = () => { setShow(false)}
  
  return (
    <Center>
      <Stack spacing={5} pb={5}>
        { showContent && <>
          <Text>哈啰! 为了探索 ChatGPT 的奥秘，我写了这个网站。</Text>
          <HStack justifyContent='space-between'>
            { !isLargeScreen &&
              <Text 
                fontSize='xl' 
                color='gray.500' 
                borderBottom='1px solid #FEB2B2'
                onClick={handleShow}
                _hover={{ 
                  color: 'tomato', 
                  cursor: 'pointer',
                  transform: 'translateX(5px)',
                  transition: 'transform .15s ease-in',
                }}
              >
                欢迎入坑 :
              </Text>
            }
          </HStack>
          <Image src={bookImage} alt='Book Cover'/>
        </>}
        {useBreakpointValue({base: show, lg: false}) && 
          <Box 
            w={{ base: '350px', sm: '450px', md: '700px' }}
            position='relative'
            pb='70px'
          >
            <HStack justifyContent='space-between'>
              <Text fontWeight='bold' color='gray.500' borderBottom='1px solid red'>本书目录:</Text>
              <Button
                colorScheme='gray'
                color='gray.500'
                w='80px'
                h='35px'
                _hover={{ bg: '#FF6347', color: '#FFFFFF' }}
                onClick={handleHide}
              >CLOSE</Button>
            </HStack>
            <BookList/>
          </Box>
        }
      </Stack>
    </Center>
  );
}

export default HomePage;