export default function cfLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NODE_ENV === "development" || src.startsWith("data:")) {
    return src;
  }
  const path = src.startsWith("/") ? src : `/${src}`;
  return `/cdn-cgi/image/width=${width},quality=${quality ?? 80},format=auto${path}`;
}
