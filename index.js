let projects = [
    {id: 1, title: "3D game", date: "2026-09-28 09:50", description: "Made with Unity, uses C#. Working basic character controller. Needs work on levels and gameplay elements.", status: "active"},
    {id: 2, title: "Android app", date: "2026-08-14 12:10", description: "Published to Google Play Store and Github. Made with Kotlin and Jetpack compose, using modern Android standards and Material 3.", status: "done"},
    {id: 3, title: "Online platform", date: "2026-08-14 12:10", description: "Frontend uses React and the backend is written in Rust.", status: "dead"},
];
const STATUSES = ["active", "done", "dead"];

function listProjectTitles(list) {
    return list.map((t) => t.title);
}

function countActive(list) {
    let count = 0;
    list.forEach(element => {
        if(element["status"] == "active")
            ++count;
    });
    return count;
}

function searchByTitle(list, text) {
    let results = [];
    list.forEach(element => {
        if(element["title"].toLowerCase().includes(text))
            results = [...results, element];
    });
    return results;
}

function nextId(list) {
    return list.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}
function addProject(list, title, status) {
    if(title.trim() == "")
    {
        console.error("Title must not be empty.");
        return list;
    }
    if(!STATUSES.includes(status))
    {
        console.error("Status must be one of the valid options: active, done or dead.");
        return list;
    }
    return [...list, {id: nextId(list), title: title, date: "", description: "", status: status},];
}

function setState(list, id, status) {
    if(!STATUSES.includes(status))
    {
        console.error("Status must be one of the valid options: active, done or dead.");
        return list;
    }
    for(let i = 0; i < list.length; ++i)
    {
        if(list[i]["id"] == id)
            list[i]["status"] = status;
    }
    return list;
}

function deleteProject(list, id) {
    for(let i = 0; i < list.length; ++i)
    {
        if(list[i]["id"] == id)
        {
            list.splice(i, 1);
            return list;
        }
    }
}

console.log("--- Read ---");
console.log("Titles:", listProjectTitles(projects).join(", "));
console.log("Active:", countActive(projects));
console.log("Search 'game':", listProjectTitles(searchByTitle(projects,"game")).join(", "));
console.log("--- Write ---");
let list = addProject(projects, "Proiect Tehnologii Web", "active");
console.log("New list:", list.length, "projects");
console.log("Original:", projects.length, "projects");
console.log("--- Editing and deleting ---");
projects = setState(projects, 1, "dead");
console.log("After setting 0 as dead, active projects left:", countActive(projects));
projects = deleteProject(projects, 3);
console.log("After deleting id 3:", listProjectTitles(projects).join(", "));
console.log("--- Validation ---");
addProject(projects, " ", "dead");
addProject(projects, "something", "active");