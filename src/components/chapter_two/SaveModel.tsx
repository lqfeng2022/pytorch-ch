import chapterTwo_ch from '../../data/chapterTwo_ch'
import codeLineModel from '../../data/codeLineModel'
import CodeDisplay from '../CodeDisplay'
import Definition from '../Definition'
import LeftGrid from '../LeftGrid'
import RightGrid from '../RightGrid'

const SaveModel = () => {
  const [ define, save, load ] = chapterTwo_ch[4].sections
  const [ savecode, loadcode ] = codeLineModel.slice(9, 11).map(obj => obj.code)

  return (
    <div>
      <Definition title={define.name} definition={define}/>
      <LeftGrid section={save}/>
      <CodeDisplay codes={savecode}/>
      <RightGrid section={load}/>
      <CodeDisplay codes={loadcode}/>
    </div>
  )
}

export default SaveModel