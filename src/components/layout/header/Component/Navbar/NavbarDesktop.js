"use client"
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";

const NavbarDesktop = ({ isScrolled }) => {
  const router = useRouter();

  // If pathname is not home page, then used these conditions
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
 
      <a href="/" className={`navbar-brand ${Styles.deskNavbarBrand}`}>
        <Image src="/header/logo_new.png" alt="carrumdowns dental clinic logo" width={270} height={100}/>
      </a> 

      <Stack className="d-none d-md-block">
        <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={1}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M15 1.33989C16.5083 2.21075 17.7629 3.46042 18.6398 4.96519C19.5167 6.46997 19.9854 8.17766 19.9994 9.91923C20.0135 11.6608 19.5725 13.3758 18.72 14.8946C17.8676 16.4133 16.6332 17.6831 15.1392 18.5782C13.6452 19.4733 11.9434 19.9627 10.2021 19.998C8.46083 20.0332 6.74055 19.6131 5.21155 18.7791C3.68256 17.9452 2.39787 16.7264 1.48467 15.2434C0.571462 13.7604 0.0614093 12.0646 0.00500011 10.3239L0 9.99989L0.00500011 9.67589C0.0610032 7.94888 0.563548 6.26585 1.46364 4.79089C2.36373 3.31592 3.63065 2.09934 5.14089 1.25977C6.65113 0.420205 8.35315 -0.0137108 10.081 0.000330246C11.8089 0.0143713 13.5036 0.47589 15 1.33989ZM10 3.99989C9.75507 3.99992 9.51866 4.08985 9.33563 4.25261C9.15259 4.41537 9.03566 4.63964 9.007 4.88289L9 4.99989V9.99989L9.009 10.1309C9.0318 10.3044 9.09973 10.4689 9.206 10.6079L9.293 10.7079L12.293 13.7079L12.387 13.7899C12.5624 13.926 12.778 13.9998 13 13.9998C13.222 13.9998 13.4376 13.926 13.613 13.7899L13.707 13.7069L13.79 13.6129C13.9261 13.4375 13.9999 13.2219 13.9999 12.9999C13.9999 12.7779 13.9261 12.5623 13.79 12.3869L13.707 12.2929L11 9.58489V4.99989L10.993 4.88289C10.9643 4.63964 10.8474 4.41537 10.6644 4.25261C10.4813 4.08985 10.2449 3.99992 10 3.99989Z" fill="#115278" />
          </svg>
          <Typography variant="body1" sx={{ marginBottom: "0px !important" }}>
            <span className={isScrolled ? "text-black" : "text-white"}>
              Mon to Sun:
            </span>
            <span className="theme-main-color"> 9AM – 5PM</span>
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={1}>
          <svg width="18" height="18" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C11.3869 0 13.6761 1.0344 15.364 2.87564C17.0518 4.71688 18 7.21414 18 9.81805C18 13.1715 16.324 15.9161 14.558 17.8852C13.6757 18.8584 12.7129 19.7406 11.682 20.5208L11.256 20.8372L11.056 20.9823L10.679 21.2441L10.343 21.4677L9.927 21.7317C9.64463 21.9075 9.32513 22 9 22C8.67487 22 8.35537 21.9075 8.073 21.7317L7.657 21.4677L7.137 21.1186L6.945 20.9823L6.535 20.6844C5.42283 19.8636 4.3869 18.926 3.442 17.8852C1.676 15.9151 0 13.1715 0 9.81805C0 7.21414 0.948211 4.71688 2.63604 2.87564C4.32387 1.0344 6.61305 0 9 0ZM9 6.54537C8.60603 6.54537 8.21593 6.63002 7.85195 6.79448C7.48797 6.95895 7.15726 7.20001 6.87868 7.50391C6.6001 7.80781 6.37913 8.16859 6.22836 8.56565C6.0776 8.96271 6 9.38827 6 9.81805C6 10.2478 6.0776 10.6734 6.22836 11.0704C6.37913 11.4675 6.6001 11.8283 6.87868 12.1322C7.15726 12.4361 7.48797 12.6771 7.85195 12.8416C8.21593 13.0061 8.60603 13.0907 9 13.0907C9.79565 13.0907 10.5587 12.7459 11.1213 12.1322C11.6839 11.5184 12 10.686 12 9.81805C12 8.95008 11.6839 8.11766 11.1213 7.50391C10.5587 6.89016 9.79565 6.54537 9 6.54537Z" fill="#115273" />
          </svg>

          <Typography variant="body1" sx={{ marginBottom: "0px !important" }}>
            <span className={isScrolled ? "text-black" : "text-white"}>
              Address:
            </span>
            <span className="theme-main-color">{" "}
              Shop T5, 100 Hall Road, Carrum Downs
            </span>
          </Typography>
        </Stack>
    
        <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={2} className="mt-2">
          <a className="border d-block px-2 py-1 rounded-2 theme-main-colors" href="/book-now/" style={{ border: "1px solid #115278", color: "#1ebeb6 !important" }}>Book Now</a>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={1}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3707 17.6136L20.0143 14.2643C18.8157 13.0681 16.7779 13.5466 16.2984 15.1016C15.9388 16.1782 14.7401 16.7763 13.6613 16.537C11.2639 15.9389 8.02748 12.8289 7.42814 10.3169C7.06853 9.24034 7.78775 8.04418 8.86656 7.68537C10.4249 7.20691 10.9043 5.17342 9.70564 3.97726L6.34932 0.627988C5.39038 -0.209329 3.95195 -0.209329 3.11287 0.627988L0.835372 2.90071C-1.44213 5.29304 1.07511 11.6327 6.70893 17.2547C12.3428 22.8767 18.6958 25.5083 21.0932 23.1159L23.3707 20.8432C24.2098 19.8863 24.2098 18.4509 23.3707 17.6136Z"
                fill="#115273"
              />
            </svg>
            <Typography variant="body1" sx={{ marginBottom: "0px !important" }}>
              <span className={isScrolled ? "text-black" : "text-white"}>
                Call Us On:
              </span>
              <span className="theme-main-colors"> 
                  <a style={{ color: "#19beb9" }} className="theme-main-colors" href="tel:03-9782-1200" >
                    03 - 9782 1200
                  </a> 
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </nav>
  );
};

export default NavbarDesktop;
