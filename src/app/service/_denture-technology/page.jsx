import { CommonHero } from "@/components/components";
import DentureTechnologyClient from "@/components/other/DentureTechnologyClient";
import Banner from "../../../../public/carrum-new/banner/denture-technology-bg.jpg";
import Head from "next/head";

export const metadata = {
  title: "Denture Technology in Carrum Downs | Carrum Downs Dentist",
  description:
    "Discover the future of dentures at Carrum Downs Dental Group. Our advanced dentures technology ensures a precise fit, natural look, and long-lasting comfort.",
  robots: "index",
};

export default function DentureTechnologyPage() {
  const breadcrumb = [
    { id: "DentureTechnology_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DentureTechnology_breadcrumb_2", link: null, title: "Denture Technology in Carrum Downs" },
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <CommonHero
        bg={Banner}
        breadcrumb={breadcrumb}
        title="Denture Technology in Carrum Downs"
        align="left"
        color="#fff"
      />

      {/* Client Component (safe to use hooks here) */}
      <DentureTechnologyClient />
    </>
  );
}
