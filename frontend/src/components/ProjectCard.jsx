const STATUSES = {active: "active", done: "done", dead: "dead"};

export default function ProjectCard({project}) {
    return (
        <li className="project-item">
            <div>
                <h3>{project.title}</h3>
                <span className="time">{project.time}</span>
                <span className="description"><p>{project.description}</p></span>
            </div>
            <span className={project.status == STATUSES.active ? "status active" : project.status == STATUSES.done ? "status done" : project.status == STATUSES.dead ? "status dead" : "status"} >{project.status}</span>
        </li>
    );
}