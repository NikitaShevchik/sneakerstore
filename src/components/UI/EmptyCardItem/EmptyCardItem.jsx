import React from "react";
import { HiPlus, HiCheck } from 'react-icons/hi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import styles from './EmptyCardItem.module.scss';


const EmptyCardItem = () => {
    return (
        <div className={styles.emptycarditem}>
            <div className={styles.emptycarditem__content}>
                <div className={styles.emptycarditem__imageblank}></div>
                <div className={styles.emptycarditem__nameblank}>
                    <div className={styles.emptycarditem__nameblank_100}></div>
                    <div className={styles.emptycarditem__nameblank_60}></div>
                </div>
                <div className={styles.emptycarditem__buyblank}>
                    <div className={styles.emptycarditem__price}>
                        <div className={styles.emptycarditem__price_blank}></div>
                    </div>
                    <div className={styles.emptycarditem__incartblank}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCardItem;