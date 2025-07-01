import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.homeBox}>
            <h2>Welcome to the Practice Hub</h2>
            <p>This is a collection of 10 practice exercises to improve my Node.js, React.js and framework Sails.js skills.</p>
            <button onClick={() => navigate("/section01")} className={styles.startButton}>
                Start
            </button>
        </div>
    );
}
