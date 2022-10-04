import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { nanoid } from "nanoid";
import SliderBanner from "../../UI/SliderBanner/SliderBanner";
import styles from './Slider.module.scss';
import axios from "axios";

function id() {
    return nanoid()
}

const Slider = () => {
    const [banners, setBanners] = useState([])
    const [numberSlider, setNumberSlider] = useState(0)

    useEffect(() => {
        axios.get('https://632c38cd5568d3cad880126d.mockapi.io/banners').then(res => {
            setBanners(res.data.map(banner => {
                return { ...banner, id: id() }
            }))
        })
    }, []);

    const styless = {
        transform: `translate(-${numberSlider * 100}%, 0)`
    }
    return (
        <div className={styles.slider}>
            {numberSlider > 0 &&
                <div className={styles.slider__prev} onClick={() => setNumberSlider(numberSlider - 1)}>
                    <GrFormPrevious />
                </div>
            }
            <div className={styles.slider__body}>
                <div className={styles.slider__slider} style={styless}>
                    {banners.map(banner => {
                        return (
                            <div className={styles.slider__banner} key={banner.id}>
                                <SliderBanner key={banner.id} banner={banner} />
                            </div>
                        )
                    })}
                </div>
            </div>
            {numberSlider < banners.length - 1 &&
                <div className={styles.slider__next} onClick={() => setNumberSlider(numberSlider + 1)}>
                    <GrFormNext />
                </div>
            }
        </div >
    )
}

export default Slider;