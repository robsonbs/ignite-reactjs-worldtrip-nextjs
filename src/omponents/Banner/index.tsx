import { Box, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box as="div" px="8" py="6" bgImg="url('/img/background.png')" bgRepeat="no-repeat" bgSize="cover" height="335px" w="100%">
      <Flex maxW="1244" justify="space-between" w="100%" marginX="auto" height="50hv"  marginTop="auto" align="end">
        <VStack w="{1/3}" justify="space-evenly" align="left" maxWidth="50%">
          <Heading fontSize="4xl">5 Continentes, infinitas possibilidades.</Heading>
          <Text fontSize="2xl">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </VStack>
        <Img w="{1/3}" src="/img/airplane.svg" height="48" marginBottom="-10" />
      </Flex>
    </Box>
  )
}