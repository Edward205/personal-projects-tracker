export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: { "Content-Type": "application/json", ...options.headers },
    });
    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }
    return res.status === 204 ? null : res.json();
}
export function fetchProjects() {
    return request("/projects");
}
export function createProject(project) {
    return request("/projects", { method: "POST", body: JSON.stringify(project) });
}
export function updateProject(id, changes) {
    return request(`/projects/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes),
    });
}
export function deleteProject(id) {
    return request(`/projects/${id}`, { method: "DELETE" });
}