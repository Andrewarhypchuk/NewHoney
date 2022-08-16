import React from 'react';
import { useEffect, useState } from 'react'
import translate from 'translate';
import {useSelector} from "react-redux";

translate.engine = 'google'
translate.key = process.env.GOOGLE_KEY

const TranslateComponent = ({str}) => {
  const [text, setText] = useState(str);
  const languageSelector = useSelector((state)=> state.usersSetting.language);

  useEffect(() => {
    const TranslateText = async () => {
      const res = await translate(str, languageSelector)
      setText(res)
    }
    TranslateText()
 
  }, [languageSelector, str])

  return <>{text}</>
}

export default TranslateComponent