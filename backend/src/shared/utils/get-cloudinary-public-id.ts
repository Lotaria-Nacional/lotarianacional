export function getCloudinaryPublicId(file: string): string | undefined {
  if (!file || typeof file !== "string") return undefined

  const segments = file.split("/")

  const lastSegment = segments.pop()
  const fileName = lastSegment?.split(".")[0]

  if (segments.length >= 2 && fileName) {
    const folderPath = segments.slice(-2).join("/")
    return `${folderPath}/${fileName}`
  }

  return undefined
}
