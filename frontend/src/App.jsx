import ProjectsList from "./components/ProjectsList";
import { useState } from "react";

const INITIAL_PROJECTS = [
  {id: 1, title: "3D game", date: "2026-09-28 09:50", description: "Made with Unity, uses C#. Working basic character controller. Needs work on levels and gameplay elements.", status: "active"},
  {id: 2, title: "Android app", date: "2026-08-14 12:10", description: "Published to Google Play Store and Github. Made with Kotlin and Jetpack compose, using modern Android standards and Material 3.", status: "done"},
  {id: 3, title: "Online platform", date: "2026-08-14 12:10", description: "Frontend uses React and the backend is written in Rust.", status: "dead"},
];
const STATUSES = ["active", "done", "dead"];
export default function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);  
  function handleDelete(id) {
    setProjects((prev) => prev.filter((t) => t.id !== id) );
  }
  function handleStatusChange(id, status) {
    setProjects((prev) => prev.map((element) =>
        element.id === id ? { ...element, status: status.target.value } : element
     ) );
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


  return (
    <>
      <header>
        <h1>Personal Projects Tracker</h1> 
        <p>Work with your future self</p>
        <button onClick={handleTheme}>Theme</button>
      </header>
      <main>
          <section className="panel add">
              <h2>Add Project</h2>
              <form>
                  <label>Title</label>
                  <input type="text" name="title" placeholder="Change the world..."></input>
                  <label>Notes</label>
                  <textarea rows="5" cols="30" id="notes"></textarea>

                  <label>Status</label>
                  <select>
                      <option>Done</option>
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>Stale</option>
                      <option>Dead</option>
                  </select>
                  <button type="submit">Add</button>
              </form>
          </section>

        <ProjectsList projects={projects} onDelete={handleDelete} onStatusChange={handleStatusChange}/>
      </main>
    </>
  );
}