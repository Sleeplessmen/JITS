import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './Layout.module.css'; // ✅ Import CSS module

export default function Layout({ theme, toggleTheme }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const [lastVisit, setLastVisit] = useState(null);

    // Lưu và lấy thời gian truy cập gần nhất
    useEffect(() => {
        const prevVisit = localStorage.getItem("lastVisit");
        setLastVisit(prevVisit);

        const now = new Date().toLocaleString();
        localStorage.setItem("lastVisit", now);
    }, []);

    // Đóng menu khi click bên ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const sections = Array.from({ length: 9 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0');
        return (
            <li key={num}>
                <Link
                    to={`/section${num}`}
                    className={styles.dropdownLink} // ✅ module
                    onClick={() => setOpen(false)}
                >
                    Practice Exercise {num}
                </Link>
            </li>
        );
    });

    return (
        <div className={styles.appContainer}>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.menuWrapper} ref={menuRef}>
                        <button
                            className={styles.menuButton}
                            onClick={() => setOpen(prev => !prev)}
                            aria-label="Toggle Menu"
                        >
                            ☰ Menu
                        </button>
                        {open && <ul className={styles.dropdownMenu}>{sections}</ul>}
                    </div>
                    <button
                        className={`${styles.themeToggleButton} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </button>
                </nav>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                © 2025 Nguyen Cong Khai
                <br />
                {lastVisit && (
                    <span>
                        Last visited: {lastVisit}
                    </span>
                )}
            </footer>
        </div>
    );
}
