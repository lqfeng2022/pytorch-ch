import Definition from '../Definition'
import BaseGrid from '../BaseGrid'
import chapterThree_ch from '../../data/chapterThree_ch'
import { Box } from '@chakra-ui/react'

const NormalDistribution = () => {
  const [ whats, pdf, cdf ]= chapterThree_ch[1].sections

  return (
    <Box pt={5}>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={pdf}/>
      <BaseGrid section={cdf}/>
    </Box>
  )
}

export default NormalDistribution