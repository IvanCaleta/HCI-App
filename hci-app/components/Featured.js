import styles from "../styles/Featured.module.css"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link"

const Featured=()=>{

    const [index,setIndex]=useState(0);
 
    const images=[
        "/img/burger.png",
        "/img/druga.png",
        "/img/treca.png",
    ]

    const handleArrow=(direction)=>{
        if(direction==="l")
        {
            setIndex(index!== 0 ? index-1 :2)
        }
        if(direction==="r")
        {
            setIndex(index!== 2 ? index+1 :0)
        }
    }

    return(

        <div className={styles.container}>

        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout='fill' objectFit="contain" />
        </div>
     
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
   
      
      {images.map((img, i)=>(
            <div className={styles.imgContainer} key={i}>
                <div className={styles.welcome}>
                <h1>WELCOME</h1>
                <p>Whether you're in a hurry or looking for a quick and satisfying meal, Tasty bites is the perfect destination. Come and enjoy a cozy and casual dining experience with us, where you feel like family, or give us a call.  </p>
                <Link href="/menu" passHref><button>ORDER NOW</button></Link>
                </div>
                <div className={styles.slika}>
             <Image className={styles.image} src={img}  alt="" width={800} height={800} />
             </div>
             </div>
        ))}
      
      </div>
      
      <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
      <Image src="/img/arrowr.png"  alt="" layout='fill' objectFit="contain"/>
      </div>
        </div>
    
    )
}

export default Featured