import { Flex, Heading} from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={[150, 300, 500]}
      px={['10', '10', '32']}
      pt={[0, 0, '72']}
      bgImage="url('/img/continents/europe/background.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
    >
      <Heading
        size="xl"
        fontWeight="medium"
        color="gray.50"
        alignSelf="flex-end"
        mb={['10', '10', '16']}
      >
        Europa
      </Heading>
    </Flex>
  )
}
