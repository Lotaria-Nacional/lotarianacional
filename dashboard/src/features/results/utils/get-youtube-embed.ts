export function getYouTubeEmbedURL(inputURL: string): string {
  const trimmedURL = inputURL.trim()

  try {
    const url = new URL(trimmedURL)
    const hostname = url.hostname.replace("www.", "") // Remove "www." se existir
    const path = url.pathname

    // Caso seja um link encurtado (youtu.be/VIDEO_ID)
    if (hostname === "youtu.be") {
      return `https://www.youtube.com/embed${path}`
    }

    // Caso seja um link padrão do YouTube (youtube.com/watch?v=VIDEO_ID)
    if (hostname.includes("youtube.com")) {
      // Se for um link do formato watch?v=
      if (url.searchParams.has("v")) {
        return `https://www.youtube.com/embed/${url.searchParams.get("v")}`
      }

      // Se for um link de shorts (youtube.com/shorts/VIDEO_ID)
      if (path.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed${path}`
      }

      // Se for um link embed, já está no formato correto
      if (path.startsWith("/embed/")) {
        return trimmedURL
      }
    }

    return trimmedURL // Retorna a URL original caso não seja reconhecida como um link do YouTube
  } catch {
    return trimmedURL // Retorna a URL original se for inválida
  }
}
