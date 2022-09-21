import React from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import CardItem from "../../components/elements/CardItem/CardItem";
import EmptyFavorites from "../../components/UI/Favorites/EmptyFavorites/EmptyFavorites";
import styles from './Favorites.module.scss'

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.itemsInFavorites)
    return (
        <div className={styles.fav}>
            {
                favorites.length > 0
                    ?
                    <div className={styles.favorites}>
                        <PageHeader title={'Избранное'} />
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