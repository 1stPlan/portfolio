import React, { useState,useRef,useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

function Langswitch() {


  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');

  const lang_switch = useRef();
  const language = useRef();
  const location = useLocation();

  useEffect(() => {
    // i18n.changeLanguage('ja');
    language.current.addEventListener('change', function () {
      i18n.changeLanguage(language.current.value);
    }, false);
  }, [lang, i18n, language]);

  // console.log(location.pathname );
  return (

    <div className="lang_switch" ref={lang_switch}
      css={css`
            ${'' /* transform: translate(0px, 0px) !important; */}
      `}
    >
     { location.pathname == "/home" ? 
      <select ref={language} >  
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
     : 
      <select ref={language} disabled>
      <option value="ja">日本語</option>
      </select>
      }
    </div>

  );
}

export default Langswitch;