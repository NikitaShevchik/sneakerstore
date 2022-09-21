import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import orderdoneimage from '../../../../images/orderdone.svg';
import { setIsCartOpen } from "../../../../redux/isCartOpen/reducer";
import { setOrderDone } from "../../../../redux/orderCounter/reducer";
import ButtonBackCart from "../../ButtonBackCart/ButtonBackCart";
import styles from './OrderDone.module.scss'

const OrderDone = () => {
    const orderNumber = useSelector((state) => state.ordersCounter.orderCounter);
    const isOrderDone = useSelector((state) => state.ordersCounter.orderDone);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setIsCartOpen())
        dispatch(setOrderDone())
    }

    return (
        <div className={styles.orderdone}>
            <img src={orderdoneimage} alt="Order Done" className={styles.orderdone__image} />
            <div className={styles.orderdone__title}>
                Заказ оформлен!
            </div>
            <div className={styles.orderdone__text}>
                Ваш заказ #{orderNumber} скоро будет передан курьерской доставке
            </div>
            <button className={styles.button} onClick={handleClick} >
                <FiChevronLeft className={styles.button__arrow} />
                <span className={styles.button__text}>Вернуться назад</span>
            </button>
        </div>
    )
}

export default OrderDone;
