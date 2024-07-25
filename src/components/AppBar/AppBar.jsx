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
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header
        className={clsx(
          css.header,
          location.pathname === "/" ? css.headerHome : css[theme]
        )}
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
    </>
  );
}
