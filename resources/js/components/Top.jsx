
import React, {useEffect, useRef} from 'react';

function Top() {

  const pageTop = useRef();
  
    React.useEffect(() => {
  var top = document.getElementById("page_top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {  //100pxスクロールしたら表示
      top.style.opacity = '1';
    } else {
      top.style.opacity = '0';
    }
  });
  
  var timeoutId3;
  top.addEventListener('click', function(){

    pageTop.current.classList.add("page_top--click");

    clearTimeout(timeoutId3);

    timeoutId3 = setTimeout(function(){
      pageTop.current.classList.remove("page_top--click");
    }, 1000);     

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })

    }, []);

    return (
      <a id="page_top" className='page_top'  ref={ pageTop }>
        <i className='fa-solid fa-caret-up'></i>
        <p>TOP</p>
      </a>
    );

  }

export default Top;