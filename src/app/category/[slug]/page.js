import { BlogSidebar, CommonHero, CustomCard } from "@/components/components";
import {
    fetchWordPressJson,
    getWordPressExcerpt,
    getWordPressFeaturedAlt,
    getWordPressFeaturedImage,
    getWordPressTitle,
} from "@/lib/wordpress";
import { Box, Card, CardContent, Container, Grid, Skeleton, Stack } from "@mui/material";
import Banner from "../../../../public/carrum-new/banner/blog.jpg";

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
    const data = await fetchWordPressJson(
        `/wp-json/wp/v2/categories?slug=${slug}`,
        { cache: "no-store", fallback: [] }
    );
    return data[0] || null;
}

async function fetchPostsByCategory(categoryId) {
    return fetchWordPressJson(
        `/wp-json/wp/v2/posts?categories=${categoryId}&per_page=10&_embed=true`,
        { cache: "no-store", fallback: [] }
    );
}

async function fetchCategories() {
    return fetchWordPressJson(
        "/wp-json/wp/v2/categories?_embed=true&per_page=99",
        { cache: "no-store", fallback: [] }
    );
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
                                                            cardMedia={getWordPressFeaturedImage(item)}
                                                            navlink={true}
                                                            link={`/${item.slug}/`}
                                                            cardTitle={getWordPressTitle(item)}
                                                            cardPara={`${getWordPressExcerpt(item)
                                                                .replace(/<[^>]*>?/gm, "")
                                                                .split(" ")
                                                                .slice(0, 20)
                                                                .join(" ")} [...]`}
                                                            cardHeight="auto"
                                                            cardCls="shadow grow"
                                                            List={null}
                                                            cardMediaAlt={getWordPressFeaturedAlt(item)}
                                                        />
                                                    ))
                                                )}
                                            </div>
                                        </Grid>

                                        {/* RIGHT SIDEBAR */}
                                        <Grid item xs={12} lg={4}>
                                            {posts?.length === 0 && !category ? (
                                                <SidebarSkeleton />
                                            ) : (
                                                <BlogSidebar
                                                    blogs={posts.slice(0, 5)}
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
