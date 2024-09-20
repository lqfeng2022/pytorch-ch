import chapterFour_ch from '../../data/chapterFour_ch'
import BaseGrid from '../BaseGrid'
import Definition from '../Definition'

const ImproveModel = () => {
  const [ defin, improve ] = chapterFour_ch[3].sections

  return (
    <div>
      <Definition title={defin.name} definition={defin}/>
      <BaseGrid section={improve}/>
    </div>
  )
}

export default ImproveModel