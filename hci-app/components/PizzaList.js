import styles from "../styles/PizzaList.module.css"
import Image from "next/image";
import PizzaCard from "./PizzaCard";
import Link from "next/link";

const  PizzaList=({pizzaList})=>{
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST FOOD IN TOWN</h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>     
         <h1 className={styles.title2}>POPULAR ORDERS</h1>
         <div className={styles.wrapper}>

        {pizzaList.map((pizza)=>(
            <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
         </div>
        <Link href="/menu" passHref><button className={styles.botun}><p>MENU</p></button></Link>
        </div>
    )

}

export default PizzaList;