/** Renders a date as e.g. "2026-08-11" — sortable and unambiguous. */
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
