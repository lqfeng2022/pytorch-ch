import { Container, Divider, Flex } from '@chakra-ui/react';
import BaseGrid from '../components/BaseGrid';
import {
  AISection,
  DLSection,
  Libraries,
  MLSection,
  NNSection,
  PTSection,
  Prerequisites
} from '../components/chapter_zero';
import ChapterListTwo from '../components/ChapterListTwo';
import FootLinks from '../components/FootLinks';
import Header from '../components/Header';
import useScrollToHash from '../components/useScrollToHash';
import chapterZero_ch from '../data/chapterZero_ch';
import covers_ch from '../data/covers_ch';
import sectionList_ch from '../data/sectionList_ch';

const ChapterZero = () => {
  const cover = covers_ch[0]
  const { description: descript, items: lists } = sectionList_ch[1]
  const lItems = lists.slice(0, 4)
  const rItems = lists.slice(-4)
  const [ ai, ml, dl, nn, lib, pt, pre, take ] = lists.slice(0, 8)
  const { name: l, link: ll } = sectionList_ch[0]
  const { name: r, link: rl } = sectionList_ch[2]
  const [ takeCourse ] = chapterZero_ch[7].sections

  useScrollToHash() // Anchor link navigation

  return (
    <Container maxW='1200px' px='0'>
      <Header cover={cover}/>
      <Flex align='center' justifyContent='center' h='80px'>
        <Divider variant='brand' w='30%'/>
      </Flex>
      <ChapterListTwo leftItems={lItems} rightItems={rItems} descrip={descript}/>
      <div id={ai.link}><AISection/></div>
      <div id={ml.link}><MLSection/></div>
      <div id={dl.link}><DLSection/></div>
      <div id={nn.link}><NNSection/></div>
      <div id={lib.link}><Libraries/></div>
      <div id={pt.link}><PTSection/></div>
      <div id={pre.link}><Prerequisites/></div>
      <div id={take.link}><BaseGrid section={takeCourse}/></div>
      <Flex align='center' justifyContent='center' h='100px'>
        <Divider variant='middle'/>
      </Flex>
      <FootLinks l={l} ll={ll} r={r} rl={rl}/>
    </Container>
  )
}

export default ChapterZero