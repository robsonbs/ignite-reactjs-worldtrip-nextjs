import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Banner />
    </Flex>
  )
}
