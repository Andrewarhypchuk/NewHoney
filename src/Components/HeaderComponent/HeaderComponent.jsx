import React from "react";
import { useSelector } from "react-redux";

import LogoComponent from "./Components/LogoComponent";
import NavBarComponent from "./Components/NavBarComponent";
import ThemeSwitcher from "./Components/ThemeSwitcherComponent";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import { selectTheme } from "../../Redux/userSettings-reducer";
import SideBar from "./Components/SideBar";


const Header = () => {
  const theme = useSelector(selectTheme);

  return (
    
    <div className={theme}>
      <LogoComponent />
      <SideBar />
      <NavBarComponent />
      <div className="d-flex align-items-center">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

    </div>
  );
};
export default Header;
