import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import emptyfavorites from '../../../../images/nofavorites.svg';
import ButtonBackCart from "../../ButtonBackCart/ButtonBackCart";
import styles from './EmptyFavorites.module.scss'

const EmptyFavorites = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.emptyfavorites}>
            <img src={emptyfavorites} alt="Empty Cart" className={styles.emptyfavorites__image} />
            <div className={styles.emptyfavorites__title}>
                Избранного нет :(
            </div>
            <div className={styles.emptyfavorites__text}>
                Вы ничего не добавляли в избранное
            </div>
            <div>
                <button className={styles.emptyfavorites__button} onClick={() => navigate('/')} >
                    <FiChevronLeft className={styles.emptyfavorites__arrow} />
                    <span className={styles.emptyfavorites__buttontext}>Вернуться назад</span>
                </button>
            </div >
        </div>
    )
}

export default EmptyFavorites;
