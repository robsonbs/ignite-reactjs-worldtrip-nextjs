import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box w="100%" h={335} pos="relative">
      <Image
        src="/img/background.png"
        w="100%"
        h="100%"
        pos="absolute"
        left="0"
        top="0"
        zIndex="-1"
      />

      <Flex
        w="90%"
        h="100%"
        maxWidth={1440}
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Box maxW="36rem">
          <Stack spacing="5">
            <Heading size="xl" fontWeight="medium" color="gray.50">
              5 Continentes,
              <Text>infinitas possibilidades.</Text>
            </Heading>
            <Text as="span" fontSize="20" color="gray.100">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Stack>
        </Box>
        {isWideVersion && <Image src="/img/airplane.svg" mt="32" />}
      </Flex>
    </Box>
  )
}