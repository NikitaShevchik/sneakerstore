import React from "react";
import { useState } from "react";
import { BiHeart, BiCart, BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from "../../../redux/isCartOpen/reducer";
import Cart from "../Cart/Cart";
import styles from './CartMenu.module.scss';

const CartMenu = () => {
    // const [isCartOpen, setIsCartOpen] = useState(false)

    const dispatch = useDispatch()
    const isCartOpen = useSelector((state) => state.cartOpen.isCartOpen)
    // const openMenu = () => {
    //     setIsCartOpen(!isCartOpen)
    // }

    const handleClick = (e) => {
        dispatch(setIsCartOpen())
    }

    return (
        <>
            <div className={styles.cartmenu} onClick={handleClick}>
                <BiCart />
                <span className={styles.cartmenu__amount}>1205 руб.</span>
            </div>
            {isCartOpen ? <Cart /> : ''}
        </>
    )
}

export default CartMenu;