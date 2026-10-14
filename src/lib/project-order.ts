const statusOrder: Record<string, number> = {
  "Active Lab": 0,
  "Production Experience": 0,
  "In Development": 1,
  Completed: 1,
  Research: 2,
};

export function sortProjects<T extends { status: string }>(projects: readonly T[]): T[] {
  return [...projects].sort((left, right) =>
    (statusOrder[left.status] ?? 1) - (statusOrder[right.status] ?? 1),
  );
}
