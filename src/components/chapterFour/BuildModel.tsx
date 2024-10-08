import { Box } from '@chakra-ui/react'
import chapterFour_ch from '../../data/chapterFour_ch'
import codeBinaryModel from '../../data/codeBinaryModel'
import CodeDisplay from '../CodeDisplay'
import Definition from '../Definition'
import LeftGrid from '../LeftGrid'
import RightGrid from '../RightGrid'

const BuildModel = () => {
  const [ defin, architect, model ] = chapterFour_ch[1].sections
  const buildCode = codeBinaryModel[3].code

  return (
    <Box pt={5}>
      <Definition title={defin.name} definition={defin}/>
      <RightGrid section={architect}/>
      <LeftGrid section={model}/>
      <CodeDisplay codes={buildCode}/>
    </Box>
  )
}

export default BuildModel