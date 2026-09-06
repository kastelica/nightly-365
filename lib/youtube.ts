/**
 * Resolve a YouTube embed src from public env vars.
 * Never invent a channel or video id — return null if nothing is configured.
 */
export function getLiveEmbedSrc(
  liveUrl = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_URL,
  channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID,
): string | null {
  const url = liveUrl?.trim();
  const channel = channelId?.trim();

  if (url) return toEmbedSrc(url);
  if (channel) {
    return `https://www.youtube.com/embed/live_stream?channel=${encodeURIComponent(channel)}`;
  }
  return null;
}

export function toEmbedSrc(value: string): string {
  if (value.includes("youtube.com/embed/")) {
    return value;
  }

  try {
    const parsed = new URL(value);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com"
    ) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;

      const liveMatch = parsed.pathname.match(/^\/live\/([^/]+)/);
      if (liveMatch) return `https://www.youtube.com/embed/${liveMatch[1]}`;

      const channelMatch = parsed.pathname.match(/^\/channel\/([^/]+)/);
      if (channelMatch) {
        return `https://www.youtube.com/embed/live_stream?channel=${encodeURIComponent(channelMatch[1])}`;
      }

      const embedMatch = parsed.pathname.match(/^\/embed\/(.+)/);
      if (embedMatch) {
        return `https://www.youtube.com/embed/${embedMatch[1]}${parsed.search}`;
      }
    }
  } catch {
    // Not a URL — treat as a raw id below.
  }

  if (value.startsWith("UC") && value.length >= 20) {
    return `https://www.youtube.com/embed/live_stream?channel=${encodeURIComponent(value)}`;
  }

  if (/^[\w-]{11}$/.test(value)) {
    return `https://www.youtube.com/embed/${value}`;
  }

  return value;
}

/**
 * Player-only tweaks after a user gesture. Does not change which
 * source getLiveEmbedSrc() already chose.
 */
export function withLivePlayerSrc(src: string, origin: string): string {
  try {
    const url = new URL(src);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtube.com") {
      url.hostname = "www.youtube-nocookie.com";
    }
    if (origin && !url.searchParams.has("origin")) {
      url.searchParams.set("origin", origin);
    }
    url.searchParams.set("autoplay", "1");
    return url.toString();
  } catch {
    return src;
  }
}
