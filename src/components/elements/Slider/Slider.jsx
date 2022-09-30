import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { nanoid } from "nanoid";
import SliderBanner from "../../UI/SliderBanner/SliderBanner";
import styles from './Slider.module.scss';

function id() {
    return nanoid()
}

const Slider = () => {
    const [banners, setBanners] = useState([])
    const [numberSlider, setNumberSlider] = useState(0)

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

    const x = 100;
    const y = 100;
    const styltrans = {
        transform: `translate(-${x}px, ${y}px)`
    };

    console.log(styltrans)
    return (
        <div className={styles.slider}>
            <div className={styles.slider__prev}>
                <GrFormPrevious />
            </div>
            <div className={styles.slider__body}>
                <div className={styles.slider__slider} styles={styltrans}>
                    {banners.map(banner => {
                        return (
                            <div className={styles.slider__banner} key={banner.id}>
                                <SliderBanner key={banner.id} banner={banner} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.slider__next}>
                <GrFormNext />
            </div>
        </div >
    )
}

export default Slider;