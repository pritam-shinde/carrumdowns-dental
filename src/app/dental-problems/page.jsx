import Head from "next/head";
import Banner from "../../../public/Services/service-bg.jpg";
import { CommonHero } from "@/components/components"; 
import DentalProblemsClient from "@/components/dental-problems/DentalProblemsClient";

export const metadata = {
  title: "Learn About Common Dental Problems | Carrum Downs Dental",
  description:
    "Explore Common Dental Problems and Get Expert Care at Carrum Downs Dental. Discover the causes, symptoms, & treatments for various dental issues to keep a healthy smile.",
  robots: "index",
};

export default function DentalProblemsPage() {
  const breadcrumb = [
    { id: "dental_problem_breadcrumb_1", link: "/dental-problems/", title: "Dental Problems" },
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
      </Head>

      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dental Problems" align="left" color="#fff" />

      {/* Client component holds interactive logic */}
      <DentalProblemsClient />
    </>
  );
}

