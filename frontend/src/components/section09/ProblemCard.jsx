import React from "react";
import styles from "./ProblemCard.module.css";

const ProblemCard = ({ title, children }) => (
    <div className={styles.problemCard}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{children}</div>
    </div>
);

export default ProblemCard;