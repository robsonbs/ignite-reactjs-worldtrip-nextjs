import Head from 'next/head'
import { Banner } from '../omponents/Banner'
import { Header } from '../omponents/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  )
}
