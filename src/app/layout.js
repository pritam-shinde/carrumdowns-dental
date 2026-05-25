import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
// import "bootstrap/dist/css/bootstrap.min.css";  
import { Exo_2, Inter, Open_Sans, Poppins } from "next/font/google";
import BootstrapClient from "@/components/other/BootstrapClient";
import Script from "next/script";
import BirdEyeWidget from "@/sections/Home/BirdEyeWidget";


// Configure each font
const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://carrumdownsdental.com.au";

// Metadata for SEO
export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Group",
  description: "Carrum Downs Dental Group offers expert family dental care. Our Dentist knowledge and skills will provide you all Dental Care under one roof.",
  alternates: {
    canonical: "/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Carrum Downs Dental Group",
  "identifier": ["https://www.google.com/search?q=Carrum+Downs+Dental+Group&sxsrf=AJOqlzWiw8WlXyUSTjrBfdxukS1950OC_w%3A1678093763081&ei=w60FZKrXBOPuz7sP4r6smAc&ved=0ahUKEwjqxJe1-sb9AhVj93MBHWIfC3MQ4dUDCA8&uact=5&oq=Carrum+Downs+Dental+Group&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzILCC4QgAQQxwEQrwEyBggAEBYQHjoNCC4QxwEQrwEQsAMQJzoKCAAQRxDWBBCwAzoNCAAQRxDWBBDJAxCwA0oECEEYAFCfBFifBGChCWgDcAF4AIABrAGIAawBkgEDMC4xmAEAoAECoAEByAEDwAEB&sclient=gws-wiz-serp"],
  "alternateName": ["dentures in carrum downs", "best dentist carrum downs", "dentist in carrum", "carrum downs family dental", "carrum downs dental", "carrum downs dentist", "dentist in carrum downs", "dentist carrum downs"],
  "description": "Experience the best dental treatment from Carrum Downs Dental Group. Our Dentist knowledge and skills will provide you all Dental Care under one roof.",
  "telephone": "(03) 9782 1200",
  "url": "https://carrumdownsdental.com.au/",
  "logo": "https://carrumdownsdental.com.au/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo_new.47e07fed.png&w=750&q=75",
  "hasMap": "https://goo.gl/maps/S9NMzJvgvEyoUxUG6",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Visa, Cash",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop T5, 100 Hall Road",
    "addressLocality": "Carrum Downs",
    "addressRegion": "VIC",
    "postalCode": "3201",
    "addressCountry": "AU"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "269"
  },
  "openingHours": ["Mo 09:00-17:00", "Tu 09:00-17:00", "We 09:00-17:00", "Th 09:00-17:00", "Fr 09:00-17:00", "Sa 09:00-17:00", "Su 09:00-17:00"],
  "mainEntityOfPage": "https://carrumdownsdental.com.au/",
  "sameAs": [
    "https://www.facebook.com/CarrumDownsDental/",
    "https://goo.gl/maps/S9NMzJvgvEyoUxUG6",
    "https://www.yelp.com/biz/carrum-downs-dental-group-carrum-downs",
    "https://twitter.com/CarrumDownsGrp",
    "https://www.instagram.com/cddentalgroup/",
    "https://www.pinterest.com/CarrumDownsGrp/",
    "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg"],
  "foundingLocation": [
    {
      "@type": "Place",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-38.1018013",
        "longitude": "145.1870588"
      },
      "name": "Carrum Downs Dental Group"
    }
  ],
  "actionableFeedbackPolicy": "https://carrumdownsdental.com.au/privacy-policy/",
  "areaServed": ["AUD", "VIC", "Carrum Downs", "skye", "sandhurst", "patterson lakes", "cranbourne west", "frankston north", "seaford", "lyndhurst", "langwarrin"],
  "image": {
    "@type": "ImageObject",
    "name": "Carrum Downs Dental Group",
    "author": "Carrum Downs Dental",
    "contentLocation": "Carrum Downs, VIC",
    "description": "Carrum Downs Dental Group offers expert family dental care. Our Dentist knowledge and skills will provide you all Dental Care under one roof.",
    "url": "https://carrumdownsdental.com.au/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo_new.47e07fed.png&w=750&q=75"
  },
  "hasOfferCatalog": [{
    "@type": "OfferCatalog",
    "name": "Carrum Downs Dental Group Services",
    "@id": "https://carrumdownsdental.com.au/service/#OfferCatalog",
    "url": "https://carrumdownsdental.com.au/service/",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": [
          {
            "@type": "Service",
            "name": "Missing Teeth",
            "@id": "https://carrumdownsdental.com.au/service/missing-teeth/#Service",
            "url": "https://carrumdownsdental.com.au/service/missing-teeth/"
          },
          {
            "@type": "Service",
            "name": "Wisdom Teeth Removal in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/wisdom-teeth-removal/#Service",
            "url": "https://carrumdownsdental.com.au/service/wisdom-teeth-removal/"
          },
          {
            "@type": "Service",
            "name": "Child Benefit",
            "@id": "https://carrumdownsdental.com.au/service/child-benefit/#Service",
            "url": "https://carrumdownsdental.com.au/service/child-benefit/"
          },
          {
            "@type": "Service",
            "name": "Dental Implants in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/dental-implants/#Service",
            "url": "https://carrumdownsdental.com.au/service/dental-implants/"
          },
          {
            "@type": "Service",
            "name": "Dentures in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/dentures/#Service",
            "url": "https://carrumdownsdental.com.au/service/dentures/"
          },
          {
            "@type": "Service",
            "name": "Teeth Whitening in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/teeth-whitening/#Service",
            "url": "https://carrumdownsdental.com.au/service/teeth-whitening/"
          },
          {
            "@type": "Service",
            "name": "Crowns and bridge in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/crowns-and-bridge/#Service",
            "url": "https://carrumdownsdental.com.au/service/crowns-and-bridge/"
          },
          {
            "@type": "Service",
            "name": "Dental Veneers in Carrum Downs",

            "@id": "https://carrumdownsdental.com.au/service/veneers/#Service",
            "url": "https://carrumdownsdental.com.au/service/veneers/"
          },
          {
            "@type": "Service",
            "name": "Teeth Aligners",
            "@id": "https://carrumdownsdental.com.au/service/teeth-aligners/#Service",
            "url": "https://carrumdownsdental.com.au/service/teeth-aligners/"
          },
          {
            "@type": "Service",
            "name": "Invisalign Open Day",
            "@id": "https://carrumdownsdental.com.au/service/invisalign/#Service",
            "url": "https://carrumdownsdental.com.au/service/invisalign/"
          },
          {
            "@type": "Service",
            "name": "Invisalign Open Day",
            "@id": "https://carrumdownsdental.com.au/service/invisalign-open-day/#Service",
            "url": "https://carrumdownsdental.com.au/service/invisalign-open-day/"
          },
          {
            "@type": "Service",
            "name": "Root Canal in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/root-canal/#Service",
            "url": "https://carrumdownsdental.com.au/service/root-canal/"
          },
          {
            "@type": "Service",
            "name": "Teeth Cleaning in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/teeth-cleaning/#Service",
            "url": "https://carrumdownsdental.com.au/service/teeth-cleaning/"
          },
          {
            "@type": "Service",
            "name": "Dental Emergency in Carrum Downs",
            "@id": "https://carrumdownsdental.com.au/service/dental-emergency/#Service",
            "url": "https://carrumdownsdental.com.au/service/dental-emergency/"
          },
          {
            "@type": "Service",
            "name": "Tooth Fillings",
            "@id": "https://carrumdownsdental.com.au/service/tooth-fillings/#Service",
            "url": "https://carrumdownsdental.com.au/service/tooth-fillings/"
          },
          {
            "@type": "Service",
            "name": "Smile Design",
            "@id": "https://carrumdownsdental.com.au/service/smile-design/#Service",
            "url": "https://carrumdownsdental.com.au/service/smile-design/"
          },
          {
            "@type": "Service",
            "name": "Digital Dentures",
            "@id": "https://carrumdownsdental.com.au/service/digital-dentures/#Service",
            "url": "https://carrumdownsdental.com.au/service/digital-dentures/"
          },
          {
            "@type": "Service",
            "name": "Implant Supported Dentures",
            "@id": "https://carrumdownsdental.com.au/service/implant-supported-denture/#Service",
            "url": "https://carrumdownsdental.com.au/service/implant-supported-denture/"
          },
          {
            "@type": "Service",
            "name": "Denture Technology",
            "@id": "https://carrumdownsdental.com.au/service/denture-technology/#Service",
            "url": "https://carrumdownsdental.com.au/service/denture-technology/"
          },
          {
            "@type": "Service",
            "name": "Sleep Dentistry",
            "@id": "https://carrumdownsdental.com.au/service/sleep-dentistry/#Service",
            "url": "https://carrumdownsdental.com.au/service/sleep-dentistry/"
          },
          {
            "@type": "Service",
            "name": "Sleep Dentistry",
            "@id": "https://carrumdownsdental.com.au/service/smile-design/#Service",
            "url": "https://carrumdownsdental.com.au/service/smile-design/"
          },
          {
            "@type": "Service",
            "name": "Sleep Dentistry",
            "@id": "https://carrumdownsdental.com.au/service/denture-technology/#Service",
            "url": "https://carrumdownsdental.com.au/service/denture-technology/"
          }
        ]
      },
      {
        "@type": "Offer",
        "itemOffered": [
          {
            "@type": "service",
            "name": "Bad Breath",
            "@id": "https://carrumdownsdental.com.au/dental-problems/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/"
          },
          {
            "@type": "service",
            "name": "Bad Breath",
            "@id": "https://carrumdownsdental.com.au/dental-problems/bad-breath/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/bad-breath/"
          },
          {
            "@type": "service",
            "name": "Bite Problems",
            "@id": "https://carrumdownsdental.com.au/dental-problems/bite-problems/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/bite-problems/"
          },
          {
            "@type": "service",
            "name": "Bleeding Gums",
            "@id": "https://carrumdownsdental.com.au/dental-problems/bleeding-gums/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/bleeding-gums/"
          },
          {
            "@type": "service",
            "name": "Bruxism",
            "@id": "https://carrumdownsdental.com.au/dental-problems/bruxism/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/bruxism/"
          },
          {
            "@type": "service",
            "name": "Chipped or Cracked Tooth",
            "@id": "https://carrumdownsdental.com.au/dental-problems/chipped-or-cracked-tooth/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/chipped-or-cracked-tooth/"
          },
          {
            "@type": "service",
            "name": "Crooked Teeth",
            "@id": "https://carrumdownsdental.com.au/dental-problems/crooked-teeth/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/crooked-teeth/"
          },
          {
            "@type": "service",
            "name": "Dental Abscess",
            "@id": "https://carrumdownsdental.com.au/dental-problems/dental-abscess/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/dental-abscess/"
          },
          {
            "@type": "service",
            "name": "Dry Socket",
            "@id": "https://carrumdownsdental.com.au/dental-problems/dry-socket/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/dry-socket/"
          },
          {
            "@type": "service",
            "name": "Gum Disease",
            "@id": "https://carrumdownsdental.com.au/dental-problems/gum-disease/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/gum-disease/"
          },
          {
            "@type": "service",
            "name": "Knocked Out Tooth",
            "@id": "https://carrumdownsdental.com.au/dental-problems/knocked-out-tooth/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/knocked-out-tooth/"
          },
          {
            "@type": "service",
            "name": "Severe Toothache",
            "@id": "https://carrumdownsdental.com.au/dental-problems/severe-toothache/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/severe-toothache/"
          },
          {
            "@type": "service",
            "name": "Stained Teeth",
            "@id": "https://carrumdownsdental.com.au/dental-problems/stained-teeth/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/stained-teeth/"
          },
          {
            "@type": "service",
            "name": "Teeth Sensitivty",
            "@id": "https://carrumdownsdental.com.au/dental-problems/teeth-sensitivity/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/teeth-sensitivity/"
          },
          {
            "@type": "service",
            "name": "Tooth Gap",
            "@id": "https://carrumdownsdental.com.au/dental-problems/tooth-gap/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/tooth-gap/"
          },
          {
            "@type": "service",
            "name": "Wisdom Tooth Pain",
            "@id": "https://carrumdownsdental.com.au/dental-problems/wisdom-tooth-pain/#Service",
            "url": "https://carrumdownsdental.com.au/dental-problems/wisdom-tooth-pain/"
          }
        ]
      }
    ]
  }
  ]
}

// ✅ Main Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="jT613v_6huP5m9TPQAwkZI-Iehyg2TBmgOnavXJAeeA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* // booking plugin */}
        <Script
          strategy="lazyOnload"
          data-he-id="62595"
          data-alignment="left"
          data-he-fixed="true"
          data-background-color="#003a4c"
          src="https://healthengine.com.au/webplugin/appointments.js"
        ></Script>

        {/* // getbirdeye webchat */}
        <BirdEyeWidget />

        {/* // getbirdeye review */}
        <Script
          strategy="lazyOnload"
          defer="defer"
          src="https://getbirdeye.com.au/embed/v7/173404793563680/6/9876543214615183"
          id="podium-review"
        ></Script>

      </head>
      <body
        className={`
          ${exo2.variable} 
          ${inter.variable} 
          ${openSans.variable} 
          ${poppins.variable}
        `}
      >
        <div
          id="bf-revz-widget-2954526870"
          style={{
            // width: "280px",
            minHeight: "80px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 99999,
          }}
        ></div>

        <div
          id="bf-revz-widget-9876543214615183"
          className="review-widget"
          style={{
            // width: "100%",    
            minHeight: "100px",
            overflow: "hidden",
            zIndex: 99,
          }}
        ></div>
        <BootstrapClient />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}


// import ClientHeaderWrapper from "@/components/layout/header/ClientHeaderWrapper";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import FooterNew from "@/components/layout/footer/FooterNew";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <ClientHeaderWrapper />
//         {children}
//         <FooterNew />
//       </body>
//     </html>
//   );
// }
