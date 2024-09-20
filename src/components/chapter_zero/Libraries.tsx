import { Box, Stack, Text, Image } from '@chakra-ui/react'
import libraries from '../../assets/chapter_zero/libraries.jpeg'
import chapterZero_ch from '../../data/chapterZero_ch'

const Libraries = () => {
  const libs = chapterZero_ch[4].sections
  
  return (
    <Box pt={10}>
      <Text as='b' fontSize='lg' color='gray.600'>5. 框架和库 (Libraries)</Text>
      <Image py={3} src={libraries}/>
      <Stack spacing={3}>
        {libs.map((p) => 
          <div key={p.id}>
            <Text as='b'>{p.name}</Text>
            {p.content.map((t) => <Text py={1} key={t.id}>{t.value}</Text>) }
          </div>
        )}
      </Stack>
    </Box>
  )
}

export default Libraries