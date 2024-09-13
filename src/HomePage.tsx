import { 
  Box,
  Button,
  Center, 
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
          <Image src={bookImage} alt='Book Cover'/>
          <Text>哈啰! 为了向大家介绍人工智能, 我写了这个网站, 欢迎入坑。</Text>
          {!isLargeScreen && 
            <Button 
              bg='tomato'
              color='white'
              w='100px' 
              h='35px' 
              onClick={handleShow}
              _hover={{ bg: '#E53E3E' }}
            >
              目 录
            </Button>
          }
        </>}
        {useBreakpointValue({base: show, lg: false}) && 
          <Box 
            w={{ base: '350px', sm: '450px', md: '700px' }}
            position='relative'
            pb='70px'
          >
            <BookList/>
            <Button 
              colorScheme='gray' 
              w='80px' 
              h='35px' 
              onClick={handleHide}
              position='absolute'
              right='0'
              bottom='30px'
            >
              CLOSE
            </Button>
          </Box>
        }
      </Stack>
    </Center>
  );
}

export default HomePage;