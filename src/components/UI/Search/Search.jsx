import React from "react";
import styles from './Search.module.scss'
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__logo}>
                <RiSearchLine />
            </div>
            <div>
                <input type="text" placeholder="Поиск..." className={styles.search__input} />
            </div>
        </div>
    )
}

export default Search;