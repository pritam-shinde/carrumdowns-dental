// src/app/teeth-whitening/page.js
import Head from "next/head";
import Banner from "../../../../public/carrum-new/banner/teeth-whitening.webp";
import { CommonHero } from "../../../components/components"; 
import TeethWhiteningClient from "@/components/other/TeethWhiteningClient";

export const metadata = {
  title: "Expert Teeth Whitening Dentist for a Brighter Smile",
  description:
    "Get a brighter smile with professional teeth whitening services in Carrum Downs. Safe and effective treatments by expert dentists to help you smile confidently.",
  robots: "index",
};

const TWPage = () => {
  const breadcrumb = [
    { id: "TeethWhitening_breadcrumb_1", link: "/service/", title: "Service" },
    {
      id: "TeethWhitening_breadcrumb_2",
      link: null,
      title: "Teeth Whitening in Carrum Downs",
    },
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
      </Head>

      {/* ✅ Hero Section (SSR Safe) */}
      <CommonHero
        bg={Banner}
        breadcrumb={breadcrumb}
        title="Professional Teeth Whitening Services for a Brighter Smile"
        align="left"
        color="#fff"
      />

      {/* ✅ Client Component for interactivity */}
      <TeethWhiteningClient />
    </>
  );
};

export default TWPage;
