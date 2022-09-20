import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardItem from "../../components/elements/CardItem/CardItem";
import Catalog from "../../components/elements/Catalog/Catalog";
import Slider from "../../components/elements/Slider/Slider";
import EmptyFavorites from "../../components/UI/Favorites/EmptyFavorites/EmptyFavorites";
import styles from './Favorites.module.scss'

const Favorites = () => {
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favorites.itemsInFavorites)
    return (
        <div className={styles.fav}>
            {
                favorites.length > 0
                    ?
                    <div className={styles.favorites}>
                        <div className={styles.favorites__header}>
                            <button className={styles.favorites__back} onClick={() => navigate('/')}>
                                <FiChevronLeft className={styles.favorites__arrow} />
                            </button>
                            <div className={styles.favorites__title}>
                                Избранное
                            </div>
                        </div>
                        <div className={styles.favorites__items}>
                            {favorites.map(product => {
                                return <CardItem key={product.id} product={product} />
                            })}
                        </div>
                    </div>
                    :
                    <EmptyFavorites />
            }
        </div>
    )
}
export default Favorites;