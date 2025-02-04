export function extractYouTubeID(url: string) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/|you\.tube\/)([a-zA-Z0-9_-]{11})/
  const match = url.match(regex)
  return match ? `https://youtube.com/embed/${match[1]}` : ""
}
