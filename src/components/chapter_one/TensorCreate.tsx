import BaseGrid from '../BaseGrid'
import CodeDisplay from '../CodeDisplay'
import pythonCode from '../../data/codeTensors'
import chapterOne_ch from '../../data/chapterOne_ch'
import { Box } from '@chakra-ui/react'

const TensorCreate = () => {
  const [ create, random, zerosOnes, range, likes ] =  chapterOne_ch[1].sections
  const [ randomCode, zerosCode, rangeCode, likesCode
  ] = pythonCode.slice(1, 5).map(obj => obj.code);

  return (
    <Box pt={5}>
      <BaseGrid section={create}/>
      <BaseGrid section={random}/>
      <CodeDisplay codes={randomCode}/>
      <BaseGrid section={zerosOnes}/>
      <CodeDisplay codes={zerosCode}/>
      <BaseGrid section={range}/>
      <CodeDisplay codes={rangeCode}/>
      <BaseGrid section={likes}/>
      <CodeDisplay codes={likesCode}/>
    </Box>
  )
}

export default TensorCreate