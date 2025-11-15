import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const VideoAbout = () => {
    return (
        <> 
        <Container
            maxWidth="xxl"
            sx={{
                padding: { xs: "0 0 80px 0", sm: "0px 40px", md:"0px 50px" ,lg:"0px 100px" }
            }}
        >
            <Grid container>
                <Grid item xs={12} md={12} className="mx-auto">
                    <Box py={5}>
                        <Grid container spacing={5} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box
                                    py={3}
                                    sx={{
                                        aspectRatio: "16 / 9",
                                        maxHeight: 360,
                                        minHeight: { xs: 200, sm: 240, md: 300 },
                                        width: "100%"
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        // src="https://www.youtube.com/embed/5hYQ-QXRSyg?si=lBboq3d-Y38oweD-"
                                         src="https://www.youtube-nocookie.com/embed/5hYQ-QXRSyg?si=lBboq3d-Y38oweD-"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        style={{ border: 0 }}
                                    ></iframe>
                                </Box>
                            </Grid>
 
                            <Grid item xs={12} md={6} display="flex" alignItems="center">
                                <Box>
                                    <Typography
                                        variant="h2"
                                        gutterBottom
                                        sx={{
                                            fontSize: "clamp(24px,4vw,30px)",
                                            fontFamily: "var(--heading-font)"
                                        }}
                                    >
                                        Welcome to Our Dental Clinic
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        At our clinic, we provide top-quality dental care with a focus on
                                        patient comfort and satisfaction. Our experienced team uses
                                        advanced technology to ensure the best treatment for you and your family.
                                    </Typography>
                                    <Typography variant="body1">
                                        Whether you need a routine checkup, cosmetic dentistry, or
                                        emergency care, we are here to help you achieve a healthy,
                                        beautiful smile.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default VideoAbout