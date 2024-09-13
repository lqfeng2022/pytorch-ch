import { Container, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import FootLinks from '../components/FootLinks'
import introduce_ch from '../data/introduce_ch'
import sectionList_ch from '../data/sectionList_ch'

const AboutShape = () => {
  const intro = introduce_ch[7]
  const { name: l, link: ll } = sectionList_ch[13]

  return (
    <Container maxW='1200px' px='10px'>
      <Heading size='xl' color='gray.600' textAlign='center' py={3}>
        {intro.name}
      </Heading>
      <Stack spacing={4} pt={5}>
        {intro.content.map((p) => 
          <Text key={p.id} >{p.value}</Text>
        )}
      </Stack>
      <Flex align='center' h='80px'>
        <Divider variant='thick'/>
      </Flex>
      <FootLinks l={l} ll={ll}/>
    </Container>
  )
}

export default AboutShape