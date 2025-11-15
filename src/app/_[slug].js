// pages/[slug].tsx
import { Box, Container, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { AccessMySuperPage, CommonHero } from "../components/components";

// Static banners
import Banner2 from "../public/CommonHero/blog-3-0.jpg";
import Banner4 from "../public/CommonHero/blog-index-2.jpg";
import Banner1 from "../public/CommonHero/single-blog-1.jpg";

// API utility
async function fetchAPI(endpoint) {
  const base = "https://apicarrumdownsdental.myconcept.website";
  const res = await fetch(`${base}${endpoint}`);

  if (!res.ok) {
    console.error(`❌ Failed to fetch: ${endpoint}`, res.status);
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

// Sidebar (SSR for SEO)
const BlogSidebar = dynamic(
  () => import("../components/BlogSidebar/BlogSidebar"),
  { ssr: true }
);

const SingleBlog = ({ blog, categories, blogs, banner }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  const isAccessMySuper = blog?.slug === "access-my-super";

  return (
    <>
      <Head>
        <title>{blog?.yoast_head_json?.title || "Default Title"}</title>
        <meta
          name="description"
          content={blog?.yoast_head_json?.description || "Default description"}
        />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://carrumdownsdental.com.au/${blog.slug}/`,
              },
              headline: blog.title?.rendered || "",
              description: blog.yoast_head_json?.description || "",
              ...(blog.featuredImage ? { image: blog.featuredImage } : {}),
              author: {
                "@type": "Organization",
                name: "Carrum Downs Dental Group",
                url: "https://carrumdownsdental.com.au/",
              },
              publisher: {
                "@type": "Organization",
                name: "Carrum Downs Dental Group",
                logo: {
                  "@type": "ImageObject",
                  url: "https://carrumdownsdental.com.au/logo.png",
                },
              },
              datePublished: blog.date || "",
              dateModified: blog.modified || "",
            }),
          }}
        />
      </Head>

      {/* Hero */}
      <CommonHero
        breadcrumb={[
          { id: "single_blog_breadcrumb_1", link: "/blog/", title: "Blog" },
          {
            id: "single_blog_breadcrumb_2",
            link: blog.category_data?.[0]?.slug
              ? `/category/${blog.category_data[0].slug}/`
              : "/category/",
            title: blog.category_data?.[0]?.name || "",
          },
          {
            id: "single_blog_breadcrumb_3",
            link: null,
            title: blog?.title?.rendered || "",
          },
        ]}
        bg={banner}
        title={blog?.title?.rendered || ""}
        color="#fff"
      />

      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                {isAccessMySuper ? (
                  <AccessMySuperPage />
                ) : (
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={8}>
                      {/* Featured Image */}
                      {blog.featuredImage && (
                        <Box>
                          <Image
                            src={blog.featuredImage}
                            alt={blog.featuredAlt || "Blog image"}
                            width={800}
                            height={500}
                            layout="responsive"
                            priority
                            placeholder="blur"
                            blurDataURL="/placeholder.jpg" // small base64 image
                            sizes="(max-width: 768px) 100vw, 
                                   (max-width: 1200px) 75vw, 
                                   800px"
                          />
                        </Box>
                      )}

                      {/* Blog Content */}
                      <Box
                        mt={3}
                        dangerouslySetInnerHTML={{
                          __html: blog?.content?.rendered || "",
                        }}
                      />
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} lg={4}>
                      <BlogSidebar blogs={blogs} cat={categories} />
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default SingleBlog;

//
// ✅ Generate paths for blogs
//
export async function getStaticPaths() {
  try {
    // Fetch fewer slugs → others handled via fallback
    const data = await fetchAPI(
      "/wp-json/wp/v2/posts?per_page=10&_fields=slug"
    );

    const paths = data.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error("❌ getStaticPaths error:", error);
    return { paths: [], fallback: "blocking" };
  }
}

//
// ✅ Fetch optimized data for each blog
//
export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const [blogData, categories, blogs] = await Promise.all([
      fetchAPI(`/wp-json/wp/v2/posts?slug=${slug}&_embed=true`),
      fetchAPI(
        "/wp-json/wp/v2/categories?per_page=20&_fields=id,name,slug"
      ),
      fetchAPI(
        "/wp-json/wp/v2/posts?per_page=5&_fields=id,slug,title,excerpt"
      ),
    ]);

    if (!blogData[0]) {
      return { notFound: true };
    }

    const blog = blogData[0];

    // Flatten featured image
    const featuredImage =
      blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
    const featuredAlt =
      blog?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || null;

    // Pick a random banner safely
    const banners = [Banner1, Banner2, Banner4];
    const banner = banners[Math.floor(Math.random() * banners.length)];

    return {
      props: {
        blog: {
          ...blog,
          featuredImage,
          featuredAlt,
        },
        categories: categories || [],
        blogs: blogs || [],
        banner,
      },
      revalidate: 300, // ISR every 5 minutes
    };
  } catch (error) {
    console.error("❌ getStaticProps error:", error);
    return { notFound: true };
  }
}