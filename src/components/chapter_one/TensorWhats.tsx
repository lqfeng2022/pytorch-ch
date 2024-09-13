import Definition from '../Definition'
import BaseGrid from '../BaseGrid'
import CodeDisplay from '../CodeDisplay'
import pythonCode from '../../data/codeTensors'
import chapterOne_ch from '../../data/chapterOne_ch'

const TensorWhats = () => {
  const [ whats, how ] =  chapterOne_ch[0].sections
  const tensorCode = pythonCode[0].code

  return (
    <>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={how}/>
      <CodeDisplay codes={tensorCode}/>
    </>
  )
}

export default TensorWhats