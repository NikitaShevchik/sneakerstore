import React from "react";
import Logotype from "../../UI/Logotype/Logotype";
import styles from './Header.module.scss'
import User from "../../UI/User/User";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logotype />
            <User />
        </div>
    )
}

export default Header;