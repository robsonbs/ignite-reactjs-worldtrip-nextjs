import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex width="100%" height="20" justify="center" align="center" bg="bg">
      <Img src="/img/logo.svg" />
    </Flex>
  )
}