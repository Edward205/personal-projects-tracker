import { Link } from "react-router-dom";
export default function NotFoundPage() {
    return (
        <section className="panel" data-testid="not-found">
            <h2>Page does not exist</h2>
            <Link to="/">Back to projects</Link>
        </section>
    );
}