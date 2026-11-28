import styles from "./AboutPage.module.css";
export default function AboutPage() {
    return (
        <section className={styles.about}>
            <h2>About Personal Projects Tracker</h2>
            <p>
                Track progress within your projects. Add notes to remember key details so you can easily return to something later. Manage states to never forget about stale projects again. View everything in one place and work with your future self.
            </p>
            <p>Stack: React, Vite, React Router, Node.js, Express, MariaDB, Docker.</p>
        </section>
    );
}