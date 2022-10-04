import React from "react";
import { HiPlus, HiCheck } from 'react-icons/hi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import ContentLoader from "react-content-loader"
import styles from './EmptyCardItem.module.scss';


const EmptyCardItem = () => {
    return (
        <div className={styles.emptycarditem}>
            <div className={styles.emptycarditem__content}>
                <ContentLoader
                    speed={2}
                    width={158}
                    height={220}
                    viewBox="0 0 158 220"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="158" height="112" />
                    <rect x="0" y="126" rx="3" ry="3" width="158" height="15" />
                    <rect x="0" y="146" rx="3" ry="3" width="95" height="15" />
                    <rect x="0" y="175" rx="8" ry="8" width="85" height="25" />
                    <rect x="126" y="175" rx="8" ry="8" width="32" height="32" />
                </ContentLoader>
            </div>
        </div>
    )
}

export default EmptyCardItem;