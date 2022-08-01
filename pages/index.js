import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Home/Banner'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'

export default function Home({ smallCardData, mediumCardData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Main 
        smallCardData={smallCardData}
        mediumCardData={mediumCardData}
      />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const smallCardData = await fetch('https://jsonkeeper.com/b/4G1G')
                      .then(res => res.json())

  const mediumCardData = await fetch('https://jsonkeeper.com/b/VHHT')
                      .then(res => res.json())

  return {
      props: {
          smallCardData,
          mediumCardData
      }
  }
}
