export const STATUSES = [
    { value: "active", label: "Active" },
    { value: "done", label: "Done" },
    { value: "dead", label: "Dead" },
];

export const STATUS_LABELS = Object.fromEntries(
    STATUSES.map((p) => [p.value, p.label])
);