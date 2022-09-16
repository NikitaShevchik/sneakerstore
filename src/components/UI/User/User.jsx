import React from "react";
import styles from './User.module.scss'
import { BiHeart, BiCart, BiUserCircle } from 'react-icons/bi';

const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.user__cart}>
                <BiCart />
            </div>
            <BiHeart />
            <BiUserCircle />
        </div>
    )
}

export default User;