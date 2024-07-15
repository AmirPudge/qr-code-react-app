import { Link } from "react-router-dom";
import NavStyles from './navigation.module.css'

const Navigation = () => {
    return (
        <nav className={NavStyles.nav}>
            <Link to='/generate'>Сгенерировать QR код</Link>
            <Link to='/scanner'>Отсканировать QR код</Link>
            <Link to='/generateHistory'>История генерирования</Link>
            <Link to='/scanHistory'>История сканирования</Link>
        </nav>
    )
}

export default Navigation