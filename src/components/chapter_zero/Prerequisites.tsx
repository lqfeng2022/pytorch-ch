import { Box, Stack, Text, Image, HStack } from '@chakra-ui/react'
import prere_img from '../../assets/chapter_zero/prerequisites.jpeg'
import chapterZero_ch from '../../data/chapterZero_ch'

const Prerequisites = () => {
  const preres = chapterZero_ch[6].sections
  const sTitle = "7. 准备工作"

  return (
    <Box pt={10} pb={5}>
      <Text as='b' fontSize='lg' color='gray.600'>{sTitle}</Text>
      <Image py={3} src={prere_img}/>
      <Stack spacing={4}>
        {preres.map((p) => 
          <Stack key={p.id}>
            <Text as='b'>{p.name}</Text>
            {p.content.map((t) => 
              <div key={t.id}>
                {t.title && 
                  <div>
                    <HStack>
                      <Text>{t.id}</Text>
                      <Text as='b'>{t.title}</Text>
                    </HStack>
                    <Text py={1} pl={4}>{t.value}</Text>
                  </div>
                }
                {!t.title && <Text py={1}>{t.value}</Text>}
              </div>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  )
}

export default Prerequisites