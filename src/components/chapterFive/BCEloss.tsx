import chapterFive_ch from '../../data/chapterFive_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'

const BCEloss = () => {
  const [ defin, bceFormula, crossEntropy, entropy 
  ]= chapterFive_ch[1].sections

  return (
    <div>
      <Definition title={defin.name} definition={defin} />
      <BaseGrid section={bceFormula}/>
      <Definition title={crossEntropy.name} definition={crossEntropy}/>
      <Definition title={entropy.name} definition={entropy}/>
    </div>
  )
}

export default BCEloss