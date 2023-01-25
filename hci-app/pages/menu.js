import styles from "../styles/Menu.module.css";
import Image from "next/image";
import PizzaCard from "../components/PizzaCard"
const pizzas= require('../models/Pizzas.json')
const burgers= require('../models/Burgers.json')
const chicken= require('../models/Chicken.json')
const dish= require('../models/Dish.json')

const menu=()=>{
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

export default menu