import CNBClient from "./CNBClient";

export const metadata = {
  title: "Expert Dental Bridge & Crown Services for a Perfect Smile",
  description: "Restore your smile with expert dental bridge and crown dentistry services in Carrum Downs. Get high-quality crowns and bridges for a perfect, lasting smile.",
  robots: "index",
  alternates: { canonical: "/service/crowns-and-bridge", },
};

export default function CNB() {
  return <CNBClient />;
}