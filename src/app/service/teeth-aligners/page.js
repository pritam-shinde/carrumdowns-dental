import { CheckCircleOutline } from '@mui/icons-material'
import CircleIcon from "@mui/icons-material/Circle"
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Banner from '../../../../public/invisalign/invisalign-bg.jpg'
import TeethAligners from '../../../../public/TeethWhitening/teeth-aligners.jpg'

const TeethAligner = () => {
  const breadcrumb = [
    { id: "Invisalign_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "Invisalign_breadcrumb_2", link: null, title: 'Teeth Aligners' }
  ]

  const steps = [
    {
      title: '1. Precision Planning',
      description: `Treatment begins with a detailed 3D scan of your teeth, allowing for precise mapping of your current dental alignment and the creation of a customized treatment plan.`,
    },
    {
      title: '2. Gradual Movement',
      description: `Each set of tooth aligners is designed to make specific, small adjustments to the position of your teeth. The aligners apply carefully controlled forces to move teeth in the right direction.`,
    },
    {
      title: '3. Sequential Progression',
      description: `You'll wear each set of aligners for approximately 1-2 weeks before progressing to the next set in the series. Each new set builds on the movement achieved by the previous aligners.`,
    },
    {
      title: '4. Consistent Pressure',
      description: `The aligners for teeth exert gentle, constant pressure on specific teeth to guide them into their new positions according to your personalized treatment plan.`,
    },
  ];

  const treatmentSteps = [
    {
      title: 'Initial Consultation',
      intro: (
        <>
          Your journey to a straighter smile begins with a thorough{' '}
          <Link href="/contact-us/" style={{ color: '#117295', textDecoration: 'underline' }}>
            consultation at Carrum Downs Dental
          </Link>
          . During this visit:
        </>
      ),
      items: [
        'Your dentist will examine your teeth, gums, and overall oral health',
        'Digital scans or impressions will be taken to create a 3D model of your teeth',
        'Your specific concerns and smile goals will be discussed',
        'Your dentist will determine if invisible teeth aligners are suitable for your case',
        'A personalized treatment plan will be developed if you\'re a candidate for aligner therapy',
      ],
    },
    {
      title: 'Custom Treatment Planning',
      intro: 'Following your consultation, if teeth aligners are right for you:',
      items: [
        'The digital impressions or scans of your teeth will be used to design your custom treatment plan',
        'Advanced software will map out the precise movement of each tooth throughout the treatment process',
        'A series of custom-made aligners will be created specifically for your teeth',
        'You\'ll receive a virtual preview showing how your teeth will move with each set of aligners',
      ],
    },
    {
      title: 'Beginning Treatment',
      intro: 'Once your custom tooth aligners are fabricated:',
      items: [
        'You\'ll receive your first sets of aligners with detailed instructions',
        'Your dentist will ensure the first set fits properly and comfortably',
        'You\'ll learn how to insert and remove your aligners correctly',
        'You\'ll receive guidance on keeping your aligners clean and properly maintained',
      ],
    },
    {
      title: 'Progressive Treatment',
      intro: 'Throughout your clear aligner treatment:',
      items: [
        'You\'ll change to a new set of aligners approximately every 1-2 weeks as directed',
        'Each new set will continue the gradual straightening process',
        'You\'ll have periodic check-up appointments (typically every 6-8 weeks) to monitor progress',
        'Additional sets of aligners will be provided as needed',
      ],
    },
    {
      title: 'Completion and Retention',
      intro: 'When you\'ve completed your series of aligners for teeth:',
      items: [
        'Your dentist will evaluate your final results',
        'Retainers will be provided to maintain your newly aligned smile',
        'Instructions for wearing and caring for your retainers will be given',
        'A follow-up schedule will be established to ensure long-term success',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Teeth Aligners: The Invisible Solution for a Perfect Smile</title>
        <meta name="description" content="Get clear and invisible teeth aligners in Carrum Downs. Straighten your teeth discreetly and comfortably for a beautiful, confident smile." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Teeth Aligners Service: Comfortable, Invisible, and Effective" align ='left' color="#fff" />
      <>
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
                            title="Aligners - The Most Effective and Affordable Way to Straighten Your Teeth"
                            align ='left'
                            color="var(--dark-blue)"
                          />
                          <Box mt={2}
                            sx={{
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Box sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '100%',
                              height: '100%',
                            }} className=''>
                              <Image
                                src={TeethAligners}
                                alt="teeth aligner"
                                width={577}
                                height={400}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  borderRadius: '8px',
                                }}
                              />
                            </Box>
                          </Box>
                          <Box mt={2}
                            sx={{
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography className="para" sx={{ mb: 2 }}>
                              Are you looking for a discreet way to achieve a perfectly aligned smile? Clear aligners have revolutionized orthodontic treatment, offering an almost invisible alternative to traditional metal braces. At Carrum Downs Dental, patients can access cutting-edge aligner technology that gently and effectively straightens teeth without compromising on aesthetics or comfort.
                            </Typography>
                            <Typography className="para">
                              Teeth aligners provide a modern solution for patients who want to correct misaligned teeth without the noticeable appearance of metal braces. The transparent design of invisible teeth aligners makes them particularly popular among adults and teenagers who may feel self-conscious about traditional orthodontic treatments.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className='mt-md-5 mt-4 bg-grey'>
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={3}>
                            <Box>
                              <SectionalHeading variant="h2" title="What Are Aligners?" align ='left' color="var(--dark-blue)" />
                              <Typography className='para'>Teeth aligners are custom-made, transparent plastic trays designed to fit snugly over your teeth. Unlike traditional metal braces that use brackets and wires, clear aligners use gentle, consistent pressure to gradually shift teeth into their desired positions. The aligners are virtually invisible, allowing you to straighten your teeth discreetly.</Typography>
                              <Typography className='para'>Each set of tooth aligners is precisely crafted using advanced 3D imaging technology to ensure a perfect fit. Aligners for teeth are made from smooth, BPA-free medical-grade plastic that comfortably fits over your teeth without causing irritation to your gums or cheeks.</Typography>
                            </Box>
                            <Box mt={3}>
                              <SectionalHeading variant="h2" title="Clear aligners can effectively address various orthodontic issues, including:" align ='left' color="var(--dark-blue)" />
                              <Box>
                                <List>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Crowded or overlapping teeth</strong>} />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Gaps between teeth</strong>} />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Overbites (upper teeth extending too far over lower teeth)</strong>} />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Underbites (lower teeth positioned in front of upper teeth)</strong>} />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Crossbites (misalignment of upper and lower jaws)</strong>} />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Open bites (upper and lower teeth that don't meet when the mouth is closed)</strong>} />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Generally crooked teeth</strong>} />
                                  </ListItem>
                                </List>
                              </Box>
                              <Typography className='para'>At <Link href="/">Carrum Downs Dental</Link>, the align dental process begins with a comprehensive assessment to determine if clear aligners are the right solution for your specific needs.</Typography>
                            </Box>
                          </Box>
                        </Container>
                      </section>

                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl" className='p-0'>
                          <SectionalHeading variant="h2" title="Benefits of Aligners" align='center' color="var(--dark-blue)" />
                          <Box mt={3}>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={12}>
                                <SectionalHeading variant="h3" title="Choosing invisible teeth aligners offers numerous advantages over traditional orthodontic treatments:" align='center' color="var(--dark-blue)" />

                                <Stack mt={2} flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Aesthetically Pleasing</Typography>
                                </Stack>
                                <Typography className='para'>The most obvious benefit of clear aligners is their discreet appearance. The transparent material makes them nearly invisible when worn, allowing you to straighten your teeth without drawing attention to your orthodontic treatment.</Typography>

                                <Stack mt={2} flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Removable Convenience</Typography>
                                </Stack>
                                <Typography className='para'>Unlike fixed braces, tooth aligners can be easily removed for:</Typography>
                                <List>
                                  {[
                                    "Eating and drinking",
                                    "Brushing and flossing",
                                    "Special occasions",
                                    "Important meetings or photos",
                                  ].map((item) => (
                                    <ListItem key={item} style={{ padding: "0px" }}>
                                      <ListItemIcon>
                                        <CircleIcon
                                          style={{
                                            color: "#117295",
                                            fontSize: "12px",
                                            marginTop: "0.5rem",
                                          }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText primary={item} />
                                    </ListItem>
                                  ))}
                                </List>
                                <Typography className='para' mt={1}>This removability eliminates food restrictions and makes maintaining excellent oral hygiene much simpler throughout your treatment.</Typography>

                                <Stack mt={2} flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Superior Comfort</Typography>
                                </Stack>
                                <Typography className='para'>Aligners for teeth are designed with comfort in mind. Without metal brackets or wires, they eliminate the potential for cuts, scrapes, or irritation inside your mouth. The smooth plastic design ensures a comfortable fit throughout your treatment journey.</Typography>


                                <Stack flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Predictable Results</Typography>
                                </Stack>
                                <Typography className='para'>Modern align dental technology allows for precise planning of your treatment. Before beginning, you'll be able to see a virtual simulation of how your teeth will move throughout the process, giving you a preview of your future smile.</Typography>

                                <Stack flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Fewer Dental Visits Required</Typography>
                                </Stack>
                                <Typography className='para'>Treatment with clear aligners typically requires fewer in-person appointments than traditional braces. While regular check-ups are still necessary to monitor progress, these visits are usually less frequent and shorter in duration.</Typography>

                                <Stack flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Enhanced Oral Health</Typography>
                                </Stack>
                                <Typography className='para'>Straight teeth are easier to clean properly, reducing your risk of tooth decay, gum disease, and other oral health issues. Additionally, since aligners are removable, you can maintain your normal brushing and flossing routine throughout treatment.</Typography>

                                <Stack flexDirection={"row"} gap={1}>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  <Typography className='para fw-bold'>Treatment for Various Ages</Typography>
                                </Stack>
                                <Typography className='para'>Invisible teeth aligners are suitable for both adults and teenagers with permanent teeth, making them a versatile option for patients of different age groups.</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl" className='p-0'>
                          <SectionalHeading
                            variant="h2"
                            title="How Do Aligners Work?"
                            align='center'
                            color="var(--dark-blue)"
                          />

                          <Typography
                            variant="body1"
                            className='fw-bold para'
                            textAlign="start"
                            mt={2}
                            mb={4}
                          >
                            The science behind teeth aligners combines cutting-edge technology with proven orthodontic principles:
                          </Typography>

                          <Stack spacing={4}>
                            {steps.map((step, index) => (
                              <Box
                                key={index}
                                p={4}
                                sx={{
                                  backgroundColor: '#ffffff',
                                  borderRadius: 3,
                                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                  borderLeft: '5px solid #1976d2',
                                  transition: 'transform 0.3s',
                                  '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
                                  },
                                }}
                              >
                                <Typography
                                  variant="h3"
                                  fontWeight="bold"
                                  gutterBottom
                                  sx={{ color: '#0d47a1', fontSize: "16px !important" }}
                                >
                                  {step.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                  {step.description}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>

                          <Box
                            mt={6}
                            p={4}
                            sx={{
                              backgroundColor: '#E3F2FD',
                              borderRadius: 3,
                              border: '1px solid #BBDEFB',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                              margin: '40px auto 0',
                            }}
                          >
                            <Typography
                              variant="body1"
                              fontWeight="500"
                              color="text.primary"
                              textAlign="center"
                              sx={{ lineHeight: 1.8 }}
                            >
                              For optimal results, clear aligners should be worn for 20-22 hours per day, only removing them for eating, drinking anything besides water, and oral hygiene routines. This consistent wear ensures that your teeth move according to schedule, allowing you to complete your treatment as efficiently as possible.
                            </Typography>
                          </Box>
                        </Container>
                      </section>

                      <section className='mt-md-5 mt-4 bg-grey'>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box p={3}>
                            <SectionalHeading variant="h2" title="Treatment Process" align ='left' color="var(--dark-blue)" />
                            <Stack spacing={3} mt={4}>
                              {treatmentSteps.map((step, index) => (
                                <Box key={index}>
                                  <Typography variant="body1" className='para fw-bold' gutterBottom>
                                    {`${index + 1}. ${step.title}`}
                                  </Typography>
                                  {(
                                    <Typography variant="body1" gutterBottom>
                                      {step.intro}
                                    </Typography>
                                  )}
                                  <List sx={{ listStyleType: step.isOrdered ? 'decimal' : 'disc', pl: 3 }}>
                                    {step.items.map((item, i) => (
                                      <ListItem key={i} sx={{ display: 'flex', gap: 2, py: 0.5 }}>
                                        <CircleIcon style={{
                                          color: "#117295",
                                          fontSize: "12px",
                                          marginTop: "0.5rem",
                                        }} />
                                        <ListItemText primary={item} />
                                      </ListItem>
                                    ))}
                                  </List>
                                </Box>
                              ))}

                              <Box mt={2} sx={{ backgroundColor: '#e3f2fd', borderRadius: 2, p: 3 }}>
                                <Typography variant="body1" fontWeight="500">
                                  The total treatment time varies depending on the complexity of your case. Minor adjustments may take as few as <strong>6 months</strong>, while more comprehensive treatments might require <strong>12–18 months</strong> to achieve optimal results.
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl" className="p-0">
                          <SectionalHeading variant="h2" title="Transform Your Smile with Aligners at Carrum Downs Dental" align ='left' color="var(--dark-blue)" />
                          <Typography className='para mt-2'>Ready to achieve the straight, beautiful smile you've always wanted? Clear aligners offer a comfortable, discreet, and effective solution for correcting misaligned teeth and creating the confident smile you deserve.</Typography>
                          <Typography className='para'>Contact Carrum Downs Dental today to <Link href="/contact-us/">schedule your consultation for teeth aligners</Link>. The experienced team is ready to guide you through the process of transforming your smile with state-of-the-art invisible teeth aligners.</Typography>
                          <Typography className='para'>Take the first step toward a straighter, healthier smile with a personalized align dental treatment plan from Carrum Downs Dental – your trusted provider of quality orthodontic care.</Typography>
                          <Typography className='para'>Your journey to a more confident smile starts here.</Typography>
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
                                      How much do clear aligners cost?
                                    </button>
                                  </h3>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>The cost of teeth aligners at Carrum Downs Dental varies depending on the complexity of your case and the duration of treatment required. During your consultation, you'll receive a detailed quote based on your specific needs. Flexible payment plans are available to make invisible teeth aligners more affordable.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Are aligners painful?
                                    </button>
                                  </h3>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Most patients experience mild discomfort for a few days when beginning treatment or switching to a new set of tooth aligners. This temporary sensation is a sign that your aligners are working to move your teeth. Any discomfort typically subsides within a few days and can be managed with over-the-counter pain relievers if necessary.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      How long does aligner treatment take?
                                    </button>
                                  </h3>
                                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Treatment duration with clear aligners varies depending on the complexity of your case. Minor corrections may take as little as 6 months, while more comprehensive treatments might require 12-18 months. During your consultation, your dentist will provide an estimated timeline for your specific align dental treatment.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Can I eat and drink while wearing aligners?
                                    </button>
                                  </h3>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>You should remove your invisible teeth aligners when eating or drinking anything other than water. This prevents staining and damage to the aligners. Always brush your teeth before reinserting your aligners to maintain good oral hygiene and prevent trapping food particles between your teeth and the aligners.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                      How do I clean my aligners?
                                    </button>
                                  </h3>
                                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>To keep your aligners for teeth clean and clear:</p>
                                      <List>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Rinse them with lukewarm water when you remove them</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Clean them daily with a soft toothbrush and mild, clear liquid soap</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Avoid using toothpaste, which can be abrasive and scratch the material</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Use special aligner cleaning solutions if recommended</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Store them in their protective case when not in use</strong>} />
                                        </ListItem>
                                      </List>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                      Will aligners affect my speech?
                                    </button>
                                  </h3>
                                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Some patients experience a slight lisp when they first begin wearing tooth aligners. This is temporary and typically resolves within a few days as you adjust to wearing them. Consistent wear helps you adapt more quickly.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                      Are clear aligners suitable for everyone?
                                    </button>
                                  </h3>
                                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>While teeth aligners are effective for many orthodontic issues, they may not be suitable for very complex cases or severe jaw misalignments. During your consultation at Carrum Downs Dental, your dentist will determine if you're a good candidate for aligner treatment or if another orthodontic option would better suit your needs.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                      Can teenagers use aligners?
                                    </button>
                                  </h3>
                                  <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Yes, invisible teeth aligners are suitable for teenagers who have all their permanent teeth. The align dental system offers special features designed specifically for younger patients, including compliance indicators to ensure proper wear time.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                      What happens if I lose an aligner?
                                    </button>
                                  </h3>
                                  <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>If you lose an aligner, contact Carrum Downs Dental immediately. Depending on how long you've been wearing that particular set, your dentist may advise you to move to the next set or have a replacement made. Never skip ahead to a much later set, as this can disrupt your treatment plan.</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                      Do I need to wear a retainer after treatment?
                                    </button>
                                  </h3>
                                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Yes, wearing a retainer after completing your aligners for teeth treatment is essential to maintain your results. Without retention, teeth have a natural tendency to shift back toward their original positions. Your dentist will provide detailed guidance on retainer use following your treatment.</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingEleven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                      Can I smoke while wearing aligners?
                                    </button>
                                  </h3>
                                  <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Smoking while wearing clear aligners is not recommended, as nicotine and tar can stain the transparent plastic, making your invisible teeth aligners more noticeable. Additionally, the heat from smoking can potentially warp or damage the plastic.</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingTwelve">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                      What if my teeth don't move as planned?
                                    </button>
                                  </h3>
                                  <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>If your teeth aren't moving as expected, your dentist might recommend:</p>
                                      <List>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Extended wear of your current aligners</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Additional aligners to refine movement</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>Attachments to facilitate more complex tooth movements</strong>} />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CircleIcon style={{
                                              color: "#117295",
                                              fontSize: "12px",
                                              marginTop: "0.5rem",
                                            }} />
                                          </ListItemIcon>
                                          <ListItemText primary={<strong>A revised treatment plan if necessary</strong>} />
                                        </ListItem>
                                      </List>
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
        </main>
      </>
    </>
  )
}

export default TeethAligner;