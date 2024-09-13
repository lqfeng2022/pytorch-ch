import { Container, Divider, Flex } from '@chakra-ui/react'
import ChapterList from '../components/ChapterList'
import FootLinks from '../components/FootLinks'
import Header from '../components/Header'
import covers_ch from '../data/covers_ch'
import sectionList_ch from '../data/sectionList_ch'

const ChapterTen = () => {
  const cover = covers_ch[10]
  const { description: descript, items: lists } = sectionList_ch[11]
  const { name: l, link: ll } = sectionList_ch[10]
  const { name: r, link: rl } = sectionList_ch[12]
  
  return (
    <Container maxW='1200px' px='10px'>
      <Header cover={cover}/>
      <Flex align='center' h='60px'>
        <Divider variant='brand' w='30%' ml='auto'/>
      </Flex>
      <ChapterList items={lists} descrip={descript}/>
      <div>Chapter Ten comming soon..</div>
      <Flex align='center' h='80px'>
        <Divider variant='thick'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default ChapterTen