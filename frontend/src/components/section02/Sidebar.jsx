import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.menu}>
                <li>Dashboard</li>
                <li>Products</li>
                <li>Users</li>
            </ul>
        </nav>
    );
}
