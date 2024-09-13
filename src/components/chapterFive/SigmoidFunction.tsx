import chapterFive_ch from '../../data/chapterFive_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'
import LeftGrid from '../LeftGrid'

const SigmoidFunction = () => {
  const [ defin, formula, features ] = chapterFive_ch[2].sections

  return (
    <div>
      <Definition title={defin.name} definition={defin}/>
      <LeftGrid section={formula}/>
      <BaseGrid section={features}/>
    </div>
  )
}

export default SigmoidFunction