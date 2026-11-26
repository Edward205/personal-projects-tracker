import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}
export default function Layout() {
    return (
        <>
            <header className={styles.header}>
                <h1>Personal Projects Tracker</h1>
                <span>
                    Work with your future self
                    <button onClick={handleTheme}>Theme</button>
                </span>
            </header>
        </>
    );
}