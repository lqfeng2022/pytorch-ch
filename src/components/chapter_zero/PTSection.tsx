import BaseGrid from '../BaseGrid';
import Definition from '../Definition';
import chapterZero_ch from '../../data/chapterZero_ch';

const PTSection = () => {
  const [ whats, features, trends, companies ] = chapterZero_ch[5].sections

  return (
    <>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={features}/>
      <BaseGrid section={trends}/>
      <BaseGrid section={companies}/>
    </>
  )
}

export default PTSection