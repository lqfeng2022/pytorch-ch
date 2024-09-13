import Definition from '../Definition'
import BaseGrid from '../BaseGrid'
import chapterThree_ch from '../../data/chapterThree_ch'

const NormalDistribution = () => {
  const [ whats, pdf, cdf ]= chapterThree_ch[1].sections

  return (
    <div>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={pdf}/>
      <BaseGrid section={cdf}/>
    </div>
  )
}

export default NormalDistribution