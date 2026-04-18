const EN_DASH = "\u2013";

export function formatDateRange(from: string, to?: string | null): string {
  const end = to && to.trim() ? to : "Present";
  return `${from} ${EN_DASH} ${end}`;
}
