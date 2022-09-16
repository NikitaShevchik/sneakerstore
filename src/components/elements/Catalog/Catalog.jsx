import React from "react";
import { DATA } from "../../../DATA";
import Search from "../../UI/Search/Search";
import styles from './Catalog.module.scss'

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__header}>
                <div className={styles.catalog__title}>
                    Все кроссовки
                </div>
                <Search />
            </div>
            ALL sneakers HERE
        </div >
    )
}

export default Catalog;