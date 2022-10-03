import React from "react";
import { useState } from "react";
import { DATA } from "../../../DATA";
import Search from "../../UI/Search/Search";
import CardItem from "../CardItem/CardItem";
import { nanoid } from 'nanoid'
import { json } from "react-router-dom";
import { useEffect } from "react";
import EmptyCardItem from "../../UI/EmptyCardItem/EmptyCardItem";
import EmptyCatalogItems from "./EmptyCatalogItems";
import { useDispatch, useSelector } from "react-redux";
import CrossButton from "../../UI/CrossButton/CrossButton";
import { setSearchField } from "../../../redux/search/reducer";
import styles from './Catalog.module.scss'

function id() {
    return nanoid();
}

const Catalog = () => {
    const searchField = useSelector(state => state.searchField.searchField)
    const dispatch = useDispatch()
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://632c38cd5568d3cad880126d.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json.map(item => {
                    return { ...item, id: id() }
                }))
            })
    }, []);
    const clearSearch = () => {
        dispatch(setSearchField(""))
    }
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__header}>
                <div className={styles.catalog__title}>
                    {searchField
                        ?
                        <div>Поиск по запросу: "{searchField}" < CrossButton cb={clearSearch} /></div>
                        : "Все кроссовки"}
                </div>
                <Search />
            </div>
            <div className={styles.catalog__items}>
                {items
                    ?
                    items.filter((product) => product.name.toLowerCase().includes(searchField.toLowerCase())).length > 0
                        ?
                        items.filter((product) => product.name.toLowerCase().includes(searchField.toLowerCase())).map(product => {
                            return (
                                <CardItem
                                    key={product.id}
                                    product={product}
                                />
                            )
                        })
                        :
                        <div className={styles.catalog__emptysearch}>
                            <div className={styles.catalog__emptysearch_title}>"{searchField}"</div>
                            <div>К сожалению мы ничего не нашли :(</div>
                        </div>
                    :
                    <EmptyCatalogItems />
                }
            </div>
        </div >
    )
}

export default Catalog;