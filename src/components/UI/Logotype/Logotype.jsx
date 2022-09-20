import React from "react";
import logo from '../../../images/logo.svg'
import { useNavigate } from "react-router-dom";
import styles from './Logotype.module.scss'

const Logotype = () => {
    const navigate = useNavigate()
    const mainPage = () => { navigate('/') }
    return (
        <div className={styles.logotype} onClick={mainPage}>
            <div className={styles.logotype__image}>
                <img src={logo} alt="LogoImg" />
            </div>
            <div className={styles.logotype__text}>
                <div className={styles.logotype__title}>
                    Shevchik sneakers
                </div>
                <div className={styles.logotype__description}>
                    Магазин топовых кроссовок
                </div>
            </div>
        </div>
    )
}

export default Logotype;