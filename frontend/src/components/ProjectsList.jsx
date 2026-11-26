import ProjectCard from "./ProjectCard";
import styles from "./ProjectsList.module.css";

export default function ProjectsList({projects, onDelete, onStatusChange}) {
    const active = projects.filter((t) => t.status == "active").length;
    const cards = projects.map(project =>
        <ProjectCard project={project} onDelete={onDelete} onStatusChange={onStatusChange} key={project.id}/>
    );

    if(projects.length != 0)
        return (
            <section className={styles.list}>
                <h2>My Projects</h2>
                <p><b>{projects.length}</b> projects, <b>{active}</b> active</p>
                <ul className={styles.list}>{cards}</ul>
            </section>
        );
    return (
        <section className={styles.panel}>
            <h2>No projects.</h2>
        </section>
    )
}