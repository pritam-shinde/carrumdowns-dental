import { CheckCircleOutline } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from "../../../components/components";
import Guard1 from "../../../../public/carrum-new/guard-1.jpg";
import Banner from "../../../../public/carrum-new/guard-banner.jpg";
import MouthGuard from "../../../../public/carrum-new/vs-img.jpg";

const steps = [
    {
        title: "Initial Consultation",
        description: "Our mouth guard dentist evaluates your oral health, discusses your sporting activities, and recommends the most appropriate protection level for your needs.",
    },
    {
        title: "Precision Impressions",
        description: "We take detailed impressions of your teeth and bite, ensuring your custom made sports mouth guard will fit perfectly and comfortably.",
    },
    {
        title: "Custom Fabrication",
        description: "Using advanced dental technology and premium materials, our laboratory crafts your dental sports mouth guard to exact specifications, typically taking 7-10 business days.",
    },
    {
        title: "Final Fitting",
        description: "During your final appointment, we ensure proper fit, comfort, and retention, making any necessary adjustments for optimal performance",
    },
    {
        title: "Care Instructions",
        description: "We provide comprehensive guidance on proper care, cleaning, and storage to maximize the lifespan of your protective device.",
    },
];

const SportsMouthGuard = () => {
   

    const breadcrumb = [
        { id: "sports_mouth_guard_breadcrumb_1", link: "/service/", title: "Service" },
        { id: "sports_mouth_guard_breadcrumb_2", link: null, title: "Sports Mouth Guard" },
    ];

    return (
        <>
            <Head>
                <title>Protect Your Teeth with a Custom Sports Mouth Guard</title>
                <meta name="description" content="Get a professionally made sports mouth guard to protect your teeth from injury during contact sports. Book your appointment today." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Sports Mouth Guard Carrum Downs" align ='left' color="#fff" />
            { (
                <main>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} lg={8}>
                                            <section>
                                                <Box sx={{ px: { xs: 2, md: 3 }, py: 3, backgroundColor: "#fff" }}>
                                                    <SectionalHeading variant="h2" title="Learn More About Mouth Guard" align ='left' color="var(--dark-blue)" />
                                                    <Typography className="para" sx={{ mt: 2 }}>
                                                        A sports mouth guard is a protective device designed to shield your teeth, gums, and jaw during physical activities and sporting events. At Carrum Downs Dental Group, we understand the
                                                        critical role that a dental mouth guard for sports plays in preventing costly and painful dental injuries. Our experienced mouth guard dentist team specializes in creating
                                                        professional, custom-made mouth protectors that offer superior protection compared to generic alternatives.
                                                    </Typography>
                                                    <Typography className="para" sx={{ mt: 2 }}>
                                                        Whether you're a weekend warrior or a competitive athlete, investing in quality mouthguards Australia trusts can save you from <Link href="/dental-treatments-for-top-10-mouth-problems/">extensive dental treatment</Link> down the road. Our custom
                                                        mouthguards Australia are crafted using the latest dental technology and highest quality materials, ensuring optimal protection and comfort for athletes of all ages and skill levels.
                                                    </Typography>
                                                    <Image src={Guard1} width={1024} height={483} className="object-cover img-fluid" priority />

                                                    <Box className="mt-2">
                                                        <SectionalHeading variant="h3" title="Why Every Athlete Needs a Dental Sports Mouth Guard" color="var(--dark-blue)" />
                                                        <Typography className="fs-6 mt-2 fw-semibold">
                                                            Sports-related dental injuries are more common than many people realize, with thousands of athletes experiencing preventable dental trauma each year. A dental sports mouth guard serves as your first line of defence against:
                                                        </Typography>
                                                        <List>
                                                            {[
                                                                "Broken, chipped, or fractured teeth",
                                                                "Lacerations to lips, gums, cheeks, and tongue",
                                                                "Jaw fractures and joint damage",
                                                                "Tooth displacement or complete tooth loss",
                                                                "Concussion-related injuries",
                                                            ].map((item, index) => (
                                                                <ListItem key={index} disableGutters>
                                                                    <ListItemIcon>
                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={item} />
                                                                </ListItem>
                                                            ))}
                                                        </List>

                                                        <Typography className="para" sx={{ mt: 2 }}>
                                                            Every athlete participating in contact or collision sports should wear a sports mouth guard, regardless of age or experience level. From children's mouthguards for sports to adult
                                                            protective gear, our mouth protector sports solutions are designed to absorb and distribute impact forces, significantly reducing the risk of serious dental injuries.
                                                        </Typography>
                                                        <Typography className="para" sx={{ mt: 2 }}>
                                                            High-risk activities that require mouth protection include AFL, rugby, hockey, basketball, soccer, boxing, martial arts, skateboarding, cycling, and scooter riding. Don't wait
                                                            until an injury occurs – prevention is always more cost-effective than treatment.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </section>

                                            <section className="mt-md-5 mt-4 bg-grey rounded-2">
                                                <Container maxWidth="xxl" className="p-0">
                                                    <Box p={3}>
                                                        <SectionalHeading variant="h2" title="Custom Sports Mouth Guards vs Over-the-Counter Mouth Guards" align="center" color="var(--dark-blue)" />

                                                        <Typography className="para" sx={{ mt: 2 }}>
                                                            While over the counter mouth guard options are readily available at sporting goods stores, they simply cannot match the protection and comfort provided by a custom made sports mouth guard. Here's why seeing a sports mouth guard dentist makes all the difference:
                                                        </Typography>

                                                        <Grid container spacing={4}>
                                                            <Grid item xs={12} md={6}>
                                                                <Typography variant="h3" gutterBottom fontWeight={600}>
                                                                    Custom Made Advantages:
                                                                </Typography>
                                                                <List>
                                                                    {[
                                                                        "Perfect fit moulded from your unique dental impression",
                                                                        "Superior shock absorption and impact distribution",
                                                                        "Enhanced comfort that doesn’t interfere with breathing or speech",
                                                                        "Durable materials that maintain their protective qualities longer",
                                                                        "Retention that stays securely in place during intense activity",
                                                                    ].map((item, i) => (
                                                                        <ListItem key={i}>
                                                                            <ListItemIcon>
                                                                                <CheckCircleIcon color="success" />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary={item} />
                                                                        </ListItem>
                                                                    ))}
                                                                </List>
                                                            </Grid>

                                                            <Grid item xs={12} md={6}>
                                                                <Typography variant="h3" gutterBottom fontWeight={600}>
                                                                    Over-the-Counter Disadvantages:
                                                                </Typography>
                                                                <List>
                                                                    {[
                                                                        "Generic sizing that rarely fits properly",
                                                                        "Bulky design that can impede breathing and communication",
                                                                        "Limited protection due to poor fit and inferior materials",
                                                                        "Frequent replacement needed due to poor durability",
                                                                        "May actually increase injury risk if they become dislodged",
                                                                    ].map((item, i) => (
                                                                        <ListItem key={i}>
                                                                            <ListItemIcon>
                                                                                <CheckCircleIcon color="error" />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary={item} />
                                                                        </ListItem>
                                                                    ))}
                                                                </List>
                                                            </Grid>
                                                        </Grid>

                                                        <Box mt={3}>
                                                            <Image src={MouthGuard} width={1024} height={683} className="object-cover img-fluid" />
                                                        </Box>
                                                        <Typography className="para" sx={{ mt: 2 }}>
                                                            When you choose a professional dental mouth guard from our dental clinic, you're investing in a protective device that's specifically engineered for your mouth, providing unmatched comfort and protection.
                                                        </Typography>
                                                    </Box>
                                                </Container>
                                            </section>

                                            <section className="mt-md-5 mt-4">
                                                <Box sx={{ px: { xs: 2, md: 3 }, py: 3, backgroundColor: "#fff" }}>
                                                    <SectionalHeading variant="h2" title="Types of Mouth Guards We Offer at Carrum Downs Dental" align ='left' color="var(--dark-blue)" />
                                                    <Typography className="fs-6 fw-semibold mt-2">
                                                        Our clinic offers four distinct types of protective mouth guards, each designed for specific age groups and sports intensity levels:
                                                    </Typography>
                                                    {[
                                                        {
                                                            title: "1. Single Layer Mouth Guard",
                                                            desc: "Provides reliable protection for low to medium impact sports. Ideal for ages 5-12, especially those with crowded or misaligned teeth.",
                                                            image: "/Services/single-layer-bays.jpg"
                                                        },
                                                        {
                                                            title: "2. Double Layer Mouth Guard",
                                                            desc: "Enhanced protection for medium to high impact sports. Suitable for ages 13 to adult, ensuring unrestricted speech and breathing.",
                                                            image: "/Services/double-layer-bays.jpg"
                                                        },
                                                        {
                                                            title: "3. Professional Triple Layer Mouth Guard",
                                                            desc: "Triple-layered design for serious athletes. Perfect for high-intensity contact sports like boxing and martial arts.",
                                                            image: "/Services/triple-layer-bays.jpg"
                                                        },
                                                        {
                                                            title: "4. Professional Bimaxillary Mouth Guard",
                                                            desc: "Covers both upper and lower teeth for ultimate protection. Ideal for MMA, professional boxing, or athletes with jaw concerns.",
                                                            image: "/Services/bimaxillary-sport-mouthguard.jpg"
                                                        },
                                                    ].map((type, i) => (
                                                        <Box key={i} my={4} display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent={"space-between"} alignItems="center" gap={3}>
                                                            <Box>
                                                                <Typography fontWeight={600} mb={1}>
                                                                    {type.title}
                                                                </Typography>
                                                                <Typography>{type.desc}</Typography>
                                                            </Box>
                                                            <Box sx={{ width: { xs: "100%", sm: 300 }, borderRadius: 2, overflow: "hidden" }}>
                                                                <Image
                                                                    src={type.image}
                                                                    alt={type.title}
                                                                    width={300}
                                                                    height={280}
                                                                    layout="responsive"
                                                                    objectFit="cover"
                                                                />
                                                            </Box>
                                                        </Box>
                                                    ))}

                                                    <Box>
                                                        <SectionalHeading variant="h2" title="Who Can Benefit from Our Mouth Guards" align ='left' color="var(--dark-blue)" />
                                                        <List>
                                                            {[
                                                                {
                                                                    primary: "Young Athletes",
                                                                    secondary: (
                                                                        <>
                                                                            Children and teenagers participating in school sports, club activities, and recreational leagues benefit tremendously from properly fitted protection. Our{" "}
                                                                            <Link
                                                                                href="/athletic-mouth-guards/"
                                                                                style={{ color: "#115278", fontWeight: "bold", textDecoration: "underline" }}
                                                                            >
                                                                                custom mouthguards Australia
                                                                            </Link>{" "}
                                                                            grow with young athletes and can be adjusted as their mouths develop.
                                                                        </>
                                                                    ),
                                                                },
                                                                {
                                                                    primary: "Adult Athletes",
                                                                    secondary: "Whether you're a weekend rugby player or a competitive boxer, our professional mouth guard for teeth grinding and sports protection keeps you in the game safely.",
                                                                },
                                                                {
                                                                    primary: "Special Considerations",
                                                                    secondary: "Athletes wearing braces, those with dental work, or individuals with specific oral health concerns receive customized solutions from our sports mouth guard dentist team.",
                                                                },
                                                                {
                                                                    primary: "High-Risk Sports Participants",
                                                                    secondary: "Players in contact sports like AFL, rugby, hockey, boxing, and martial arts require the superior protection that only custom-fitted guards can provide.",
                                                                }].map((item, i) => (
                                                                    <ListItem key={i} alignItems="flex-start" sx={{ p: 0 }}>
                                                                        <ListItemIcon>
                                                                            <CheckCircleIcon color="success" />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={item.primary} secondary={item.secondary} sx={{pb:2}}/>
                                                                    </ListItem>
                                                                ))}
                                                        </List>
                                                    </Box>
                                                </Box>
                                            </section>

                                            <section className=" ">
                                                <Container maxWidth="xxl" className="p-0">
                                                    <Box sx={{ bgcolor: "#ffffff", borderRadius: 2, boxShadow: 2, py: 2, px: { xs: 2, md: 3 } }}>
                                                        <SectionalHeading variant="h2" title="Our Mouth Guard Fitting Process" align ='left' color="var(--dark-blue)" />
                                                        <Typography className="fs-6 mt-2 fw-semibold"> Understanding how to fit a mouthguard properly is crucial for optimal protection. Our comprehensive mouthguard fitting process ensures perfect results:</Typography>
                                                        <List>
                                                            {steps.map((step, index) => (
                                                                <ListItem key={index} sx={{ py: 2 }}>
                                                                    <ListItemIcon>
                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Box>
                                                                            <Typography variant="subtitle1" fontWeight={600}>
                                                                                Step {index + 1}: {step.title}
                                                                            </Typography>
                                                                            <Box mt={1}>
                                                                                <Typography variant="body2" color="text.secondary">
                                                                                    {step.description}
                                                                                </Typography>
                                                                            </Box>
                                                                        </Box>} />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Box>
                                                </Container>
                                            </section>

                                            <section className="mt-md-5 mt-4">
                                                <Container maxWidth="xxl" className="p-0">
                                                    <Box py={2} sx={{ px: { xs: 2, md: 3 } }}>
                                                        <SectionalHeading variant="h2" title="Why Choose Carrum Downs Dental for Mouth Guards" align ='left' color="var(--dark-blue)" />
                                                        <Typography className="fs-6 fw-semibold mt-2">
                                                            As your local sports mouth guard Carrum downs specialists, we combine clinical expertise with personalized care to deliver exceptional results:
                                                        </Typography>
                                                        <List>
                                                            {[
                                                                "Experienced Team – Our qualified dentists have extensive experience creating protective mouth guards for athletes of all ages and sporting backgrounds.",
                                                                "Advanced Technology –  We utilize the latest dental materials and fabrication techniques to ensure superior protection and comfort.",
                                                                "Competitive Pricing – Our sports mouth guard dentist cost is highly competitive, offering excellent value for premium custom protection.",
                                                                "Convenient Location –  Located in the heart of Carrum Downs, we're easily accessible for initial consultations, fittings, and follow-up care.",
                                                                "Comprehensive Care – As your best dentist Carrum Downs choice, we provide complete oral health services beyond just mouth guards, ensuring your overall dental wellness.",
                                                                "Quality Guarantee – We stand behind our professional dental mouth guard products with comprehensive warranties and ongoing support.",
                                                            ].map((point, i) => (
                                                                <ListItem key={i}>
                                                                    <ListItemIcon>
                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={point} />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Box>
                                                </Container>
                                            </section>
                                            {/* faq section  */}
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
                                                                            How long does a custom mouth guard last?
                                                                        </button>
                                                                    </h3>
                                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body">
                                                                            <p className="para">
                                                                                With proper care and regular use, a custom sports mouth guard typically lasts 2-3 seasons or 12-18 months. The lifespan depends on frequency of use, sport
                                                                                intensity, and individual factors like teeth grinding.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h3 className="accordion-header" id="headingTwo">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            Can I wear a mouth guard with braces?
                                                                        </button>
                                                                    </h3>
                                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body">
                                                                            <p className="para">
                                                                                Absolutely! Custom mouth guards are particularly important for athletes with braces, as they protect both the orthodontic appliances and soft tissues from
                                                                                injury. We design special guards that accommodate braces comfortably.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h3 className="accordion-header" id="headingThree">
                                                                        <button
                                                                            className="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseThree"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseThree"
                                                                        >
                                                                            How do I clean my mouth guard?
                                                                        </button>
                                                                    </h3>
                                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body">
                                                                            <p className="para">
                                                                                Rinse your mouth guard with cool water immediately after use, brush gently with a soft toothbrush and mild soap, then store in a ventilated case. Avoid hot
                                                                                water, which can distort the material.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h3 className="accordion-header" id="headingFour">
                                                                        <button
                                                                            className="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseFour"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseFour"
                                                                        >
                                                                            What sports require a mouth guard?
                                                                        </button>
                                                                    </h3>
                                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body">
                                                                            <p className="para">
                                                                                While requirements vary by organization, mouth guards are strongly recommended for contact sports including AFL, rugby, hockey, boxing, martial arts,
                                                                                basketball, and field hockey. Many schools and clubs now mandate their use.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h3 className="accordion-header" id="headingFive">
                                                                        <button
                                                                            className="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseFive"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseFive"
                                                                        >
                                                                            How much does a custom mouth guard cost?
                                                                        </button>
                                                                    </h3>
                                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body">
                                                                            <p className="para">
                                                                                Our custom sports mouth guards are competitively priced starting from $150-$300 depending on the type and complexity. This investment is minimal compared to the
                                                                                potential cost of treating sports-related dental injuries.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h3 className="accordion-header" id="headingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                            Will a mouth guard affect my performance?
                                                                        </button>
                                                                    </h3>
                                                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                                        <div className="accordion-body">
                                                                            <p className="para">
                                                                                A properly fitted custom mouth guard should not negatively impact your athletic performance. In fact, many athletes report feeling more confident and performing
                                                                                better knowing they're fully protected.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Box>
                                                    </Box>
                                                </Container>
                                            </section>
                                            <section className="mt-md-5 mt-4">
                                                <InterestFree />
                                                <TermsNCondition />
                                            </section>
                                            <section className="mt-md-5 mt-4 bg-grey">
                                                <Container maxWidth="xxl" className="p-0">
                                                    <Box p={2}>
                                                        <div className="sectional-heading1 text-center" style={{ color: "var(--dark-blue)" }}>
                                                            Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction.
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
            ) }
        </>
    );
};
export default SportsMouthGuard;
