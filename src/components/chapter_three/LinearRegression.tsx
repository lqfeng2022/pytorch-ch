import Definition from '../Definition'
import LeftGrid from '../LeftGrid'
import chapterThree_ch from '../../data/chapterThree_ch'

const LinearRegression = () => {
  const [ linear, relation ] = chapterThree_ch[0].sections

  return (
    <>
      <Definition title={linear.name} definition={linear}/>
      <LeftGrid section={relation}/>
    </>
  )
}

export default LinearRegression