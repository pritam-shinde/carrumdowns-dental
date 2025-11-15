import { CommonHero } from "@/components/components";
import VideoAbout from "@/sections/aboutVideo/VideoAbout";
import AboutNew from "@/sections/Home/About/AboutNew";
import AddressNew from "@/sections/Home/Address/AddressNew";
import AdvantageSecNew from "@/sections/Home/AdvantageSec/AdvantageSecNew";
import OfferNew from "@/sections/Home/Offer/OfferNew";
import ServiceSectionNew from "@/sections/Home/ServiceSec/ServiceSectionNew";
import { PaymentPlan } from "@/sections/sections";



export default function Home() {
  return (
    <>

      <CommonHero pathName="index" />
      <main style={{ backgroundColor: "#F5F5F5" }}>
        <section>
          <ServiceSectionNew />
        </section>
    <section>
          <AboutNew />
        </section>
        
        <section>
          <AdvantageSecNew />
        </section>
           
        <section>
          <OfferNew />
          
        </section>
        
        <section>
          <PaymentPlan />
        </section>
        
        <section className="px-4 px-md-3 px-lg-5">
          <VideoAbout />
        </section>
     
        <section>
          <AddressNew />
        </section>  
      </main>

    </>
  );
}
