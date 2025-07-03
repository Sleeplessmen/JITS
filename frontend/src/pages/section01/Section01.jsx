import { useEffect, useState } from "react";
import styles from "./Section01.module.css";

export default function Section01() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:1337/api/ping")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to My CMS</h1>
            <p className={styles.message}>API Response: {message}</p>
        </div>
    );
}
