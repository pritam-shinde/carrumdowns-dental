import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Banner from '../../../../public/carrum-new/banner/teeth-emergency-bg.jpg'

const DentalEmergency = () => {

  const breadcrumb = [
    { id: "DentalEmergency_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DentalEmergency_breadcrumb_2", link: null, title: 'Dental Emergency in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Emergency Dentist in and around Carrum Downs & other Suburbs</title>
        <meta name="description" content="Need urgent dental care in Carrum Downs? Our expert emergency dentists provide fast, reliable treatment to relieve pain and handle dental emergencies." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Emergency Dental Care for Fast, Trusted Relief" align="left" color="#fff" />
      <>
        <main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl" className='p-0'>
                          <SectionalHeading variant="h2" title="Dental Emergency" align='left' color="var(--dark-blue)" />
                          <Box sx={{
                            position: 'relative', width: '100%', paddingTop: '56.25%', marginTop: '1rem', borderRadius: 2, overflow: 'hidden',
                            boxShadow: 3, mb: 2
                          }}>
                            <iframe src="//fast.wistia.net/embed/iframe/pjkwm6m89d?playerColor=8c8c8c&videoFoam=true" allow="autoplay; fullscreen"
                              allowFullScreen
                              frameBorder="0"
                              title="Wisdom Teeth Video"
                              className="wistia_embed"
                              style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0,
                              }}></iframe>
                          </Box>
                          <Typography className='para mt-2'>
                            Nothing is worse than having an issue with your tooth. The pain which can be experienced can often be excruciating, plus some tooth problems can be quite dangerous. When you've got a dental emergency, it is extremely important that you look into the problem as soon as you can and seek treatment from a trusted emergency dentist.
                          </Typography>
                          <Typography className='para'>
                            As the leading emergency dental clinic in Carrum Downs, we understand that dental emergencies can occur at any time and cause significant pain and distress. Our experienced team provides immediate emergency dental care to patients throughout the South Eastern suburbs of Melbourne, ensuring you receive the urgent attention your condition requires.
                          </Typography>
                        </Container>
                        {/* Asynchronous script for Wistia */}
                        <Script
                          src="//fast.wistia.net/assets/external/iframe-api-v1.js"
                          strategy="lazyOnload"
                        />
                      </section>
                      <section className='mt-md-5 mt-4 bg-grey'>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box p={3}>
                            <SectionalHeading
                              variant="h2"
                              title="Some of the common dental emergencies include:"
                              align='left'
                              color="var(--dark-blue)"
                            />
                            <Box>
                              <List>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Broken Teeth"
                                    secondary="Whether from trauma, biting hard objects, or dental decay, broken teeth require immediate attention to prevent infection and further damage."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Knocked Out Teeth"
                                    secondary="Quick action from an emergency dentist within 30 minutes dramatically increases the chances of successfully reimplanting the tooth."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Abscess or Swelling"
                                    secondary="These infections can be life-threatening if left untreated and require immediate emergency dental treatment."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Lost or Broken Dentures"
                                    secondary="Broken dentures can affect eating, speaking, and confidence, requiring urgent repair."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Lost or Broken Fillings"
                                    secondary="Exposed teeth are vulnerable to further decay and sensitivity, needing prompt attention."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Broken Crown"
                                    secondary="A damaged crown leaves the underlying tooth structure exposed and susceptible to damage."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Broken or Loose Implants"
                                    secondary="While rare, implant issues require immediate evaluation to prevent complications."
                                  />
                                </ListItem>

                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary="Impacted or Wisdom tooth"
                                    secondary="Severe pain, swelling, or infection around wisdom teeth often constitutes a true dental emergency."
                                  />
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Container>
                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="lg">
                          <Box>
                            <SectionalHeading variant="h2" title=" Why Choose Carrum Downs Dental for Your Emergency?" align='left' color="var(--dark-blue)" />

                            <Typography className="para text-left mt-2">
                              When searching for an emergency dentist near me, patients choose Carrum Downs Dental because we offer:
                            </Typography>

                            <Box className="mb-4">
                              <Typography
                                variant='h3'
                                className="mb-2 fw-semibold fs-4">
                                Immediate Care When You Need It Most
                              </Typography>
                              <Typography variant="body1">
                                Carrum Downs Dental Group's policy is to cater for all dental emergencies during our working hours. Our dentists take the best effort to see all dental emergencies with immediate or same-day appointments. We understand that when you need urgent dental care near me, waiting isn't an option.
                              </Typography>
                            </Box>

                            <Box className="mb-4">
                              <Typography variant='h3' className="mb-2 fw-semibold fs-4">
                                Comprehensive Emergency Services
                              </Typography>
                              <Typography variant="body1">
                                Our emergency dental clinic is equipped with state-of-the-art technology to handle all types of dental emergencies. From routine extractions to complex trauma cases, our experienced team provides the highest quality emergency dental care available in the Carrum Downs area.
                              </Typography>
                            </Box>

                            <Box className="mb-4">
                              <Typography variant='h3' className="mb-2 fw-semibold fs-4">
                                Accessible Location
                              </Typography>
                              <Typography variant="body1">
                                Conveniently located in Carrum Downs, our practice serves as the go-to emergency dental clinic for residents throughout the South Eastern suburbs. When you need an emergency dentist near me, our central location ensures you can reach us quickly during your time of need.
                              </Typography>
                            </Box>

                            <Box className="mb-4">
                              <Typography variant='h3' className="mb-3 fs-4 fw-semibold">
                                What to Do in a Dental Emergency
                              </Typography>
                              <Typography className="mb-3 para">
                                While seeking immediate professional care is crucial, here's what you can do before reaching our emergency dental clinic:
                              </Typography>
                              <Typography className="fw-semibold mb-2 fs-4">
                                For Knocked-Out Teeth:
                              </Typography>
                              <List className="mb-3">
                                {[
                                  'Handle the tooth by the crown, never the root',
                                  'Rinse gently if dirty, but don’t scrub',
                                  'Try to place the tooth back in its socket',
                                  'If that’s not possible, keep it moist in milk',
                                  'Seek emergency dental treatment immediately',
                                ].map((text, index) => (
                                  <ListItem key={index} disableGutters>
                                    <ListItemIcon sx={{ minWidth: '32px' }}>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                  </ListItem>
                                ))}
                              </List>

                              <Typography className="fw-semibold mb-2 fs-4">
                                For Severe Pain:
                              </Typography>
                              <List>
                                {[
                                  'Rinse with warm salt water',
                                  'Apply a cold compress outside the mouth',
                                  'Take over-the-counter pain relievers as directed',
                                  'Avoid placing aspirin directly on the tooth',
                                  'Contact our emergency dentist as soon as possible',
                                ].map((text, index) => (
                                  <ListItem key={index} disableGutters>
                                    <ListItemIcon sx={{ minWidth: '32px' }}>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                  </ListItem>
                                ))}
                              </List>
                            </Box>

                            <Box className="mb-4">
                              <Typography variant='h3' className="mb-2 fw-semibold fs-4">
                                Same-Day Emergency Appointments
                              </Typography>
                              <Typography variant="body1">
                                When you need an emergency dentist near me open now, Carrum Downs Dental prioritizes urgent cases. Our streamlined appointment system ensures you receive prompt attention for your dental emergency near me. We maintain flexible scheduling to accommodate emergency patients during regular business hours.
                              </Typography>
                            </Box>

                            <Box className="mb-4">
                              <Typography variant='h3' className="mb-2 fw-semibold fs-4">
                                After-Hours Emergency Care
                              </Typography>
                              <Typography variant="body1">
                                If you are in a dental emergency and in need of immediate dental care outside our regular hours, please call our clinic on <strong> <a href="tel:03-9782-1200" >(03) 9782 1200</a></strong> to book your emergency dentist appointment. Carrum Downs Dental is happy to serve your dental emergency without any extra cost during regular hours.
                              </Typography>
                            </Box>
                          </Box>
                        </Container>

                      </section>

                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <Box>
                            <Box>
                              <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
                            </Box>
                            <Box mt={3}>
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      When is it a dental emergency?
                                    </button>
                                  </h3>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>
                                        It's any dental problem that requires immediate treatment to alleviate severe pain, excessive bleeding, or save a tooth. This includes avulsed teeth, damaged fillings or crowns, loose or cracked teeth, and life-threatening infections.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      How much is the emergency dental treatment?
                                    </button>
                                  </h3>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>The cost varies depending on the type of emergency and treatment required. We provide transparent pricing and discuss all costs before beginning treatment. Many emergency procedures are covered by health insurance.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Can you go to the hospital for a dental emergency?
                                    </button>
                                  </h3>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>
                                        While hospitals can manage pain and infections, most lack dental specialists. It's best to contact an emergency dentist for proper dental care.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      Does health insurance cover emergency dental?
                                    </button>
                                  </h3>
                                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>
                                        Many health insurance plans include emergency <Link href="/medicare-what-dental-services-are-covered-in-medicare/">dental coverage</Link>. We recommend checking with your provider and can assist with insurance claims.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <InterestFree />
                        <TermsNCondition />
                      </section>

                      <section className='mt-md-5 mt-4 bg-grey'>
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={2}>
                            <div className='sectional-heading1 text-center' style={{ color: "var(--dark-blue)" }}>
                              Don't Wait – Get Help Now
                            </div>
                            <p className="text-center mt-3">
                              When you're searching for an emergency dentist in Carrum Downs, remember that prompt treatment can mean the difference between saving and losing a tooth. Our dedicated team is ready to provide immediate relief and professional care for your dental emergency.
                            </p>
                            <p className="text-center">
                              Book an appointment with Carrum Downs Dental (100 Hall Road) on <strong>03-9782 1200</strong> for your emergency dental needs.
                            </p>
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
    </>
  )
}

export default DentalEmergency