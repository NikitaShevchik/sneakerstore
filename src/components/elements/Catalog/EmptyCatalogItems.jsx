import EmptyCardItem from "../../UI/EmptyCardItem/EmptyCardItem"
import styles from './Catalog.module.scss'

const EmptyCatalogItems = () => {
    return (
        <div className={styles.catalog__items}>
            <EmptyCardItem />
            <EmptyCardItem />
            <EmptyCardItem />
            <EmptyCardItem />
            <EmptyCardItem />
            <EmptyCardItem />
            <EmptyCardItem />
            <EmptyCardItem />
        </div>
    )
}
export default EmptyCatalogItems;


