import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    const sections = Array.from({ length: 10 }, (_, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
            <li key={num}>
                <Link to={`/section${num}`}>Practice Exercise {num}</Link>
            </li>
        );
    });

    return (
        <div className={styles.homeContent}>
            <h2>Mục lục</h2>
            <ol>{sections}</ol>
        </div>
    );
}
