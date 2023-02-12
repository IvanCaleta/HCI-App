import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer.js';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import axios from "axios"

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Food ordering app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Featured/>
  <PizzaList pizzaList={pizzaList}/>
      </div>
  )
}

export const getServerSideProps= async ()=>{
  const res=await axios.get("http://testt.vercel.app/api/products")
  return{
    props:{
      pizzaList:res.data 
    }
  }
}

