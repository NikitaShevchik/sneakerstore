import React from "react";
import styles from './Logotype.module.scss'
import logo from '../../../images/logo.svg'

const Logotype = () => {
    return (
        <div className={styles.logotype}>
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