import { Container, Divider, Flex } from '@chakra-ui/react'
import { BuildModel, ImproveModel, PrepareData, SaveModel, TrainModel
} from '../components/chapterFour'
import ChapterList from '../components/ChapterList'
import FootLinks from '../components/FootLinks'
import Header from '../components/Header'
import useScrollToHash from '../components/useScrollToHash'
import covers_ch from '../data/covers_ch'
import sectionList_ch from '../data/sectionList_ch'

const ChapterFour = () => {
  const cover = covers_ch[4]
  const { description: descript, items: lists } = sectionList_ch[5];
  const [ pre, build, train, improve, save ] = lists.slice(0, 5)
  const { name: l, link: ll } = sectionList_ch[4]
  const { name: r, link: rl } = sectionList_ch[6]

  useScrollToHash()
  
  return (
    <Container maxW='1200px' px='10px'>
      <Header cover={cover}/>
      <Flex align='center' h='60px'>
        <Divider variant='brand' w='30%' mx='auto'/>
      </Flex>
      <ChapterList items={lists} descrip={descript}/>
      <div id={pre.link}><PrepareData/></div>
      <div id={build.link}><BuildModel/></div>
      <div id={train.link}><TrainModel/></div>
      <div id={improve.link}><ImproveModel/></div>
      <div id={save.link}><SaveModel/></div>
      <Flex align='center' h='80px'>
        <Divider variant='thick'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default ChapterFour