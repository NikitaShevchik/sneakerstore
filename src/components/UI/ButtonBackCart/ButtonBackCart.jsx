import React from "react";
import { FiChevronLeft } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../../redux/isCartOpen/reducer";
import styles from './ButtonBackCart.module.scss'

const ButtonBackCart = () => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch(setIsCartOpen())
    }
    return (
        <div>
            <button className={styles.button} onClick={handleClick} >
                <FiChevronLeft className={styles.button__arrow} />
                <span className={styles.button__text}>Вернуться назад</span>
            </button>
        </div >
    )
}

export default ButtonBackCart;