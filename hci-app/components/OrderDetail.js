import { useState } from "react"
import styles from "../styles/Modal.module.css"
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { CCloseButton } from '@coreui/react';

const OrderDetail=({total,createOrder})=>{
    const [customer,setCustomer]=useState("")
    const [address,setAddress]=useState("")
    const _id="3"
    const submit = () => {
        confirmAlert({
          title: "Confirm to submit",
          message: "Are you sure to do this.",
          buttons: [
            {
              label: "Yes",
            },
            {
              label: "No"
               
            }
          ]
        });
      };
    const handleClick=()=>{
        createOrder({_id,customer,address,total})
    }
    return (
        <div className={styles.container}>
            <div className={styles.wraper}>
                <h1 className={styles.title}>Pay after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name</label>
                    <input placeholder="Name" type="text"
                     className={styles.input}
                     onChange={(e)=>setCustomer(e.target.value)}/>

                      <label className={styles.label}>Address</label>
                    <input placeholder="Address" type="text"
                     className={styles.input}
                     onChange={(e)=>setAddress(e.target.value)}/>

                     <button className={styles.button} onClick={handleClick}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail