import styles from "../styles/PizzaCard.module.css"
import Image from "next/image";

const  PizzaCard=()=>{
    return (
        <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width="300" height="300" />
        <h1 className={styles.title}>PIZZA </h1>
        <span className={styles.price}>$20</span>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet.

        </p>
        </div>
    )

}
export default PizzaCard