import { Flex, Grid, Heading } from '@chakra-ui/react'
import { City } from './City'

const citiesList = [
  {
    name: 'Londres',
    country: 'Reino Unido',
    image: '/img/continents/europe/london.png',
    flag: '/img/countries/united-kingdom.png'
  },
  {
    name: 'Paris',
    country: 'França',
    image: '/img/continents/europe/paris.png',
    flag: '/img/countries/french.png'
  },
  {
    name: 'Roma',
    country: 'Itália',
    image: '/img/continents/europe/roma.png',
    flag: '/img/countries/italy.png'
  },
  {
    name: 'Praga',
    country: 'República Tcheca',
    image: '/img/continents/europe/praga.png',
    flag: '/img/countries/republic.png'
  },
  {
    name: 'Amsterdã',
    country: 'Holanda',
    image: '/img/continents/europe/amsterdam.png',
    flag: '/img/countries/netherlands.png'
  }
]

export function Cities() {
  return (
    <Flex direction="column">
      <Heading fontSize={['2xl', '5xl']} fontWeight="medium" mb="10">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        justifyContent="center"
        px={['30px', '0']}
      >
        {citiesList.map(city => (
          <City city={city} key={city.name} />
        ))}
      </Grid>
    </Flex>
  )
}
