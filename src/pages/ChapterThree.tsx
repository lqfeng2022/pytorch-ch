import { Container, Divider, Flex } from '@chakra-ui/react'
import {
  GradientDescent,
  LearningRate,
  LinearRegression,
  LossCurves,
  NormalDistribution,
  StochasticGD
} from '../components/chapter_three'
import ChapterList from '../components/ChapterList'
import FootLinks from '../components/FootLinks'
import Header from '../components/Header'
import useScrollToHash from '../components/useScrollToHash'
import covers_ch from '../data/covers_ch'
import sectionList_ch from '../data/sectionList_ch'

const ChapterThree = () => {
  const cover = covers_ch[3]
  const { description: descript, items: lists } = sectionList_ch[4];
  const [ lin, distrib, loss, descent, stochast, lr ] = lists.slice(0, 6)
  const { name: l, link: ll } = sectionList_ch[3]
  const { name: r, link: rl } = sectionList_ch[5]

  useScrollToHash()

  return (
    <Container maxW='1200px' px='10px'>
      <Header cover={cover}/>
      <Flex align='center' h='60px'>
        <Divider variant='brand' w='30%'/>
      </Flex>
      <ChapterList items={lists} descrip={descript}/>
      <div id={lin.link}><LinearRegression/></div>
      <div id={distrib.link}><NormalDistribution/></div>
      <div id={loss.link}><LossCurves/></div>
      <div id={descent.link}><GradientDescent/></div>
      <div id={stochast.link}><StochasticGD/></div>
      <div id={lr.link}><LearningRate/></div>
      <Flex align='center' h='100px'>
        <Divider variant='middle'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default ChapterThree