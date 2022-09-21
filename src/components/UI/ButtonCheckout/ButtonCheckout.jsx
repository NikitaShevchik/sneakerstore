import React from "react";
import { FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid'
import { setItemsInOrder } from "../../../redux/orders/reducer";
import styles from './ButtonCheckout.module.scss'
import { deleteItemInCart } from "../../../redux/cart/reducer";
import { setOrderCounter, setOrderDone } from "../../../redux/orderCounter/reducer";

const ButtonCheckout = () => {
    const cart = useSelector((state) => state.cart.itemsInCart);
    const orders = useSelector((state) => state.orders.orderItems);
    const orderNumber = useSelector((state) => state.ordersCounter.orderCounter)
    const dispatch = useDispatch()
    function id() {
        return nanoid();
    }
    const handleClick = () => {
        cart.map(product => {
            dispatch(setItemsInOrder({ ...product, id: id() }))
            dispatch(deleteItemInCart(product.id))
        })
        dispatch(setOrderCounter())
        dispatch(setOrderDone())
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