import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer.js';
import Featured from '../components/Featured';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Food ordering app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Featured/>
      </div>
  )
}

