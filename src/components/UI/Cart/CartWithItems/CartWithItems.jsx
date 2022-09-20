import React from "react";
import { useSelector } from "react-redux";
import ButtonCheckout from "../../ButtonCheckout/ButtonCheckout";
import CardItemInCart from "../CardItemInCart/CardItemInCart";
import TotalFee from "../TotalFee/TotalFee";
import styles from './CartWithItems.module.scss'

const CartWithItems = () => {
    const cart = useSelector((state) => state.cart.itemsInCart)
    return (
        <div className={styles.cartwithitems}>
            <div className={styles.cartwithitems__items}>
                {cart.map(product => {
                    return <CardItemInCart key={product.id} product={product} />
                })}
            </div>
            <div className={styles.cartwithitems__result}>
                <TotalFee />
                <ButtonCheckout />
            </div>
        </div>
    )
}

export default CartWithItems;
