import React from "react";
import emptycart from '../../../../images/emptycart.svg';
import styles from './EmptyCart.module.scss'

const EmptyCart = () => {
    return (
        <div className={styles.emptycart}>
            <img src={emptycart} alt="Empty Cart" className={styles.emptycart__image} />
            <div className={styles.emptycart__title}>
                Корзина пуста
            </div>
            <div className={styles.emptycart__text}>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </div>
        </div>
    )
}

export default EmptyCart;
