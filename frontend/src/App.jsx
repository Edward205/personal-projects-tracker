export default function App() {
  let projects = [
    {id: 1, title: "3D game", date: "2026-09-28 09:50", description: "Made with Unity, uses C#. Working basic character controller. Needs work on levels and gameplay elements.", status: "active"},
    {id: 2, title: "Android app", date: "2026-08-14 12:10", description: "Published to Google Play Store and Github. Made with Kotlin and Jetpack compose, using modern Android standards and Material 3.", status: "done"},
    {id: 3, title: "Online platform", date: "2026-08-14 12:10", description: "Frontend uses React and the backend is written in Rust.", status: "dead"},
  ];
  const STATUSES = ["active", "done", "dead"];
  const active = projects.filter((t) => t.status == "active").length;

  return (
    <>
      <header>
        <h1>Personal Projects Tracker</h1> 
        <p>Work with your future self</p>
      </header>
      <main>
          <section className="panel add">
              <h2>Add Project</h2>
              <form>
                  <label>Title</label>
                  <input type="text" name="title" placeholder="My idea..."></input>
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

          <section className="panel">
              <h2>My Projects</h2>
              <p><b>{projects.length}</b> projects, <b>{active}</b> active</p>
              <pre>{JSON.stringify(projects, null, 2)}</pre>

              {/*<ul>
                  <li className="project-item">
                      <div>
                          <h3>3D game</h3>
                          <span className="time">2026-09-28 09:50</span>
                          <span className="description"><p>Made with Unity, uses C#. Working basic character controller. Needs work on levels and gameplay elements.</p></span>
                      </div>
                      <span className="status active">Active</span>
                  </li>
                  
                  <li className="project-item">
                      <div>
                          <h3>Android app</h3>
                          <span className="time">2026-09-24 11:30</span>
                          <span className="description"><p>Published to Google Play Store and Github. Made with Kotlin and Jetpack compose, using modern Android standards and Material 3.</p></span>
                      </div>
                      <span className="status done">Done</span>
                  </li>

                  <li className="project-item">
                      <div>
                          <h3>Online platform</h3>
                          <span className="time">2026-08-14 12:10</span>
                          <span className="description"><p>Frontend uses React and the backend is written in Rust.</p></span>
                      </div>
                      <span className="status dead">Dead</span>
                  </li>

              </ul>*/}

          </section>
      </main>
    </>
  );
}