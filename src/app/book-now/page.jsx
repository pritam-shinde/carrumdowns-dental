import { Container, Grid } from "@mui/material";
import Banner from "../../../public/carrum-new/banner/appointment.jpg";
import { CommonHero } from "../../components/components";

// SEO Metadata  
export const metadata = {
  title: "Book Your Dental Appointment Online Today",
  description:
    "Ready to see the dentist? Book your appointment now for quick and easy scheduling. Let us help you with your dental care needs!",
  robots: "index, follow",
  alternates: { canonical: "/book-appointment" },
};

const BookNow = () => {
  const breadcrumb = [
    { id: "book_now_breadcrumb_1", link: null, title: "Book Appointment" },
  ];

  return (
    <> 
      <CommonHero
        bg={Banner}
        breadcrumb={breadcrumb}
        title="Book Appointment"
        // align={width < 600 ? "center" : "left"}
        color="var(--dark-blue)"
      />
      (
      <>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto" py={5}>
              <div id="he-webplugin-62595">
                <iframe
                  src="https://healthengine.com.au/webplugin/?id=62595&amp;source=webplugin"
                  width="100%"
                  height="500"
                  className="he-webplugin"
                  name="open-appointments-widget-62595"
                  frameBorder="0"
                  style={{ border: "2px solid #045475" }}
                  title="myIframe"
                  loading="lazy"
                ></iframe>
              </div>
              {/* <Script
                  data-he-id="62595"
                  data-he-width="100%"
                  data-he-height="500"
                  data-he-frame-css="border:2px solid #045475"
                  src="https://healthengine.com.au/webplugin/appointments.js"
                ></Script> */}
              {/* </Box>
                  </Box> */}
            </Grid>
          </Grid>
        </Container>
      </>
      )
    </>
  );
};
export default BookNow;
