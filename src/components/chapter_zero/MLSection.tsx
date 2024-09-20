import { Box, Text } from '@chakra-ui/react';
import BaseGrid from '../BaseGrid';
import Definition from '../Definition';
import LeftGrid from '../LeftGrid';
import RightGrid from '../RightGrid';
import chapterZero_ch from '../../data/chapterZero_ch';

const MLSection = () => {
  const models = {
    title: "2.2 深度学习中的模型",
    value: "机器学习模型基本上是一个数学模型，在经过数据集训练后，可以对新数据进行预测或分类。机器学习中有很多不同类型的模型。这里，我将简单介绍其中的三种供大家参考。"
  }
  const [whats, compare, svms, detree, anns] = chapterZero_ch[1].sections

  return (
    <Box pt={5}>
      <Definition title={whats.name} definition={whats}/>
      <BaseGrid section={compare}/>
      <Box pt={5}>
        <Text as='b' fontSize='lg' color='gray.600'>{models.title}</Text>
        <Text py={3} fontSize='lg'>{models.value}</Text>
        <BaseGrid section={svms}/>
        <RightGrid section={detree}/>
        <LeftGrid section={anns}/>
      </Box>
    </Box>
  )
}

export default MLSection