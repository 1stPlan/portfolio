import React, { useState,useRef,useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTranslation } from "react-i18next";

const About = () => {

 
  const [t, i18n] = useTranslation();
  const about = useRef();

  return (

  <div className="about" ref={about}>
    <div className="about__inner">
      <h2 className="about__tittle-main">Profile</h2>
      <h3 className='about__heading'>{t("about.heading")}</h3>
      <div className='about__content'>
        <div className='about__profile'>
          <div className='about__profile_img'>
            <img src={`/img/nakano.png`} alt="nakano" width={'100%'} />
          </div>
          <div className='about__profile_box'>
            <h3 className="about__name"> {t("about.name")}</h3>
            <h4 className="about__explanation"> {t("about.explanation")}</h4>
          </div>
        </div>
        <div className='about__skill'>
          <h3 className='about__skill-title'>{t("about.skill")}</h3>
          <p className="about__skill-text">{t("about.skill-text")}</p>

          <ul className='about__skill-list'>
            <li className='about__skill-item'>
              <h4 className="about__skill-subtitle">PHP</h4>
              <h5 className="about__skill-years">{t("about.skill-years--1")}</h5>
  
              <div className="about__skill-box">
                <div className="about__skill-img">
                  <img src={`/img/laravel.png`} width="100%" alt="laravel" />
                </div>
                <div className="about__skill-img">
                  <img src={`/img/WordPress.png`} width="100%" alt="WordPress" />
                </div>
              </div>
            </li> 

            <li className='about__skill-item'>
              <h4 className="about__skill-subtitle">Mark Up+1</h4>
              <h5 className="about__skill-years">{t("about.skill-years--2")}</h5>
              <div className="about__skill-box">
                <div className="about__skill-img">
                  <img src={`/img/HTML5_Logo_512.png`} width="100%" alt="" />
                </div>
                <div className="about__skill-img">
                  <img src={`/img/css3.png`} width="100%" alt="css3" />
                </div>
                <div className="about__skill-img">
                  <img src={`/img/js-logo.png`} width="100%" alt="js" />
                </div>
              </div>
            </li> 
            
          <li className='about__skill-item'>
            <h4 className="about__skill-subtitle">Other</h4>
            <div className="about__skill-box">
              <div className="about__skill-img">
                <img src={`/img/ai.png`} width="100%" alt="ai" />
              </div>
              <div className="about__skill-img">
                <img src={`/img/xd.png`} width="100%" alt="xd" />
              </div>
              <div className="about__skill-img">
                <img src={`/img/github.png`} width="100%" alt="github" />
              </div>
            </div>
          </li> 
          </ul>
        </div>
      </div>

    </div>
  </div>
      
  );
}

export default About;