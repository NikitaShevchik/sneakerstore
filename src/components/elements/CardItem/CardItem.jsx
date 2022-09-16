import React from "react";
import { HiPlus } from 'react-icons/hi';
import styles from './CardItem.module.scss';


const CardItem = ({ id, img, sex, name, brand, price }) => {
    return (
        <div className={styles.carditem}>
            <div className={styles.carditem__content}>
                <div className={styles.carditem__image}>
                    <img src={img} alt={name} />
                </div>
                <div className={styles.carditem__name}>
                    {sex === 'male' ? 'Мужские кроссовки' : 'Женские кроссовки'} {brand} {name}
                </div>
                <div className={styles.carditem__buy}>
                    <div className={styles.carditem__price}>
                        <span className={styles.carditem__pricename}>Цена:</span>
                        <span className={styles.carditem__priceamount}>{price} руб.</span>
                    </div>
                    <button className={styles.carditem__addincart}>
                        <HiPlus className={styles.carditem__plus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem;