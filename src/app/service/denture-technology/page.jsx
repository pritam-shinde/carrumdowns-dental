import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from "@/components/components";
import DentureTabs from "@/components/other/DentureTabs";
import Banner from "../../../../public/carrum-new/banner/denture-technology-bg.jpg";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

export const metadata = {
  title: "Denture Technology in Carrum Downs | Carrum Downs Dentist",
  description:
    "Discover the future of dentures at Carrum Downs Dental Group. Our advanced dentures technology ensures a precise fit, natural look, and long-lasting comfort.",
  robots: "index",
};

export default function DentureTechnologyPage() {
  const breadcrumb = [
    { id: "DentureTechnology_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DentureTechnology_breadcrumb_2", link: null, title: "Denture Technology in Carrum Downs" },
  ];

  return (
    <>
      <CommonHero
        bg={Banner}
        breadcrumb={breadcrumb}
        title="Denture Technology in Carrum Downs"
        align="left"
        color="#fff"
      />

      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl">
                        <Box mt={2}>
                          <Typography className="para">
                            Have you tried removable false teeth made of acrylic(plastic),
                            nylon, and metal? Well, they are called Dentures.{" "}
                          </Typography>
                          <Typography className="para">
                            They fit snugly over your gums and eliminate the problems that
                            happen due to gaps.
                          </Typography>
                        </Box>
                        <SectionalHeading
                          variant="h2"
                          title="Carrum Downs Dental: We promise to deliver smiles!"
                          align="left"
                          color="var(--dark-blue)"
                        />
                        <Box mt={2}>
                          <Typography className="para">
                            Because we are highly comfortable for all those who fear visiting
                            any dentist. We promise to give you a good smile with a painless
                            experience.
                          </Typography>
                          <Typography className="para">
                            Also, our treatment will last longer if you are committed to your
                            appointments and take minor care. Also, getting accustomed to
                            wearing dentures takes time. So, new denture wearers may find it
                            uncomfortable initially. But this will automatically settle down.
                            All you need to have is enough patience for dentures to show
                            wonders.
                          </Typography>
                        </Box>
                        <Box my={3}>
                          <Typography className="para">
                            The following dental treatments are available at Carrum Downs
                            Dental:
                          </Typography>
                          <List>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="Traditional Denture, which is made available using various materials." />
                            </ListItem>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <>
                                    <a
                                      href="service/digital-dentures"
                                      className="bg-blue"
                                    >
                                      Digital dentures{" "}
                                    </a>{" "}
                                    are made available by using the latest technology
                                    which is easy to wear.
                                  </>
                                }
                              />
                            </ListItem>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="Implant-stabilized overdentures which holds in place by implants." />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>

                    {/* Client Component for Tabs */}
                    <DentureTabs />

                    {/* Bottom Sections */}
                    <section className="mt-md-5 mt-4">
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
                            Book an appointment with Carrum Downs Dental (100 Hall Road) on
                            03-9782 1200 for your wisdom tooth extraction.
                          </div>
                          <Box mt={2} className="d-flex justify-content-center">
                            <BookAndCall appointment={true} call={true} />
                          </Box>
                        </Box>
                      </Container>
                    </section>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
