import React from "react";
import { DATA } from "../../../DATA";
import Search from "../../UI/Search/Search";
import CardItem from "../CardItem/CardItem";
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
            <div className={styles.catalog__items}>
                {DATA.map(product => {
                    return (
                        <CardItem
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </div>
        </div >
    )
}

export default Catalog;