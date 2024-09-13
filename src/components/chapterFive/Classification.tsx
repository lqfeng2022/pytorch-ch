import chapterFive_ch from '../../data/chapterFive_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'
import LeftGrid from '../LeftGrid'
import RightGrid from '../RightGrid'

const BinaryClassification = () => {
  const [ defin, classific, bClassific, binaryLinear, binaryNonlinear 
  ] = chapterFive_ch[0].sections

  return (
    <div>
      <Definition title={defin.name} definition={defin}/>
      <BaseGrid section={classific}/>
      <Definition title={bClassific.name} definition={bClassific}/>
      <LeftGrid section={binaryLinear}/>
      <RightGrid section={binaryNonlinear}/>
    </div>
  )
}

export default BinaryClassification