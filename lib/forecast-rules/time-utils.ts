/**
 * Simple time helpers for forecast rules. All times in minutes from midnight.
 */

/** Parse "9:10" or "14:30" to minutes from midnight */
export function parseTimeToMinutes(timeStr: string): number {
  const [h, m] = timeStr.replace(/\s*(AM|PM)/i, "").split(":").map(Number);
  const isPM = /pm/i.test(timeStr) && (h === 0 || h < 12);
  const hour = isPM && h !== 12 ? h + 12 : h === 12 && !/pm/i.test(timeStr) ? 0 : h;
  return (hour ?? 0) * 60 + (m ?? 0);
}

/** Minutes between start and end (end - start) */
export function minutesBetween(startMinutes: number, endMinutes: number): number {
  return endMinutes - startMinutes;
}
