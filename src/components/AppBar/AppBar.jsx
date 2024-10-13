import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../redux/auth/selectors";

import AppNav from "../AppNav/AppNav";
import AuthMenu from "../Authentication/AuthMenu/AuthMenu";
import AppMobileMenuBtn from "../AppMobileMenuBtn/AppMobileMenuBtn";
import ColorSelector from "../ColorSelector/ColorSelector";
import Logo from "../Logo/Logo";
import HorSeparator from "../UI/HorSeparator/HorSeparator";
import css from "./AppBar.module.css";

export default function AppBar() {
  const theme = useSelector(selectTheme);
  const isHomePage = useLocation().pathname === "/";

  const headerRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current) {
      const scrollPos = window.scrollY;
      if (scrollPos > 50) {
        headerRef.current.classList.add(css.onscroll);
      } else {
        headerRef.current.classList.remove(css.onscroll);
      }
    }
  };

  useEffect(() => {
    if (isHomePage) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <React.Fragment>
      <header
        ref={headerRef}
        className={clsx(css.header, isHomePage ? css.headerHome : css[theme])}
      >
        <Logo />
        <AppNav />
        <div className={css.wrapper}>
          <AuthMenu />
          <AppMobileMenuBtn />
          <ColorSelector />
        </div>
      </header>
      <HorSeparator />
    </React.Fragment>
  );
}
