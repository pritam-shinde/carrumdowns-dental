"use client";

import { CommonSidebar, SectionalHeading } from "@/components/components";
import useClientWidth from "@/hooks/useClientWidth"; // our reusable hook
import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutClient({ banner, insurance }) {
  const { width, ready } = useClientWidth();

  if (!ready) return null; // avoid hydration mismatch

  return (
    <main>
      <Container maxWidth="xxl">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
            <Box py={5}>
              <Grid container spacing={5}>
                <Grid item xs={12} lg={8}>
                  {/* About Text Section */}
                  <section>
                    <Container maxWidth="xxl">
                      <Typography className="para">
                        At Carrum Downs Dental at Shop T5, 100 Hall Road we are committed
                        to applying our dental knowledge and skills in a caring and gentle way…
                      </Typography>
                      <Typography className="para">
                        Through excellent preventive, restorative, and cosmetic dentistry…
                      </Typography>
                      <Typography className="para">
                        We are great with kids; our dentists love working with kids…
                      </Typography>
                      <iframe
                        width="100%"
                        height="355"
                        src="https://www.youtube.com/embed/jwFUzYPjRDM?si=iHaV_i7I-8lPpY7u"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </Container>
                  </section>

                  {/* "We are different" Section */}
                  <section className="mt-md-5 mt-4 bg-grey">
                    <Container maxWidth="xxl">
                      <Box p={1}>
                        <SectionalHeading
                          title="We are different"
                          variant="h2"
                          color="var(--dark-blue)"
                          align={width < 600 ? "center" : "left"}
                        />
                        <List className="p-0">
                          {[
                            {
                              title: "After Hours:",
                              desc: "Open 6 days, same day and late afternoon appointments available.",
                            },
                            {
                              title: "We are affordable:",
                              desc: "Due to efficient management we have cut down on our overheads...",
                            },
                            {
                              title: "No rushing of appointment:",
                              desc: "We provide each patient with sufficient time...",
                            },
                            {
                              title: "Easy Parking:",
                              desc: "In The Village Carrum Downs parking is easy...",
                            },
                            {
                              title: "We are Transparent:",
                              desc: "Our dentists will always provide you with a treatment plan...",
                            },
                            {
                              title: "Training and Continuing education:",
                              desc: "Every member of the team fulfils his or her responsibility...",
                            },
                            {
                              title: "A Clean and Safe practice:",
                              desc: "We take no shortcuts. We go above and beyond ADA standards.",
                            },
                          ].map((item, index) => (
                            <ListItem key={index} className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <strong style={{ color: "var(--dark-blue)" }}>
                                    {item.title}
                                  </strong>
                                }
                                secondary={item.desc}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Container>
                  </section>

                  {/* Insurance Section */}
                  <section className="mt-md-5 mt-4">
                    <Container maxWidth="xxl">
                      <Image src={insurance} alt="insurance" />
                      <Typography>
                        <strong>
                          Give our friendly reception a call on 03-9782 1200 to book your appointment.
                        </strong>
                      </Typography>
                    </Container>
                  </section>
                </Grid>

                {/* Sidebar */}
                <Grid item xs={12} lg={4}>
                  <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
