import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'

type City = {
  name: string
  country: string
  flag: string
  image: string
}

interface CityProps {
  city: City
}

export function City({ city }: CityProps) {
  console.log(city.image)

  return (
    <Box borderRadius={4} overflow="hidden" w="100%" maxW={256}>
      <Image
        src={city.image}
        alt={`${city.name}, ${city.country}`}
        h={170}
        w="100%"
      />
      <Flex
        bg="white"
        justify="space-between"
        align="center"
        border="1px"
        borderColor="yellow.300"
        p="6"
      >
        <Flex direction="column">
          <Heading
            fontSize="xl"
            fontWeight="semibold"
            fontFamily="Barlow"
            mb="2"
          >
            {city.name}
          </Heading>
          <Text fontFamily="Barlow" fontWeight="medium" color="gray.500">
            {city.country}
          </Text>
        </Flex>
        <Image
          src={city.flag}
          alt={city.country}
          w={30}
          h={30}
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}
