import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
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

    // Close on outside click
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
                    to={`/section${num.toLowerCase()}`}
                    className="dropdownLink"
                    onClick={() => setOpen(false)}
                >
                    Practice Exercise {num}
                </Link>
            </li>
        );
    });

    return (
        <div className="appContainer">
            <header className="header">
                <nav className="navbar">
                    <div className="menuWrapper" ref={menuRef}>
                        <button
                            className="menuButton"
                            onClick={() => setOpen(prev => !prev)}
                            aria-label="Toggle Menu"
                        >
                            ☰ Menu
                        </button>
                        {open && <ul className="dropdownMenu">{sections}</ul>}
                    </div>
                </nav>
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
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