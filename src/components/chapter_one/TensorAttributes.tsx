import { Box } from '@chakra-ui/react'
import BaseGrid from '../BaseGrid'
import CodeDisplay from '../CodeDisplay'
import pythonCode from '../../data/codeTensors'
import chapterOne_ch from '../../data/chapterOne_ch'

const TensorAttributes = () => {
  const [ attributes, shape ] = chapterOne_ch[2].sections
  const attributesCode = pythonCode[5].code

  return (
    <>
      <Box pt={5}>
        <BaseGrid section={attributes}/>
        <BaseGrid section={shape}/>
      </Box>
      <CodeDisplay codes={attributesCode}/>
    </>
  )
}

export default TensorAttributes