import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                  <thead> 
                            <tr className={styles.tr}>
                                <th>Proizvod</th>
                                <th>Naziv</th>
                                <th>Dodaci</th>
                                <th>Cijena</th>
                                <th>Kolicina</th>
                                <th>Ukupno</th>
                            </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.imgContainer}>
                                        <Image src="/img/pizza.png"  layout="fill" objectFit="cover" alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>Ljuti umak</span>
                            </td>
                            <td>
                                <span className={styles.price}>10e</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>20e</span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Podukupno:</b>20e
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Popust:</b>0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Ukupno:</b>20e
                    </div>
                    <button className={styles.button}>PLATI</button>
                </div>
            </div>

        </div>
    );
};

export default cart;