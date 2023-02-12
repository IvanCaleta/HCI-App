import styles from "../styles/Cart.module.css";
import Image from "next/image";
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {useRouter} from"next/router"
import {reset} from "../redux/cartSlice"
import { useState } from "react";
import OrderDetail from "../components/OrderDetail";

const cart =()=>{
    const dispatch=useDispatch()
    const[cash,setCash]=useState(false)
    const cart=useSelector(state=>state.cart)
    const router=useRouter()
    

    const createOrder=async(data)=>{

        try {
            const res=await axios.post("http://tastybites.vercel.app/api/orders",data)
            console.log('cccc',res.data)
            if(res.status===201){
            router.push("/orders")
            dispatch(reset())
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                  <thead> 
                            <tr className={styles.trTitle}>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Extras</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                    </thead> 
                    <tbody>
                        {cart.products.map(prod=>(

                            <tr className={styles.tr} key={prod._id}>
                            <td>
                                <div className={styles.imgContainer}>
                                        <Image src={prod.img}  layout="fill" objectFit="cover" alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>{prod.title}</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    {prod.extras.map(ext=>(
                                        <span key={ext._id}>{ext.text},</span>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>{prod.price}e</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>{prod.quantity}</span>
                            </td>
                            <td>
                                <span className={styles.total}>{prod.quantity*prod.price}e</span>
                            </td>
                        </tr>
                     ))}
                    </tbody>
                    </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal</b>{cart.total}e
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>{cart.total}e
                    </div>
                    <button className={styles.button} onClick={()=>setCash(true)}>CHECKOUT</button>
                </div>
            </div>
        {cash&&(
            <OrderDetail total={cart.total} createOrder={createOrder}/>
        )}
        </div>
    );
};

export default cart;