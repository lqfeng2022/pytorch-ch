import { Container, Divider, Flex } from '@chakra-ui/react'
import {
  Backpropagation,
  BCEloss,
  Classification,
  ReLUfunction,
  SigmoidFunction
} from '../components/chapterFive'
import ChapterList from '../components/ChapterList'
import FootLinks from '../components/FootLinks'
import Header from '../components/Header'
import useScrollToHash from '../components/useScrollToHash'
import covers_ch from '../data/covers_ch'
import sectionList_ch from '../data/sectionList_ch'

const ChapterFive = () => {
  const cover = covers_ch[5]
  const { description: descript, items: lists } = sectionList_ch[6]
  const [ classific, bceloss, sigmoid, relu, backpro ] = lists.slice(0, 5)
  const { name: l, link: ll } = sectionList_ch[5]
  const { name: r, link: rl } = sectionList_ch[7]

  useScrollToHash()

  return (
    <Container maxW='1200px' px='10px'>
      <Header cover={cover}/>
      <Flex align='center' h='60px'>
        <Divider variant='brand' w='30%' ml='auto'/>
      </Flex>
      <ChapterList items={lists} descrip={descript}/>
      <div id={classific.link}><Classification/></div>
      <div id={bceloss.link}><BCEloss/></div>
      <div id={sigmoid.link}><SigmoidFunction/></div>
      <div id={relu.link}><ReLUfunction/></div>
      <div id={backpro.link}><Backpropagation/></div>
      <Flex align='center' h='100px'>
        <Divider variant='middle'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default ChapterFive