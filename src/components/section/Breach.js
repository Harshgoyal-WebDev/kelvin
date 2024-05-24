import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Breach() {
  const percentage = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const canvas = document.getElementById("canvas2");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    let currentFrame=0
    let frameCount=150
    if(globalThis.innerWidth < 541 ){
       
       currentFrame = (index) =>
        `/images/mobile-breach/${(index + 1).toString()}.webp`;

    }else{
      
      currentFrame = (index) =>
        `/images/breach-seq/${(index + 1).toString()}.webp`;
    }
    

    
    

    const images = [];
    const breach = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(breach, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "linear",
      delay:1,
      scrollTrigger: {
        trigger: ".breach-canvas",
        start: "top top",
        end: "bottom -=400",

        scrub: 1,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      scaleImage(images[breach.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    tl.from("#canvas2", {
      opacity: 0,

      ease: "power4.out",
      scrollTrigger: {
        trigger: ".breach-canvas",
        start: "top top",
        end: "bottom -=100",
        pin: true,
        scrub: 1,
      },
    });
    tl.from(".percentage", {
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".breach-canvas",
        scrub: true,
        start: "top 0",
        end: "bottom -=200",

        
      },
    });
    tl.to(percentage.current, {
      innerHTML: "80",

      scrollTrigger: {
        trigger: ".breach-canvas",
        scrub: true,
        start: "top 10",
        end: "bottom top",

        
      },
      onUpdate: () => {
        const percentag = parseInt(percentage.current.innerHTML);
        const formattedCounter = String(percentag).padStart(2, "0");
        percentage.current.innerHTML = formattedCounter;
      },
    });
    tl.to("#canvas2", {
      opacity: 0,
      duration:2,
      
      ease: "power4.out",
      
    });

  

    
    
  }, []);
  return (
    <section className="relative z-30 w-screen breach-canvas h-[300vh] py-[10vh] mobile:mt-[300vh] mobile:h-[100vh] overflow-hidden">
      <div className="absolute top-[-1vh] left-0 h-full">
        <canvas className="z-30 w-full h-screen" id="canvas2" />
      </div>
      <div className="absolute top-[15%] w-full mobile:top-[45%]">
      <div className="flex flex-col z-40 h-full w-full items-center">
        <div className=" text-white text-[5vw] flex percentage leading-[1.2] mobile:text-[5vh]">
          <div ref={percentage}>
            0
          </div>
          <span>%</span>
        </div>
        <p className="opacity-30 text-white text-[1.6vw] w-[20%] text-center percentage leading-[1.2] mobile:text-[2vh] mobile:w-[60%] mobile:mt-[1vh]">of breaches are caused by stolen credentials</p>
      </div></div>
    </section>
  );
}

export default Breach;
