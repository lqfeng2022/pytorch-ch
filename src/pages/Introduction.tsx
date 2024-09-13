import { Container, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import FootLinks from '../components/FootLinks'
import IntroduceGrid from '../components/IntroduceGrid'
import introduce_ch from '../data/introduce_ch'
import sectionList_ch from '../data/sectionList_ch'

const Introduction = () => {
  const [ 
    intro, story, contents, ai, tensor, models, maths ] = introduce_ch.slice(0, 7)
  const { name: r, link: rl } = sectionList_ch[1]

  return (
    <Container maxW='1200px' px='10px'>
      <Heading size='xl' color='gray.600' textAlign='center' py={3}>
        {intro.name}
      </Heading>
      <Text py={5}>{intro.content[0].value}</Text>
      <IntroduceGrid section={story}/>
      <IntroduceGrid section={contents}/>
      <IntroduceGrid section={ai}/>
      <IntroduceGrid section={tensor}/>
      <IntroduceGrid section={models}/>
      <IntroduceGrid section={maths}/>
      <Flex align='center' h='80px'>
        <Divider variant='thick'/>
      </Flex>
      <FootLinks l={'封面'} ll={'/'} r={r} rl={rl}/>
    </Container>
  )
} 

export default Introduction