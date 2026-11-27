import express from "express";
import cors from "cors";
import router from "./routes/projects.js";
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
app.use("/projects", router);
app.use((req, res) => {
    res.status(404).json({ error: "Route does not exist" });
});
app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({ error: status === 500 ? "Internal error" : err.message });
});
export default app;