export const generateVideoThumbnail = (url: string): string => {
  const urlParams = new URLSearchParams(new URL(url).search) || ""
  const videoID = urlParams.get("v") || url.split("/")[4]
  const videoThumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
  return videoThumbnail
}
