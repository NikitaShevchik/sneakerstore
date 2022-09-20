import React from "react";
import { HiPlus, HiCheck } from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart } from "../../../../redux/cart/reducer";
import styles from './CardItemInCart.module.scss'

const CardItemInCart = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.itemsInCart)
    const removeFromCart = () => {
        dispatch(deleteItemInCart(product.id))
    }
    return (
        <div className={styles.cardincart}>
            <div className={styles.cardincart__content}>
                <div className={styles.cardincart__image}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className={styles.cardincart__info}>
                    <div className={styles.cardincart__name}>
                        {product.sex === 'male' ? 'Мужские кроссовки' : 'Женские кроссовки'} {product.brand} {product.name}
                    </div>
                    <div className={styles.cardincart__price}>
                        <span>{product.price} руб.</span>
                    </div>
                </div>
                <div className={styles.cardincart__buy}>
                    <button className={styles.cardincart__incart} onClick={removeFromCart}>
                        <HiPlus className={styles.cardincart__check} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItemInCart;