"use client";

import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules"; // ✅ FIXED import
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SectionalHeading, SleepDentistryCard } from "../components";
import Services from "./Data/Data";

const SleepDentistrySlider = () => {
  const [width, setWidth] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHydrated(true);
    }
  }, []);

  if (!hydrated) return null; // ✅ Prevent SSR crash

  return (
    <Container maxWidth="xxl">
      <Grid container>
        <Grid item xs={12} md={9} className="mx-auto">
          <SectionalHeading
            variant="h2"
            title="Check out some of the amazing work"
            align={width > 600 ? "center" : "left"}
            color="var(--dark-blue)"
          />
          <Box alignSelf="center">
            <Swiper
              slidesPerView={width > 992 ? 3 : width < 600 ? 1 : 2}
              spaceBetween={60}
              modules={[Navigation, Autoplay]}
              className="mySwiper py-4"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              loop
            >
              {Services.map((item) => (
                <SwiperSlide key={item.id}>
                  <SleepDentistryCard
                    cardMedia={item.image}
                    cardMediaAlt={item.alt}
                    navlink
                    link={item.link}
                    width="420px"
                    height="24rem"
                    bgColor={false}
                    cardList={null}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SleepDentistrySlider;

 