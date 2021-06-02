import { Grid, Text } from '@chakra-ui/layout'
import { Info } from './Info'

export function Content() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={[8, 20]}
    >
      <Text textAlign="justify" fontSize={['lg', 'xl', 'xl', '2xl']}>
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Info />
    </Grid>
  )
}
