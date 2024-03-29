import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useSelector } from "react-redux";
import Link from "next/link"

const Navbar=()=>{

  const quantity=useSelector(state=>state.cart.quantity)
    return (
            <div className={styles.container}>
             <div className={styles.item}>

             <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt="" width="32" height="32" />
              </div>

              <div className={styles.texts}>
                <div className={styles.text}>ORDER NOW!</div>
                <div className={styles.text}>021 123 777</div>
              </div>

           </div>
          <div className={styles.item}>
          <ul className={styles.list}>
          <Link href="/menu" passHref>
                <li className={styles.logoItem} id="menu" >Menu</li>
                </Link>
            <Link href="/" passHref>
                <li className={styles.listItem} >Homepage</li>
            </Link>
                <li className={styles.listItem} >Products</li>
           
                <li className={styles.logoItem} id="logo" > <Link href="/" passHref>
                  <Image src="/img/tastyy.png" alt="" width="110" height="110" />
                </Link></li>
               
                <li className={styles.listItem} >Events</li>
                <li className={styles.listItem} >Blog</li>
                <li className={styles.listItem} >Contact</li>
            </ul>
          </div>
          <Link href="/cart" passHref>
            <div className={styles.item}>
                  <div className={styles.cart}>
                          <Image src="/img/cart.png" alt="" width="50" height="50" /> 
                  <div className={styles.counter}>{quantity}</div>
                  </div>

            </div>
          </Link>
            
   </div>

    );
};

export default Navbar