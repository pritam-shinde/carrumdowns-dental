"use client";
import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from "../../../components/components";

const assets = {
  image1: "/all-on-x/all_on_x_dental_implants.jpg",
  image2: "/all-on-x/all_on_x_versus_all_on_4_1.jpg",
  beforeAfter1: "/all-on-x/dr-ash.jpg",
  beforeAfter2: "/all-on-x/dr-ash-03.jpg",
  beforeAfter3: "/all-on-x/dr-ash-02.jpg",
  beforeAfter4: "/all-on-x/dr-ash-01.jpg",
  banner: "/carrum-new/banner/banner-all-on-x.jpg",
};

const AllOnX = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const breadcrumb = [
    { id: "DentalImplants_breadcrumb_1", link: "/service/", title: "Service" },
    {
      id: "DentalImplants_breadcrumb_2",
      link: null,
      title: "All-on-X Dental Implants",
    },
  ];

  const beforeAfterSlides = [
    { before: '/all-on-x/image_2.png', after: '/all-on-x/image_1.png' },
    { before: '/all-on-x/image_4.png', after: '/all-on-x/image_3.png' },
    { before: '/all-on-x/image_6.png', after: '/all-on-x/image_5.png' },
    { before: '/all-on-x/before-all-on-x.jpg', after: '/all-on-x/after-all-on-x.jpg' },
  ]
  return (
    <>
      <CommonHero
        bg={{ src: assets.banner }}
        breadcrumb={breadcrumb}
        title="All-on-X Dental Implants in Carrum Downs"
        align={isMobile ? "center" : "left"}
        color="#fff"
      />
      <main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl" className="p-0">
                          <Typography className="para">
                            Do you need a quality, long term solution to lost teeth? Technology of dental implantation has brought transformation into modern dentistry by providing long term and natural looking types of replacement that regain the health and performance of the mouth. In the event that you have lost one tooth, multiple teeth or a full set of teeth, an implant can provide a reliable and aesthetically pleasing solution to getting a healthy and confident smile.
                          </Typography>
                          <Typography className="para">
                            With all the facts about the benefits and significant factors in the dental implantation process in place, you will be able to make informed decisions on the type of tooth restoration options available to you and enjoy the long-lasting benefits of a new smile and a better life. In this guide, we will be discussing the different ways of dealing with loss of teeth and some of the remedies available to you.
                          </Typography>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <SectionalHeading
                              variant="h2"
                              title="Dental Implants"
                              align={isMobile ? "center" : "left"}
                              color="var(--dark-blue)"
                            />
                          </Box>
                          <Typography className="para mt-2">
                            The introduction of dental implantation has completely transformed the restorative dental practice as it offers lasting options to replace the lost teeth, with regard to oral functionality and aesthetics. As opposed to the conventional denture systems or bridgework, which is mounted on the gum tissue or is pegged on the adjacent teeth, implant is made up of titanium fixtures that are integrated into the bone structure of the jaw forming a strong support to the prosthetic dentition or the dental devices.
                          </Typography>
                          <Typography className="para">
                            These are biocompatible titanium fixtures that act as artificial tooth roots and make replacement teeth to be firmly fixed in place. The implementation process involves several steps, such as extensive oral health screening, a surgical procedure to place the fixture(s) into the jaw capacity, a rehabilitation period termed as osseointegration and the final process of permanently attaching custom-made teeth. Dental implantation provides a lasting, stable solution to teeth restoration that eliminates the need of having to change or replace the implant on a regular basis.
                          </Typography>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4 bg-grey">
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={3}>
                            <Box>
                              <SectionalHeading
                                variant="h2"
                                title="Advantages of Dental Implants"
                                align={isMobile ? "center" : "left"}
                                color="var(--dark-blue)"
                              />
                            </Box>
                            <Box className="mt-2">
                              <List>
                                <ListItem className="p-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Improved Stability</strong>}
                                    secondary="Dental fixtures provide unprecedented stability and support to dentition of the prosthetics through the process of integrating with the jaw structure through a process known as the process of osseointegration, enabling the dentition to perform natural mastication and speech."
                                  />
                                </ListItem>
                                <ListItem className="p-0 mt-1">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Preservation of Bone Health</strong>}
                                    secondary="Implant fixtures help to preserve bone density and prevent bone loss in the jaw to preserve facial structure and eliminate early signs of aging."
                                  />
                                </ListItem>
                                <ListItem className="p-0 mt-1">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Enhanced Aesthetics</strong>}
                                    secondary="Implant-mounted teeth are very similar to the appearance and functionality of natural dentition, and they provide the perfect smile that leads to confidence and self-esteem."
                                  />
                                </ListItem>
                              </List>
                            </Box>
                            <Typography className="para mt-1">
                              The ideal candidates of dental implantation should have a good overall oral health, sufficient jaw bone density and commitment to good oral health habits. However, the recent innovation in implant technology has helped many patients who may have oral health issues to undergo successful implantation procedures.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className='p-0'>
                          <SectionalHeading
                            variant="h2"
                            title="All-on-X Dental Implants"
                            align={"center"}
                            color="var(--dark-blue)"
                          />
                          <Box mt={3}>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={6}>
                                <Image src={assets.image1} alt="girl smiling" width={350} height={250} className="img-fluid" style={{ objectFit: "cover" }} />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className="para mt-2">
                                  All-on-X dental fixtures can be seen as a new solution to the problems of patients who have lost their teeth in large quantities or completely and would like to have a permanent and fixed restoration. This innovative approach will allow the restoration of a complete dental arch with only some strategically placed dental implants.
                                </Typography>
                              </Grid>
                              <Grid item xs={12} className="py-1">
                                <Typography className="para mt-1">
                                  All-on-X dental fixtures constitute a life-changing experience reinstating the functionality, enhancing aesthetics, and fostering confidence. With the use of advanced technology, and surgical procedures patients can now enjoy a fully functioning dentition without the use of removable denture systems. This treatment method provides a stable platform of replacement dentition, which makes individuals comfortable enough to eat, talk, and smile.
                                </Typography>
                                <Typography className="para">
                                  The All-on-X fixtures are holistic and thus, the patients can regain their life quality and enjoy a natural looking smile which is safe and comfortable. When considering dental implant options, call our dental clinic at Carrum Downs Dental Group. All-on-X could be the remedy to transforming your oral health and overall health.
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <SectionalHeading
                              variant="h3"
                              title="How Do All-on-X Dental Implants Work?"
                              align={isMobile ? "center" : "left"}
                              color="var(--dark-blue)"
                            />
                          </Box>
                          <Grid container spacing={4} className="mt-1 align-items-start">
                            <Grid item xs={12}>
                              <Box>
                                <Typography className="para mb-2">
                                  The All-on-X methodology places a series of dental fixtures (typically four to six) at key points across the jaw to support a full arch prosthesis.
                                </Typography>
                                <Typography className="para mb-0">
                                  Each fixture is strategically positioned to maximise bone support and deliver long-term stability, function, and comfort for the prosthetic teeth.
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4 bg-grey">
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={3}>
                            <Box>
                              <SectionalHeading
                                variant="h2"
                                title="Benefits of All-on-X Dental Implants"
                                align={isMobile ? "center" : "left"}
                                color="var(--dark-blue)"
                              />
                            </Box>
                            <Box className="mt-2">
                              <List>
                                <ListItem className="p-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Permanent Solution</strong>}
                                    secondary="All-on-X fixtures deliver a long-lasting, fixed resolution for missing dentition, removing the necessity for removable denture systems."
                                  />
                                </ListItem>
                                <ListItem className="p-0 mt-1">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Improved Stability</strong>}
                                    secondary="By securing the prosthesis to dental fixtures, All-on-X provides superior stability and mastication effectiveness compared to conventional denture systems."
                                  />
                                </ListItem>
                                <ListItem className="p-0 mt-1">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Preservation of Bone Density</strong>}
                                    secondary="Dental fixtures stimulate the jaw structure, assisting in preventing bone deterioration and maintaining facial architecture over extended periods."
                                  />
                                </ListItem>
                                <ListItem className="p-0 mt-1">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Enhanced Aesthetics</strong>}
                                    secondary="All-on-X prosthetics are custom-engineered to replicate the natural presentation of teeth, delivering a naturally-appearing smile."
                                  />
                                </ListItem>
                                <ListItem className="p-0 mt-1">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Convenience</strong>}
                                    secondary="All-on-X fixtures are also more secure than removable denture systems, as they are not removed, allowing people to speak and eat without worrying about their placement or pain."
                                  />
                                </ListItem>
                              </List>
                            </Box>
                            <Typography className="para mt-1">
                              All-on-X dental fixtures are an excellent solution to those seeking a permanent, fixed solution to a large loss of teeth. As it has been mentioned above, the perfect candidates tend to have the adequate bone mass to hold the fixtures and to be in good overall health. Nevertheless, it is possible to be qualified through examination by our dental specialists in Carrum Downs Dental Group.
                            </Typography>
                            <Typography className="para">
                              Overall, All-on-X dental fixtures are the revolutionary solution to those people that face the challenges of massive tooth loss. Their unparalleled stability, natural appearance and long term benefits provide a new feeling of confidence and quality of life to individuals seeking the ultimate solution to missing teeth.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <SectionalHeading
                              variant="h2"
                              title="All-on-X Versus All-on-4 Dental Implants"
                              align="center"
                              color="var(--dark-blue)"
                            />
                          </Box>
                          <Box mt={3}>
                            <Grid container>
                              <Grid item xs={12}>
                                <Image src={assets.image2} alt="smile" width={1600} height={900} style={{ width: "100%", height: "auto" }} />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className="para mt-2">
                                  There are two different ways of supporting a dental arch. All-on- X is a dental implant technique which utilizes at least four fixtures to support an entire dentition (maxillary or mandibular). The X in All-on-X means any number of fixtures over four; usually five to eight. The all-on-X fixtures are placed in strategic locations all over the jaw in areas where there is bone mass and angulation in order to stabilize and strengthen the prosthetic dentition.
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box mt={4}>
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={6}>
                                <Box p={3} sx={{ backgroundColor: '#f8f9fa', borderRadius: 2, height: '100%' }}>
                                  <SectionalHeading
                                    variant="h3"
                                    title="Advantages of All-on-X"
                                    align="center"
                                    color="var(--dark-blue)"
                                  />
                                  <List>
                                    <ListItem className="ps-0">
                                      <ListItemIcon className="mt-1">
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={<strong>Customization</strong>}
                                        secondary="All-on-X allows the use of additional fixtures (more than four fixtures) to increase the stability and reinforcement especially in situations where the bone mass is compromised."
                                      />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon className="mt-1">
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={<strong>Optimal Bone Support</strong>}
                                        secondary="With the use of numerous fixtures, All-on-X has evenly spread the masticatory forces, reducing the chances of the fixtures to break off and ensuring a stable performance in the long run."
                                      />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon className="mt-1">
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={<strong>Increased Flexibility</strong>}
                                        secondary="All-on-X provides the ability to use different numbers of fixtures which provides an increased flexibility in treatment planning to provide a customized approach based on the unique needs of each individual patient."
                                      />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Box p={3} sx={{ backgroundColor: '#f8f9fa', borderRadius: 2, height: '100%' }}>
                                  <SectionalHeading
                                    variant="h3"
                                    title="Advantages of All-on-4"
                                    align="center"
                                    color="var(--dark-blue)"
                                  />
                                  <List>
                                    <ListItem className="ps-0">
                                      <ListItemIcon className="mt-1">
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={<strong>Simplified Procedure</strong>}
                                        secondary="All-on-4 streamlines the implant process by employing only four fixtures, diminishing surgical duration and complexity compared to conventional implant methodologies."
                                      />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon className="mt-1">
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={<strong>Minimal Bone Requirements</strong>}
                                        secondary="All-on-4 is appropriate for patients with moderate to severe bone deterioration, as the angled positioning of fixtures often eliminates the requirement for bone augmentation procedures."
                                      />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon className="mt-1">
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={<strong>Immediate Functionality</strong>}
                                        secondary="In numerous circumstances, All-on-4 fixtures can support a provisional prosthesis immediately following placement, delivering patients with functional dentition on the identical day as surgery."
                                      />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                          <Typography className="para mt-3">
                            All-on-4 is a dental implantation procedure that uses four fixtures to retain an entire arch of dentition. All-on-4 is developed as an alternative to traditional implant methodologies and is constructed to provide a fixed and permanent solution to people who have lost significant amounts of teeth.
                          </Typography>
                          <Typography className="para">
                            All-on-4 fixtures are also calculated at certain angles to maximize bone contact and reduce the need of bone augmentation surgeries. The technology is an optimized way of using the existing bone volume, allowing the loading of the prosthesis immediately in many cases.
                          </Typography>
                        </Container>
                      </section>

                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl" className="p-3">
                          <SectionalHeading variant="h2" title="Before & After Results" align='left' color="var(--dark-blue)" />
                          <Typography align="left" className='para'>
                            Explore the transformations made possible by our all on x treatments.
                          </Typography>
                          <Box
                            mt={2}
                            sx={{
                              position: 'relative',
                              borderRadius: { xs: '20px', md: '28px' },
                              overflow: 'hidden',
                              border: '1px solid rgba(17, 114, 149, 0.2)',
                            }}
                          >
                            <Box
                              component="button"
                              type="button"
                              className="cnb-swiper-prev"
                              aria-label="Previous slide"
                              sx={{
                                position: 'absolute',
                                top: '50%',
                                left: { xs: 10, md: 16 },
                                transform: 'translateY(-50%)',
                                zIndex: 5,
                                width: { xs: 40, md: 46 },
                                height: { xs: 40, md: 46 },
                                borderRadius: '50%',
                                border: '1px solid rgba(17, 114, 149, 0.35)',
                                background: 'rgba(255,255,255,0.92)',
                                color: '#117295',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 0,
                                fontWeight: 700,
                                lineHeight: 1,
                                cursor: 'pointer',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.14)',
                                transition: 'all .2s ease',
                                '&:hover': { background: '#f3fbfe', transform: 'translateY(-50%) scale(1.06)' },
                                '&:focus-visible': { outline: '2px solid #117295', outlineOffset: '2px' },
                              }}
                            >
                              &#8592;
                            </Box>

                            <Box
                              component="button"
                              type="button"
                              className="cnb-swiper-next"
                              aria-label="Next slide"
                              sx={{
                                position: 'absolute',
                                top: '50%',
                                right: { xs: 10, md: 16 },
                                transform: 'translateY(-50%)',
                                zIndex: 5,
                                width: { xs: 40, md: 46 },
                                height: { xs: 40, md: 46 },
                                borderRadius: '50%',
                                border: '1px solid rgba(17, 114, 149, 0.35)',
                                background: 'rgba(255,255,255,0.92)',
                                color: '#117295',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 0,
                                fontWeight: 700,
                                lineHeight: 1,
                                cursor: 'pointer',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.14)',
                                transition: 'all .2s ease',
                                '&:hover': { background: '#f3fbfe', transform: 'translateY(-50%) scale(1.06)' },
                                '&:focus-visible': { outline: '2px solid #117295', outlineOffset: '2px' },
                              }}
                            >
                              &#8594;
                            </Box>

                            <Box sx={{ px: { xs: 4, sm: 6, md: 8 } }}>
                              <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                  prevEl: '.cnb-swiper-prev',
                                  nextEl: '.cnb-swiper-next',
                                }}
                                loop
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                spaceBetween={16}
                              >
                                {beforeAfterSlides.map((slide, index) => (
                                  <SwiperSlide key={`${slide.before}-${index}`}>
                                    <Box sx={{ py: { xs: 1, md: 2 } }}>
                                      <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                                        <Grid item xs={12} sm={6}>
                                          <Box
                                            sx={{
                                              height: '100%',
                                              p: 1,
                                              borderRadius: '18px',
                                              background: '#fff',
                                            }}
                                          >
                                            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '14px' }}>
                                              <Box
                                                sx={{
                                                  position: 'absolute',
                                                  top: 10,
                                                  left: 10,
                                                  zIndex: 2,
                                                  px: 1.25,
                                                  py: 0.4,
                                                  borderRadius: '999px',
                                                  bgcolor: 'rgba(17, 114, 149, 0.92)',
                                                  color: '#fff',
                                                  fontWeight: 700,
                                                  fontSize: {
                                                    xs: '0.65rem',
                                                    sm: '0.72rem',
                                                    md: '0.78rem'
                                                  },
                                                  letterSpacing: '0.03em',
                                                }}
                                              >
                                                BEFORE
                                              </Box>
                                              <Image
                                                src={slide.before}
                                                alt="Before treatment"
                                                width={1000}
                                                height={600}
                                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
                                              />
                                            </Box>
                                          </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                          <Box
                                            sx={{
                                              height: '100%',
                                              p: 1,
                                              borderRadius: '18px',
                                              background: '#fff',
                                            }}
                                          >
                                            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '14px' }}>
                                              <Box
                                                sx={{
                                                  position: 'absolute',
                                                  top: 10,
                                                  left: 10,
                                                  zIndex: 2,
                                                  px: 1.25,
                                                  py: 0.4,
                                                  borderRadius: '999px',
                                                  bgcolor: 'rgba(20, 160, 120, 0.92)',
                                                  color: '#fff',
                                                  fontWeight: 700,
                                                  fontSize: {
                                                    xs: '0.65rem',
                                                    sm: '0.72rem',
                                                    md: '0.78rem'
                                                  },
                                                  letterSpacing: '0.03em',
                                                }}
                                              >
                                                AFTER
                                              </Box>
                                              <Image
                                                src={slide.after}
                                                alt="After treatment"
                                                width={1000}
                                                height={600}
                                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', }}
                                              />
                                            </Box>
                                          </Box>
                                        </Grid>
                                      </Grid>
                                    </Box>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </Box>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <Box>
                              <SectionalHeading
                                variant="h3"
                                title="Choosing Between All-on-X and All-on-4"
                                align={isMobile ? "center" : "left"}
                                color="var(--dark-blue)"
                              />
                            </Box>
                            <Typography className="para mt-2">
                              All-on-X and All-on-4 are determined based on various factors such as bone mass, wellness of the mouth and treatment goals. Although All-on-X offers more options and flexibility, All-on-4 can be a more reasonable choice in case of limited bone mass or when the patient is interested in a minimalistic treatment procedure.
                            </Typography>
                            <Typography className="para">
                              All-on-X and All-on-4 dental implant procedures are both practical solutions to the restoration of a complete dentition and enhance the functioning and beauty of the mouth. With the proper understanding of the differences between these two methods and a visit to us at the Carrum Downs Dental Group, you will have an informed decision on the topic of tooth restoration treatment and get the best results in the state of your oral health and quality of life.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <Box mt={3}>
                              <Grid container spacing={3}>
                                <Grid item xs={6} md={6}>
                                  <Box
                                    sx={{
                                      position: "relative",
                                      width: "100%",
                                      aspectRatio: "4/4",
                                      borderRadius: 2,
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Image
                                      width={800}
                                      height={800}
                                      src={assets.beforeAfter1}
                                      alt="All-on-X smile transformation case 1"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        backgroundColor: "#f7f7f7",
                                      }}
                                    />
                                  </Box>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                  <Box
                                    sx={{
                                      position: "relative",
                                      width: "100%",
                                      aspectRatio: "4/4",
                                      borderRadius: 2,
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Image
                                      width={800}
                                      height={800}
                                      src={assets.beforeAfter2}
                                      alt="All-on-X smile transformation case 2"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        backgroundColor: "#f7f7f7",
                                      }}
                                    />
                                  </Box>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                  <Box
                                    sx={{
                                      position: "relative",
                                      width: "100%",
                                      aspectRatio: "4/4",
                                      borderRadius: 2,
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Image
                                      width={800}
                                      height={800}
                                      src={assets.beforeAfter3}
                                      alt="All-on-X smile transformation case 3"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        backgroundColor: "#f7f7f7",
                                      }}
                                    />
                                  </Box>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                  <Box
                                    sx={{
                                      position: "relative",
                                      width: "100%",
                                      aspectRatio: "4/4",
                                      borderRadius: 2,
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Image
                                      width={800}
                                      height={800}
                                      src={assets.beforeAfter4}
                                      alt="All-on-X smile transformation case 4"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        backgroundColor: "#f7f7f7",
                                      }}
                                    />
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box
                              mt={3}
                              sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 1024,
                                marginInline: { xs: "auto", md: 0 },
                                aspectRatio: "16/9",
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: 3,
                              }}
                            >
                              <iframe src="https://www.youtube.com/embed/Mg4zmrq9VsM" allow="autoplay; fullscreen"
                                allowFullScreen frameBorder="0" title="All-on-X Dental Implants Video"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  border: 0,
                                }}>
                              </iframe>
                            </Box>
                            <Grid container spacing={3} mt={0.5}>
                              <Grid item xs={12} md={6}>
                                <Box
                                  sx={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: 2,
                                  }}
                                >
                                  <iframe
                                    src="https://www.youtube.com/embed/LSxu5dpxG7k?modestbranding=1&rel=0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                    frameBorder="0"
                                    title="Patient Testimonial 1"
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%",
                                      border: 0,
                                    }}
                                  />
                                </Box>
                              </Grid>

                              <Grid item xs={12} md={6}>
                                <Box
                                  sx={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: 2,
                                  }}
                                >
                                  <iframe
                                    src="https://youtube.com/embed/Yz9WuLXHkn8?modestbranding=1&rel=0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    frameBorder="0"
                                    title="Patient Testimonial 2"
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%",
                                      border: 0,
                                    }}
                                  />
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4 bg-grey">
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={3}>
                            <Box>
                              <SectionalHeading
                                variant="h2"
                                title="Partnership with Our Local Dental Laboratory"
                                align={isMobile ? "center" : "left"}
                                color="var(--dark-blue)"
                              />
                            </Box>
                            <Typography className="para mt-2">
                              At Carrum Downs Dental Group, outstanding All-on-X outcomes come from combining clinical precision with exceptional laboratory craftsmanship. That is why we partner with a leading Melbourne-based dental laboratory focused on advanced implant prostheses and full-arch restorations.
                            </Typography>
                            <Typography className="para">
                              Our laboratory partner uses modern CAD/CAM workflows and digital manufacturing to deliver highly accurate All-on-X prosthetics. Their intraoral photogrammetry technology captures precise implant positions digitally, reducing the need for traditional impressions and making treatment more comfortable.
                            </Typography>
                            <Box mt={2}>
                              <Typography className="para">
                                <strong>This collaboration allows us to provide several key advantages:</strong>
                              </Typography>
                              <List>
                                <ListItem className="ps-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>100% Australian-Designed Quality</strong>}
                                    secondary="All prosthetics are made locally using TGA-tested materials by experienced technicians with deep expertise in implant dentistry."
                                  />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Digital Precision</strong>}
                                    secondary="From digital scanning to final prosthesis, the workflow supports micron-level accuracy and consistent, high-detail full-arch outcomes."
                                  />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Overall Quality Assurance</strong>}
                                    secondary="Each restoration is validated across multiple models to support ideal fit, function, and repeatable results with minimal adjustments."
                                  />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Quick Process</strong>}
                                    secondary="Efficient digital workflows and close team communication help keep treatment on schedule and prosthetics delivered on time."
                                  />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Long-term Warranty</strong>}
                                    secondary="Comprehensive warranty coverage reflects confidence in material quality and workmanship, giving you peace of mind in your investment."
                                  />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon className="mt-1">
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Customized Service</strong>}
                                    secondary="Our smile designers and clinical team work together to create prosthetics that perform reliably while achieving natural gingival contours and facially balanced aesthetics."
                                  />
                                </ListItem>
                              </List>
                            </Box>
                            <Typography className="para">
                              This partnership reflects our commitment to high-quality All-on-X treatment by uniting clinical excellence with advanced laboratory design. In many cases, the journey from digital planning to final prosthesis can be completed in as few as two visits, helping you enjoy your new smile sooner.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <Box>
                              <SectionalHeading
                                variant="h2"
                                title="Dentures Versus Dental Implants"
                                align={isMobile ? "center" : "left"}
                                color="var(--dark-blue)"
                              />
                            </Box>
                            <Typography className="para mt-2">
                              Conventional denture appliances are often more affordable in the short run than dental fixtures, and thus a more cost-effective choice of tooth replacement. As compared to dental implants, dentures do not require any surgical procedure to be placed, and that is why they are an option among those who are not eligible to undergo implantation surgeries. Dentures are also easily removable to clean and maintain making them convenient to some people.
                            </Typography>
                            <Typography className="para">
                              Nevertheless, the drawbacks of dentures are also the possible absence of stability, they can move or push aside during eating and talking, which causes pain and can be embarrassing. Also, dentures do not provoke the growth of the jaw system in the same manner as dental fittings and cause a gradual loss of bone in the long run and changes in the structure of the faces. Dental implants on the other hand, work exactly like the natural dentition. They provide stability, durability and functionality that can greatly enhance the quality of life of people who have lost teeth.
                            </Typography>
                            <Typography className="para">
                              Dental fixtures with proper maintenance have the capacity to outlive any age as they can enable patients to maintain normal eating, talking, and smiling. The choice of using dental implantation as a method of restoring teeth can improve the quality of lives of people by making them happier and healthier.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <SectionalHeading
                              variant="h2"
                              title="Bottom Line"
                              align={isMobile ? "center" : "left"}
                              color="var(--dark-blue)"
                            />
                          </Box>
                          <Typography className="para mt-2">
                            Dental implantation may be the life-changing solution to the person seeking to recover his/her smile and confidence. The Carrum Downs Dental Group have a team of dental professionals dedicated to offering full-time assistance and advice to you through the entire process. Throughout the initial consultation to the actual placement of your fixtures we are committed to ensuring that you feel comfortable and happy throughout the entire process.
                          </Typography>
                          <Typography className="para">
                            Your All-on-X prosthetics will be made using the best available local materials, as a result of our strategic alliance with one of the leading local dental laboratories, with high precision of the work done under the influence of the latest computer technologies and high-quality Australian materials. This reciprocal practice would allow us to provide excellent clinical and cosmetic results that are beyond the norms.
                          </Typography>
                          <Typography className="para">
                            All-on-X, All-on-4, or traditional dental implant solutions, regardless, our team of experts will guide you on the most effective solution to your specific situation, financial, and appearance needs. We know that the loss of teeth may greatly affect your confidence and quality of life and we are going to enable you to regain both.
                          </Typography>
                          <Typography className="para">
                            You can reach out to Carrum Downs Dental Group with the questions or concerns that you have. Our mission is to help you get the healthy beautiful smile you have always wanted and to take you through the entire process of getting implants with care, professionalism and the latest technology.
                          </Typography>
                        </Container>
                      </section>

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
                              Book an appointment with Carrum Downs Dental (100
                              Hall Road) on 03-9782 1200 for your wisdom tooth
                              extraction.
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

export default AllOnX;

