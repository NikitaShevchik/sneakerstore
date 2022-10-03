import styles from './SliderBanner.module.scss'

const SliderBanner = ({ banner }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__content}>
                <div className={styles.banner__sneaker}>
                    <img src={banner.img} alt={banner.name} />
                </div>
                <div className={styles.banner__logo}>
                    <img src={banner.logo} alt={banner.brand} />
                </div>
                <div className={styles.banner__model} style={{ color: `${banner.color}` }}>
                    {banner.name}
                </div>
                <div className={styles.banner__text}>
                    <span className={styles.banner__brandname} style={{ color: `${banner.color}` }}>{banner.brand}, </span>
                    <span className={styles.banner__slogan}>{banner.slogan}</span>
                </div>
                <button className={styles.banner__button} style={{ backgroundColor: banner.color }}>
                    {banner.buttonText}
                </button>
            </div>
        </div>
    )
}

export default SliderBanner;
