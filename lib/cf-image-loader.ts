export default function cfLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("data:")) return src;

  // Unoptimised originals until Cloudflare Images is enabled on the zone
  // (code-cloudflare.mdc). Set NEXT_PUBLIC_CF_IMAGES=1 when live.
  if (process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_CF_IMAGES !== "1") {
    return src;
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  return `/cdn-cgi/image/width=${width},quality=${quality ?? 80},format=auto${path}`;
}
