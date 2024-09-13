import chapterTwo_ch from '../../data/chapterTwo_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'

const Workflow = () => {
  const [ whats, overview, explain ] =  chapterTwo_ch[0].sections

  return (
    <>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={overview}/>
      <BaseGrid section={explain}/>
    </>
  )
}

export default Workflow