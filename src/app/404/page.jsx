import { Box, Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import BlueFilledBtn from "../../components/custom-buttons/BlueFilledBtn/BlueFilledBtn"
// import ErrorImage from '../../public/error/404.gif'

const Error = () => {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/" />
        <title>404 | Page not found</title>
      </Head>
      <section>
        <Container maxWidth="xxl" style={{ height: "100vh", width: "100%" }}>
          <Box style={{ height: "100%,", width: "100%", position: "absolute", zIndex: "-1", top: 0, left: 0, right: 0, bottom: 0 }}>
            <Image src="/carrum-new/404.jpg" alt="page not found" layout='fill' title="page not found" />
          </Box>
          <Box className='d-flex justify-content-center' style={{ position: "absolute", zIndex: 2, left: 0, right: 0, bottom: "10%" }}>
            <BlueFilledBtn navlink={true} btnLink="/" btnTitle="Go To Homepage" />
          </Box>
        </Container>
      </section>
    </>
  )
}
export default Error