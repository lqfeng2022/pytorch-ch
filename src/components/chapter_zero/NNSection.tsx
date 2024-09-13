import BaseGrid from '../BaseGrid'
import Definition from '../Definition'
import chapterZero_ch from '../../data/chapterZero_ch'

const NNSection = () => {
  const [ whats, model, neurons ] = chapterZero_ch[3].sections
  
  return (
    <>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={model}/>
      <BaseGrid section={neurons}/>
    </>
  )
}

export default NNSection