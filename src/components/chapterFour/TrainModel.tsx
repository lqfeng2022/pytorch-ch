import Definition from '../Definition'
import codeBinaryModel from '../../data/codeBinaryModel'
import CodeDisplay from '../CodeDisplay'
import RightGrid from '../RightGrid'
import LeftGrid from '../LeftGrid'
import chapterFour_ch from '../../data/chapterFour_ch'

const TrainModel = () => {
  const [ defin, train, test, loss ] = chapterFour_ch[2].sections
  const [ trainCode, testCode, lossCode
  ] = codeBinaryModel.slice(4, 7).map(obj => obj.code)

  return (
    <div>
      <Definition title={defin.name} definition={defin}/>
      <RightGrid section={train}/>
      <CodeDisplay codes={trainCode}/>
      <LeftGrid section={test}/>
      <CodeDisplay codes={testCode}/>
      <RightGrid section={loss}/>
      <CodeDisplay codes={lossCode}/>
    </div>
  )
}

export default TrainModel