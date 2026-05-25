"use client";
import { usePathname } from "next/navigation";
import ClientHeaderWrapper from "@/components/layout/header/ClientHeaderWrapper";
import FooterNew from "@/components/layout/footer/FooterNew";
import PPCHeader from "@/components/layout/PPCHeader/PPCHeader";
import PPCFooter from "@/components/layout/PPCFooter/PPCFooter";

const PPC_PATHS = ["/dental-emergency"];

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isPPC = PPC_PATHS.includes(pathname);

  return (
    <>
      {isPPC ? <PPCHeader /> : <ClientHeaderWrapper />}
      {children}
      {isPPC ? <PPCFooter /> : <FooterNew />}
    </>
  );
}
