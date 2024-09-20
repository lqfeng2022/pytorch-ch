import chapterOne_ch from '../../data/chapterOne_ch'
import pythonCode from '../../data/codeTensors'
import BaseGrid from '../BaseGrid'
import CodeDisplay from '../CodeDisplay'

const TensorNumpy = () => {
  const [tensor_numpy] = chapterOne_ch[6].sections
  const tensornumpyCode = pythonCode[14].code

  return (
    <>
      <BaseGrid section={tensor_numpy}/>
      <CodeDisplay codes={tensornumpyCode}/>
    </>
  )
}

export default TensorNumpy