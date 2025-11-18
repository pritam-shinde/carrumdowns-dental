import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import ImplantBg from "../../../../public/carrum-new/banner/implant-supported-denture.webp";
import Gum_ulcer from "../../../../public/implant/Gum_ulcer.jpg";
import implant1 from "../../../../public/implant/implant1.jpg";
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition, } from "../../../components/components";

export const metadata = {
  title: "Restore Your Smile with Dental Implants and Dentures",
  description: "Get secure and comfortable dental implants and dentures in Carrum Downs. Secure, natural-looking solutions for missing teeth that offer comfort & lasting results.",
  robots: "index",
  alternates: { canonical: "/service/implant-supported-denture", },
};

const Implant = () => {
  const breadcrumb = [
    {
      id: "ImplantSupportedDenture_breadcrumb_1",
      link: "/service/",
      title: "Service",
    },
    {
      id: "ImplantSupportedDenture_breadcrumb_2",
      link: null,
      title: "Overdentures at Carrum Downs Dental Clinic ",
    },
  ];

  return (
    <>
      <CommonHero bg={ImplantBg} breadcrumb={breadcrumb} title="Dental Implants and Dentures​ Services for a Complete Smile" color="#fff" />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl" className="p-0">
                        <SectionalHeading
                          variant="h2"
                          title="Many people with conventional dentures end up not using them for the simple fact that they don't stay in place"
                          color="var(--dark-blue)"
                        />
                        <Box mt={3}>
                          <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                              <Image src={implant1} alt="girl smiling" className="img-fluid" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography className="para">
                                <a href="/how-dental-implants-work-and-functions-like-natural-teeth/">
                                  Dental implants{" "}
                                </a>{" "}
                                can greatly enhance your quality of life if
                                you wear dentures. They ensure that your
                                dentures stay put while you talk and eat,
                                leading to increased confidence in social
                                settings and the ability to enjoy your food
                                with ease. An implant-supported overdenture
                                is an ideal solution for those who have
                                experienced issues with unstable or
                                ill-fitting dentures. It attaches to special
                                dental implants that are surgically
                                implanted in the jawbone, providing a
                                reliable and secure closure for the denture.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>

                    <Container maxWidth="xxl" className="p-0">
                      <Box>
                        <Typography className="para">
                          Many people have discovered the advantages of
                          using dental implants to support their dentures.
                          Not only can they eat, speak and smile with
                          greater self-assurance, but the success rate and
                          longevity of implant-supported overdentures are
                          both high. It truly is a life-changing experience.{" "}
                        </Typography>
                        <Typography className="para">
                          As the word spreads about implant-supported
                          overdentures' effectiveness, it has become a
                          popular dental treatment option for many. If you
                          are considering this for yourself, speak to a
                          qualified professional who can assess your
                          situation and help you make the best decision.
                          Proper care and maintenance of your implants can
                          provide you with greater comfort and confidence in
                          life.
                        </Typography>
                        <Typography className="para">
                          Dental implants are renowned for their high
                          success rate among all implanted surgical devices.
                          If you're considering an implant-supported
                          overdenture, it's worth to note they are equipped
                          with special attachments that attach to the
                          implants.
                        </Typography>
                        <Typography className="para">
                          It is essential to take an implant-supported
                          overdenture out each night for cleaning. Doing
                          this not only keeps your dentures in top shape but
                          also allows you to properly clean your gums and
                          the implant fixtures.
                        </Typography>
                        <Typography className="para">
                          Millions of people who are missing teeth turn to{" "}
                          <a href="/the-complete-guideline-for-dentures/">
                            dentures{" "}
                          </a>{" "}
                          for a replacement. Having loose dentures in the
                          lower jaw area can be an incredibly frustrating
                          and embarrassing experience, as even the simplest
                          tasks, like eating, can become difficult when your
                          dentures slip and cause discomfort.
                        </Typography>
                      </Box>
                    </Container>
                    <Container maxWidth="xxl" className="p-0">
                      <Box mt={2}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Image src={Gum_ulcer} alt="smile" className="img-fluid" />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className="para" mt={1}>
                              Denture adhesives are not always helpful and
                              can lead to painful ulcers on your gums due to
                              the dentures constantly moving around.
                              Additionally, food can become stuck beneath
                              the dentures during meals, which can be
                              especially irritating.
                            </Typography>
                            <Typography className="para">
                              Fortunately, a dental implant can provide a
                              secure and stable foundation for your
                              dentures, eliminating the discomfort and
                              embarrassment often caused by loose dentures.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Container>
                    <Container maxWidth="xxl" className="p-0">
                      <Box>
                        <SectionalHeading
                          variant="h2"
                          title="Advantages of Denture Stabilisation"
                          color="var(--dark-blue)"
                        />
                        <List>
                          {[
                            "Enhancing the ability to chew can lead to a more varied diet, which in turn can contribute to improved total health.",
                            "Strengthens self-assurance and communication skills.",
                            "This minimizes gum irritation, leading to greater comfort.",
                            "No adhesives are needed for dentures, which eliminates the need to spend time and money on them.",
                            "Often involves the utilization of existing dentures.",
                            "The procedure is minimally invasive.",
                          ].map((item) => (
                            <ListItem key={item}>
                              <ListItemIcon>
                                <ArrowRightIcon
                                  style={{ color: "#117295" }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Container>
                    <section className="mt-md-5 mt-4">
                      <video width="100%" height="100%" controls autoPlay muted>
                        <source
                          src="/Services/implant-supported-dentures.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <InterestFree />
                      <TermsNCondition />
                    </section>
                    <section className="mt-md-5 mt-4 bg-grey">
                      <Container maxWidth="xxl" className="p-0">
                        <Box p={2}>
                          <div
                            className="sectional-heading1 text-center"
                            style={{ color: "var(--dark-blue)" }}
                          >
                            Book an appointment with Carrum Downs Dental
                            (100 Hall Road) on 03-9782 1200 for your wisdom
                            tooth extraction.
                          </div>
                          <Box
                            mt={2}
                            className="d-flex justify-content-center"
                          >
                            <BookAndCall appointment={true} call={true} />
                          </Box>
                        </Box>
                      </Container>
                    </section>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <CommonSidebar
                      isContactAvailable={true}
                      isServicesAvailable={true}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Implant;
