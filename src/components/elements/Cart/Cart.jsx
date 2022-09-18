import React from "react";
import { useState } from "react";
import EmptyCart from "../../UI/Cart/EmptyCart/EmptyCart";
import styles from './Cart.module.scss';

const Cart = ({ isCartOpen, setIsCartOpen }) => {

    function closeMenu(e) {
        console.log(e.currentTarget.classList.contains(`${styles.cart}`))
        // if (e.target.classList.contains('cart_menu')) {
        //     console.log('cart__menu')
        // }
    }

    return (
        <div className={styles.cart} onClick={e => closeMenu(e)}>
            <div className={styles.cart__menu}>
                <div className={styles.cart__content}>
                    <div className={styles.cart__content_flex}>
                        <div className={styles.cart__title}>
                            Корзина
                        </div>
                        <EmptyCart />
                        <div>
                            Button to order
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;