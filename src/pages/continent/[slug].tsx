import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Content } from '../../components/Content'
import { Cities } from '../../components/Cities'

export default function Continent() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <ContinentBanner />

      <Flex direction="column" maxW={1160} mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  )
}
