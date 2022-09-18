import React from "react";
import { useState } from "react";
import { BiHeart, BiCart, BiUserCircle } from 'react-icons/bi';
import Cart from "../Cart/Cart";
import styles from './CartMenu.module.scss';

const CartMenu = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const openMenu = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <>
            <div className={styles.cartmenu} onClick={openMenu}>
                <BiCart />
                <span className={styles.cartmenu__amount}>1205 руб.</span>
            </div>
            {isCartOpen ? <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> : ''}
        </>
    )
}

export default CartMenu;