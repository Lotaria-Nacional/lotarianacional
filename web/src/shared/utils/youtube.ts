export const generateVideoThumbnail = (url: string): string => {
  if (!url || url === "") return "";

  try {
    const parsedUrl = new URL(url);
    let videoID = new URLSearchParams(parsedUrl.search).get("v");

    if (!videoID) {
      const pathSegments = parsedUrl.pathname.split("/");
      videoID = pathSegments[pathSegments.length - 1]; 
    }

    return videoID ? `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg` : "";
  } catch (error) {
    return "";  
  }
};