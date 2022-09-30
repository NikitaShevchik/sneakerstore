import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { nanoid } from "nanoid";
import styles from './Slider.module.scss';

function id() {
    return nanoid()
}

const Slider = () => {

    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('https://632c38cd5568d3cad880126d.mockapi.io/banners')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(json)
                setBanners(json.map(banner => {
                    return { ...banner, id: id() }
                }))
            })
    }, []);

    return (
        <div className={styles.slider}>
            <div className={styles.slider__body}>
                <div className={styles.slider__prev}>
                    <GrFormPrevious />
                </div>
                <div className={styles.slider__image}>
                    <img src={banners.logo} alt={banners.name} />
                </div>
                <div className={styles.slider__text}>
                    <span>{banners.name}</span>
                </div>
                <div className={styles.slider__next}>
                    <GrFormNext />
                </div>
            </div>
            <span>{banners.name}</span>
        </div>
    )
}

export default Slider;