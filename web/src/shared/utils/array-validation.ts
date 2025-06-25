export function isValidArray(array: any[]): boolean {
  return array && Array.isArray(array) && array.length > 0
}
