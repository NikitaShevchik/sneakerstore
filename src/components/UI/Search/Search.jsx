import React from "react";
import styles from './Search.module.scss'
import { RiSearchLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { setSearchField } from "../../../redux/search/reducer";

const Search = () => {
    const dispatch = useDispatch();
    const searchField = useSelector(state => state.searchField.searchField)

    return (
        <div className={styles.search}>
            <div className={styles.search__logo}>
                <RiSearchLine />
            </div>
            <div>
                <input type="text" placeholder="Поиск..." className={styles.search__input} value={searchField} onChange={event => dispatch(setSearchField(event.target.value))} />
            </div>
        </div>
    )
}

export default Search;