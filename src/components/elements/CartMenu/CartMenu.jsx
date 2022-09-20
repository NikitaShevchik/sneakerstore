import React from "react";
import { useState } from "react";
import { BiHeart, BiCart, BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from "../../../redux/isCartOpen/reducer";
import Cart from "../Cart/Cart";
import styles from './CartMenu.module.scss';

const CartMenu = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cartOpen.isCartOpen);
    const cart = useSelector((state) => state.cart.itemsInCart);

    const totalPrice = cart.reduce((acc, cart) => acc += cart.price, 0)
    const priceInCart = () => {
        return cart.find
    }

    const handleClick = (e) => {
        dispatch(setIsCartOpen())
    }

    return (
        <>
            <div className={styles.cartmenu} onClick={handleClick}>
                <BiCart />
                {totalPrice > 0 && <span className={styles.cartmenu__amount}>{totalPrice} руб.</span>}
            </div>
            {isCartOpen ? <Cart /> : ''}
        </>
    )
}

export default CartMenu;