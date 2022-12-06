import React, { useState, useEffect } from "react";
import YouTube from "../components/YouTube";
import Production from "../components/Production";

import Three from "../components/Three";
import About from "../components/About";
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Top from "../components/Top";
import ScrollDownArrow from "../components/ScrollDownArrow";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loading from "../components/Loading";
// import { useTranslation } from "react-i18next";

function Home() {
    // const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger)
        // setMotion()

        // setTimeout(function(){
        //   setIsLoading(false);
        // }, 3000);

        var body_element = document.getElementsByTagName("body");
        body_element[0].classList.add("body__active");
    }, []);

    const setMotion = () => {
        // gsap.fromTo('.about__inner',
        // {
        //   autoAlpha: 0, // 要素を隠す
        //   y: 0 // 縦方向に+20px
        // },
        // {
        //   autoAlpha: 1, // 要素を表示
        //   duration: 1, // 1秒かけてアニメーション
        //   y: 0, // 縦方向0に
        //   scrollTrigger: { // scrollTriggerの設定
        //     trigger: '.about__inner', // ターゲットとなる要素を指定
        //     start: 'top bottom', // アニメーションの開始位置を設定。
        //     // markers: true,
        //   }
        // });
        // gsap.fromTo('.production__inner',
        //   {
        //     autoAlpha: 0, // 要素を隠す
        //     y: 50 // 縦方向に+50px
        //   },
        //   {
        //     autoAlpha: 1, // 要素を表示
        //     duration: 1, // 1秒かけてアニメーション
        //     y: 0, // 縦方向0に
        //     scrollTrigger: { // scrollTriggerの設定
        //       trigger: '.production__inner', // ターゲットとなる要素を指定
        //       start: 'top bottom', // アニメーションの開始位置を設定。
        //     //   markers: true,
        //     },
        // });
        //   gsap.fromTo('.contact__inner',
        //   {
        //     autoAlpha: 0, // 要素を隠す
        //     y: 50 // 縦方向に+50px
        //   },
        //   {
        //     autoAlpha: 1, // 要素を表示
        //     duration: 1, // 1秒かけてアニメーション
        //     y: 0, // 縦方向0に
        //     scrollTrigger: { // scrollTriggerの設定
        //       trigger: '.contact__inner', // ターゲットとなる要素を指定
        //       start: 'top bottom', // アニメーションの開始位置を設定。
        //     //   markers: true,
        //     },
        // });
    };

    return (
        <>
            <Cursor />
            <ScrollDownArrow />
            {/* { isLoading ? <Loading /> : */}
            <div id="app">
                <Three />
                <YouTube />
                <About />
                <Production />
                <Contact />
            </div>
            {/* } */}
            <Top />
        </>
    );
}

export default Home;
