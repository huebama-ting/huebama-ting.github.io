export function generateKey(keySource: string, start = 0, end = 5): string {
  return keySource.substring(start, end);
}
