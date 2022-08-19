import React,{ useEffect, useState }  from "react";
import { useSelector } from "react-redux";

import { selectLanguage } from "./../../Redux/userSettings-reducer";
import translate from "translate";

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

const TranslateComponent = ({ str }) => {
  const [text, setText] = useState(str);
  const languageSelector = useSelector(selectLanguage);

  useEffect(() => {
    const TranslateText = async () => {
      const res = await translate(str, languageSelector);
      setText(res);
    };
    TranslateText();
  }, [languageSelector, str]);

  return <>{text}</>;
};

export default TranslateComponent;
