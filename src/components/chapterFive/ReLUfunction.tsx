import { Box } from '@chakra-ui/react'
import chapterFive_ch from '../../data/chapterFive_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'
import LeftGrid from '../LeftGrid'

const ReLUfunction = () => {
  const [ defin, formula, features ]= chapterFive_ch[3].sections

  return (
    <Box pt={5}>
      <Definition title={defin.name} definition={defin}/>
      <LeftGrid section={formula}/>
      <BaseGrid section={features}/>
    </Box>
  )
}

export default ReLUfunction