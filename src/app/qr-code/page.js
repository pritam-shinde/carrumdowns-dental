import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import { Avatar, Box, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import QrGenerator from '../../components/other/QrGenerator'
import Link from 'next/link'

const QrCode = () => {
    return (
        <>
            <Head>
                <meta name="description" content="" />
                <meta name="robots" content="noindex" />
                <title>QR Code for Carrumdowns Dentist</title>
            </Head>
            <section style={{
                background: 'linear-gradient(to right, #115278,rgb(208, 218, 245))',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Container maxWidth="md">
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <Paper
                                elevation={6}
                                sx={{
                                    mt: { xs: 12, md: 16 }, p: { xs: 3, sm: 4 },
                                    borderRadius: 6, textAlign: "center", backgroundColor: "#fff",
                                }}>
                                <Avatar
                                    alt="Vijay Ramasundaram"
                                    src="/Services/vijay.jpeg"
                                    sx={{ width: 100, height: 100, margin: '0 auto', mb: 1, border: '1px solid gray' }}
                                />
                                <Box fontWeight="bold" sx={{ fontSize: "clamp(1.4rem, 5vw, 2.2rem)", color: "#115278" }}>
                                    Vijay
                                </Box>
                                <Box className='para' sx={{ fontSize: "clamp(1rem, 4vw, 1.5rem)", mb: 1 }}>
                                    Founder & Director, Trident Dental Group
                                </Box>
                                <Box className='para' sx={{ fontSize: "clamp(0.8rem, 4vw, 1.3rem)", mb: 1 }}>
                                    Founder, Trident Developments
                                </Box>
                                <Divider sx={{ mb: 1 }} />
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={{ xs: 2, sm: 4 }}
                                    justifyContent="center"
                                    alignItems="center"
                                    flexWrap="wrap"
                                >
                                    <Box display="flex" alignItems="center" justifyContent={"center"} gap={1}>
                                        <PhoneIcon fontSize="small" sx={{ color: '#115278' }} />
                                         <Link href="tel:+61402936482" underline="none" color="inherit">+61402936482</Link>
                                    </Box>

                                    <Box display="flex" alignItems="center" gap={1}>
                                        <EmailIcon fontSize="small" sx={{ color: '#115278' }} />
                                          <Link href="mailto:vijay@tridentgroup.au" underline="none" color="inherit">vijay@tridentgroup.au</Link>
                                    </Box>
                                </Stack>
                                <Typography variant="body1" sx={{ my: 4 }}>
                                    Scan the QR to save my contact instantly on your phone.
                                </Typography>
                                <Box
                                    sx={{
                                        p: 3,
                                        display: 'inline-block',
                                        border: '1px dashed #ccc',
                                        borderRadius: 4,
                                        backgroundColor: '#f9f9f9'
                                    }}
                                >
                                    <QrGenerator />
                                </Box>
                                <Typography variant="caption" color="text.secondary" mt={2} display="block">
                                    No app required — works on all smartphones
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default QrCode