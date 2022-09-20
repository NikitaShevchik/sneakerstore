import React from "react";
import { FiChevronLeft } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../../redux/isCartOpen/reducer";
import styles from './ButtonCheckout.module.scss'

const ButtonCheckout = () => {
    const handleClick = (e) => {

    }
    return (
        <div>
            <button className={styles.button} onClick={handleClick} >
                <span className={styles.button__text}>Оформить заказ</span>
                <FiChevronLeft className={styles.button__arrow} />
            </button>
        </div >
    )
}

export default ButtonCheckout;