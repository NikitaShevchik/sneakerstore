import React from "react";
import Catalog from "../../components/elements/Catalog/Catalog";
import Slider from "../../components/elements/Slider/Slider";
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <Slider />
            <Catalog />
        </div>
    )
}
export default HomePage;