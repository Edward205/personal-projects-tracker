import ProjectsList from "../components/ProjectsList.jsx";
import { useState, useEffect } from "react";
import ProjectForm from "../components/ProjectForm.jsx";
import { createProject, deleteProject, fetchProjects, updateProject } from "../api.js";
import styles from './ProjectsPage.module.css';

const STATUSES = ["active", "done", "dead"];
export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchProjects();
        if (!ignore) setProjects(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleDelete(id) {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }
  async function handleStatusChange(id, status) {
    try {
      const update = await updateProject(id, { status: status.target.value });
      setProjects((prev) => prev.map((t) => (t.id === id ? update : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  const [theme, setTheme] = useState(initialTheme);
  function initialTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function handleTheme() {
    const updated = theme === "dark" ? "light" : "dark";
    setTheme(updated);
    document.documentElement.dataset.theme = updated;
  }
  async function handleAdd(project) {
    const created = await createProject(project);
    setProjects((prev) => [...prev, created]);
  }


  return (
    <>
      
      <div className={styles.grid}>
        <section className={`${styles.panel} ${styles.add}`}>
          <h2>Add Project</h2>
          <ProjectForm onAdd={handleAdd} />
        </section>

        <section className={`${styles.panel}`}>
          {loading && (
            <p>
              Loading...
            </p>
          )}
          {error && (
            <p>
              {error}
            </p>
          )}
          {!loading && (
            <ProjectsList projects={projects} onDelete={handleDelete} onStatusChange={handleStatusChange} />
          )}
        </section>


      </div>
    </>
  );
}