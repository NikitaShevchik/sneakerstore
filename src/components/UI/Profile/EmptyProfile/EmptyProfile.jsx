import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import emptyprofile from '../../../../images/profileempty.svg';
import ButtonBackCart from "../../ButtonBackCart/ButtonBackCart";
import styles from './EmptyProfile.module.scss'

const EmptyProfile = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.emptyprofile}>
            <img src={emptyprofile} alt="Empty Orders" className={styles.emptyprofile__image} />
            <div className={styles.emptyprofile__title}>
                У вас нет заказов
            </div>
            <div className={styles.emptyprofile__text}>
                Вы реально ничего не заказали?? Оформите свой первый заказ.
            </div>
            <div>
                <button className={styles.emptyprofile__button} onClick={() => navigate('/')} >
                    <FiChevronLeft className={styles.emptyprofile__arrow} />
                    <span className={styles.emptyprofile__buttontext}>Вернуться назад</span>
                </button>
            </div >
        </div>
    )
}

export default EmptyProfile;
