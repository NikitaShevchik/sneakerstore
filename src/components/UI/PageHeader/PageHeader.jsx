import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './PageHeader.module.scss'

const PageHeader = ({ title }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.pageheader}>
            <button className={styles.pageheader__back} onClick={() => navigate('/')}>
                <FiChevronLeft className={styles.pageheader__arrow} />
            </button>
            <div className={styles.pageheader__title}>
                {title}
            </div>
        </div>
    )
}

export default PageHeader;