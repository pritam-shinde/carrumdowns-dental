"use client";

import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";

import HomeButtonCards from "./HomeButtonCards";
import NavbarMenu from "./NavbarMenu";
import Social from "./Social";

// Slide content
const slideContents = [
  {
    title: "Experienced Service",
    description:
      "Our dentists are fully qualified and have years of experience in providing quality dental care.",
    buttonText: "KNOW MORE",
    buttonLink: "/about-us/",
  },
  {
    title: "Family Quality Care",
    description:
      "Our team of dentists and staff always ensure patients are treated like family.",
    buttonText: "KNOW MORE",
    buttonLink: "/about-us/",
  },
  {
    title: "Child Dental Benefit Scheme",
    description:
      "Eligible families receive free treatments for up to $1000. Call us to find out if you are eligible.",
    buttonText: "KNOW MORE",
    buttonLink: "/service/child-benefit/",
  },
];

// Slide images
const slides = [
  {
    desktop: "/carrum-new/header-img.jpg",
    mobile: "/carrum-new/hero-mob1.webp",
    alt: "Experienced Service",
  },
  {
    desktop: "/carrum-new/hero-img2.jpg",
    mobile: "/carrum-new/hero-mob2.webp",
    alt: "Family Quality Care",
  },
  {
    desktop: "/carrum-new/hero-img3.jpg",
    mobile: "/carrum-new/hero-mob3.webp",
    alt: "Child Dental Benefit Scheme",
  },
];

// Breadcrumb component
const Breadcrumb = ({ breadcrumb }) => (
  <nav aria-label="breadcrumb">
    <ul className="breadcrumb">
      {breadcrumb.map((item, index) => (
        <li
          key={item.id}
          className={`breadcrumb-item ${!item.link ? "active" : ""}`}
          aria-current={!item.link ? "page" : null}
        >
          {item.title !== "Services" && index !== 0 && (
            <span className="arrow-right">
              <KeyboardArrowRight sx={{ fill: "#fff !important", mb: "0.14rem" }} />
            </span>
          )}
          {item.link ? (
            <a href={item.link} className="text-white fs-18">
              {item.title}
            </a>
          ) : (
            <strong className="text-white fs-18-inner">{item.title}</strong>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

const CommonHero = ({ pathName, title, breadcrumb, bg, desc }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const currentSlide = slideContents[activeSlide] || {};
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSlideChange = (swiper) => setActiveSlide(swiper.realIndex);

  return (
    <Container maxWidth="xxl" id="home_hero" className="p-0 position-relative" sx={{ minHeight: "80vh" }} >
      {/* HERO SECTION */}
      {pathName === "index" ? (
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          effect="fade"
          modules={[EffectFade, Autoplay]}
          loop
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={handleSlideChange}
          className="custom-padding-top-hero"
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              style={{ position: "relative", width: "100%", height: "100vh" }}
            >
              <Image
                src={isMobile ? slide.mobile : slide.desktop}
                alt={slide.alt}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box
          className="custom-padding-top-hero"
          sx={{ position: "relative", height: { xs: "80vh", md: "100vh" } }}
        >
          {bg?.src && (
            <Image
              src={bg.src}
              alt={title || "Banner"}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          )}
        </Box>
      )}

      {/* OVERLAY CONTENT */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          zIndex: 1,
        }}
      >
        <Container sx={{ marginY: "auto" }} maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Stack gap={{ xs: 2, md: 6, xl: 8 }}>
                <Box
                  sx={{ maxWidth: "fit-content" }}
                  className="d-none d-xl-block"
                  pt={{ xs: "60px", sm: 0, lg: "80px" }}
                >
                  <NavbarMenu />
                </Box>

                <Box>
                  <div className="row gap-5 gap-xl-0">
                    <div className="col-12 col-xl-7 col-xxl-7">
                      {pathName === "index" ? (
                        <>
                          <p className="banner-titles fw-bold text-white">
                            {currentSlide.title}
                          </p>
                          <p
                            className="fs-18 text-light mt-3 mb-4"
                            style={{ maxWidth: "600px" }}
                          >
                            {currentSlide.description}
                          </p>
                          <a
                            href={slideContents[activeSlide]?.buttonLink || "#"}
                            className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2 d-inline-block"
                          >
                            {slideContents[activeSlide]?.buttonText}
                          </a>
                        </>
                      ) : (
                        <>
                          <h1 className="fw-bold page-heading-size text-white">
                            {title}
                          </h1>
                          {breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}
                          {desc && (
                            <p
                              className="fs-18 text-light mt-3 mb-4"
                              style={{ maxWidth: "600px" }}
                            >
                              {desc}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                    {pathName === "index" && <HomeButtonCards />}
                  </div>
                </Box>

                {/* SLIDE INDICATORS */}
                {pathName === "index" && (
                  <Stack direction="row" gap={1} mt={4}>
                    {[0, 1, 2].map((index) => (
                      <Box
                        key={index}
                        onClick={() => {
                          swiperRef.current?.swiper.slideTo(index + 1);
                          setActiveSlide(index);
                        }}
                        sx={{
                          padding: "8px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          backgroundColor:
                            activeSlide === index ? "#19BEB9" : "#949494",
                        }}
                      />
                    ))}
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Social />
    </Container>
  );
};

export default CommonHero;




// import { KeyboardArrowRight } from "@mui/icons-material";
// import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
// import Link from "next/link";
// import { useRef, useState } from "react";
// import { Autoplay, EffectFade } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import Image from "next/image";
// import HomeButtonCards from "./HomeButtonCards";
// import NavbarMenu from "./NavbarMenu";
// import Social from "./Social";

// const slideContents = [
//   {
//     title: "Experienced Service",
//     description:
//       "Our dentists are fully qualified and have years of experience in providing quality dental care.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/about-us/",
//     slideIndex: 0,
//   },
//   {
//     title: "Family Quality Care",
//     description:
//       "Our team of dentists and staff always ensure patients are treated like family.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/about-us/",
//     slideIndex: 1,
//   },
//   {
//     title: "Child Dental Benefit Scheme",
//     description:
//       "Eligible families receive free treatments for up to $1000. Call us to find out if you are eligible.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/service/child-benefit/",
//     slideIndex: 2,
//   },
// ];

// const slides = [
//   {
//     desktop: "/carrum-new/header-img.jpg",
//     mobile: "/carrum-new/hero-mob1.webp",
//     alt: "Experienced Service",
//   },
//   {
//     desktop: "/carrum-new/hero-img2.jpg",
//     mobile: "/carrum-new/hero-mob2.webp",
//     alt: "Family Quality Care",
//   },
//   {
//     desktop: "/carrum-new/hero-img3.jpg",
//     mobile: "/carrum-new/hero-mob3.webp",
//     alt: "Child Dental Benefit Scheme",
//   },
// ];

// const Breadcrumb = ({ breadcrumb }) => (
//   <nav aria-label="breadcrumb">
//     <ul className="breadcrumb">
//       {breadcrumb.map((item, index) => (
//         <li
//           key={item.id}
//           className={`breadcrumb-item ${!item.link ? "active" : ""}`}
//           aria-current={!item.link ? "page" : null}
//         >
//           {item.title !== "Services" && index !== 0 && (
//             <span className="arrow-right">
//               <KeyboardArrowRight
//                 sx={{ fill: "#fff !important", mb: "0.14rem" }}
//               />
//             </span>
//           )}
//           {item.link ? (
//             <Link href={item.link}>
//               <a className="text-white fs-18">{item.title}</a>
//             </Link>
//           ) : (
//             <strong className="text-white fs-18-inner">{item.title}</strong>
//           )}
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

// const CommonHero = ({ pathName, title, breadcrumb, bg, desc }) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const swiperRef = useRef(null);
//   const currentSlide = slideContents[activeSlide] || {};
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const handleSlideChange = (swiper) => setActiveSlide(swiper.realIndex);

//   return (
//     <Container
//       maxWidth="xxl"
//       id="home_hero"
//       className="p-0 position-relative"
//       sx={{ minHeight: "80vh" }} // 👈 reserve height to prevent CLS
//     >
//       {pathName === "index" ? (
//         <Swiper
//           ref={swiperRef}
//           spaceBetween={30}
//           effect="fade"
//           modules={[EffectFade, Autoplay]}
//           loop
//           slidesPerView={1}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           onSlideChange={handleSlideChange}
//           className="custom-padding-top-hero"
//         >
//           {slides.map((slide, i) => (
//             <SwiperSlide
//               key={i}
//               style={{
//                 position: "relative",
//                 height: "100%", // 👈 fixed height for slides
//                 minHeight: "500px", // 👈 avoid collapse on desktop
//               }}
//             >
//               <Image
//                 src={isMobile ? slide.mobile : slide.desktop}
//                 alt={slide.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 priority={i === 0}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <Box
//           className="custom-padding-top-hero"
//           sx={{
//             position: "relative",
//             height: { xs: "80vh", md: "100%" },
//             minHeight: "500px", // 👈 added
//           }}
//         >
//           {bg?.src && (
//             <Image
//               src={bg.src}
//               alt={title || "Banner"}
//               layout="fill"
//               objectFit="cover"
//               objectPosition="center"
//               priority
//               style={{ objectFit: "cover", objectPosition: "center" }}
//             />
//           )}
//         </Box>
//       )}

//       {/* Overlay content */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           height: "100%",
//           width: "100%",
//           display: "flex",
//           zIndex: 1,
//         }}
//       >
//         <Container sx={{ marginY: "auto" }} maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={10} className="mx-auto">
//               <Stack gap={{ xs: 2, md: 6, xl: 8 }}>
//                 <Box
//                   sx={{ maxWidth: "fit-content" }}
//                   className="d-none d-xl-block"
//                   pt={{ xs: "60px", sm: 0, lg: "80px" }}
//                 >
//                   <NavbarMenu />
//                 </Box>

//                 <Box>
//                   <div className="row gap-5 gap-xl-0">
//                     <div className="col-12 col-xl-7 col-xxl-7">
//                       {pathName === "index" ? (
//                         <>
//                           <p className="banner-titles fw-bold text-white page-heading-size">
//                             {currentSlide.title || "Loading..."}
//                           </p>
//                           <p
//                             className="fs-18 text-light mt-3 mb-4"
//                             style={{ maxWidth: "600px" }}
//                           >
//                             {currentSlide.description}
//                           </p>
//                           <Link
//                             href={
//                               slideContents[activeSlide]?.buttonLink || "#"
//                             }
//                           >
//                             <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2 d-inline-block">
//                               {slideContents[activeSlide]?.buttonText}
//                             </a>
//                           </Link>
//                         </>
//                       ) : (
//                         <>
//                           <h1 className="fw-bold page-heading-size text-white">
//                             {title}
//                           </h1>
//                           {breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}
//                           {desc && (
//                             <p
//                               className="fs-18 text-light mt-3 mb-4"
//                               style={{ maxWidth: "600px" }}
//                             >
//                               {desc}
//                             </p>
//                           )}
//                         </>
//                       )}
//                     </div>
//                     {pathName === "index" && <HomeButtonCards />}
//                   </div>
//                 </Box>

//                 {pathName === "index" && (
//                   <Stack direction="row" gap={1} mt={4}>
//                     {[0, 1, 2].map((index) => (
//                       <Box
//                         key={index}
//                         onClick={() => {
//                           swiperRef.current?.swiper.slideTo(index + 1);
//                           setActiveSlide(index);
//                         }}
//                         sx={{
//                           width: "12px",
//                           height: "12px",
//                           borderRadius: "4px",
//                           cursor: "pointer",
//                           backgroundColor:
//                             activeSlide === index ? "#19BEB9" : "#949494",
//                           transition: "background-color 0.3s ease", // 👈 smooth change
//                         }}
//                       />
//                     ))}
//                   </Stack>
//                 )}
//               </Stack>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <Social />
//     </Container>
//   );
// };

// export default CommonHero;
