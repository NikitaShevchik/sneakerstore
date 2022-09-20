import React from "react";
import { HiPlus, HiCheck } from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart, setItemInCart } from "../../../redux/cart/reducer";
import styles from './CardItem.module.scss';


const CardItem = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.itemsInCart)
    // const isCartOpen = useSelector((state) => state.cartOpen.isCartOpen)
    const addInCart = () => {
        dispatch(setItemInCart(product))
    }
    const removeFromCart = () => {
        dispatch(deleteItemInCart(product.id))
    }

    return (
        <div className={styles.carditem}>
            <div className={styles.carditem__content}>
                <div className={styles.carditem__image}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className={styles.carditem__name}>
                    {product.sex === 'male' ? 'Мужские кроссовки' : 'Женские кроссовки'} {product.brand} {product.name}
                </div>
                <div className={styles.carditem__buy}>
                    <div className={styles.carditem__price}>
                        <span className={styles.carditem__pricename}>Цена:</span>
                        <span className={styles.carditem__priceamount}>{product.price} руб.</span>
                    </div>
                    {cart.includes(product)
                        ?
                        <button className={styles.carditem__incart} onClick={removeFromCart}>
                            <HiPlus className={styles.carditem__check} />
                        </button>
                        :
                        <button className={styles.carditem__addincart} onClick={addInCart}>
                            <HiPlus className={styles.carditem__plus} />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CardItem;