import { Container, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import ReferGrid from '../components/ReferGrid';
import reference from '../data/reference';
import FootLinks from '../components/FootLinks';
import sectionList_ch from '../data/sectionList_ch';

const Reference = () => {
  const [ 
    paper, statQuest, blueBrown, codeEmporium, others, webs ] = reference
  const { name: l, link: ll } = sectionList_ch[12]
  const { name: r, link: rl } = sectionList_ch[14]
  
  return (
    <Container maxW='1200px' px='10px'>
      <Heading size='xl' color='gray.600' textAlign='center' pt={3} pb={5}>
        {'参考资料'}
      </Heading>
      <ReferGrid section={paper}/>
      <Stack py={5} spacing={0}>
        <Heading as='b' fontSize='lg' color='gray.600' mt={3}>
          {'教学视频:'}
        </Heading>
        <ReferGrid section={statQuest}/>
        <ReferGrid section={blueBrown}/>
        <ReferGrid section={codeEmporium}/>
        <ReferGrid section={others}/>
      </Stack>
      <ReferGrid section={webs}/>
      <Flex align='center' h='80px'>
        <Divider variant='thick'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default Reference