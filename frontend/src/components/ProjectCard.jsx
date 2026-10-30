const STATUSES = {active: "active", done: "done", dead: "dead"};

export default function ProjectCard({project, onDelete, onStatusChange}) {
    return (
        <li className="project-item">
            <div>
                <h3>{project.title}</h3>
                <span className="time">{project.time}</span>
                <span className="description"><p>{project.description}</p></span>
            </div>
            <span className={project.status == STATUSES.active ? "status active" : project.status == STATUSES.done ? "status done" : project.status == STATUSES.dead ? "status dead" : "status"} >{project.status}</span>
            <button onClick={() => onDelete(project.id)}>Delete</button>
            <select name="status" onChange={(choice) => onStatusChange(project.id, choice)} defaultValue={project.status}>
                {Object.values(STATUSES).map(status => (<option key={status}>{status}</option>) ) }
            </select>
        </li>
    );
}