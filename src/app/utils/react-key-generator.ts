export function generateKey(
  keySource: string,
  start: number = 0,
  end: number = 5,
): string {
  return keySource.substring(start, end);
}
