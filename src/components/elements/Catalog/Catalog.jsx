import React from "react";
import { useState } from "react";
import { DATA } from "../../../DATA";
import Search from "../../UI/Search/Search";
import CardItem from "../CardItem/CardItem";
import { nanoid } from 'nanoid'
import styles from './Catalog.module.scss'
import { json } from "react-router-dom";
import { useEffect } from "react";

function id() {
    return nanoid();
}

const Catalog = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://632c38cd5568d3cad880126d.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(items)
                setItems(json.map(item => {
                    return { ...item, id: id() }
                }))
            })
    }, []);

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__header}>
                <div className={styles.catalog__title}>
                    Все кроссовки
                </div>
                <Search />
            </div>
            <div className={styles.catalog__items}>
                {items.map(product => {
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