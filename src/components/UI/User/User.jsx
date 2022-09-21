import React from "react";
import { BiHeart, BiUserCircle } from 'react-icons/bi';
import CartMenu from "../../elements/CartMenu/CartMenu";
import { useNavigate } from "react-router-dom";
import styles from './User.module.scss'

const User = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.user}>
            <CartMenu />
            <BiHeart onClick={() => navigate('/favorites')} className={styles.user__favorite} />
            <BiUserCircle onClick={() => navigate('/profile')} className={styles.user__profile} />
        </div>
    )
}

export default User;