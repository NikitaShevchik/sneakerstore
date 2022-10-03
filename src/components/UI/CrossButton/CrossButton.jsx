import { IoMdClose } from 'react-icons/io'
import styles from './CrossButton.module.scss'


const CrossButton = ({ cb }) => {
    return (
        <IoMdClose onClick={cb} className={styles.cross} />
    )
}
export default CrossButton;