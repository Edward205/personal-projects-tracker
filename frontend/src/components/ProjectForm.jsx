import { useState } from "react";
// ADAPT: câmpurile și valorile fixe ale temei proprii.
const STATUSES = [
    { value: "active", label: "Active" },
    { value: "done", label: "Done" },
    { value: "dead", label: "Dead" },
];
const TITLU_MAX = 100;
export default function ProjectForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("active");
    const [eroare, setError] = useState("");
    const [send, setSend] = useState(false);
    function valideaza() {
        const t = title.trim();
        if (t === "") return "Title can't be blank.";
        if (t.length > TITLU_MAX) return `TItle must have at most ${TITLU_MAX} characters.`;
        return "";
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const mesaj = valideaza();
        if (mesaj) {
            setError(mesaj);
            return;
        }
        setError("");
        setSend(true);
        try {
            await onAdd({ title: title.trim(), notes, status });
            setTitle("");
            setStatus("active");
            setNotes("");
        } catch (err) {
            setError(err.message);
        } finally {
            setSend(false);
        }
    }
    return (
        <form className="task-form" onSubmit={handleSubmit} noValidate data-
            testid="form">

            <label>Title</label>
            <input type="text" name="title" placeholder="Change the world..." value={title}
                onChange={(e) => setTitle(e.target.value)} maxLength={TITLU_MAX}
                aria-invalid={Boolean(eroare)}></input>
            <label>Notes</label>
            <textarea rows="5" cols="30" id="notes" value={notes}
                onChange={(e) => setNotes(e.target.value)}></textarea>

            <label>Status</label>
            <select value={status}
                onChange={(e) => setStatus(e.target.value)}>
                {STATUSES.map((p) => (
                    <option key={p.value} value={p.value}>
                        {p.label}
                    </option>
                ))}
            </select>

            {eroare && (
                <p className="status" data-testid="form-status">
                    {eroare}
                </p>
            )}
            <button type="submit" disabled={send} data-testid="form-submit">
                {send ? "Saving..." : "Add"}
            </button>
        </form>
    );
}