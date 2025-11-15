"use client"
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Styles from "../../../styles/components-style/layout-style/header/Header.module.css";
import { Navbar } from "./Component/Components";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= 50 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollPosition < 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`${Styles.header}`}
      style={{
        backgroundColor: isScrolled
          ? "rgb(255,255,255)"
          : "rgba(255,255,255,0.25)",
        backdropFilter: isScrolled ? "blur(0px)" : "blur(1px)",
        boxShadow: isScrolled ? "0 1rem 3rem rgba(0, 0, 0, 0.175)" : null,
      }}
    >
      <Container maxWidth="1600px" className="px-0 px-lg-2">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
            <Navbar isScrolled={isScrolled} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
