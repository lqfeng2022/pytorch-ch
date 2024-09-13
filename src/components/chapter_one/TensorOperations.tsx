import { Box } from '@chakra-ui/react'
import BaseGrid from '../BaseGrid'
import pythonCode from '../../data/codeTensors'
import CodeDisplay from '../CodeDisplay'
import LeftGrid from '../LeftGrid'
import RightGrid from '../RightGrid'
import chapterOne_ch from '../../data/chapterOne_ch'

const TensorOperations = () => {
  const [ 
    operations, addSub, matmul, mmWork, twoRule, mmWebs, dot,  dotTransf, aggre
  ] = chapterOne_ch[3].sections
  const [ 
    addSubCode, matmulCode, aggreCode 
  ] = pythonCode.slice(6, 9).map(obj => obj.code)

  return (
    <Box py={2}>
      <BaseGrid section={operations}/>
      <LeftGrid section={addSub}/>
      <CodeDisplay codes={addSubCode}/>
      <RightGrid section={matmul}/>
      <BaseGrid section={mmWork}/>
      <LeftGrid section={twoRule}/>
      <BaseGrid section={mmWebs}/>
      <BaseGrid section={dot}/>
      <BaseGrid section={dotTransf}/>
      <CodeDisplay codes={matmulCode}/>
      <LeftGrid section={aggre}/>
      <CodeDisplay codes={aggreCode}/>
    </Box>
  )
}

export default TensorOperations