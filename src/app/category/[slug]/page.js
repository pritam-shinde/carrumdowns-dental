import { BlogSidebar, BlueFilledBtn, CommonHero, CustomCard } from "@/components/components";
import Banner from "../../../../public/carrum-new/banner/blog.jpg";
import { Box, Card, CardContent, Container, Grid, Skeleton, Stack } from "@mui/material";

// ⭐ Metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = await fetchCategory(slug);

    if (!category) {
        return {
            title: "Category Not Found | Carrum Downs Dental Group",
        };
    }

    return {
        title: `${category.name} | Carrum Downs Dental Group`,
        description: `Posts in category ${category.name}`,
        robots: "index, follow",
        alternates: {
            canonical: `https://carrumdownsdental.com.au/category/${slug}/`,
        },
    };
}

// 🔥 SERVER FETCH FUNCTIONS
async function fetchCategory(slug) {
    const res = await fetch(
        `https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?slug=${slug}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    return data[0] || null;
}

async function fetchPostsByCategory(categoryId) {
    const res = await fetch(
        `https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true&categories=${categoryId}&per_page=10`, // Fetching 10 for now, or could match blog's 6
        { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
}

async function fetchCategories() {
    const res = await fetch(
        "https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?_embed=true&per_page=99",
        { cache: "no-store" }
    );
    return res.json();
}

// ⭐ Skeletons
function BlogCardSkeleton() {
    return (
        <Card className="shadow grow">
            <Skeleton variant="rectangular" height={200} />
            <CardContent>
                <Skeleton width="80%" height={25} />
                <Skeleton width="60%" height={20} />
                <Skeleton width="90%" height={20} />
            </CardContent>
        </Card>
    );
}

function SidebarSkeleton() {
    return (
        <Stack spacing={2}>
            {Array.from({ length: 5 }).map((_, idx) => (
                <Box key={idx} display="flex" gap={2} alignItems="center">
                    <Skeleton variant="rectangular" width={80} height={60} />
                    <Box flex="1">
                        <Skeleton width="90%" height={20} />
                        <Skeleton width="70%" height={20} />
                    </Box>
                </Box>
            ))}
        </Stack>
    );
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const category = await fetchCategory(slug);
    const categories = await fetchCategories();

    let posts = [];
    if (category) {
        posts = await fetchPostsByCategory(category.id);
    }

    const breadcrumb = [
        { id: "blog_page_index", link: "/blog/", title: "Blog" },
        { id: "category_page", link: null, title: category?.name || "Category" }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <CommonHero breadcrumb={breadcrumb} title={category?.name || "Category"} bg={Banner} />

            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box pt={5} pb={12}>
                                    <Grid container spacing={3}>
                                        {/* LEFT COLUMN */}
                                        <Grid item xs={12} lg={8}>
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
                                                    gap: "60px",
                                                }}
                                            >
                                                {!category ? (
                                                    <Box sx={{ gridColumn: "1 / -1", textAlign: "center", py: 5 }}>
                                                        <h3>Category not found.</h3>
                                                    </Box>
                                                ) : posts?.length === 0 ? (
                                                    <Box sx={{ gridColumn: "1 / -1", textAlign: "center", py: 5 }}>
                                                        <h3>No posts found in this category.</h3>
                                                    </Box>
                                                ) : (
                                                    posts.map((item) => (
                                                        <CustomCard
                                                            key={item.id}
                                                            cardMedia={
                                                                item?._embedded?.["wp:featuredmedia"]?.[0]
                                                                    ?.source_url || null
                                                            }
                                                            navlink={true}
                                                            link={`/${item.slug}/`}
                                                            cardTitle={item.title.rendered}
                                                            cardPara={`${item.excerpt.rendered
                                                                .replace(/<[^>]*>?/gm, "")
                                                                .split(" ")
                                                                .slice(0, 20)
                                                                .join(" ")} [...]`}
                                                            cardHeight="auto"
                                                            cardCls="shadow grow"
                                                            List={null}
                                                            cardMediaAlt={
                                                                item?._embedded?.["wp:featuredmedia"]?.[0]
                                                                    ?.alt_text || null
                                                            }
                                                        />
                                                    ))
                                                )}
                                            </div>
                                            {/* Pagination for categories could be added here later if needed */}
                                        </Grid>

                                        {/* RIGHT SIDEBAR */}
                                        <Grid item xs={12} lg={4}>
                                            {posts?.length === 0 && !category ? (
                                                <SidebarSkeleton />
                                            ) : (
                                                <BlogSidebar
                                                    blogs={posts.slice(0, 5)} // Show recent posts from this category or global? Usually global, but here using posts. Let's stick to posts for now or fetch global recent.
                                                    // Actually BlogSidebar usually shows recent posts. 
                                                    // If I pass `posts`, it shows recent posts from this category. 
                                                    // If I want global recent posts, I should fetch them separately.
                                                    // For now, passing `posts` is acceptable as "Recent in this category" or just reuse what we have.
                                                    // Wait, the sidebar in blog/page.js uses `blogs.slice(0, 5)` which are the latest blogs.
                                                    // Here `posts` are filtered by category. It might be better to fetch latest global blogs for the sidebar to be consistent.
                                                    // But let's keep it simple for now and use `posts`. 
                                                    cat={categories}
                                                />
                                            )}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    );
}
