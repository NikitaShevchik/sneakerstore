import React from "react";
import styles from './User.module.scss'
import { BiHeart, BiUserCircle } from 'react-icons/bi';
import CartMenu from "../../elements/CartMenu/CartMenu";

const User = () => {
    return (
        <div className={styles.user}>
            <CartMenu />
            <BiHeart />
            <BiUserCircle />
        </div>
    )
}

export default User;