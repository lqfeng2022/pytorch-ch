import { Box } from '@chakra-ui/react'
import chapterFour_ch from '../../data/chapterFour_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'

const ImproveModel = () => {
  const [ defin, improve ] = chapterFour_ch[3].sections

  return (
    <Box pt={5}>
      <Definition title={defin.name} definition={defin}/>
      <BaseGrid section={improve}/>
    </Box>
  )
}

export default ImproveModel