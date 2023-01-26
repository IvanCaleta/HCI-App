import { useState } from "react"
import styles from "../styles/Modal.module.css"

const Editorder=({order,editOrder})=>{
    const [customer,setCustomer]=useState("")
    const [address,setAddress]=useState("")
    const handleClick=()=>{
        editOrder({customer,address})
    }
    return (
        <div className={styles.container}>
            <div className={styles.wraper}>
                <h1 className={styles.title}>Edit order</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name</label>
                    <input placeholder={order.customer} type="text"
                     className={styles.input}
                     onChange={(e)=>setCustomer(e.target.value)}/>

                      <label className={styles.label}>Address</label>
                    <input placeholder={order.address} type="text"
                     className={styles.input}
                     onChange={(e)=>setAddress(e.target.value)}/>

                     <button className={styles.button} onClick={handleClick}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default Editorder