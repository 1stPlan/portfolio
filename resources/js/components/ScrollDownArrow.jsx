import React, { useEffect, useRef } from "react";

function ScrollDownArrow() {
    const scrolldownarrow = useRef();

    useEffect(() => {
        var video = document.getElementById("movie");
        var movie_date = document.getElementsByClassName("youtube__ifreme")[0];
        let innerHeight = window.innerHeight;
        var body_element = document.getElementsByTagName("body");

        var movie = document.getElementsByClassName("youtube")[0];
        var three = document.getElementsByClassName("Three")[0];
        var about = document.getElementsByClassName("about")[0];


        scrolldownarrow.current.addEventListener("click", function (e) {

            window.scrollTo({
                top: innerHeight,
                behavior: "smooth",
            });
            scrolldownarrow.current.classList.add("scroll-down-arrow--fadeout");
            
            movie_date.style.opacity = 1;
            video.play();

            var content_opacity = function () {

                video.pause();
                movie.style.display = "none";
                three.style.setProperty("position", "relative", "important");
                about.style.setProperty("opacity", "1");
                body_element[0].classList.remove("body__active");
            };
            
            setTimeout(content_opacity, 4000);
        });

    }, [scrolldownarrow]);

    return (
        <div
            class="scroll-down-arrow"
            id="scroll-down-arrow"
            ref={scrolldownarrow}
        >
            <a class="scroll-down-arrow__link">
                <span></span>Click
            </a>
        </div>
    );
}

export default ScrollDownArrow;
