"use client"

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const AboutNew = () => {
  return (
    <Box
      className="about-content"
      sx={{
        backgroundImage: "url('/carrum-new/welcome-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          minHeight: "100%",
        }}
        maxWidth="xxl"
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={10}
            className="mx-auto"
            style={{
              borderRadius: "24px",
              padding: "44px",
              backgroundColor: "rgba(17,82,115,1)",
              backdropFilter: "blur(34px)",
              opacity: "90%",
              marginTop: "60px",
              marginBottom: "60px",
            }}
          >
            <Stack spacing={1} maxWidth={760} marginLeft={"auto"}>
              <Box>
                <Typography
                  component="h2"
                  className="text-white"
                  style={{ fontWeight: "700 !important" }}
                >
                  Welcome to Carrum Downs Dental at Shop T5, Hall Road!
                </Typography>
                <p className="fs-18 text-light" style={{ fontWeight: 500 }}>
                  Most Trusted Family Dentist in Carrum Downs
                </p>
              </Box>
              <p className="fs-18 text-light line-spacing">
                Our practice provides our patients with comprehensive services
                under one roof. From{" "}
                <a
                  className="text-light-green"
                  href="/service/dental-implants/"
                >
                  Dental Implants
                </a>{" "}
                to Cosmetic Dentistry and{" "}
                <a
                  className="text-light-green"
                  href="/service/wisdom-teeth-removal/"
                >
                  Wisdom tooth extractions
                </a>{" "}
                to Dentures, our clinic's wide range of affordable dental care services will
                put a big smile on your face. We believe in giving our patients
                a choice in treatment and will always educate and discuss
                treatment before a decision is made.
              </p>
              <p className="fs-18 text-light">
                Our staff are very friendly and will receive you with a smile,
                and our warm and inviting office will provide you a relaxing
                experience. Our dentist in Carrum Downs are very good with children and
                will do whatever it takes to calm them down and distract them
                with IPAD while the treatment is performed.
              </p>
              <p className="fs-18 text-light">
                If you’re searching for a reliable dentist near me, Carrum Downs Dental Group is here to help. We provide gentle, personalised care for patients of all ages. Whether you need a routine check-up, dental implants, or cosmetic treatments, our experienced team is committed to making your visit comfortable and stress-free. We take the time to understand your concerns and tailor every treatment to meet your needs and budget.
              </p>
              <p className="fs-18 text-light">
                We accept dental vouchers from the public dental services
                (Victorian Dental Scheme and{" "}
                <a className="text-light-green" href="/service/child-benefit/">
                  Child Dental Benefit Schedule
                </a>
                ). Our dentist speaks English, Hindi, Tamil, Arab, Malayalam,
                and Urdu.
              </p>
              <p className="fs-18 text-light">
                Your smile matters to us. Let us help you and your family maintain healthy, beautiful teeth for a lifetime.
              </p>
              <p className="fs-18 text-light">
                We are proud to be one of the most trusted dental clinics near you offering emergency appointments for unexpected dental emergency situations. Search us on google as “Dentist near me” to find us.
              </p>
                <a className="border d-block text-white px-2 py-2 rounded-2" style={{width:"fit-content"}} href="/book-now/">Book Now</a>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutNew;
