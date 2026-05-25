"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PaymentPlan = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paymentImages = [
    { image: "/Home/PaymentPlan/afterpay.jpg", alt: "AfterPay" },
    { image: "/Home/PaymentPlan/Bupa.jpg", alt: "Bupa" },
    { image: "/Home/PaymentPlan/CBHS.jpg", alt: "CBHS" },
    { image: "/Home/PaymentPlan/Denticare.jpg", alt: "Denticare" },
    { image: "/Home/PaymentPlan/EFTPOS.jpg", alt: "EFTPOS" },
    { image: "/Home/PaymentPlan/HFC.jpg", alt: "HCF" },
    { image: "/Home/PaymentPlan/Hicaps.jpg", alt: "Hicaps" },
    { image: "/Home/PaymentPlan/Medicare.jpg", alt: "Medicare" },
    { image: "/Home/PaymentPlan/my-smile-plan.jpg", alt: "MySmilePlan" },
    { image: "/Home/PaymentPlan/smile.jpg", alt: "Smile" },
    { image: "/Home/PaymentPlan/WESTFUND.jpg", alt: "WESTFUND" },
    { image: "/carrum-new/HIF-logo.png", alt: "HIF Provider" },
  ];

  return (
    <Container
      maxWidth="xxl"
      sx={{ margin: { xs: "40px 0", md: "60px 0" } }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Box py={2}>
            <Typography
              variant="h2"
              className="text-dark-blue text-start text-md-center fw-semibold"
              sx={{
                fontSize: "clamp(40px,4vw,75px) !important",
                fontFamily: "var(--heading-font) !important",
              }}
            >
              Payment Options
            </Typography>
          </Box>

          <Box py={3}>
            <Swiper
              slidesPerView={width > 992 ? 6 : width < 600 ? 2 : 3}
              spaceBetween={50}
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              className="mySwiper"
            >
              {paymentImages.map((item) => (
                <SwiperSlide key={`payment_${item.alt}`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={180}
                    height={80}
                    priority
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

export default PaymentPlan;