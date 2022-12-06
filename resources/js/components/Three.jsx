
import React, { useRef,useEffect } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Thing(){ 
    const smokeTexture = new THREE.TextureLoader().load(`/img/Smoke-Element.png`);
    const ref = useRef();
    useFrame(()=>{
      ref.current.rotation.z += Math.random() * 0.005;
    });
    return (
        <mesh ref={ref}
              position={[ Math.random()*2,Math.random()*2,Math.random()*100-10 ]}
        >
            <planeBufferGeometry attach='geometry' args={[5, 5]} />
            <meshBasicMaterial
                attach='material'
                opacity={0.3}
                transparent
                map={smokeTexture}
            />
        </mesh>
    )
  }

  function Things(){ 
    let windowSize = window.innerWidth;

    if (windowSize > 530 ) {
     var count = 250;
    }else{
      var count = 100;
    }

    let smokeParticles = [];

    for (let p = 0; p < count; p++) {
      let particle =  <Thing />;
      smokeParticles.push(particle);
    }
    return (
      smokeParticles
    );

  };

  function Star(){ 
    return (
      <mesh position={[(Math.random()* 7) - 3,(Math.random()* 7) - 3,(Math.random()* 7) - 3 ]} >
          <sphereGeometry args={[0.01, 32, 16]} />
          <meshBasicMaterial  
            opacity={0.8}
            transparent
            color={ "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")"}
          />
      </mesh>
  );
};

function Stars(){ 
    const starCount = 5000;
    let starsParticles = [];

    for (let k = 0; k < starCount; k++) {
      let particle2 =  <Star />;
      starsParticles.push(particle2);
    }
    return (
      starsParticles
    );
};

function Earth(){ 
  const earthTexture = new THREE.TextureLoader().load(`/img/earth_tx.png`);
  const ref = useRef();
  useFrame(()=>{
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref}
        position={[0,0,0]}
        >
        <sphereGeometry args={[1, 32, 16]} />
        <meshBasicMaterial  
          opacity={0.6}
          transparent
          map={earthTexture}
        />
    </mesh>
  );
};
   

  const Three = () => {

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
   }, [])

    const setAnimation = () => {
      gsap.fromTo(
        '.Three__canvas',
        { opacity: 1, //fromの設定
          scale: 1 ,
        }, 
        {  //toの設定
          opacity: 0,
          // scale: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.Three',
            start: "top top",
            end: "+=700",
            scrub: true,
            // markers: true,
            // pin: true,
          } 
        }
      )
  }
  
    return (
      
      <div className="Three">
        <div className="Three__content">
          <h2 className="Three__tittle-main">
          Rouya
          {/* <br className="break_point" /> */}
          Nakano
          </h2>

          <h4 className="Three__tittle-sub">
            Program & Design
          </h4>
        </div>
          <Canvas  className="Three__canvas">
            <Things />
            <Stars />
            <Earth />
          </Canvas>
      </div>

    );
};


export default Three;







