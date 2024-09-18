import { Box, Text } from '@chakra-ui/react'
import Definition from '../Definition'
import BaseGrid from '../BaseGrid'
import LeftGrid from '../LeftGrid'
import chapterZero_ch from '../../data/chapterZero_ch'

const DLSection = () => {
  const [ whats, comparing, mlmodel, dlmodel, mldl, dlapps
  ] = chapterZero_ch[2].sections
  
  return (
    <>
      <Definition title={whats.name} definition={whats}/>
      <LeftGrid section={comparing}/>
      <Box py={5}>
        <Text as='b' fontSize='lg' color='gray.600'>
          3.2 深度学习 vs. 机器学习
        </Text>
        <BaseGrid section={mlmodel}/>
        <BaseGrid section={dlmodel}/>
        <BaseGrid section={mldl}/>
      </Box>
      <BaseGrid section={dlapps}/>
    </>
  )
}

export default DLSection