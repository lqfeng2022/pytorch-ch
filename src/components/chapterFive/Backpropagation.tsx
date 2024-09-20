import Definition from '../Definition'
import BaseGrid from '../BaseGrid'
import chapterFive_ch from '../../data/chapterFive_ch'
import { Box } from '@chakra-ui/react'

const Backpropagation = () => {
  const [ defin, implem, calcul ] = chapterFive_ch[4].sections

  return (
    <Box pt={5}>
      <Definition title={defin.name} definition={defin}/>
      <BaseGrid section={implem}/>
      <BaseGrid section={calcul}/>
    </Box>
  )
}

export default Backpropagation