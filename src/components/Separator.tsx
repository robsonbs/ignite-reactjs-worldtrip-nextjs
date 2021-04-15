import { Center, Divider } from '@chakra-ui/react'

export function Separator() {
  return (
    <Center my={['9', '24']} height="2px">
      <Divider borderColor="gray.900" borderBottomWidth="2px" maxWidth={90} />
    </Center>
  )
}