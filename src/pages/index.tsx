import { Flex, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Features } from '../components/Features'
import { Separator } from '../components/Separator'

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Banner />
      <Features />
      <Separator />
      <Heading
        textAlign="center"
        fontWeight="medium"
        lineHeight="tall"
        size="xl"
        mb="16"
      >
        Vamos nessa?
        <Text>Então escolha seu continente</Text>
      </Heading>
    </Flex>
  )
}
