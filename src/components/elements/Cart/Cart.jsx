import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../../redux/isCartOpen/reducer";
import EmptyCart from "../../UI/Cart/EmptyCart/EmptyCart";
import OrderDone from "../../UI/Cart/OrderDone/OrderDone";
import styles from './Cart.module.scss';

const Cart = () => {
    const dispatch = useDispatch()
    // const isCartOpen = useSelector((state) => state.cartOpen.isCartOpen)
    const handleClick = (e) => {
        dispatch(setIsCartOpen())
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart__background} onClick={handleClick}></div>
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