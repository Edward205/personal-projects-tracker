import ProjectCard from "./ProjectCard";

export default function ProjectsList({projects}) {
    const active = projects.filter((t) => t.status == "active").length;
    const cards = projects.map(project =>
        <ProjectCard project={project}/>
    );

    if(projects.length != 0)
        return (
            <section className="panel">
                <h2>My Projects</h2>
                <p><b>{projects.length}</b> projects, <b>{active}</b> active</p>
                <ul>{cards}</ul>
            </section>
        );
    return (
        <section className="panel">
            <h2>No projects.</h2>
        </section>
    )
}