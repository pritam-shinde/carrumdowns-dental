"use client";

import { SectionalHeading } from "@/components/components";
import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";

import Denture1 from "../../../public/denture/denture1.jpg";
import Denture2 from "../../../public/denture/denture2.jpg";
import image1 from "../../../public/digital-denture/digital-denture-1.jpg";
import implant1 from "../../../public/implant/implant1.jpg";

function TabPanel({ children, value, index }) {
    return value === index ? <Box sx={{ p: 3 }}>{children}</Box> : null;
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const DentureTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => setValue(newValue);

    // Helper to switch tab programmatically (used in "Learn More" buttons if they were to switch tabs, 
    // but the original code had buttons that linked to other pages OR switched tabs. 
    // The original code had `onClick={() => setSelectedTab("...")}` but `setSelectedTab` wasn't defined in the snippet I saw?
    // Wait, looking at the original code: `const [value, setValue] = useState(0);`
    // But in the buttons: `onClick={() => setSelectedTab("Denture (Traditional)")}`
    // `setSelectedTab` is NOT defined in the provided file content of DentureTechnologyClient.jsx!
    // It seems the original code might have had a bug or I missed something. 
    // Ah, I see `const [value, setValue] = useState(0);` but no `selectedTab` state.
    // The buttons also have `href` in the `a` tag. So they navigate away. 
    // The `onClick` seems to try to set some state but it looks broken in the original or I should ignore it.
    // I will keep the `a` tags for navigation and remove the broken `onClick` or fix it if it was meant to switch tabs.
    // Actually, the buttons say "Learn More" and link to `/service/dentures/` etc. So navigation is the primary action.
    // I will remove the `onClick` handlers that reference undefined `setSelectedTab`.

    return (
        <section className="mt-md-5 mt-4">
            <Container maxWidth="xxl">
                <Box xs={12} lg={8} className="border">
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <Tab label="Denture (Traditional)" {...a11yProps(0)} />
                                <Tab label="Digital Denture" {...a11yProps(1)} />
                                <Tab label="Overdenture" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box p={3}>
                                <Box>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} className="pe-2">
                                            <Image
                                                className="img-fluid"
                                                src={Denture1}
                                                alt="Dentures In Carrum Downs"
                                                priority
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} className="pe-2">
                                            <Image
                                                className="img-fluid"
                                                src={Denture2}
                                                alt="Dentures In Carrum Downs"
                                                priority
                                            />
                                        </Grid>
                                    </Grid>
                                    <Typography className="para">
                                        Carrum Downs Dental Group at Shop T5, 100 Hall Rd
                                        Offers a wide range of dentures to satisfy each
                                        individual patient’s specific denture needs. We work
                                        with you to determine your exact requirements and
                                        what is required to meet them. We at Carrum Downs
                                        Dental Group take pride in the quality of our
                                        Dentures.
                                    </Typography>
                                    <Typography className="para">
                                        Dentures can help restore your way of life by
                                        helping you with day-to-day functions, such as
                                        eating and speaking, as well as help restore your
                                        confidence by improving your appearance and smile.
                                    </Typography>
                                    <SectionalHeading
                                        variant="h2"
                                        title="What are Dentures?"
                                        color="var(--dark-blue)"
                                    />
                                    <Typography className="para">
                                        Dentures are replacement teeth that are removable.
                                        With the technological advancements there are
                                        several types of Dentures available to suit
                                        individual patient’s needs on comfort, convenience
                                        and look. Your Dentist will help you choose the best
                                        solution for you.
                                    </Typography>
                                </Box>
                                <Box>
                                    <List>
                                        <ListItem className="ps-0">
                                            <ListItemIcon>
                                                <CheckCircleOutline
                                                    style={{
                                                        color: "var(--dark-blue)",
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<strong>Full dentures</strong>}
                                                secondary="If all the teeth are missing, this is a cost-effective way to replace all the teeth."
                                            />
                                        </ListItem>
                                        <ListItem className="ps-0">
                                            <ListItemIcon>
                                                <CheckCircleOutline
                                                    style={{
                                                        color: "var(--dark-blue)",
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<strong>Partial dentures</strong>}
                                                secondary="Usually made out of acrylic or a metal framework to replace one or more teeth."
                                            />
                                        </ListItem>
                                        <Box mt={3}>
                                            <Button
                                                className="teethWhiteningBtn"
                                            >
                                                <a
                                                    href="/service/dentures/"
                                                    className="text-white"
                                                >
                                                    Learn More
                                                </a>
                                            </Button>
                                        </Box>
                                    </List>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box p={3}>
                                <section>
                                    <Container maxWidth="xxl" className="p-0">
                                        <SectionalHeading
                                            variant="h2"
                                            title="Digital Dentures Carrum Downs Dental Clinic"
                                            align="center"
                                            color="var(--dark-blue)"
                                        />
                                        <Box mt={3}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12}>
                                                    <Typography className="para">
                                                        As technology continues to advance,
                                                        so does the field of dentistry. The
                                                        latest innovation in dental care has
                                                        given people a new way to smile and
                                                        chew comfortably – digital dentures!
                                                        Dentists now use state-of-the-art
                                                        software, imaging systems, and 3D
                                                        printing technology to create
                                                        customized dentures with an improved
                                                        fit, function, and aesthetics.{" "}
                                                    </Typography>
                                                    <Typography className="para">
                                                        At Carrum Downs Dental Clinic, we
                                                        take pride in offering digital
                                                        denture services. We understand that
                                                        every patient has their own unique
                                                        needs. Therefore, we strive to offer
                                                        individualized services to meet
                                                        their needs.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Container>
                                </section>

                                <Container maxWidth="xxl" className="p-0">
                                    <SectionalHeading
                                        variant="h2"
                                        title="What are Digital Dentures?"
                                        align="center"
                                        color="var(--dark-blue)"
                                    />
                                    <Box mt={3}>
                                        <Grid container spacing={5}>
                                            <Grid item xs={12} md={6}>
                                                <Typography className="para">
                                                    Digital dentures are a recent innovation
                                                    that uses 3D scanning, design, and
                                                    printing to fabricate a denture
                                                    prosthetic. The technology enables the
                                                    dentist to create more precise,
                                                    comfortable, and aesthetically pleasing
                                                    dentures than traditional ones. Digital
                                                    dentures are designed using specialized
                                                    software for greater accuracy and
                                                    customization.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Image
                                                    className="img-fluid"
                                                    src={image1}
                                                    alt="girl smiling"
                                                    priority
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box mt={3}>
                                        <Button
                                            style={{ width: "10rem" }}
                                            className="teethWhiteningBtn"
                                        >
                                            <a
                                                href="/service/digital-dentures/"
                                                className="text-white"
                                            >
                                                Learn More
                                            </a>
                                        </Button>
                                    </Box>
                                </Container>
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <section>
                                <Container maxWidth="xxl" className="p-0">
                                    <SectionalHeading
                                        variant="h2"
                                        title="Did you know that a lot of Individuals with convectional dentures end up not wearing them due to the simple fact that they don’t stay in place?"
                                        color="var(--dark-blue)"
                                    />
                                    <Box mt={3}>
                                        <Grid container spacing={5}>
                                            <Grid item xs={12} md={6}>
                                                <Image
                                                    className="img-fluid"
                                                    src={implant1}
                                                    alt="girl smiling"
                                                    priority
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography className="para">
                                                    Dental implants provide you with a means
                                                    of ensuring that dentures remain firmly
                                                    in position. It enables you to carry out
                                                    your daily activities with confidence.
                                                    An implant-supported overdenture is a
                                                    denture that is held in place by
                                                    implants and attached to the Many people
                                                    have found dental implants procedure to
                                                    secure their dentures in place to be
                                                    very successful.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Container>
                            </section>
                            <Container maxWidth="xxl" className="p-0">
                                <Box p={1}>
                                    <Typography className="para">
                                        In fact, when compared to other implanted surgical
                                        devices, it has been reported that dental implants
                                        to support dentures have the highest success rate.
                                    </Typography>
                                    <Typography className="para">
                                        An implant-supported overdenture uses some special
                                        attachments that snap onto the implants. Like
                                        regular dentures, an implant-supported overdenture
                                        must be taken out at night for cleaning purposes. It
                                        would be best if you also cleaned the gums and
                                        implant attachments.
                                    </Typography>
                                    <Typography className="para">
                                        Millions of individuals across the globe are missing
                                        enough teeth to necessitate the use of conventional
                                        dentures. Therefore, most of them face difficulties
                                        keeping themselves securely in place, particularly
                                        in the lower jaw. If you struggle with loose
                                        dentures, you must be familiar with the
                                        embarrassment that comes with slipping dentures and
                                        the inability to enjoy your favorite foods.
                                    </Typography>
                                    <Box mt={3}>
                                        <Button
                                            style={{ width: "10rem" }}
                                            className="teethWhiteningBtn"
                                        >
                                            <a
                                                href="/service/implant-supported-denture/"
                                                className="text-white"
                                            >
                                                Learn More
                                            </a>
                                        </Button>
                                    </Box>
                                </Box>
                            </Container>
                        </TabPanel>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default DentureTabs;
