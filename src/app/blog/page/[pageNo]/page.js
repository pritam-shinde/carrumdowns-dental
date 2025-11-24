import { BlogSidebar, BlueFilledBtn, CommonHero, CustomCard } from "@/components/components";
import Banner from "../../../../../public/carrum-new/banner/blog.jpg";
import { Box, Card, CardContent, Container, Grid, Skeleton, Stack } from "@mui/material";

// ⭐ Metadata (Next.js 16 format) 
export async function generateMetadata({ params }) {
    const { pageNo } = await params;
    return {
        title: `Blog - Page ${pageNo} | Carrum Downs Dental Group`,
        description: `Read our blogs for dental tips - Page ${pageNo}`,
        robots: "noindex, follow", // Usually paginated pages are set to noindex or canonical to root
        alternates: {
            canonical: `https://carrumdownsdental.com.au/blog/page/${pageNo}/`,
        },
    };
}

// 🔥 SERVER FETCH FUNCTIONS 
async function fetchBlogs(page) {
    const res = await fetch(
        `https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true&page=${page}&per_page=6`,
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

export default async function Page({ params }) {
    const { pageNo } = await params;
    const currentPage = Number(pageNo);

    // Redirect or handle invalid page numbers if needed, but for now just fetch
    const blogs = await fetchBlogs(currentPage);
    const categories = await fetchCategories();

    const breadcrumb = [{ id: "blog_page_index", link: "/blog/", title: "Blog" }];

    return (
        <>
            {/* HERO SECTION */}
            <CommonHero breadcrumb={breadcrumb} title={`Blog - Page ${currentPage}`} bg={Banner} />

            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        {/* LEFT COLUMN */}
                                        <Grid item xs={12} lg={8}>
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
                                                    gap: "20px",
                                                }}
                                            >
                                                {blogs?.length === 0
                                                    ? (
                                                        <Box sx={{ gridColumn: "1 / -1", textAlign: "center", py: 5 }}>
                                                            <h3>No posts found.</h3>
                                                        </Box>
                                                    )
                                                    : blogs?.map((item) => (
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
                                                    ))}
                                            </div>
                                            <Box pt={3} className="d-flex justify-content-center align-items-center gap-3">
                                                {currentPage > 1 && (
                                                    <BlueFilledBtn
                                                        btnLink={currentPage === 2 ? "/blog/" : `/blog/page/${currentPage - 1}/`}
                                                        btnTitle="PREV"
                                                        navlink={true}
                                                    />
                                                )}
                                                {/* Show NEXT button if we have a full page of results */}
                                                {blogs?.length === 6 && (
                                                    <BlueFilledBtn
                                                        btnLink={`/blog/page/${currentPage + 1}/`}
                                                        btnTitle="NEXT"
                                                        navlink={true}
                                                    />
                                                )}
                                            </Box>
                                        </Grid>

                                        {/* RIGHT SIDEBAR */}
                                        <Grid item xs={12} lg={4}>
                                            {blogs?.length === 0 ? (
                                                <SidebarSkeleton />
                                            ) : (
                                                <BlogSidebar
                                                    blogs={blogs.slice(0, 5)}
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
