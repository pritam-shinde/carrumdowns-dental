import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { BlueFilledBtn } from "../../components";

const FooterNew = () => {
    return (
        <>
            <footer
                className="footer-bg"
                style={{
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.5)",
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 50%, transparent 60%), url(/carrum-new/footer-image.png)`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container maxWidth="xxl" id="service">
                    <Grid container gap={{ xs: 2, sm: 3, md: 4 }}>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                                flexWrap={"wrap"}
                                paddingTop={2}
                            >
                                <Box
                                    sx={{
                                        maxWidth: { xs: "100%", sm: "320px" },
                                        // paddingTop: { xs: 4, sm: 4, md: 0 },
                                    }}
                                >
                                    <Image
                                        width={330}
                                        height={150}
                                        src="/footer/logo_new.png"
                                        alt="carrumdowns dental clinic logo"
                                        sx={{ width: "100%" }}
                                    />
                                </Box>
                                <Stack spacing={2} flex={{ xs: 1, lg: 0.5 }}>
                                    <Typography
                                        component="span"
                                        variant="body1"
                                        className="fw-semibold"
                                        style={{
                                            fontSize: "23px !important",
                                            lineHeight: "30px !important",
                                            fontFamily: "var(--heading-font) !important",
                                        }}
                                    >
                                        SUBSCRIBE TO NEWSLETTER
                                    </Typography>
                                    <form
                                        method="post"
                                        action="https://formsubmit.co/d53a69bc539b96c63b2afdcb0767af8d"
                                        encType="multipart/form-data"
                                    >
                                        <Box display="flex">
                                            <TextField
                                                placeholder="Enter email address"
                                                variant="outlined"
                                                name="email"
                                                className="bg-transparent"
                                                sx={{
                                                    flex: 1,
                                                    "& .MuiOutlinedInput-root": {
                                                        borderTopRightRadius: "0px",
                                                        borderBottomRightRadius: "0px",
                                                    },
                                                }}
                                            />
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                className="btn-color"
                                                style={{
                                                    borderTopLeftRadius: 0,
                                                    borderBottomLeftRadius: 0,
                                                }}
                                            >
                                                Send
                                            </Button>
                                        </Box>
                                    </form>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, sm: 4, md: 12 }}>
                                <Stack flex={{ xs: 1, md: 0.9, lg: 1 }}>
                                    <Typography className="footer-sec-head" gutterBottom>
                                        About Us
                                    </Typography>
                                    <Typography variant="body2">
                                        Carrum Downs Dental at Shop T5, Hall Road is committed to applying our dental
                                        knowledge and skills in a caring and gentle way. You will feel at ease while we
                                        work on your smile. Learn more about our dentist in Carrum Downs.
                                    </Typography>

                                    <BlueFilledBtn
                                        navlink={true}
                                        btnTitle="BOOK APPOINTMENT"
                                        btnLink="/book-now/"
                                        sx={{ width: "fit-content", margin: 0 }}
                                    />
                                </Stack>
                                <Stack
                                    flex={{ xs: 1, md: 1.1, lg: 1 }}
                                    direction={{ xs: "column", sm: "row" }}
                                    justifyContent={"space-between"}
                                >
                                    <Stack flex={{ xs: 0.5, md: 1 }}>
                                        <Typography className="footer-sec-head" gutterBottom>
                                            Quick Links
                                        </Typography>

                                        <ul style={{ listStyle: "none", padding: 0 }}>
                                            {[
                                                { name: "Home", href: "/" },
                                                { name: "About Us", href: "/about-us/" },
                                                { name: "Services", href: "/service/" },
                                                { name: "Blog", href: "/blog/" },
                                                { name: "Contact Us", href: "/contact-us/" },
                                                { name: "Privacy Policy", href: "/privacy-policy/" },
                                                {
                                                    name: "Terms and Conditions",
                                                    href: "/terms-and-conditions/",
                                                },
                                            ].map((link, index) => (
                                                <li key={index}>
                                                    <a href={link.href} className="text-dark fw-normal">
                                                        {link.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </Stack>
                                    <Stack flex={{ xs: 0.5, md: 1 }}>
                                        <Typography className="footer-sec-head" gutterBottom>
                                            Opening Hours
                                        </Typography>
                                        {[
                                            {
                                                title: "Monday",
                                                timing: "9AM - 5PM",
                                            },
                                            {
                                                title: "Tuesday",
                                                timing: "9AM - 5PM",
                                            },
                                            {
                                                title: "Wednesday",
                                                timing: "9AM - 5PM",
                                            },
                                            {
                                                title: "Thursday",
                                                timing: "9AM - 5PM",
                                            },
                                            {
                                                title: "Friday",
                                                timing: "9AM - 5PM",
                                            },
                                            {
                                                title: "Saturday",
                                                timing: "9AM - 5PM",
                                            },
                                            {
                                                title: "Sunday",
                                                timing: "9AM - 5PM",
                                            },
                                        ].map((x, index) => (
                                            <Stack
                                                key={index}
                                                direction={"row"}
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                                gap={4}
                                            >
                                                <span>{x.title}</span>
                                                <span>{x.timing}</span>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={{ xs: 2, sm: 2, md: 4 }}
                                justifyContent={"center"}
                                flexWrap={"wrap"}
                                sx={{
                                    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    padding: "16px 0 16px 0",
                                }}
                            >
                                <a href="/dentist-in-skye/" className="nav-link">
                                    Skye
                                </a>

                                <a href="/dentist-in-sandhurst/" className="nav-link">
                                    Sandhurst
                                </a>

                                <a href="/dentist-in-patterson-lakes/" className="nav-link">
                                    Patterson Lakes
                                </a>

                                <a href="/dentist-in-cranbourne-west/" className="nav-link">
                                    Cranbourne West
                                </a>

                                <a href="/dentist-in-frankston-north/" className="nav-link">
                                    Frankston North
                                </a>

                                <a href="/dentist-in-seaford/" className="nav-link">
                                    Seaford
                                </a>

                                <a href="/dentist-in-lyndhurst/" className="nav-link">
                                    Lyndhurst
                                </a>

                                <a href="/dentist-in-langwarrin/" className="nav-link">
                                    Langwarrin
                                </a>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Typography
                                align="center"
                                paddingBottom={{ xs: 12, sm: 4, md: 0 }}
                                style={{ fontWeight: "500 !important", lineHeight: "30px" }}
                            >
                                Copyright {new Date().getFullYear()} |{" "}
                                <a
                                    href="/"
                                    className="text-dark"
                                    style={{ fontWeight: "500 !important", lineHeight: "30px" }}
                                >
                                    carrumdownsdental.com.au
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    );
};

export default FooterNew;
