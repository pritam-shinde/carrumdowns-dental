"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { XBlock, XMasonry } from "react-xmasonry";
import {
  BlogSidebar,
  BlueFilledBtn,
  CommonHero,
  CustomCard,
} from "@/components/components";

import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

import Banner from "../../../public/carrum-new/banner/blog.jpg";

// ----------------------------
// 🔥 Server Fetch Functions
// ----------------------------
async function fetchBlogs() {
  const res = await fetch(
    "https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true",
    { cache: "no-store" }
  );
  return await res.json();
}

async function fetchCategories() {
  const res = await fetch(
    "https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?_embed=true&per_page=99",
    { cache: "no-store" }
  );
  return await res.json();
}

// ----------------------------
// ⭐ Skeleton Components
// ----------------------------
function BlogCardSkeleton() {
  return (
    <Card className="shadow grow m-3">
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
      {[1, 2, 3, 4, 5].map((i) => (
        <Box key={i} display="flex" gap={2} alignItems="center">
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

// -------------------------------------------------
// 🔥 MAIN COMPONENT
// -------------------------------------------------
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  // -------------------------
  // 🔥 Load Data on Mount
  // -------------------------
  useEffect(() => {
    setShow(true);

    async function loadData() {
      const blogData = await fetchBlogs();
      const catData = await fetchCategories();

      setBlogs(blogData);
      setCategory(catData);
      setLoading(false);
    }

    loadData();
  }, []);

  const breadcrumb = [{ id: "blog_page_index", link: null, title: "Blog" }];

  return (
    <>
      <Head>
        <title>Blog | Carrum Downs Dental Group | Dentist Carrum Downs</title>
        <meta
          name="description"
          content="Our blog contains various posts related to dental conditions, treatments, vouchers. Read our blogs for dental tips."
        />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <CommonHero breadcrumb={breadcrumb} title="Blog" bg={Banner} />

      {show ? (
        <main>
          <section>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      {/* ---------------- LEFT COLUMN ---------------- */}
                      <Grid item xs={12} lg={8}>
                        <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                          {loading
                            ? // 🔥 6 skeleton blocks for grid
                              [...Array(6)].map((_, i) => (
                                <XBlock key={i}>
                                  <BlogCardSkeleton />
                                </XBlock>
                              ))
                            : blogs?.map((item) => (
                                <XBlock key={item.id}>
                                  <CustomCard
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
                                    cardCls="shadow grow m-3"
                                    List={null}
                                    cardMediaAlt={
                                      item?._embedded?.["wp:featuredmedia"]?.[0]
                                        ?.alt_text || null
                                    }
                                  />
                                </XBlock>
                              ))}
                        </XMasonry>

                        {!loading && (
                          <Box
                            pt={3}
                            className="d-flex justify-content-center align-items-center"
                          >
                            <BlueFilledBtn
                              btnLink={`/blog/page/2/`}
                              btnTitle="NEXT"
                              navlink={true}
                            />
                          </Box>
                        )}
                      </Grid>

                      {/* ---------------- RIGHT SIDEBAR ---------------- */}
                      <Grid item xs={12} lg={4}>
                        {loading ? (
                          <SidebarSkeleton />
                        ) : (
                          <BlogSidebar blogs={blogs.slice(0, 5)} cat={category} />
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
        </main>
      ) : null}
    </>
  );
}


// import Head from "next/head";
// import { useEffect, useState } from "react";
// import { XBlock, XMasonry } from "react-xmasonry";
// import { BlogSidebar, BlueFilledBtn, CommonHero, CustomCard } from "../../components/components";
// import { Box, Container, Grid } from "@mui/material";
// import Banner from "../../public/carrum-new/banner/blog.jpg";

// export const getServerSideProps = async () => {
//     const res = await fetch("https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true");
//     const catRes = await fetch("https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?_embed=true&per_page=99");
//     const data = await res.json();
//     const category = await catRes.json();
//     return {
//         props: {
//             data,
//             category,
//         },
//     };
// };

// const Blog = ({ data, category }) => {
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         if (typeof window !== undefined) {
//             setShow(true);
//         } else {
//             setShow(false);
//         }
//     }, []);

//     const breadcrumb = [{ id: "blog_page_index", link: null, title: "Blog" }];

//     return (
//         <>
//             <Head>
//                 <title>Blog | Carrum Downs Dental Group | Dentist Carrum Downs</title>
//                 <meta name="description" content="Our blog contains various posts related to the dental conditions, treatments and vouchers. Read our blogs for dental tips and be aware of the dental problems." />
//                 <meta name="robots" content="noindex,follow" /> 
//             </Head>
//             <CommonHero breadcrumb={breadcrumb} title="Blog" bg={Banner} />
//             {show ? (
//                 <main>
//                     <section>
//                         <Container maxWidth="xxl">
//                             <Grid container>
//                                 <Grid item xs={12} md={10} className="mx-auto">
//                                     <Box py={5}>
//                                         <Grid container spacing={5}>
//                                             <Grid item xs={12} lg={8} >
//                                                 <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
//                                                     {data
//                                                         ? data.map((item) => (
//                                                               <XBlock key={item.id}>
//                                                                   <CustomCard
//                                                                       cardMedia={
//                                                                           item._embedded
//                                                                               ? item._embedded["wp:featuredmedia"]
//                                                                                   ? item._embedded["wp:featuredmedia"][0]
//                                                                                       ? item._embedded["wp:featuredmedia"][0].source_url
//                                                                                       : null
//                                                                                   : null
//                                                                               : null
//                                                                       }
//                                                                       navlink={true}
//                                                                       link={`/${item.slug}/`}
//                                                                       cardTitle={item.title.rendered}
//                                                                       cardPara={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`}
//                                                                       cardHeight="auto"
//                                                                       cardCls="shadow grow m-3"
//                                                                       List={null}
//                                                                       cardMediaAlt={
//                                                                           item
//                                                                               ? item._embedded
//                                                                                   ? item._embedded["wp:featuredmedia"]
//                                                                                       ? item._embedded["wp:featuredmedia"][0]
//                                                                                           ? item._embedded["wp:featuredmedia"][0].alt_text
//                                                                                               ? item._embedded["wp:featuredmedia"][0].alt_text
//                                                                                               : null
//                                                                                           : null
//                                                                                       : null
//                                                                                   : null
//                                                                               : null
//                                                                       }
//                                                                   />
//                                                               </XBlock>
//                                                           ))
//                                                         : null}
//                                                 </XMasonry>
//                                                 <Box pt={3} className="d-flex justify-content-center align-items-center">
//                                                     <BlueFilledBtn btnLink={`/blog/page/2/`} btnTitle="NEXT" navlink={true} />
//                                                 </Box>
//                                             </Grid>
//                                             <Grid item xs={12} lg={4}>
//                                                 <BlogSidebar blogs={data.slice(0, 5)} cat={category} />
//                                             </Grid>
//                                         </Grid>
//                                     </Box>
//                                 </Grid>
//                             </Grid>
//                         </Container>
//                     </section>
//                 </main>
//             ) : null}
//         </>
//     );
// };

// export default Blog;