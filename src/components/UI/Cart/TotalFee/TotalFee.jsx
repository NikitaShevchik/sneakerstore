import React from "react";
import { useSelector } from "react-redux";
import styles from './TotalFee.module.scss'

const TotalFee = () => {
    const cart = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = cart.reduce((acc, cart) => acc += cart.price, 0)

    function tax(tax) {
        return ((totalPrice * tax) / 100).toFixed(0)
    }

    return (
        <div className={styles.total}>
            <div className={styles.total__price}>
                <span className={styles.total__text}>Итого:</span>
                <div className={styles.total__line}></div>
                <span className={styles.total__amount}>{totalPrice} руб.</span>
            </div>
            <div className={styles.total__tax}>
                <span className={styles.total__text}>Налог 5%:</span>
                <div className={styles.total__line}></div>
                <span className={styles.total__amount}>{tax(5)} руб.</span>
            </div>

        </div>
    )
}

export default TotalFee;
