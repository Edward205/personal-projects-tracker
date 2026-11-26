import styles from './ProjectCard.module.css';

const STATUSES = {active: "active", done: "done", dead: "dead"};

export default function ProjectCard({project, onDelete, onStatusChange}) {
    return (
        <li className={styles.projectitem}>
            <div>
                <h3>{project.title}</h3>
                <span className="time">{project.time}</span>
                <span className="description"><p>{project.description}</p></span>
            </div>
            <div className={styles.projectoptions}>
                <span className={project.status == STATUSES.active ? `${styles.status} ${styles.active}` : project.status == STATUSES.done ? `${styles.status} ${styles.done}` : project.status == STATUSES.dead ? `${styles.status} ${styles.dead}` : `${styles.status}`} >
                    <select name="status" onChange={(choice) => onStatusChange(project.id, choice)} defaultValue={project.status}>
                        {Object.values(STATUSES).map(status => (<option key={status}>{status}</option>) ) }
                    </select>
                </span>
                <button className="delete" onClick={() => onDelete(project.id)}>Delete</button>
            </div>
        </li>
    );
}