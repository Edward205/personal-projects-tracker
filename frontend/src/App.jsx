import ProjectsList from "./components/ProjectsList";
import { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import { createProject, deleteProject, fetchProjects, updateProject } from "./api.js";

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
  async function handleAdd(task) {
    const created = await createProject(task);
    setProjects((prev) => [...prev, created]);
  }


  return (
    <>
      <header>
        <h1>Personal Projects Tracker</h1>
        <span>
          Work with your future self
          <button onClick={handleTheme}>Theme</button>
        </span>
      </header>
      <main>
        <section className="panel add">
          <h2>Add Project</h2>
          <ProjectForm onAdd={handleAdd} />
        </section>

        {loading && (
          <p className="info">
            Loading...
          </p>
        )}
        {error && (
          <p className="error">
            {error}
          </p>
        )}
        {!loading && (
          <ProjectsList projects={projects} onDelete={handleDelete} onStatusChange={handleStatusChange} />
        )}

      </main>
    </>
  );
}