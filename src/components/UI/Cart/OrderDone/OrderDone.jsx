import React from "react";
import orderdoneimage from '../../../../images/orderdone.svg';
import ButtonBackCart from "../../ButtonBackCart/ButtonBackCart";
import styles from './OrderDone.module.scss'

const OrderDone = () => {
    return (
        <div className={styles.orderdone}>
            <img src={orderdoneimage} alt="Order Done" className={styles.orderdone__image} />
            <div className={styles.orderdone__title}>
                Заказ оформлен!
            </div>
            <div className={styles.orderdone__text}>
                Ваш заказ скоро будет передан курьерской доставке
            </div>
            <ButtonBackCart />
        </div>
    )
}

export default OrderDone;
