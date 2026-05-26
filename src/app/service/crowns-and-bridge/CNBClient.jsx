"use client";

import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Image from 'next/image'
import Script from 'next/script'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Banner from '../../../../public/carrum-new/banner/crown-briedge.jpg'
import CNBTeeth from '../../../../public/CNB/defective-large-old-fillings.jpg'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const CNBClient = () => {
  const breadcrumb = [
    { id: "CrownsBridges_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "CrownsBridges_breadcrumb_2", link: null, title: 'Crowns and bridge in Carrum Downs' }
  ]

  const beforeAfterSlides = [
    { before: '/CNB/before.jpg', after: '/CNB/after.jpg' },
    { before: '/CNB/crown-before3.jpg', after: '/CNB/crown-after-3.jpg' },
    { before: '/CNB/crown-before2.jpg', after: '/CNB/crown-after2.jpg' },
    { before: '/CNB/crown-before-5.jpg', after: '/CNB/crown-after-5.jpg' },
  ]

  return (
    <>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dental Crowns and Bridges: Long-Lasting Solutions for Teeth" color="#fff" />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl" className='p-0'>
                        <SectionalHeading variant="h2" title="Crowns and Bridges – The Ultimate Tooth Restoration" align='left' color="var(--dark-blue)" />
                        <Box mt={3}>
                          <Grid container spacing={5}>
                            <Grid item xs={12} className="d-flex justify-content-center align-items-center">
                              <Image src={CNBTeeth} alt="Crown Bridge Carrum Downs" />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography className='para'>A dental crown is a tooth-shaped “cap” that fits snuggly over a tooth, completely covering it. Usually a crown is required to restore the size, shape, strength, or appearance of a tooth. Crowns fix these issues by encasing the visible portion of the tooth that lies above the gumline.</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box mb={3}>
                          <Box sx={{
                            position: 'relative', width: '100%', paddingTop: '56.25%', marginTop: '1rem', borderRadius: 2, overflow: 'hidden', boxShadow: 3
                          }}>
                            <iframe src="//fast.wistia.net/embed/iframe/pjr9eyxjjw?playerColor=8c8c8c&videoFoam=true" allow="autoplay; fullscreen"
                              allowFullScreen frameBorder="0" title="Root Canal Video" className="wistia_embed"
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
                        </Box>
                      </Container>
                      {/* Asynchronous script for Wistia */}
                      <Script
                        src="//fast.wistia.net/assets/external/iframe-api-v1.js"
                        strategy="lazyOnload"
                      />
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Container maxWidth="xxl" className="p-0">
                        <Box p={3}>
                          <SectionalHeading variant="h2" title="A Crown may be needed in the following situations" align='left' color="var(--dark-blue)" />
                          <Box mt={3}>
                            <Box mb={2}>
                              <SectionalHeading variant="h3" title="Defective Large Old Fillings." align='left' color="var(--dark-blue)" />
                              <Typography className='para'>If a large, old filling is decayed, leaking, defective, or broken and needs replacement, sometimes the tooth cannot securely hold an even larger filling, and a crown is needed to fill out the tooth’s shape.</Typography>
                            </Box>
                            <Box mb={2}>
                              <SectionalHeading variant="h3" title="Broken Teeth" align='left' color="var(--dark-blue)" />
                              <Typography className='para'>If there is insufficient remaining natural tooth structure to hold a filling, a crown is needed.</Typography>
                            </Box>
                            <Box mb={2}>
                              <SectionalHeading variant="h3" title="Root Canal Treated Teeth" align='left' color="var(--dark-blue)" />
                              <Typography className='para'>Back teeth that have had a root canal should almost always be capped to prevent the weakened root canal-treated tooth from suffering catastrophic cracks.</Typography>
                            </Box>
                            <Box>
                              <SectionalHeading variant="h3" title="Mal aligned Teeth" align='left' color="var(--dark-blue)" />
                              <Typography className='para'>We can sometimes do instant orthodontics by preparing mal aligned front teeth and inserting crowns over top in a more ideal position to give you a beautiful smile.</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-4'>
                      <Container maxWidth="xxl" className='p-0'>
                        <SectionalHeading variant="h3" title="What are crowns made from?" align='left' color="var(--dark-blue)" />
                        <Typography className='para'>Crowns can be made from a variety of materials. They can be made from plastic, ceramic or metal alloys. A combination of metal and ceramic is also possible to maximise strength and simulate the appearance of natural teeth.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Box p={3}>
                        <Container maxWidth="xxl" className='p-0'>
                          <SectionalHeading variant="h3" title="Procedure followed at Carrum Downs Dental Group for your Crown preparation" align='left' color="var(--dark-blue)" />
                          <Box>
                            <List>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary="On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the crown is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary="On your second visit, the teeth receiving crown is prepared. This involves reduction of the tooth size (usually under local anaesthesia) followed by an impression or mould of the prepared tooth. This trimming of the tooth is required to create space for the crown to be fitted. The mould taken is then sent to a laboratory where skilled technicians will fabricate the crown. In the meantime, a temporary crown is made and fitted onto the trimmed tooth." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary="On the third visit, the temporary crown is removed and the tooth surface is cleaned. The completed crown is tied on to the teeth, checked for correct bite fit and appearance. The crown is strongly cemented to the teeth." />
                              </ListItem>
                            </List>
                          </Box>
                        </Container>
                      </Box>
                    </section>
                    <section className='mt-md-5 mt-4'>
                      <Container maxWidth="xxl" className='p-0'>
                        <SectionalHeading variant="h2" title="Bridges" align='left' color="var(--dark-blue)" />
                        <Typography className='para'>A bridge is designed to literally bridge a gap between one or more missing teeth. A bridge is cemented to the teeth adjacent to the gap.</Typography>
                        <Box>
                          <List>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                              </ListItemIcon>
                              <ListItemText primary="Restores your natural beautiful smile. Bridges are designed to restore the aesthetics of your smile and Bridges help maintain the shape of your face so that cheeks do not sink where teeth are missing. And they can prevent teeth from drifting out of position." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                              </ListItemIcon>
                              <ListItemText primary="Restored functionality of your mouth. Bridges help restore the functionality of the mouth, allowing you to eat and speak properly. Bridges can help distribute bite forces by replacing missing teeth" />
                            </ListItem>
                          </List>
                        </Box>
                      </Container>
                    </section>

                    <section className='mt-md-5 mt-4'>
                      <Container maxWidth="xxl" className="p-3">
                        <SectionalHeading variant="h2" title="Before & After Results" align='left' color="var(--dark-blue)" />
                        <Typography align="left" className='para'>
                          Explore the transformations made possible by our crowns and bridges treatments.
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

                    <section className='mt-md-5 mt-4'>
                      <Container maxWidth="xxl" className='p-0'>
                        <SectionalHeading variant="h2" title="Procedure followed at Carrum Downs Dental Group for your Bridge preparation" align='left' color="var(--dark-blue)" />
                        <Box className="ratio ratio-16x9" mt={3}>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/cAAq6NWuWQQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Container maxWidth="xxl" className='p-0'>
                        <Box p={3}>
                          <SectionalHeading variant="h2" title="Similar to Crown, Bridge preparation also needs three visits." align='left' color="var(--dark-blue)" />
                          <Box>
                            <List>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the bridge is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="On your second visit, the teeth that serve as abutments are prepared for their crown. After the tooth has been reshaped, an impression of the area will be made. These impressions are used to fabricate a custom bridge. Your dentist may make a temporary bridge for you to wear in order to protect the exposed teeth and gums while your bridge is being made." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="On the third visit, the temporary bridge is removed and the tooth surface is cleaned. The completed bridge is tied on to the teeth, checked for correct bite fit and appearance. The bridge is strongly cemented to the teeth." />
                              </ListItem>
                            </List>
                          </Box>
                          <Box>
                            <BookAndCall appointment={true} call={true} />
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
                                    How long do a bridge and crown last?
                                  </button>
                                </h3>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>A crown or bridge should last between 7 to 8 years. A correctly done crown and bridge could even last for a decade if the person is keen on oral hygiene and checks with the dentist every year for cleaning and follow-up. Although rare, well-maintained crowns and bridges could last a lifetime.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How many types of dental crowns are there?
                                  </button>
                                </h3>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Dental crowns are of four different types: Ceramic (porcelain-based), Porcelain fused to metal, gold alloys and base metal alloys.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can we floss the crowns and bridges?
                                  </button>
                                </h3>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Yes. You should brush and floss your crown and bridge regularly to keep your mouth clean. However, during the first 24 hours after being placed, do not pull the thread through the gumline as this can loosen the crown.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingFour">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How much do a bridge and dental crown cost?
                                  </button>
                                </h3>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Cost of crown will be between $1200 to $1600 depending on the material used. The Cost of bridge will depend on the number of units and the material used. For a 3-unit bridge it normally ranges between $4500 to $4900. Every patient is different and hence the cost would vary depending on every circumstance.</p>
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
                          <div className='sectional-heading1 text-center' style={{ color: "var(--dark-blue)" }} >Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction.</div>
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
      </main >
    </>
  )
}

export default CNBClient;
