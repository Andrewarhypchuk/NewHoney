import React from "react";
import { useSelector } from "react-redux";

import { selectTheme } from "../../Redux/userSettings-reducer";

const Footer = () => {
  const theme = useSelector(selectTheme);
  return <footer className={`${theme}footer`}></footer>;
};

export default Footer;
