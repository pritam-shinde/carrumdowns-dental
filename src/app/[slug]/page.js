
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import CommonHero from "@/components/CommonHero/CommonHero";
import BlogSidebar from "@/components/BlogSidebar/BlogSidebar";
import {
  fetchWordPressJson,
  getWordPressContent,
  getWordPressExcerpt,
  getWordPressFeaturedAlt,
  getWordPressFeaturedImage,
  getWordPressTitle,
} from "@/lib/wordpress";
import Banner1 from "../../../public/CommonHero/single-blog-1.jpg";
import Banner2 from "../../../public/CommonHero/blog-3-0.jpg";
import Banner4 from "../../../public/CommonHero/blog-index-2.jpg";



// API Fetch Helper
async function fetchAPI(endpoint) {
  return fetchWordPressJson(endpoint, {
    next: { revalidate: 300 },
    fallback: null,
  });
}

// ----------------------------
// ⭐ GENERATE METADATA (SEO)
// ----------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = await fetchAPI(`/wp-json/wp/v2/posts?slug=${slug}&_embed=true`);

  if (!posts || !posts[0]) {
    return {
      title: "Blog Not Found | Carrum Downs Dental Group",
    };
  }

  const blog = posts[0];
  const yoast = blog.yoast_head_json || {};
  const title = getWordPressTitle(blog);
  const excerpt = getWordPressExcerpt(blog).replace(/<[^>]*>?/gm, "");
  const featuredImage = getWordPressFeaturedImage(blog);

  return {
    title: yoast.title || title,
    description: yoast.description || excerpt,
    alternates: {
      canonical: `https://carrumdownsdental.com.au/${slug}/`,
    },
    openGraph: {
      title: yoast.og_title || title,
      description: yoast.og_description || yoast.description,
      images: yoast.og_image ? [{ url: yoast.og_image[0].url }] : (featuredImage ? [{ url: featuredImage }] : []),
      url: `https://carrumdownsdental.com.au/${slug}/`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: yoast.twitter_title || yoast.og_title || title,
      description: yoast.twitter_description || yoast.og_description || yoast.description,
      images: yoast.twitter_image ? [yoast.twitter_image] : (yoast.og_image ? [yoast.og_image[0].url] : (featuredImage ? [featuredImage] : [])),
    },
  };
}

// ----------------------------
// MAIN PAGE (SERVER COMPONENT)
// ----------------------------
export default async function SingleBlogPage({ params }) {
  const { slug } = await params;

  // Fetch blog, categories, and sidebar blogs
  const [blogArr, categories, recentBlogs] = await Promise.all([
    fetchAPI(`/wp-json/wp/v2/posts?slug=${slug}&_embed=true`),
    fetchAPI(`/wp-json/wp/v2/categories?per_page=20&_fields=id,name,slug`),
    fetchAPI(`/wp-json/wp/v2/posts?per_page=5&_fields=id,slug,title,excerpt`),
  ]);
  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeRecentBlogs = Array.isArray(recentBlogs) ? recentBlogs : [];

  if (!blogArr || !blogArr[0]) {
    return <h1 style={{ padding: "50px" }}>404 — Blog Not Found</h1>;
  }

  const blog = blogArr[0];

  const featuredImage =
    getWordPressFeaturedImage(blog);

  const featuredAlt =
    getWordPressFeaturedAlt(blog);

  // Random hero banner
  const banners = [Banner1, Banner2, Banner4];
  const banner = banners[Math.floor(Math.random() * banners.length)];

  return (
    <>
      <CommonHero
        breadcrumb={[
          { id: "b1", link: "/blog", title: "Blog" },
          {
            id: "b2",
            link: null,
            title: getWordPressTitle(blog),
          },
        ]}
        bg={banner}
        title={getWordPressTitle(blog)}
        color="#fff"
      />

      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box pt={5} pb={12}>
                <Grid container spacing={5}>
                  {/* LEFT CONTENT */}
                  <Grid item xs={12} lg={8}>
                    {/* Featured Image */}
                    {featuredImage && (
                      <Image
                        src={featuredImage}
                        alt={featuredAlt}
                        width={800}
                        height={500}
                        className="w-100 object-fit-cover"
                      />
                    )}

                    {/* Blog Content */}
                    <Box
                      mt={3}
                      dangerouslySetInnerHTML={{
                        __html: getWordPressContent(blog),
                      }}
                    />
                  </Grid>

                  {/* SIDEBAR */}
                  <Grid item xs={12} lg={4}>
                    <BlogSidebar blogs={safeRecentBlogs} cat={safeCategories} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

// ----------------------------
// ISR - Revalidate Every 5 minutes
// ----------------------------
export const revalidate = 300;

// ----------------------------
// VALIDATE EXISTING BLOG SLUGS
// ----------------------------
export async function generateStaticParams() {
  const posts = await fetchAPI(`/wp-json/wp/v2/posts?_fields=slug&per_page=50`);

  if (!posts) return [];

  return posts.map((post) => ({ slug: post.slug }));
}
