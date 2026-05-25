const RAW_WORDPRESS_BASES = [
  process.env.WORDPRESS_API_BASE,
  process.env.NEXT_PUBLIC_WORDPRESS_API_BASE,
  "https://wpapi.carrumdownsdental.com.au",
];

const WORDPRESS_API_BASES = [...new Set(
  RAW_WORDPRESS_BASES
    .filter(Boolean)
    .map((base) => base.replace(/\/+$/, ""))
)];

function buildWordPressUrl(base, endpoint) {
  return `${base}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
}

export async function fetchWordPressJson(endpoint, { fallback = null, ...init } = {}) {
  for (const base of WORDPRESS_API_BASES) {
    const url = buildWordPressUrl(base, endpoint);

    try {
      const res = await fetch(url, init);
      if (!res.ok) continue;

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        console.error(`Expected JSON but received ${contentType || "unknown content type"} from ${url}`);
        continue;
      }

      return await res.json();
    } catch (error) {
      if (error?.digest === "DYNAMIC_SERVER_USAGE") {
        throw error;
      }

      console.error(`Failed to fetch WordPress data from ${url}`, error);
    }
  }

  return fallback;
}

export function getWordPressTitle(post) {
  if (typeof post?.title === "string") return post.title;
  return post?.title?.rendered || "";
}

export function getWordPressExcerpt(post) {
  if (typeof post?.excerpt === "string") return post.excerpt;
  return post?.excerpt?.rendered || "";
}

export function getWordPressContent(post) {
  if (typeof post?.content === "string") return post.content;
  return post?.content?.rendered || "";
}

export function getWordPressFeaturedImage(post) {
  return (
    post?.featured_image?.url ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null
  );
}

export function getWordPressFeaturedAlt(post) {
  return (
    post?.featured_image?.alt_text ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    getWordPressTitle(post) ||
    "Blog image"
  );
}
