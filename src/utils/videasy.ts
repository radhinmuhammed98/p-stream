import { PlayerMeta } from "@/stores/player/slices/source";

/**
 * Generates the official Videasy iframe embed URL based on metadata.
 */
export function getVideasyUrl(meta: PlayerMeta): string | null {
  if (meta.type === "movie") {
    return `https://player.videasy.net/movie/${meta.tmdbId}`;
  }

  if (meta.type === "show") {
    const seasonNumber = meta.season?.number ?? 1;
    const episodeNumber = meta.episode?.number ?? 1;
    return `https://player.videasy.net/tv/${meta.tmdbId}/${seasonNumber}/${episodeNumber}`;
  }

  return null;
}
