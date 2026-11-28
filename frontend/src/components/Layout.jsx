import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}
function initialTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
export default function Layout() {
    const [theme, setTheme] = useState(initialTheme);
    function handleTheme() {
        const updated = theme === "dark" ? "light" : "dark";
        setTheme(updated);
        document.documentElement.dataset.theme = updated;
    }
    return (
        <>
            <header className={styles.header}>
                
                <span className={styles.name}><h1>Personal Projects Tracker</h1><p className={styles.slogan}>Work with your future self</p></span>
                <nav className={styles.nav} data-testid="nav">
                    <NavLink to="/" end className={navClass}>Projects</NavLink>
                    <NavLink to="/about" className={navClass}>About</NavLink>
                    <button onClick={handleTheme}>Theme</button>
                </nav>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    );
}
