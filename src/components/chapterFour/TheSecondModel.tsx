import { Box } from '@chakra-ui/react'
import codeBinaryModel from '../../data/codeBinaryModel'
import BaseGrid from '../BaseGrid'
import CodeDisplay from '../CodeDisplay'
import LeftGrid from '../LeftGrid'
import RightGrid from '../RightGrid'
import chapterFour_ch from '../../data/chapterFour_ch'

const TheSecondModel = () => {
  const [ two, two_build, two_visual, two_loss ] = chapterFour_ch[5].sections
  const [ two_build_code, two_train_code, two_loss_code
  ] = codeBinaryModel.slice(10, 13).map(obj => obj.code)

  return (
    <Box pt={5}>
      <BaseGrid section={two}/>
      <RightGrid section={two_build}/>
      <CodeDisplay codes={two_build_code}/>
      <LeftGrid section={two_visual}/>
      <CodeDisplay codes={two_train_code}/>
      <RightGrid section={two_loss}/>
      <CodeDisplay codes={two_loss_code}/>
  </Box>
  )
}

export default TheSecondModel