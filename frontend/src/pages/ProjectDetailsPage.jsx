import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProject } from "../api.js";
import { STATUS_LABELS } from "../constants.js";
import styles from "./ProjectDetailsPage.module.css";
export default function ProjectDetailsPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetchProject(id)
            .then((data) => {
                if (!ignore) {
                    setProject(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });
        return () => {
            ignore = true;
        };
    }, [id]);
    if (loading) {
        return (
            <p className="info" data-testid="loading">
                Se încarcă...
            </p>
        );
    }
    if (error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">
                    Couldn't load project: {error}
                </p>
                <Link to="/">Back to list</Link>
            </section>
        );
    }
    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                Back to list
            </Link>
            <h2 className={project.gata ? styles.done : undefined} data-testid="detail-title">
                {project.titlu}
            </h2>
            <dl className={styles.fields}>
                <dt>Status</dt>
                <dd>{STATUS_LABELS[project.status]}</dd>
                <dt>Description</dt>
                <dd>{project.description}</dd>
                <dt>ID</dt>
                <dd>{project.id}</dd>
            </dl>
        </section>
    );
}