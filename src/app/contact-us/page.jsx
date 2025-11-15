import { Box, Button, Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import {
  CommonHero,
  CommonSidebar,
  SectionalHeading,
} from "../../components/components";
import Banner from "../../../public/carrum-new/banner/contact-us.jpg";
import Clinic from "../../../public/contact/clinic.jpeg";

const Contact = () => {
  const breacrumb = [
    { id: "contact_breadcrumb_1", link: null, title: "Contact Us" },
  ];

  return (
    <>
      <Head>
        <title>
          Contact Dentist in and around Carrum Downs | Walk in @Carrum Downs
          Clinic
        </title>
        <meta
          name="description"
          content="Don’t suffer from a dental problem! Get your dental problem treated by Carrum Downs Dental Group. We’re available at Carrum Downs and nearby localities."
        />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero
        bg={Banner}
        breadcrumb={breacrumb}
        title="Contact"
        color="#fff"
      />
      {
        <>
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <CommonSidebar isContactAvailable={true} />
                      </Grid>
                      <Grid item xs={12} md={6} className="mx-auto">
                        <Box p={1} component={Paper} className="shadow">
                          <Box>
                            <SectionalHeading
                              variant="h2"
                              align="center"
                              color="var(--dark-blue)"
                              title="Feedback Form"
                            />
                            <Box px={3} mt={5}>
                              <form
                                method="post"
                                action="https://formsubmit.co/d53a69bc539b96c63b2afdcb0767af8d"
                                encType="multipart/form-data"
                              >
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        name="username"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        name="userphone"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-control"
                                        name="useremail"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control rounded-0"
                                        id="exampleFormControlTextarea2"
                                        rows="2"
                                        placeholder="Your message"
                                        name="message"
                                        required
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  focusRipple
                                  fullWidth
                                  className="blueFilledBtn text-white font-weight-bold"
                                  type="submit"
                                  style={{ fontSize: "1.2rem !important" }}
                                >
                                  Submit
                                </Button>
                              </form>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box py={3} className="ratio ratio-16x9">
                          <iframe
                            title="mapIframe"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6280.462306060237!2d145.182101!3d-38.088283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1661849953993!5m2!1sen!2sin"
                            width="800"
                            height="600"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Image src={Clinic} alt="carrumdowns clinic" width={750} height={670}/>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </>
      }
    </>
  );
};

export default Contact;
