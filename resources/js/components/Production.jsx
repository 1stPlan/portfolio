import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Slider from "react-slick";

const Production = () => {
    const [t, i18n] = useTranslation();

    // const client = useRef(0);
    // const client2 = useRef(0);
    // useEffect(() => {
    //   const elem = document.getElementById("select_1");
    //   const elem2 = document.getElementById("select_2");
    //   client.current = elem.getBoundingClientRect().top + window.scrollY;
    //   client2.current = elem2.getBoundingClientRect().top + window.scrollY;
    //   window.addEventListener("resize", {
    //     client: client,
    //     client2: client2,
    //     elem: elem,
    //     elem2: elem2,
    //     handleEvent: resizeWindow
    //   });

    //   window.addEventListener("scroll",{
    //     client: client,
    //     client2: client2,
    //     elem: elem,
    //     elem2: elem2,
    //     handleEvent: getClientRect
    //   });

    // });

    // function resizeWindow(e){
    //   this.client.current = this.elem.getBoundingClientRect().top + window.scrollY;
    //   this.client2.current = this.elem2.getBoundingClientRect().top + window.scrollY;
    // }

    // 要素の位置座標を取得
    // function getClientRect(e) {

    //   if ((window.scrollY > this.client.current) & (window.scrollY < this.client.current + 280)) {
    //       var t = [];
    //       for (let i = 1; i <= 6; i++) {
    //           t.push(`/img/ryuunosato/${String(i).padStart(2, "0")}.png`);
    //       }
    //       var N = Math.floor((window.scrollY - this.client.current) / 80);
    //       this.elem.src = t[N];

    //   } else if (window.scrollY > this.client.current + 280 ) {
    //       this.elem.src = `/img/ryuunosato/01.png`;
    //   }else{
    //       this.elem.src = `/img/ryuunosato/01.png`;
    //   }

    //   if ((window.scrollY > this.client2.current) & (window.scrollY < this.client2.current + 280)) {
    //     var t2 = [];
    //     for (let j = 1; j <= 6; j++) {
    //         t2.push(`/img/no22/${String(j).padStart(2, "0")}.png`);
    //     }
    //     var N2 = Math.floor((window.scrollY - this.client2.current) / 80);
    //     this.elem2.src = t2[N2];

    //   } else if(window.scrollY > this.client2.current + 280 ) {
    //       this.elem2.src = `/img/no22/01.png`;
    //   }else{
    //       this.elem2.src = `/img/no22/01.png`;
    //   }
    // }

    const settings = {
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    autoplay: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 530,
                settings: {
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 1,
                    dots: true,
                    speed: 300,
                },
            },
        ],
    };

    return (
        <div className="production">
            <div className="production__inner">
                <h3 className="production__tittle-main">Production</h3>
                <h2 className="production__tittle-sub">
                    {t("production_home.explanation")}
                </h2>

                <section className="production__section">
                    <Slider {...settings}>
                        <div className="production__cont">
                            <a
                                className="production__elem"
                                href="https://dogrun-yamaguchi.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="production__pic">
                                    <img
                                        id="select_1"
                                        src={`/img/dogrun.jpg`}
                                    />
                                    <div class="production__mask">
                                        <div class="production__caption">
                                            {t(
                                                "production_home.web_site_1_about"
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="production__about">
                                    <ul className="production__about-tags">
                                        <li className="production__about-tag">
                                            portfolio
                                        </li>
                                        <li className="production__about-tag">
                                            laravel
                                        </li>
                                    </ul>
                                    <ul className="production__about-list">
                                        <li className="production__about-item">
                                            {t("production_home.web_site_1")}
                                        </li>
                                        <li className="production__about-item">
                                            https://dogrun-yamaguchi.com/
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                        <div className="production__cont">
                            <a
                                className="production__elem"
                                href="https://menslook.info/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="production__pic">
                                    <img
                                        id="select_2"
                                        src={`/img/mens_look.jpg`}
                                    />
                                    <div class="production__mask">
                                        <div class="production__caption">
                                            {t(
                                                "production_home.web_site_2_about"
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="production__about">
                                    <ul className="production__about-tags">
                                        <li className="production__about-tag">
                                            blog
                                        </li>
                                        <li className="production__about-tag">
                                            wordpress
                                        </li>
                                    </ul>
                                    <ul className="production__about-list">
                                        <li className="production__about-item">
                                            {t("production_home.web_site_2")}
                                        </li>
                                        <li className="production__about-item">
                                            https://menslook.info/
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                        <div className="production__cont">
                            <a
                                className="production__elem"
                                href="https://ryuunosato-yadomi.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="production__pic">
                                    <img
                                        id="select_3"
                                        src={`/img/ryuunosato.png`}
                                    />
                                    <div class="production__mask">
                                        <div class="production__caption">
                                            {t(
                                                "production_home.web_site_3_about"
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div class="production__about">
                                    <ul className="production__about-tags">
                                        <li className="production__about-tag">
                                            shop
                                        </li>
                                        <li className="production__about-tag">
                                            wordpress
                                        </li>
                                    </ul>
                                    <ul className="production__about-list">
                                        <li className="production__about-item">
                                            {t("production_home.web_site_3")}
                                        </li>
                                        <li className="production__about-item">
                                            https://ryuunosato-yadomi.com/
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </Slider>
                </section>
            </div>
        </div>
    );
};

export default Production;
