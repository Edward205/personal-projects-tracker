import { useState } from "react";
import styles from "./ProjectForm.module.css";

const STATUSES = [
    { value: "active", label: "Active" },
    { value: "done", label: "Done" },
    { value: "dead", label: "Dead" },
];
const MAX_TITLE = 100;
export default function ProjectForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [error, setError] = useState("");
    const [send, setSend] = useState(false);
    function validate() {
        const t = title.trim();
        if (t === "") return "Title can't be blank.";
        if (t.length > MAX_TITLE) return `TItle must have at most ${MAX_TITLE} characters.`;
        return "";
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const msg = validate();
        if (msg) {
            setError(msg);
            return;
        }
        setError("");
        setSend(true);
        try {
            await onAdd({ title: title.trim(), description, status });
            setTitle("");
            setStatus("active");
            setDescription("");
        } catch (err) {
            setError(err.message);
        } finally {
            setSend(false);
        }
    }
    return (
        <form className={styles.projectform} onSubmit={handleSubmit} noValidate data-
            testid="form">

            <label>Title</label>
            <input type="text" name="title" placeholder="Change the world..." value={title}
                onChange={(e) => setTitle(e.target.value)} maxLength={MAX_TITLE}
                aria-invalid={Boolean(error)}></input>
            <label>Notes</label>
            <textarea rows="5" cols="28" id="description" value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>

            <label>Status</label>
            <select value={status}
                onChange={(e) => setStatus(e.target.value)}>
                {STATUSES.map((p) => (
                    <option key={p.value} value={p.value}>
                        {p.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="status" data-testid="form-status">
                    {error}
                </p>
            )}
            <button type="submit" disabled={send} data-testid="form-submit">
                {send ? "Saving..." : "Add"}
            </button>
        </form>
    );
}