import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../../components/elements/CardItem/CardItem";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import EmptyProfile from "../../components/UI/Profile/EmptyProfile/EmptyProfile";
import ProfileOrderItem from "../../components/UI/Profile/ProfileOrderItem/ProfileOrderItem";
import styles from './Profile.module.scss'

const Profile = () => {
    const orders = useSelector((state) => state.orders.orderItems);

    return (
        <div className={styles.prof}>
            {
                orders.length > 0
                    ?
                    < div className={styles.profile} >
                        <PageHeader title={'Мои покупки'} />
                        <div className={styles.profile__items}>
                            {orders.map(order => {
                                return <ProfileOrderItem key={order.id} product={order} />
                            })}
                        </div>
                    </div >
                    :
                    <EmptyProfile />
            }
        </div>
    )
}

export default Profile;