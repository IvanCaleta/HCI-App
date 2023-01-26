import styles from "../styles/Menu.module.css";
import Image from "next/image";
import PizzaCard from "../components/PizzaCard"
import axios from "axios"

const menu=({pizzas,burgers,chicken,dish})=>{
    return( 
    <div className={styles.container}>
        <h1 className={styles.title}>MENU</h1>
            <button className={styles.button}>PIZZA</button>
        <div className={styles.wrapper}> 
                {pizzas.map((pizza)=>(
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
        </div>
        <button className={styles.button}>BURGER</button>
        <div className={styles.wrapper}> 
                {burgers.map((pizza)=>(
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
        </div>
        <button className={styles.button}>CHICKEN</button>
        <div className={styles.wrapper}> 
                {chicken.map((pizza)=>(
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
        </div>
        <button className={styles.button}>SIDE DISH</button>
        <div className={styles.wrapper}> 
                {dish.map((pizza)=>(
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
        </div>
    </div>
    )
}

export const getServerSideProps= async ()=>{
    const res=await axios.get("http://localhost:3000/api/products")
    return{
      props:{
        pizzas:res.data.pizzas,
        burgers:res.data.burgers, 
        chicken:res.data.chicken, 
        dish:res.data.dish, 

      }
    }
  }
  

export default menu