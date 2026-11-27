import { Router } from "express";
import { parseId, validateProject } from "../validation.js";
const router = Router();
let projects = [
    {
      id: 1,
      title: "3D game",
      data: "2026-09-28 09:50",
      description: "Made with Unity, uses C#. Working basic character controller. Needs work on levels and gameplay elements.",
      status: "active"
    },
    {
      id: 2,
      title: "Android app",
      data: "2026-08-14 12:10",
      description: "Published to Google Play Store and Github. Made with Kotlin and Jetpack compose, using modern Android standards and Material 3.",
      status: "done"
    },
    {
      id: 3,
      title: "Online platform",
      data: "2026-08-14 12:10",
      description: "Frontend uses React and the backend is written in Rust.",
      status: "dead"
    }
];
let nextId = 4;
function findIndex(req, res) {
    const id = parseId(req.params.id);
    if (!id) {
        res.status(400).json({ error: "Invalid ID" });
        return -1;
    }
    const index = projects.findIndex((t) => t.id === id);
    if (index === -1) {
        res.status(404).json({ error: "Project does not exist" });
    }
    return index;
}

router.get("/", (req, res) => {
    res.json(projects);
});

router.get("/:id", (req, res) => {
    const index = findIndex(req, res);
    if (index === -1) return;
    res.json(projects[index]);
});

router.post("/", (req, res) => {
    const { errors, data } = validateProject(req.body ?? {});
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join("; ") });
    }
    const project = { id: nextId++, ...data };
    projects.push(project);
    res.status(201).json(project);
});

router.patch("/:id", (req, res) => {
    const index = findIndex(req, res);
    if (index === -1) return;
    const { errors, data } = validateProject(req.body ?? {}, { partial: true });
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join("; ") });
    }
    projects[index] = { ...projects[index], ...data };
    res.json(projects[index]);
})

router.delete("/:id", (req, res) => {
    const index = findIndex(req, res);
    if (index === -1) return;
    projects.splice(index, 1);
    res.status(204).end();
});
export default router;