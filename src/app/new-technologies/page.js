import { Box, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Banner from '../../../public/carrum-new/banner/new-technologies.webp';
import { CommonHero } from '../../components/components';

const NewTechnology = () => {


  const breadcrumb = [
    { id: "new_technology_breadcrumb_1", link: null, title: "New Technologies" }
  ]

  return (
    <>
      <Head>
        <title>New Dental Technologies – Carrum Downs Dental Group</title>
        <meta name="description" content="Our dental clinic has introduced new technologies to help enhance our practice and patient education. Explore the technologies" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="New Technologies" align="left" color="#fff" />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Box>
                  <Typography className="para">Our dental clinic has introduced the following new technologies to help enhance our practice and patient education.</Typography>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Intraoral camera</strong></Typography>
                  <Typography className='para'>An intraoral camera takes photos of your teeth to make you become part and parcel of your prognosis. The photos can then be displayed on a monitor where you can see and your dentist can discuss with you any areas of major concern and even suggest a variety of possible treatments depending on each individual dental problem. This allows for dental problems such as cavities and malocclusion to be carefully diagnosed and treated.</Typography>
                  <Typography className='para'>Additionally, the camera allows magnification of your tooth for a more precise and detailed prognosis. Magnification aids the dentist is checking for any hidden cracks or cavities that are just starting. The pictures can then be used for comparisons before, during, and after treatment to monitor a patient’s progress by looking at each progressive picture. This helps to determine if a treatment is working as desired or not.</Typography>
                </Box>
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Digital X-Rays</strong></Typography>
                  <Typography className='para'>Unlike traditional x-rays, digital x-rays emit less radiation and are therefore safer. Digital x-rays also allow for electronic storage and transfer which helps in cases of patient referrals. Depending ona patient to patient needs, digital x-rays can be used to track the progress of treatments by making comparisons to previous x-rays. The x-rays can also be emailed and stored for any future references.</Typography>
                </Box>
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Soft Tissue Laser</strong></Typography>
                  <Typography className='para'>Soft tissue laser treatments can be used in place of surgical procedures to help improve patient comfort. It can be used in treatments such as gingival contouring where it acts as a cutting tool but without the bleeding and tissue damage.</Typography>
                </Box>
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Amalgam filtration system</strong></Typography>
                  <Typography className='para'>During dental procedures, amalgam fillings and metals such as mercury can be washed up into the public water system. An amalgam filtration system helps minimize this by filtering hazardous materials such as mercury from entering the water system and causing other health issues.</Typography>
                </Box>
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Sterilisation</strong></Typography>
                  <Typography className='para'>In observing maximum hygiene, we use the Class B sterilizer. We also make sure to apply the best sterilization methods such as hand scrubbing, ultrasonic cleansing and as well as 2.1 bar of pressure.</Typography>
                </Box>
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Nitrous oxide for patient comfort</strong></Typography>
                  <Typography className='para'>Nitrous oxide is known for its sedative properties to reduce anxiety during treatment, making the treatment process more comfortable not only for the patient but also for the dentist.Once a patient inhales the gas, it enters the bloodstream and its pain-relieving and sedative properties are activated as it reaches the brain and flows through the body. It helps the patient relax, eliminating any discomfort and anxiety which are not ideal conditions for a patient to be in during the dental procedure.</Typography>
                </Box>
                {/*  */}
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>3Shape 3D Scanner</strong></Typography>
                  <Typography className='para'>Say goodbye to messy impressions! Our state-of-the-art 3Shape 3D Scanner allows us to take fast, accurate digital impressions of your teeth in just minutes. This improves comfort for our patients and enhances precision for treatments such as crowns, bridges, implants, and clear aligners. The scanner captures detailed 3D images of your mouth, helping us plan your treatment with greater accuracy and efficiency.</Typography>
                </Box>
                {/*  */}
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Laser Dentistry</strong></Typography>
                  <Typography className='para'>We use the latest dental laser technology to deliver gentle, precise, and minimally invasive care. Laser dentistry is ideal for procedures like gum contouring, ulcer treatment, soft tissue removal, and managing gum disease. It reduces the need for sutures, minimises bleeding and swelling, and often leads to quicker healing and a more comfortable experience for patients.</Typography>
                </Box>
                {/*  */}
                <Box className='mt-md-4 mt-4'>
                  <Typography variant='h2' className='sectional-heading5 mb-2'><strong>CBCT 3D X-ray Imaging</strong></Typography>
                  <Typography className='para'>Our advanced Cone Beam Computed Tomography (CBCT) 3D X-ray system provides detailed, three-dimensional images of your teeth, jaw, and surrounding structures. This technology is crucial for accurate diagnosis and treatment planning in complex cases such as implants, wisdom teeth removal, root canals, and orthodontics. CBCT scans offer a full 3D view with lower radiation and greater precision than traditional X-rays.</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default NewTechnology