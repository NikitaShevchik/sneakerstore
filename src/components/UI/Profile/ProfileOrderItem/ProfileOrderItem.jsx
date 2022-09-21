import React from "react";
import styles from './ProfileOrderItem.module.scss';


const ProfileOrderItem = ({ product }) => {
    return (
        <div className={styles.orderitem}>
            <div className={styles.orderitem__content}>
                <div className={styles.orderitem__image}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className={styles.orderitem__name}>
                    {product.sex === 'male' ? 'Мужские кроссовки' : 'Женские кроссовки'} {product.brand} {product.name}
                </div>
                <div className={styles.orderitem__buy}>
                    <div className={styles.orderitem__price}>
                        <span className={styles.orderitem__pricename}>Цена:</span>
                        <span className={styles.orderitem__priceamount}>{product.price} руб.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileOrderItem;