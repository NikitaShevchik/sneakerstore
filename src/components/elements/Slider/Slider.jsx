import React from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FcNext, FcPrevious } from 'react-icons/fc';
import styles from './Slider.module.scss'


const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__body}>
                <div className={styles.slider__prev}>
                    <GrFormPrevious />
                </div>
                <div className={styles.slider__image}>

                </div>
                <div className={styles.slider__text}>
                    <span>I'm future slider</span>
                </div>
                <div className={styles.slider__next}>
                    <GrFormNext />
                </div>
            </div>
        </div>
    )
}

export default Slider;