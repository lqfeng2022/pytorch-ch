import Definition from '../Definition'
import RightGrid from '../RightGrid'
import LeftGrid from '../LeftGrid'
import codeLineModel from '../../data/codeLineModel'
import CodeDisplay from '../CodeDisplay'
import chapterTwo_ch from '../../data/chapterTwo_ch'

const BuildModel = () => {
  const [ defin, model, architect, visual ] = chapterTwo_ch[2].sections
  const [ buildcode, visualcode ] = codeLineModel.slice(3, 5).map(obj => obj.code)

  return (
    <>
      <Definition title={defin.name} definition={defin}/>
      <RightGrid section={model}/>
      <CodeDisplay codes={buildcode}/>
      <LeftGrid section={architect}/>
      <RightGrid section={visual}/>
      <CodeDisplay codes={visualcode}/>
    </>
  )
}

export default BuildModel