import { CommonHero } from "@/components/components";
import DentalProblemsClient from "@/components/dental-problems/DentalProblemsClient";
import Banner from "../../../public/Services/service-bg.jpg";

export const metadata = {
  title: "Learn About Common Dental Problems | Carrum Downs Dental",
  description:
    "Explore Common Dental Problems and Get Expert Care at Carrum Downs Dental. Discover the causes, symptoms, & treatments for various dental issues to keep a healthy smile.",
  robots: "index",
  alternates: { canonical: "/contact-us", },
};

export default function DentalProblemsPage() {
  const breadcrumb = [
    { id: "dental_problem_breadcrumb_1", link: "/dental-problems/", title: "Dental Problems" },
  ];

  return (
    <>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dental Problems" align="left" color="#fff" />

      {/* Client component holds interactive logic */}
      <DentalProblemsClient />
    </>
  );
}

