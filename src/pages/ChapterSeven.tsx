import { Container, Divider, Flex } from '@chakra-ui/react'
import ChapterListTwo from '../components/ChapterListTwo'
import FootLinks from '../components/FootLinks'
import Header from '../components/Header'
import covers_ch from '../data/covers_ch'
import sectionList_ch from '../data/sectionList_ch'

const ChapterSeven = () => {
  const cover = covers_ch[7]
  const { description: descript, items: lists } = sectionList_ch[8]
  const lItems = lists.slice(0, 4)
  const rItems = lists.slice(-4)
  const { name: l, link: ll } = sectionList_ch[7]
  const { name: r, link: rl } = sectionList_ch[9]
  
  return (
    <Container maxW='1200px' px='10px'>
      <Header cover={cover}/>
      <Flex align='center' h='60px'>
        <Divider variant='brand' w='30%' mx='auto'/>
      </Flex>
      <ChapterListTwo leftItems={lItems} rightItems={rItems} descrip={descript}/>
      <div>Chapter Seven comming soon..</div>
      <Flex align='center' h='80px'>
        <Divider variant='thick'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default ChapterSeven