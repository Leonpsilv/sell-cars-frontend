import styles from "./Messages.module.css";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1 className={styles.messages}> Página não encontrada! </h1>
            <p className={styles.messages}><Link to="/" > Voltar para página inicial.</Link></p>
        </div>
    )
}