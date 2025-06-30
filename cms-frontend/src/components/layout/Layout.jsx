import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="appContainer">
            <header className="header">
                JITS INNOVATION LABS
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                © 2025 Sleeplessmen
            </footer>
        </div>
    );
}
