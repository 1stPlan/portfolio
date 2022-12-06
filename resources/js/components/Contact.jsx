import React, { useState,useRef,useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTranslation } from "react-i18next";

const Contact = () => {

 
  const [t, i18n] = useTranslation();

  return (

  <div className="contact">
    <div className="contact__inner">
      <h2 className="contact__tittle-main">Contact</h2>
      <h3 className="contact__explanation-tittle">
        {t("contact.tittle")}
      </h3>
      <h4 className="contact__explanation"> 
        {t("contact.explanation")}
      </h4>
      <div className='contact__content'>
        <a  className='contact__address' href="mailto:info@1stplan.site">info@1stplan.site</a>
        {/* <div className='contact__icon'>
          <img src={`/img/icon_instagram.png`} width={'100%'}/>
        </div> */}
      </div>
    </div>
  </div>
      
  );
}

export default Contact;