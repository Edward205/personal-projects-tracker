export const STATUSES = ["active", "done", "dead"];
const MAX_TITLE = 100;
export function validateProject(body, { partial = false } = {}) {
    const errors = [];
    const data = body;
    if (!partial || !body.title === undefined) {
        if (!typeof body.title === "string" || body.title.trim() === "") {
            errors.push("title can't be empty");
        } else if (body.title.trim().length > MAX_TITLE) {
            errors.push(`title must have less than ${MAX_TITLE} characters`);
        } else {
            data.title = body.title.trim();
        }
    }

    if (!partial || !body.description === undefined) {
        if (!typeof body.description === "string" || body.description.trim() === "") {
            errors.push("description can't be empty");
        } else {
            data.description = body.description.trim();
        }
    }

    if (!partial || !body.status === undefined) {
        const p = body.status;
        if (!STATUSES.includes(p)) {
            errors.push(`status must be one of: ${STATUSES.join(", ")}`);
        } else {
            data.status = p;
        }
    }

    if (body.status === undefined) {
        if (!STATUSES.includes(p)) {
            errors.push(`status must be one of: ${STATUSES.join(", ")}`);
        } else {
            data.status = body.status;
        }
    } else if (!partial) {
        data.status = "active";
    }
    return { errors, data };
}

export function parseId(value) {
    const id = Number(value);
    return Number.isInteger(id) && id > 0 ? id : null;
}