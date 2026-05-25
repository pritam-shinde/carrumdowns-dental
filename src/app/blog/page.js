import { BlogSidebar, BlueFilledBtn, CommonHero, CustomCard } from "@/components/components";
import {
  fetchWordPressJson,
  getWordPressExcerpt,
  getWordPressFeaturedAlt,
  getWordPressFeaturedImage,
  getWordPressTitle,
} from "@/lib/wordpress";
import Banner from "../../../public/carrum-new/banner/blog.jpg";

import { Box, Card, CardContent, Container, Grid, Skeleton, Stack, } from "@mui/material";

// ⭐ Metadata (Next.js 16 format) 
export const metadata = {
  title: "Blog | Carrum Downs Dental Group | Dentist Carrum Downs",
  description:
    "Our blog contains various posts related to the dental conditions, treatments and vouchers. Read our blogs for dental tips and be aware of the dental problems.",
  robots: "index, follow",
  alternates: {
    canonical: "https://carrumdownsdental.com.au/about-us/",
  },
};

// 🔥 SERVER FETCH FUNCTIONS 
async function fetchBlogs() {
  return fetchWordPressJson(
    "/wp-json/myapi/v1/posts/?page=1&per_page=6",
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


export default async function Page() {
  const blogs = await fetchBlogs();
  const categories = await fetchCategories();

  const breadcrumb = [{ id: "blog_page_index", link: null, title: "Blog" }];

  return (
    <>
      {/* HERO SECTION */}
      <CommonHero breadcrumb={breadcrumb} title="Blog" bg={Banner} />

      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box pt={5} pb={12}>
                  <Grid container spacing={3}>
                    {/* LEFT COLUMN */}
                    <Grid item xs={12} lg={8}>
                      <div style={{
                        display: "grid", gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
                        gap: "60px",
                      }}>
                        {blogs?.length === 0
                          ? (
                            <Box sx={{ gridColumn: "1 / -1", textAlign: "center", py: 5 }}>
                              <h3>No posts found.</h3>
                            </Box>
                          )
                          : blogs?.map((item) => (
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
                          ))}
                      </div>
                      <Box pt={3} className="d-flex justify-content-center align-items-center gap-3">
                        {/* Only NEXT button on the first page */}
                        {blogs?.length === 6 && (
                          <BlueFilledBtn
                            btnLink={`/blog/page/2/`}
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
