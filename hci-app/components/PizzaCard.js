import styles from "../styles/PizzaCard.module.css"
import Image from "next/image";
import Link from "next/link";

const  PizzaCard=({pizza})=>{
    return (
        <div className={styles.container}>
        <Link href={`/product/${pizza._id}`} passHref>
            <Image src={pizza.img}alt="" width="270" height="270" />
        </Link>
        <h1 className={styles.title}>{pizza.title} </h1>
        <span className={styles.price}>{pizza.prices[0]}e</span>
     
        </div>
    )

}
export default PizzaCard