import React from "react";
import LogoComponent from "./Components/LogoComponent";
import NavBarComponent from "./Components/NavBarComponent";
import { useSelector } from "react-redux";
import { selectTheme } from "../../Redux/userSettings-reducer";
import ThemeSwitcher from "./Components/ThemeSwitcherComponent";
import LanguageSwitcher from "./Components/LanguageSwitcher";

const Header = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={theme}>
      <LogoComponent />
      <NavBarComponent />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};
export default Header;
