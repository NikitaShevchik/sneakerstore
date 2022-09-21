import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../../redux/isCartOpen/reducer";
import CartWithItems from "../../UI/Cart/CartWithItems/CartWithItems";
import EmptyCart from "../../UI/Cart/EmptyCart/EmptyCart";
import OrderDone from "../../UI/Cart/OrderDone/OrderDone";
import { setOrderDone } from "../../../redux/orderCounter/reducer";
import styles from './Cart.module.scss';

const Cart = () => {
    const dispatch = useDispatch()
    // const isCartOpen = useSelector((state) => state.cartOpen.isCartOpen)
    const isOrderDone = useSelector((state) => state.ordersCounter.orderDone)
    const cart = useSelector((state) => state.cart.itemsInCart)
    const handleClick = (e) => {
        dispatch(setIsCartOpen())
        if (isOrderDone) {
            dispatch(setOrderDone())
        }
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
                        {cart.length > 0
                            ?
                            <CartWithItems />
                            :
                            isOrderDone ? <OrderDone /> : <EmptyCart />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;