import Definition from '../Definition'
import BaseGrid from '../BaseGrid'
import chapterFive_ch from '../../data/chapterFive_ch'

const Backpropagation = () => {
  const [ defin, implem, calcul ] = chapterFive_ch[4].sections

  return (
    <div>
      <Definition title={defin.name} definition={defin}/>
      <BaseGrid section={implem}/>
      <BaseGrid section={calcul}/>
    </div>
  )
}

export default Backpropagation