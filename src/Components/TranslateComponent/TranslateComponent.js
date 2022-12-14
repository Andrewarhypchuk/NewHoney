import React,{ useEffect, useState }  from "react";
import { useSelector } from "react-redux";

import { selectLanguage } from "./../../Redux/userSettings-reducer";
import translate from "translate";
import { capitalizeFirstLetter } from './../../Utiles/capitalizeFirstLetter';

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

const TranslateComponent = ({ str }) => {
  const [text, setText] = useState(str);
  const languageSelector = useSelector(selectLanguage);

  useEffect(() => {
    const translateText = async () => {
      const res = await translate(str, languageSelector);
      setText(res);
    };
    translateText();
  }, [languageSelector, str]);

  return <>{ capitalizeFirstLetter(text)}</>;
};

export default TranslateComponent;
