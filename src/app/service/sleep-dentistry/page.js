import { CheckCircleOutline } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import {
  Box,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import Image from "next/image";
import { CommonHero, SectionalHeading } from "../../../components/components";
import SleepDentistryClient from "./SleepDentistryClient";

export const metadata = {
  title: "Sleep Dentistry Carrum Downs | General Anaesthesia Dental Care",
  description:
    "Learn how sleep dentistry in Carrum Downs can help children and adults receive complex or anxiety-sensitive dental care under general anaesthesia.",
  robots: {
    index: true,
  },
};

const facilityImages = {
  // For Next.js, reference files in /public using a leading slash (no "public/" prefix).
  surgery: "/sleep-denstistry/ga-surgery.jpeg",
  waitingRoom: "/sleep-denstistry/career-waiting-room.jpg",
};

const sleepDentistryVideoUrl = "/sleep-denstistry/ga-surgery-video.mp4";
 
const sleepDentistryVideoThumbnail = "/sleep-denstistry/ga-surgery.jpeg";

const leftPoints = [
  "Completely unaware throughout the procedure",
  "Anaesthesia by ANZCA-registered specialists",
  "In-chair recovery with dedicated nursing care",
  "Home the same day — no overnight stay",
  "Multiple treatments in a single visit",
];

const rightPoints = [
  {
    icon: "💤",
    title: "General anaesthesia or deep sedation",
    desc: "You are completely asleep and unaware throughout your entire dental procedure.",
  },
  {
    icon: "📋",
    title: "Full medical review beforehand",
    desc: "Your records are assessed; GP and specialists consulted if required prior to the procedure.",
  },
  {
    icon: "🔬",
    title: "On-site CBCT imaging available",
    desc: "Particularly valuable for implant planning and All-on-4 procedures — no external referral needed.",
  },
  {
    icon: "👩‍⚕️",
    title: "In-chair recovery nursing",
    desc: "Specialist nurses monitor you throughout recovery until you are safely ready to go home.",
  },
  {
    icon: "🏠",
    title: "Same-day discharge",
    desc: "You go home with a responsible adult and receive clear aftercare instructions before you leave.",
  },
];

const idealForCards = [
  {
    icon: "😰",
    title: "Anxious or Dental-Phobic Patients",
    body: "If dental anxiety has been stopping you from getting treatment, general anaesthesia means you are completely unaware — eliminating all stress and fear during the procedure.",
  },
  {
    icon: "🤐",
    title: "Patients with a Severe Gag Reflex",
    body: "A strong gag reflex can make even basic dental work extremely difficult or impossible. Under general anaesthesia the gag reflex is inactive, allowing your dentist to work freely.",
  },
  {
    icon: "👶",
    title: "Children & Special Needs Patients",
    body: "For children who cannot cooperate while awake, or patients with special healthcare needs, general anaesthesia provides a completely pain-free and stress-free experience.",
  },
  {
    icon: "🦷",
    title: "Complex or Extensive Treatment",
    body: "Multiple fillings, extractions, crowns or implants? Sleep dentistry lets your dentist complete several procedures in a single visit — saving time and multiple appointments.",
  },
  {
    icon: "🏥",
    title: "Implants & All-on-4 Cases",
    body: "Our on-site CBCT imaging is especially valuable for complex implant procedures and All-on-4 cases that require precise 3D bone assessment before treatment.",
  },
  {
    icon: "💆",
    title: "Anyone Who Prefers to Sleep Through It",
    body: "Even without severe anxiety, you can simply choose to sleep through your dental treatment. Many patients prefer the comfort and convenience — you wake up and it's done.",
  },
];

const howItWorksSteps = [
  {
    title: "Consultation",
    body: "Contact our Carrum Downs clinic. We'll discuss your needs, answer questions and confirm whether sleep dentistry is right for you.",
  },
  {
    title: "Medical Review",
    body: "Our specialist anaesthesia team reviews your medical history and liaises with your GP or specialists if required before the procedure.",
  },
  {
    title: "Procedure Day",
    body: "You attend our Bayswater facility. Anaesthesia is administered and your dentist completes all planned treatment while you sleep.",
  },
  {
    title: "Recovery & Home",
    body: "You recover in our clinic with specialist nursing care, then go home with a responsible adult and full aftercare instructions.",
  },
];

const feeCards = [
  {
    title: "Dentist Fee",
    body: "Charged for the dental treatment performed. Agreed directly with our Carrum Downs Dental team at your consultation.",
  },
  {
    title: "Anaesthesia Fee",
    body: "Covers your full specialist anaesthesia care — medical review, general anaesthesia, and in-chair recovery nursing.",
  },
  {
    title: "Theatre Fee",
    price: "$250 first hour · $150/hr thereafter",
    body: "Performed at our purpose-built clinic — significantly lower than hospital day surgery theatre rates.",
  },
];

const safetyPoints = [
  {
    title: "ANZCA-registered anaesthetists",
    body: "Our specialist team holds qualifications from the Australian and New Zealand College of Anaesthetists.",
  },
  {
    title: "Thorough pre-procedure medical review",
    body: "Records assessed; GP and specialist consultation arranged where required before your procedure.",
  },
  {
    title: "Pre-operative checks",
    body: "Any required pre-operative tests are completed in advance to ensure you are fully prepared on the day.",
  },
  {
    title: "Specialist recovery nursing",
    body: "Dedicated nurses monitor you throughout in-chair recovery until you are safely ready to go home.",
  },
  {
    title: "Clear aftercare instructions",
    body: "Full aftercare guidance provided to your accompanying adult, with follow-up support available.",
  },
];

const anaesthesiaCreds = [
  "Sleep Dentistry Services — Melbourne's specialist dental anaesthesia team",
  "Australian and New Zealand College of Anaesthetists (ANZCA) compliant",
  "Faculty of Pain Medicine accredited",
  "Registered with the Victorian Department of Health",
  "Two purpose-built treatment theatres at Bayswater facility",
  "On-site CBCT imaging, experienced registered nurses, private waiting rooms",
];

const faqItems = [
  {
    q: "Is general anaesthesia safe for dental procedures?",
    a: "General anaesthesia administered by ANZCA-registered anaesthetists is considered extremely safe. Our team conducts a full medical review before every procedure to ensure you are a suitable candidate and that all precautions are in place.",
  },
  {
    q: "Do I need to go to a hospital?",
    a: "No. The procedure is performed at our purpose-built facility in Bayswater — not at a hospital. This means no admission paperwork, no long waitlists, and theatre fees significantly lower than hospital day surgery rates.",
  },
  {
    q: "How much does sleep dentistry cost?",
    a: "Three fees apply: a dentist fee for your dental treatment, an anaesthesia fee (which may attract a Medicare rebate of 20–80%), and a theatre fee of $250 for the first hour and $150 for each additional hour. Interest-free Humm payment plans are also available. Contact our Carrum Downs team for a personalised estimate.",
  },
  {
    q: "Can I get a Medicare rebate?",
    a: "The anaesthetist fee may attract a Medicare rebate depending on your Safety Net eligibility, concession status, Family Tax B status, and duration of anaesthesia. Our team can check your eligibility and give an approximate estimate before your procedure. Rebates are typically received the day after claiming via MyGov.",
  },
  {
    q: "Do I need someone to take me home?",
    a: "Yes. You must be accompanied by a responsible adult who can drive you home and remain with you for the rest of the day. You cannot drive, operate machinery or make important decisions for 24 hours after general anaesthesia.",
  },
  {
    q: "Is sleep dentistry suitable for my child?",
    a: "Yes. Sleep dentistry is a safe and effective option for children who cannot cooperate with dental treatment while awake due to age, anxiety, or fear. Our anaesthesia team is experienced with paediatric patients and will conduct a thorough medical review beforehand.",
  },
  {
    q: "How do I get started?",
    a: "Simply call or email our Carrum Downs Dental clinic. Our team will have a friendly conversation about your needs, answer any questions, and guide you through the process — with no obligation whatsoever.",
  },
];

const SleepDentistryNew = () => {
  const breadcrumb = [
    {
      id: "sleep_dentistry_new_breadcrumb_1",
      link: "/service/",
      title: "Service",
    },
    {
      id: "sleep_dentistry_new_breadcrumb_2",
      link: null,
      title: "Sleep Dentistry",
    },
  ];

  return (
    <>
      <CommonHero
        bg={{ src: "/carrum-new/banner/sleep-dentistry-new-banner.jpg" }}
        breadcrumb={breadcrumb}
        color="#fff"
        title="Sleep Dentistry Carrum Downs"
      />

      <section className="py-5 my-5">
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
                {/* LEFT CONTENT */}
                <Grid item xs={12} md={6}>
                  <Chip
                    label="WHAT IS SLEEP DENTISTRY"
                    sx={{
                      mb: 2.25,
                      backgroundColor: "rgba(17, 114, 149, 0.12)",
                      color: "#19beb9",
                      fontWeight: 700,
                      letterSpacing: 0.6,
                    }}
                  />
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.12,
                      color: "#115278",
                      mb: 2,
                      fontSize: { xs: 34, sm: 42, md: 48 },
                    }}
                  >
                    You Sleep. <br />
                    <Box component="span" sx={{ color: "#115278" }}>
                      We
                    </Box> {" "}
                    <Box component="span" sx={{ color: "#19beb9" }}>
                      Do the Rest.
                    </Box>
                  </Typography>

                  <Typography className="para mt-3" sx={{ lineHeight: 1.9 }}>
                    Sleep dentistry uses <b>general anaesthesia</b> to put you
                    into a deep, comfortable sleep for the entire duration of
                    your dental treatment. You won’t feel, see, hear or remember
                    a thing — you simply wake up with it all done.
                  </Typography>

                  <Typography className="para mt-2" sx={{ lineHeight: 1.9 }}>
                    This is different from light sedation or happy gas. With
                    general anaesthesia you are fully unconscious, which is
                    ideal for patients with significant anxiety, a strong gag
                    reflex, or those needing extensive work done across a single
                    visit.
                  </Typography>

                  <Typography className="para mt-2" sx={{ lineHeight: 1.9 }}>
                    The procedure is carried out at our{" "}
                    <b>purpose-built facility at Bayswater</b>, in partnership
                    with Sleep Dentistry Services — so there&apos;s no hospital
                    admission, no long waitlists, and costs are significantly
                    lower than hospital day surgery.
                  </Typography>

                  {/* LEFT LIST */}
                  <List sx={{ mt: 3, px: 0, py: 0 }}>
                    {leftPoints.map((item) => (
                      <ListItem
                        key={item}
                        sx={{
                          px: 0,
                          py: 1.25,
                          alignItems: "flex-start",
                          borderBottom: "1px solid rgba(15, 53, 83, 0.10)",
                          "&:last-child": { borderBottom: "none" },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 36, mt: "2px" }}>
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              borderRadius: "999px",
                              backgroundColor: "rgba(17, 114, 149, 0.12)",
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            <CheckCircleIcon
                              sx={{ color: "#19beb9", fontSize: 18 }}
                            />
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ lineHeight: 1.6, marginBottom: "0px !important" }}>
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                {/* RIGHT CARD */}
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg, #1e5f8a 0%, #2d7fb0 100%)",
                      color: "#fff",
                      // height: "100%",
                      boxShadow: "0 18px 42px rgba(11, 45, 74, 0.20)",
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 900,
                        letterSpacing: 0.6,
                        fontSize: 13,
                        opacity: 0.95,
                        mb: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      WHAT THE PROCEDURE INVOLVES
                    </Typography>

                    {rightPoints.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          gap: 1.75,
                          alignItems: "flex-start",
                          py: 1.25,
                          borderBottom: "1px solid rgba(255,255,255,0.14)",
                          "&:last-child": { borderBottom: "none" },
                        }}
                      >
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "999px",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "rgba(255,255,255,0.14)",
                            flex: "0 0 auto",
                            mt: "2px",
                          }}
                        > 
                          {item.icon}
                        </Box>

                        <Box>
                          <Typography
                            component="h4"
                            sx={{
                              fontWeight: 900,
                              lineHeight: 1.35,
                              fontSize: { xs: 16, md: 10 },
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ opacity: 0.9, mt: 0.5, lineHeight: 1.7 }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5 my-5" style={{ background: "#f5f8fb" }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box sx={{ mb: 3 }}>
                <Chip
                  label="IS IT RIGHT FOR YOU?"
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(17, 114, 149, 0.12)",
                    color: "#19beb9",
                    fontWeight: 700,
                  }}
                />
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "#115278",
                    mb: 1,
                    fontSize: { xs: 32, sm: 38, md: 44 },
                  }}
                >
                  Sleep Dentistry Is{" "}
                  <Box component="span" sx={{ color: "#19beb9" }}>
                    Ideal For
                  </Box>
                </Typography>
                <Typography className="para">
                  Sleep dentistry suits a wide range of patients. If any of the
                  following apply to you, it could be the perfect solution.
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {idealForCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} key={card.title}>
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: "16px",
                        border: "1px solid rgba(15, 53, 83, 0.10)",
                        boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                        p: 3,
                        position: "relative",
                        overflow: "hidden",
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #19beb9 0%, #2d7fb0 100%)",
                        },
                        "&:hover": {
                          border: "1px solid #2d7fb0",
                          "&:before": {
                            background: "#2d7fb0",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "12px",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "rgba(17, 114, 149, 0.10)",
                          mb: 2,
                          fontSize: 28,
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 800,
                          color: "#115278",
                          mb: 1,
                          fontSize: { xs: 10, md: 10 },
                          lineHeight: 1.25,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.8 }}>
                        {card.body}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5 my-5">
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Chip
                label="THE PROCESS"
                sx={{
                  mb: 2,
                  backgroundColor: "rgba(17, 114, 149, 0.12)",
                  color: "#19beb9",
                  fontWeight: 700,
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: "#115278",
                  mb: 1,
                  fontSize: { xs: 32, sm: 38, md: 44 },
                }}
              >
                How It{" "}
                <Box component="span" sx={{ color: "#19beb9" }}>
                  Works
                </Box>
              </Typography>
              <Typography className="para" sx={{ mb: 4 }}>
                A clear, well-supported process from your first call through to
                going home the same day.
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  mt: 1,
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    left: "12.5%",
                    right: "12.5%",
                    top: 52,
                    height: 2,
                    backgroundColor: "rgba(17, 114, 149, 0.18)",
                    display: { xs: "none", md: "block" },
                    zIndex: 0,
                  },
                }}
              >
                <Grid container spacing={3}>
                  {howItWorksSteps.map((step, idx) => (
                    <Grid item xs={12} md={3} key={step.title}>
                      <Box
                        sx={{
                          textAlign: "center",
                          px: { xs: 0, md: 1.5 },
                        }}
                      >
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "999px",
                            mx: "auto",
                            display: "grid",
                            placeItems: "center",
                            fontWeight: 900,
                            color: "#fff",
                            background:
                              "linear-gradient(135deg, #19beb9 0%, #2d7fb0 100%)",
                            boxShadow: "0 14px 30px rgba(17, 114, 149, 0.22)",
                            mb: 2,
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {idx + 1}
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 800,
                            color: "#115278",
                            mb: 1,
                            fontSize: { xs: 17, md: 18 },
                            lineHeight: 1.25,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography sx={{ lineHeight: 1.8 }}>
                          {step.body}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5 my-5" style={{ background: "#f5f8fb" }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Chip
                label="THE FACILITY"
                sx={{
                  mb: 2,
                  backgroundColor: "rgba(17, 114, 149, 0.12)",
                  color: "#19beb9",
                  fontWeight: 700,
                  letterSpacing: 0.6,
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: "#115278",
                  mb: 1,
                  fontSize: { xs: 32, sm: 38, md: 44 },
                }}
              >
                A Purpose-Built{" "}
                <Box component="span" sx={{ color: "#19beb9" }}>
                  Sleep Dentistry
                </Box>{" "}
                Facility
              </Typography>
              <Typography className="para" sx={{ mb: 4 }}>
                Your procedure is carried out at our Carrum Downs facility with a
                specialist anaesthesia team, dedicated recovery support, and a
                calm environment designed for patient comfort.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(15, 53, 83, 0.10)",
                      boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                    }}
                  >
                    <Box sx={{ position: "relative", width: "100%", height: { xs: 240, md: 320 } }}>
                      <Image
                        src={facilityImages.surgery}
                        alt="General anaesthesia treatment theatre"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 900,
                          color: "#115278",
                          fontSize: { xs: 17, md: 18 },
                          lineHeight: 1.25,
                          mb: 0.5,
                        }}
                      >
                        Procedure & monitoring
                      </Typography>
                      <Typography sx={{ lineHeight: 1.8 }}>
                        A controlled clinical environment with specialist
                        anaesthesia and continuous monitoring throughout your
                        treatment.
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(15, 53, 83, 0.10)",
                      boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                    }}
                  >
                    <Box sx={{ position: "relative", width: "100%", height: { xs: 240, md: 320 } }}>
                      <Image
                        src={facilityImages.waitingRoom}
                        alt="Carer waiting room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 900,
                          color: "#115278",
                          fontSize: { xs: 17, md: 18 },
                          lineHeight: 1.25,
                          mb: 0.5,
                        }}
                      >
                        Comfortable carer spaces
                      </Typography>
                      <Typography sx={{ lineHeight: 1.8 }}>
                        A calmer setting for accompanying adults while patients
                        are in treatment and recovery.
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              <Paper
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  border: "1px solid rgba(15, 53, 83, 0.10)",
                  boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 900,
                      color: "#115278",
                      fontSize: { xs: 18, md: 20 },
                      mb: 1,
                    }}
                  >
                    Watch: What to expect
                  </Typography>
                  <Typography sx={{ lineHeight: 1.8, mb: 2 }}>
                    Add your video link below and this section will display it
                    in-page.
                  </Typography>
                </Box>

                <SleepDentistryClient
                  videoUrl={sleepDentistryVideoUrl}
                  videoThumbnail={sleepDentistryVideoThumbnail}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5 my-5" style={{ background: "#f5f8fb" }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Chip
                label="FEES & PAYMENT"
                sx={{
                  mb: 2,
                  backgroundColor: "rgba(17, 114, 149, 0.12)",
                  color: "#19beb9",
                  fontWeight: 700,
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: "#115278",
                  mb: 1,
                  fontSize: { xs: 32, sm: 38, md: 44 },
                }}
              >
                Transparent,{" "}
                <Box component="span" sx={{ color: "#19beb9" }}>
                  Affordable
                </Box>{" "}
                Costs
              </Typography>
              <Typography className="para" sx={{ mb: 4 }}>
                Three fees apply to sleep dentistry. Our clinic-based model
                keeps costs well below hospital day surgery.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 3 }}>
                {feeCards.map((card) => (
                  <Grid item xs={12} md={4} key={card.title}>
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: "16px",
                        border: "1px solid rgba(15, 53, 83, 0.10)",
                        boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                        p: 3,
                        position: "relative",
                        overflow: "hidden",
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #ced3d5 0%, #bed3df 100%)",
                        },
                        "&:hover": {
                          "&:before": {
                            background:
                              "linear-gradient(90deg, #19beb9 0%, #2d7fb0 100%)",

                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 800,
                          color: "#115278",
                          mb: 1,
                          fontSize: { xs: 17, md: 18 },
                          lineHeight: 1.25,
                        }}
                      >
                        {card.title}
                      </Typography>
                      {card.price ? (
                        <Typography
                          sx={{
                            fontWeight: 900,
                            color: "#19beb9",
                            mb: 1,
                          }}
                        >
                          {card.price}
                        </Typography>
                      ) : null}
                      <Typography sx={{ lineHeight: 1.8 }}>{card.body}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Paper
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  border: "1px solid rgba(17, 114, 149, 0.22)",
                  background:
                    "linear-gradient(135deg, rgba(17,114,149,0.08) 0%, rgba(255,255,255,0.96) 100%)",
                  p: { xs: 2.5, md: 3.5 },
                  boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    width: "4px",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #19beb9 0%, #2d7fb0 100%)",
                  },
                }}
              >
                <Typography sx={{ lineHeight: 1.9 }}>
                  <b>Medicare Rebate Available:</b> The anaesthetist fee may be
                  partially covered by Medicare, depending on your Medicare
                  Safety Net eligibility, concession or Family Tax B status, and
                  duration of anaesthesia. Our team can check your eligibility
                  and provide an estimate so you know approximately what to
                  expect. Rebates are typically received the day after claiming
                  via MyGov.
                </Typography>
                <Typography sx={{ mt: 2, lineHeight: 1.9 }}>
                  We also offer <b>interest-free Humm payment plans</b> with
                  weekly, fortnightly or monthly options. Please speak with our
                  Carrum Downs reception team for full details.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5 my-5">
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Chip
                label="QUALITY & SAFETY"
                sx={{
                  mb: 2,
                  backgroundColor: "rgba(17, 114, 149, 0.12)",
                  color: "#19beb9",
                  fontWeight: 700,
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: "#115278",
                  mb: 1,
                  fontSize: { xs: 32, sm: 38, md: 44 },
                }}
              >
                Safety You Can{" "}
                <Box component="span" sx={{ color: "#19beb9" }}>
                  Trust
                </Box>
              </Typography>
              <Typography className="para" sx={{ mb: 4 }}>
                General anaesthesia in the hands of qualified specialists is
                considered extremely safe. Our team ensures every precaution is
                taken for every patient.
              </Typography>

              <Grid container spacing={3} alignItems="stretch">
                <Grid item xs={12} md={7}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      border: "1px solid rgba(15, 53, 83, 0.10)",
                      boxShadow: "0 12px 28px rgba(15, 53, 83, 0.06)",
                      p: { xs: 2.5, md: 3.5 },
                    }}
                  >
                    <List sx={{ m: 0, p: 0 }}>
                      {safetyPoints.map((p) => (
                        <ListItem
                          key={p.title}
                          sx={{
                            px: 0,
                            py: 1.25,
                            alignItems: "flex-start",
                            borderBottom: "1px solid rgba(15, 53, 83, 0.08)",
                            "&:last-child": { borderBottom: "none" },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36, mt: "8px" }}>
                            <Box
                              sx={{
                                width: 22,
                                height: 22, 
                                color: "#19beb9",
                                display: "grid",
                                placeItems: "center", 
                              }}
                            >
                              {/* ✓ */}
                              <CheckCircleOutline sx={{ fontSize: 20 }} />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                component="h3"
                                sx={{
                                  fontWeight: 900,
                                  fontSize: { xs: 16, md: 16 },
                                  lineHeight: 1.35,
                                }}
                              >
                                {p.title}
                              </Typography>
                            }
                            secondary={
                              <Typography component="span" sx={{ lineHeight: 1.8 }}>
                                {p.body}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper
                    elevation={0}
                    sx={{ 
                      borderRadius: "16px",
                      background:
                        "linear-gradient(135deg, #0f3553 0%, #115278 100%)",
                      color: "#fff",
                      boxShadow: "0 18px 42px rgba(11, 45, 74, 0.22)",
                      p: { xs: 2.5, md: 3.5 },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 900,
                        letterSpacing: 0.6,
                        fontSize: 13,
                        opacity: 0.95,
                        textTransform: "uppercase",
                      }}
                    >
                      OUR ANAESTHESIA PARTNER
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {anaesthesiaCreds.map((t) => (
                        <Box
                          key={t}
                          sx={{
                            display: "flex",
                            gap: 1.5,
                            alignItems: "flex-start",
                            py: 1, 
                          }}
                        >
                          <Box
                            sx={{
                              width: 28,
                              height: 28,
                              borderRadius: "999px",
                              display: "grid",
                              placeItems: "center",
                              backgroundColor: "rgba(255,255,255,0.12)",
                              flex: "0 0 auto",
                            }}
                          >
                            🏅
                          </Box>
                          <Typography
                            sx={{
                              lineHeight: 1.7,
                              color: "rgba(255,255,255,0.90)",
                            }}
                          >
                            {t}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="py-5" style={{ background: "#f5f8fb" }}>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box style={{ textAlign: "center" }}>
                <Chip
                  label="Frequently Asked Questions"
                  sx={{
                    backgroundColor: "rgba(17, 114, 149, 0.12)",
                    color: "#19beb9",
                    fontWeight: 700,
                  }}
                /> 
                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Common Questions" align="center" />
              </Box>
              <Box mt={3}> 
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {faqItems[0].q}
                      </button>
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>
                          {faqItems[0].a}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {faqItems[1].q}
                      </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>{faqItems[1].a}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {faqItems[2].q}
                      </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>{faqItems[2].a}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {faqItems[3].q}
                      </button>
                    </h3>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>{faqItems[3].a}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        {faqItems[4].q}
                      </button>
                    </h3>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>{faqItems[4].a}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        {faqItems[5].q}
                      </button>
                    </h3>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>{faqItems[5].a}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        {faqItems[6].q}
                      </button>
                    </h3>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className='para'>{faqItems[6].a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #1e5f8a 0%, #2d7fb0 60%, #2d7fb0 100%)",
        }}
      >
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  py: { xs: 4, md: 5 },
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 900,
                    mb: 1,
                    fontSize: { xs: 32, sm: 40, md: 46 },
                    lineHeight: 1.15,
                  }}
                >
                  Ready to Book or Have Questions?
                </Typography>
                <Typography sx={{ opacity: 0.92, maxWidth: 760, mx: "auto" }}>
                  Contact our Carrum Downs Dental team today. We&apos;re happy to
                  answer any questions about sleep dentistry, check your Medicare
                  eligibility, and help you take the first step.
                </Typography>

                <Grid
                  container
                  spacing={2.5}
                  sx={{ mt: 4, mb: 4 }}
                  justifyContent="center"
                >
                  {[
                    {
                      icon: <LocalPhoneIcon sx={{ fontSize: 22 }} />,
                      title: "CALL US",
                      body: "(03) 9782 1200",
                      href: "tel:0397821200",
                    },
                    {
                      icon: <EmailIcon sx={{ fontSize: 22 }} />,
                      title: "EMAIL US",
                      body: "team@carrumdownsdental.com.au",
                      href: "mailto:team@carrumdownsdental.com.au",
                    },
                    {
                      icon: <RoomIcon sx={{ fontSize: 22 }} />,
                      title: "VISIT US",
                      body: "Shop T5 / 100 Hall Rd\nCarrum Downs VIC 3201",
                    },
                  ].map((c) => (
                    <Grid item xs={12} sm={6} md={4} key={c.title}>
                      <Paper
                        elevation={0}
                        sx={{
                          height: "100%",
                          borderRadius: "14px",
                          backgroundColor: "rgba(255,255,255,0.10)",
                          border: "1px solid rgba(255,255,255,0.16)",
                          p: 3,
                          color: "#fff",
                          textAlign: "center",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        <Box
                          sx={{
                            mb: 1,
                            display: "grid",
                            placeItems: "center",
                            color: "rgba(255,255,255,0.95)",
                          }}
                        >
                          {c.icon}
                        </Box>
                        <Typography
                          component="h3"
                          sx={{
                            fontWeight: 900,
                            letterSpacing: 0.6,
                            fontSize: 12,
                            opacity: 0.95,
                          }}
                        >
                          {c.title}
                        </Typography>
                        {c.href ? (
                          <Typography
                            sx={{
                              mt: 1,
                              fontWeight: 800,
                              // "& a, & a:visited": {
                              //   color: "#fff",
                              //   textDecoration: "none",
                              // },
                              // "& a:hover": {
                              //   color: "#fff",
                              //   textDecoration: "underline",
                              //   textUnderlineOffset: "3px",
                              // },
                            }}
                          >
                            <a href={c.href} className="text-white">
                              {c.body}
                            </a>
                          </Typography>
                        ) : (
                          <Typography sx={{ mt: 1, whiteSpace: "pre-line" }}>
                            {c.body}
                          </Typography>
                        )}
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href="https://carrumdownsdental.com.au/book-now/"
                    style={{
                      display: "inline-block",
                      padding: "12px 22px",
                      borderRadius: "999px",
                      backgroundColor: "#fff",
                      color: "#115278",
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    Book an Appointment
                  </a>
                  <a
                    href="tel:0397821200"
                    style={{
                      display: "inline-block",
                      padding: "12px 22px",
                      borderRadius: "999px",
                      border: "2px solid rgba(255,255,255,0.85)",
                      color: "#fff",
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    Call (03) 9782 1200
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default SleepDentistryNew;

// import CircleIcon from "@mui/icons-material/Circle";
// import { Box, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
// import Image from "next/image";
// import { CommonHero, SectionalHeading, SleepDentistrySlider } from "../../../components/components";
// import styles from "../../../styles/CardLayout.module.css";

// export const metadata = {
//   title: "Sleep Dentistry Services for Stress-Free Dental Treatments",
//   description:
//     "Experience sleep dentistry in Carrum Downs with skilled dental sleep professionals. Enjoy comfortable, anxiety-free treatments for a stress-free dental visit.",
//   robots: {
//     index: true,
//   },
// };

// const assets = {
//   banner: "/carrum-new/banner/sleep-dentistry.webp",
//   sleepDentistryWhat: "/sleep-denstistry/sleep-dentistry-section-new.jpg",
//   sleepImg: "/sleep-denstistry/Image-1-new.jpg",
//   doctor2: "/sleep-denstistry/Image-2.jpeg",
//   doctor3: "/sleep-denstistry/Image.jpeg",
//   image1: "/sleep-denstistry/fear.jpg",
//   image2: "/sleep-denstistry/safe.jpg",
//   image3: "/sleep-denstistry/prevention-negative-treatment.jpg",
//   twilight: "/sleep-denstistry/female-dentist.jpg",
//   sedation: "/sleep-denstistry/female-patient.jpg",
//   happyGas: "/sleep-denstistry/happy-gas.jpg",
//   special: "/sleep-denstistry/special-needs-img-opt.jpg",
//   video: "/sleep-denstistry/sleep-dentistry-video.mp4",
// };

// const SleepDentistry = () => {

//   const breadcrumb = [
//     { id: "Sleep_dentistry_breadcrumb_1", link: "/service/", title: "Service" },
//     {
//       id: "Sleep_dentistry_breadcrumb_2",
//       link: null,
//       title: "Sleep Dentistry",
//     },
//   ];

//   return (
//     <>
//       <CommonHero bg={{ src: assets.banner }} breadcrumb={breadcrumb} align ='left' color="#fff" title="Expert Sleep Dentistry Services" />
//       <section className="py-4 my-4">
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <Box className="mb-2 mx-auto">
//                 <SectionalHeading variant="h2" title="Sleep Dentistry using General Anaesthesia" align ='left' color="var(--dark-blue)" sx={{ alignItems: "center" }} />
//               </Box>
//               <Grid container spacing={4}>
//                 <Grid item xs={12} md={6} className="mt-2">
//                   <Box sx={{ width: "100%", height: "auto" }}>
//                     <Image src={assets.sleepDentistryWhat} alt="Sleep Dentistry Carrum Downs" priority width={550} height={500} style={{ maxWidth: "100%", height: "auto" }} className="object-cover" />
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={6} className="d-flex justify-content-center">
//                   <Box>
//                     <SectionalHeading variant="h3" title="Pain-free Dental Procedures using Sleep Dentistry" align="left" color="var(--dark-blue)" />
//                     <Typography className="para mt-2">
//                       For many individuals, visiting the dentist can be a daunting and anxiety-inducing experience. The fear of dental procedures can be so intense that some people avoid seeking necessary dental care,
//                       even when faced with oral health problems. Over time, this avoidance can lead to a deterioration of dental health and more complex issues. Sleep dentistry offers a solution for those who struggle
//                       with severe dental anxiety, providing a way to receive essential dental treatments without the associated pain or emotional distress.
//                     </Typography>

//                     <Typography className="para" gutterBottom>
//                       In Carrum Downs, sleep dentistry is widely recognised as one of the safest and most effective approaches to delivering dental care. By enabling patients to feel relaxed and comfortable during
//                       potentially challenging treatments, sleep dentistry ensures a more positive experience compared to traditional dental visits. When patients are placed under general anaesthesia, they are
//                       completely unaware of the procedure and do not experience any discomfort, creating a more pleasant and stress-free dental experience.
//                     </Typography>

//                     <SectionalHeading variant="p" title="Sleep dentistry can address a wide range of concerns, including:" align="left" color="var(--dark-blue)" />
//                     <List>
//                       {[
//                         "Dental anxiety and phobia",
//                         "Complex dental procedures",
//                         "Strong gag reflex",
//                         "	Patients with special healthcare needs",
//                         "Pain management and amnesia",
//                         "Efficiency in treatment for multiple procedures",
//                         "Dental treatment for babies and toddlers",
//                       ].map((item) => (
//                         <ListItem key={item} style={{ padding: "0px" }}>
//                           <ListItemIcon>
//                             <CircleIcon style={{ color: "#117295", fontSize: "12px", marginTop: "0.5rem", }} />
//                           </ListItemIcon>
//                           <ListItemText primary={item} />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Severe Dental Anxiety in Carrum Downs" align ='left' color="var(--dark-blue)" />
//               <Grid container spacing={4}>
//                 <Grid item xs={12} md={6}>
//                   <Box sx={{ padding: { xs: 2, md: 0 }, width: "100%" }}>
//                     <Typography className="para mt-2" gutterBottom>
//                       For adults and children who experience extreme fear or anxiety related to dental visits, sleep dentistry using general anaesthesia can provide a transformative solution. When a patient is asleep
//                       during the procedure, they are completely unaware of the dental work being performed, eliminating any potential for fear, pain, or discomfort. This approach allows necessary dental treatments to
//                       be completed without causing psychological distress or trauma, which is particularly important for those with severe dental phobia.
//                     </Typography>

//                     <Typography className="para" gutterBottom>
//                       By removing the emotional barrier to seeking dental care, sleep dentistry enables patients with severe anxiety to maintain better oral health and address dental issues before they become more
//                       complex and difficult to treat. This proactive approach to dental care can lead to improved overall health and well-being, as poor oral health has been linked to various systemic health issues.
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={6} className="d-flex justify-content-center align-items-center">
//                   <video width="100%" height="100%" controls autoPlay muted>
//                     <source src={assets.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section className="py-4 my-4">
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <Box py={2}>
//                 <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Severe Gag Reflex" align ='left' color="var(--dark-blue)" />
//                 <Typography className="para mt-2">
//                   A strong gag reflex can make dental treatments challenging and uncomfortable for both the patient and the dentist. In some cases, a severe gag reflex can render certain dental procedures nearly impossible
//                   to complete while the patient is awake. Sleep dentistry using general anaesthesia offers a solution by temporarily suppressing the gag reflex while the patient is unconscious.
//                 </Typography>
//                 <Typography className="para">
//                   With the gag reflex inactive during the procedure, the dentist can work more efficiently and effectively, ensuring that necessary dental treatments are completed without causing distress or discomfort to
//                   the patient. This approach is particularly beneficial for patients who have previously struggled to receive dental care due to their severe gag reflex, as it allows them to access the treatment they need
//                   for optimal oral health.
//                 </Typography>
//                 <Box mt={2}>
//                   <Image src={assets.sleepImg} alt="sleepImg" height={650} width={1200} className="img-fluid" priority />
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//       <section className="py-4 my-4">
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <Box py={2}>
//                 <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Special Healthcare Needs" align ='left' color="var(--dark-blue)" />
//                 <Image src={assets.special} priority alt="specialHealcareNeeds" height={800} width={1200} className="img-fluid mt-4" />
//               </Box>
//               <Box className="mt-2">
//                 <Typography className="para">
//                   For adults and children with special healthcare needs, such as severe anxiety, phobia, or certain medical conditions, receiving dental care in a traditional setting can be challenging or even impossible.
//                   Sleep dentistry using general anaesthesia provides a safe and comfortable way for these individuals to receive necessary dental treatments without the emotional or physical distress that may be associated
//                   with being awake during the procedure.
//                 </Typography>
//                 <Typography className="para">
//                   By ensuring a pain-free and anxiety-free dental experience, sleep dentistry can be a transformative solution for patients with special healthcare needs. This approach allows dental professionals to
//                   provide essential care that might otherwise be neglected due to the patient's inability to tolerate treatments while awake. Maintaining good oral health is crucial for overall well-being, and sleep
//                   dentistry helps make this possible for individuals with unique needs.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <Grid container spacing={4}>
//                 <Grid item xs={12} md={6}>
//                   <Box sx={{ width: "100%", height: "auto" }}>
//                     <Image src={assets.doctor3} priority alt="complex Sleep Dentistry Carrum Downs" width={550} height={400} style={{ maxWidth: "100%", height: "auto" }} />
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={6} className="d-flex justify-content-center py-4">
//                   <Box>
//                     <SectionalHeading variant="h2" title="Sleep Dentistry for Patients Who Need Complex Dental Procedures." align ='left' color="var(--dark-blue)" />
//                     <Typography className="para mt-2" gutterBottom>
//                       Complex dental procedures, such as multiple dental surgeries, extensive restorative work, or treatments for patients with special needs, can be lengthy, uncomfortable, and emotionally taxing when
//                       performed while the patient is awake. Sleep dentistry using general anaesthesia offers a more comfortable and efficient approach to these intricate procedures.
//                     </Typography>
//                     <Typography className="para mt-2" gutterBottom>
//                       When a patient is asleep during a complex dental procedure, they are completely unaware of the treatment being performed and do not experience any pain or anxiety. This allows the dental team to
//                       work more efficiently and effectively, as they can focus on the task at hand without the need to manage the patient's discomfort or distress. Additionally, performing multiple procedures in one
//                       appointment under general anaesthesia can reduce the overall treatment time and the number of dental visits required, making the process more convenient for the patient.
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//       <section className="py-4 my-4">
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <SectionalHeading variant="h2" title="Sleep Dentistry for Babies and Young Children in Carrum Downs" align ='left' color="var(--dark-blue)" />
//               <Typography className="para mt-2">
//                 For parents of young children who experience severe anxiety or fear during dental visits, finding a way to ensure their child receives necessary dental care without causing emotional trauma can be a
//                 significant concern. Paediatric dentists in Carrum Downs recommend sleep dentistry for babies and young children who are unable to cooperate or tolerate dental treatments due to their age or level of anxiety.
//               </Typography>
//               <Typography className="para mt-2">The benefits of sleep dentistry for young patients include:</Typography>
//             </Grid>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <Grid container justifyContent="center" spacing={4} mb={2}>
//                 <Grid item xs={12} md={4} sm={6}>
//                   <Card className={styles.card}>
//                     <Image src={assets.image1} alt="scale and clean" width={440} height={290} className={styles.cardImage} style={{ aspectRatio: "6/4" }} />
//                     <CardContent className={styles.cardContent}>
//                       <Typography gutterBottom variant="h3" className=" maintainance-title-font veneer-font-color fs-4">
//                         Elimination of fear and discomfort
//                       </Typography>
//                       <Typography variant="body2" style={{ lineHeight: 1.8 }}>
//                         Since the child is fully asleep during the procedure, they do not experience any pain or anxiety associated with dental treatments.
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//                 <Grid item xs={12} md={4} sm={6}>
//                   <Card className={styles.card}>
//                     <Image src={assets.image2} alt="scale and clean" width={440} height={290} className={styles.cardImage} />
//                     <CardContent className={styles.cardContent}>
//                       <Typography variant="h5" component="h3" className="maintainance-title-font veneer-font-color fs-4">
//                         Safe and accurate treatment
//                       </Typography>
//                       <Typography variant="body2" style={{ lineHeight: 1.8 }}>
//                         Paediatric dentists can perform necessary dental work safely and precisely without the need to manage a distressed or uncooperative child.
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//                 <Grid item xs={12} md={4} sm={6}>
//                   <Card className={styles.card}>
//                     <Image src={assets.image3} alt="scale and clean" width={440} height={290} className={styles.cardImage} />
//                     <CardContent className={styles.cardContent}>
//                       <Typography variant="h5" component="h3" className=" maintainance-title-font veneer-font-color fs-4">
//                         Prevention of negative dental experiences
//                       </Typography>
//                       <Typography variant="body2" style={{ lineHeight: 1.8 }}>
//                         By avoiding traumatic dental experiences at a young age, sleep dentistry can help prevent the development of dental phobia or anxiety later in life.
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               </Grid>
//               <Typography className="para fw-semibold">To help children feel more comfortable during dental visits, parents and guardians can try the following strategies:</Typography>
//               <List>
//                 {[
//                   "Preparing the child for the visit by explaining the process in simple, age-appropriate terms",
//                   "Allowing the child to bring a favourite toy or comfort object to the appointment",
//                   "Providing positive reinforcement and rewards after the visit to help build positive associations with dental care",
//                 ].map((item) => (
//                   <ListItem key={item} style={{ padding: "0px" }}>
//                     <ListItemIcon>
//                       <CircleIcon
//                         style={{
//                           color: "#117295",
//                           fontSize: "12px",
//                           marginTop: "0.5rem",
//                         }}
//                       />
//                     </ListItemIcon>
//                     <ListItemText primary={item} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section className="my-4 py-4" style={{ background: "#d1cbcb52" }}>
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <SectionalHeading variant="h2" title="Alternative Relaxation Techniques in Dentistry Beyond Full Sleep Sedation" align ='left' color="var(--dark-blue)" />
//               <Typography className="para mt-2">
//                 While sleep dentistry using general anaesthesia is an effective solution for many patients with severe dental anxiety or complex treatment needs, there are alternative relaxation techniques available that do
//                 not involve complete unconsciousness. These options include:
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={9} className="mx-auto pb-4">
//               <Grid container justifyContent="center" spacing={4}>
//                 <Grid item xs={12} md={6} sm={6} lg={4}>
//                   <Card className={styles.card}>
//                     <CardMedia component="img" src={assets.happyGas} alt="Happy Gas Treatment" width={440} height={350} style={{ aspectRatio: "5/4" }} className={styles.ChoosecardImage} />

//                     <CardContent className={styles.cardContent}>
//                       <Typography variant="h5" component="h3" className="maintainance-title-font veneer-font-color fs-4">
//                         Nitrous Oxide (Laughing Gas)
//                       </Typography>
//                       <Typography variant="body2" style={{ lineHeight: 1.8 }}>
//                         Nitrous oxide, also known as laughing gas, is a mild sedative that is inhaled through a mask during a dental procedure. This technique helps patients feel relaxed and at ease while remaining
//                         awake and responsive. Laughing gas is a popular choice for both adults and children with mild to moderate levels of dental anxiety. It is considered safe for children around 3-4 years of age
//                         who are able to tolerate wearing the mask and follow instructions. However, for very young or uncooperative children, sleep dentistry may be a more suitable option.
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>

//                 <Grid item xs={12} md={6} sm={6} lg={4}>
//                   <Card className={styles.card}>
//                     <CardMedia component="img" src={assets.sedation} alt="Sedation Dentistry" width={440}
//                       height={350} style={{ aspectRatio: "5/4" }} className={styles.ChoosecardImage} />
//                     <CardContent className={styles.cardContent}>
//                       <Typography variant="h5" component="h3" className="mb-4 maintainance-title-font veneer-font-color fs-4">
//                         IV Sedation
//                       </Typography>
//                       <Typography variant="body2" style={{ lineHeight: 1.8 }}>
//                         Intravenous (IV) sedation involves administering sedative medications directly into the patient's bloodstream through an IV line. This method provides a deeper level of relaxation compared to
//                         laughing gas or oral sedatives while still allowing the patient to remain awake and responsive. IV sedation is typically recommended for adults with moderate to severe dental anxiety, as it
//                         can help them feel more comfortable and less anxious during the procedure. However, IV sedation is generally not used for young children, who may instead benefit from sleep dentistry if
//                         laughing gas is not sufficient.
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//                 <Grid item xs={12} md={6} sm={6} lg={4}>
//                   <Card className={styles.card}>
//                     <CardMedia component="img" src={assets.twilight} alt="Twilight Sedation" className={styles.ChoosecardImage} width={440}
//                       height={350} style={{ aspectRatio: "5/4" }} />

//                     <CardContent className={styles.cardContent}>
//                       <Typography variant="h5" component="h3" className="mb-4 maintainance-title-font veneer-font-color fs-4">
//                         Twilight Sedation
//                       </Typography>
//                       <Typography variant="body2" style={{ lineHeight: 1.8 }}>
//                         Twilight sedation is a type of IV sedation that puts patients in a deeply relaxed, dream-like state. While under twilight sedation, patients are still able to respond to verbal cues and
//                         instructions but may have little to no memory of the procedure afterwards. This approach is highly effective for adults with significant dental anxiety, as it allows them to receive necessary
//                         dental care without the emotional distress often associated with being fully aware during the treatment.
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section>
//         <SleepDentistrySlider />
//       </section>
//       <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <SectionalHeading variant="h2" title="Payment Options to Make Sleep Dentistry Affordable in Carrum Downs" align ='left' color="var(--dark-blue)" />
//               <Box sx={{ padding: { xs: 2, md: 0 }, width: "100%" }}>
//                 <Typography variant="body1" paragraph className="para">
//                   Although sleep dentistry can be more expensive than traditional dental treatments, there are several payment options available to help make this approach more affordable and accessible for patients in
//                   Carrum Downs:
//                 </Typography>
//                 <List>
//                   <ListItem style={{ padding: "0px" }}>
//                     <ListItemText
//                       primary={
//                         <Typography className="para ms-3 fw-bold" variant="body2">
//                           1. Humm and AfterPay
//                         </Typography>
//                       }
//                       secondary={
//                         <Typography className=" ms-3" variant="body2" style={{ color: "#1c1a1a" }}>
//                           These payment plans allow patients to spread the cost of their dental treatment over time rather than paying the full amount upfront. By breaking the cost into more manageable instalments,
//                           patients can access the benefits of sleep dentistry without the immediate financial burden.
//                         </Typography>
//                       }
//                     />
//                   </ListItem>
//                   <ListItem style={{ padding: "0px" }}>
//                     <ListItemText
//                       primary={
//                         <Typography className="para ms-3 fw-bold" variant="body2">
//                           2. Applying for early release of superannuation funds on compassionate grounds through the Australian Taxation Office (ATO)
//                         </Typography>
//                       }
//                       secondary={
//                         <Typography className=" ms-3" variant="body2" style={{ color: "#1c1a1a" }}>
//                           In some cases, individuals may be eligible to access their superannuation funds early to cover the cost of necessary dental treatments. A dental coordinator can assist patients in
//                           navigating the application process and understanding the requirements for early release of funds on compassionate grounds.
//                         </Typography>
//                       }
//                     />
//                   </ListItem>
//                 </List>
//                 <Typography variant="body1" paragraph className="para">
//                   By exploring these payment options, patients in Carrum Downs can make sleep dentistry a more financially feasible solution for their dental needs, ensuring they receive the care they require for optimal
//                   oral health.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//       <section className="py-4 my-4">
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <SectionalHeading variant="h2" title="Dental Procedures Suitable for Sleep Dentistry" align ='left' color="var(--dark-blue)" />
//               <Box sx={{ padding: { xs: 2, md: 0 }, width: "100%" }}>
//                 <Typography variant="body1" paragraph>
//                   A wide range of dental procedures can be performed under general anaesthesia, making sleep dentistry a versatile solution for various patient needs. Some common treatments that may benefit from sleep
//                   dentistry include:
//                 </Typography>
//                 <List>
//                   {[
//                     "Paediatric dental care for toddlers or very young children with extensive tooth decay",
//                     "Extraction of multiple teeth, particularly wisdom teeth removals",
//                     "Placement of dental implants, which can be a complex and time-consuming procedure",
//                     "Major reconstructive or restorative work, such as placing several crowns or bridges in one appointment",
//                     "Extensive root canal treatments that may require multiple visits or lengthy appointments",
//                   ].map((item) => (
//                     <ListItem key={item} style={{ padding: "0px" }}>
//                       <ListItemIcon>
//                         <CircleIcon
//                           style={{
//                             color: "#117295",
//                             fontSize: "12px",
//                             marginTop: "0.5rem",
//                           }}
//                         />
//                       </ListItemIcon>
//                       <ListItemText primary={item} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//       <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             {/* Heading full width */}
//             <Grid item xs={12}>
//               <SectionalHeading variant="h2" title="Advantages of Dental Sedation: Experience Relaxing, Pain-free Dentistry" align ='left' color="var(--dark-blue)" />
//             </Grid>

//             {/* Image */}
//             <Grid item xs={12} md={6}>
//               <Box sx={{ width: "100%" }}>
//                 <Image src={assets.doctor2} alt="Sleep Dentistry Carrum Downs" width={600} height={400} className="w-full h-auto object-cover rounded-lg shadow-md" priority />
//               </Box>
//             </Grid>

//             {/* Text Content */}
//             <Grid item xs={12} md={6}>
//               <Box sx={{ padding: { xs: 1, md: 0 } }}>
//                 <Typography component="p" gutterBottom sx={{ fontSize: "1rem", mb: 2 }}>
//                   Dental sedation, including sleep dentistry, offers numerous benefits for patients seeking a more comfortable and stress-free dental experience:
//                 </Typography>

//                 <List>
//                   {[
//                     "Improved access to dental care for even the most anxious or fearful patients",
//                     "Effective relief of pain and anxiety during dental procedures",
//                     "Assistance for patients with a strong gag reflex that may otherwise impede treatment",
//                     "Increased comfort and cooperation for patients requiring extensive dental work",
//                     "Enhanced dental experience for individuals with special needs, such as those with general anxiety disorder or autism",
//                     "Efficient completion of lengthy, surgical, or invasive dental procedures",
//                     "Reduced need for multiple dental visits, as the dentist can work more efficiently while the patient is sedated",
//                   ].map((item) => (
//                     <ListItem key={item} sx={{ lineHeight: 1.8 }}>
//                       <ListItemIcon sx={{ minWidth: "30px" }}>
//                         <CircleIcon sx={{ color: "#117295", fontSize: "12px", mt: "6px" }} />
//                       </ListItemIcon>
//                       <ListItemText primary={item} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section className="py-4 my-4">
//         <Container maxWidth="xxl">
//           <Grid container>
//             <Grid item xs={12} md={9} className="mx-auto">
//               <SectionalHeading variant="h2" title="Putting off Dental Treatments" align ='left' color="var(--dark-blue)" />
//               <Box
//                 sx={{
//                   padding: { xs: 2, md: 0 },
//                   marginTop: { md: 2, xs: 2 },
//                   width: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="p"
//                   gutterBottom
//                   style={{
//                     fontSize: "1rem !important",
//                     lineHeight: "1.4 !important",
//                   }}
//                 >
//                   Delaying or avoiding necessary dental care due to fear or anxiety can have serious consequences for an individual's oral health. When dental issues are left untreated, they can quickly escalate into more
//                   complex and severe problems that may require invasive procedures to resolve. Some potential consequences of postponing dental treatments include:
//                 </Typography>
//                 <List>
//                   {[
//                     "Worsening of existing dental problems, such as cavities progressing into infections that spread to the root of the tooth",
//                     "Increased pain and discomfort as untreated dental issues become more severe",
//                     " Higher treatment costs associated with more extensive and complex procedures needed to address advanced dental problems",
//                     " Elevated risk of infection spreading beyond the mouth and affecting other parts of the body",
//                     "Potential loss of teeth due to untreated gum disease or extensive tooth decay",
//                     "Negative impact on overall health, as poor oral health has been linked to various systemic conditions, such as heart disease and diabetes",
//                   ].map((item) => (
//                     <ListItem key={item} style={{ lineHeight: "1.8 !important" }}>
//                       <ListItemIcon>
//                         <CircleIcon
//                           style={{
//                             color: "#117295",
//                             fontSize: "12px",
//                             marginTop: "0.5rem",
//                           }}
//                         />
//                       </ListItemIcon>
//                       <ListItemText primary={item} />
//                     </ListItem>
//                   ))}
//                 </List>
//                 <Typography className="para mt-2">
//                   Seeking prompt dental care is essential for maintaining good oral health and preventing the development of more serious dental and general health issues. For individuals who experience severe dental
//                   anxiety or phobia, sleep dentistry can provide a safe and comfortable way to access necessary treatments, enabling them to prioritize their oral health without the emotional distress that may have
//                   previously prevented them from seeking care.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default SleepDentistry;
