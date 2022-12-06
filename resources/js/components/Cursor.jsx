
import React, {useEffect} from 'react';

function Cursor() {
  
    React.useEffect(() => {

      if(!(navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("Android")>0&&navigator.userAgent.indexOf("Mobile")>0||navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("Android")>0)){

        var cursor = document.getElementById("cursor");
        document.addEventListener("mousemove", function(e) {
            var x =  e.clientX;
            var y =  e.clientY;
            cursor.style.opacity = "1";
            cursor.style.top = y + "px";
            cursor.style.left =  x + "px" ;
        });
        const linkElem=document.querySelectorAll('a,input[type="submit"],input[type="button"]');
        for(let i=0;i<linkElem.length;i++){
            linkElem[i].addEventListener("mouseover",function(a){cursor.classList.add("hov_")});
            linkElem[i].addEventListener("mouseout",function(a){cursor.classList.remove("hov_")})
        }
        
      }

    }, []);

    return (
      <div id="cursor"></div>
    );

  }

export default Cursor;