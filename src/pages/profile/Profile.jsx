import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardItem from "../../components/elements/CardItem/CardItem";
import ProfileOrderItem from "../../components/UI/Profile/ProfileOrderItem/ProfileOrderItem";
import styles from './Profile.module.scss'

const Profile = () => {
    const navigate = useNavigate()
    const orders = useSelector((state) => state.orders.orderItems);

    return (
        <div className={styles.profile}>
            <div className={styles.profile__header}>
                <button className={styles.profile__back} onClick={() => navigate('/')}>
                    <FiChevronLeft className={styles.profile__arrow} />
                </button>
                <div className={styles.profile__title}>
                    Мои покупки
                </div>
            </div>
            <div className={styles.profile__items}>
                {orders.map(order => {
                    return <ProfileOrderItem key={order.id} product={order} />
                })}
            </div>
        </div>
    )
}

export default Profile;