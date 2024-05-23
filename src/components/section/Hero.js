import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from "../Button";
import { useGSAP } from "@gsap/react";
// import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useGSAP(() => {
    if(globalThis.innerWidth<541){
      const tl = gsap.timeline({
        scrollTrigger:{
          pin:".mobile-hero",
          start:"top top",
          end:"bottom -=100"
  
        }
      }); 
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });
      let currentFrame=0
      let frameCount=140
      if(globalThis.innerWidth < 541 ){
         frameCount=115
         currentFrame = (index) =>
          `/images/mobile/${(index + 1).toString()}.webp`;
  
      }else{
        
         currentFrame = (index) =>
          `/images/hero-sequence/${(index + 1).toString()}.webp`;
      }
      
  
      const images = [];
      const iceberg = {
        frame: 0,
      };
  
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
  
      tl.to(iceberg, {
        frame: frameCount -1,
        snap: "frame",
        ease: "power3.out",
        scrollTrigger: {
          
          scrub: 0.1,
        },
        onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
      });
  
      images[0].onload = render;
  
      function render() {
        scaleImage(images[iceberg.frame], context);
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
      gsap.to(".hero-bg", {
        translateY: -50,
        
        scrollTrigger: {
          trigger: ".hero-bg",
          scrub: 0.2,
          start: "top top",
          end: "bottom top",
        },
      });
      tl.to("#canvas",{
        
        ease:"power4.out",
        scrollTrigger:{
          trigger:".canvas1",
          start:"top top",
          end:"400% top",
          pin:true,
        }
      })
    
      tl.to(".hero-head", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-bg",
          scrub: true,
          start: "top top",
          end: "bottom top",
          
        },
      });
      tl.from(".overlay",{
        opacity:0,
        
        ease:"circ.in",
        scrollTrigger:{
          trigger:".hero-sec",
          scrub:2,
          start:"50% top",
          end:"40% -=200",
          
        
  
        }
  
  
      })
      tl.to(".goodbyeanim",{
        scale:0.5,
        opacity:0,
        duration:5,
        scrollTrigger:{
          trigger:".banner",
          scrub:1,
          pin:true,
          start:"top top",
          end:"200% top",
          
        }
      })
   

    }else{
      const tl = gsap.timeline({
        scrollTrigger:{
          pin:".mobile-hero",
          start:"top top",
          end:"bottom -=200"
  
        }
      }); 
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });
      let currentFrame=0
      let frameCount=140
      if(globalThis.innerWidth < 541 ){
         frameCount=115
         currentFrame = (index) =>
          `/images/mobile/${(index + 1).toString()}.webp`;
  
      }else{
        
         currentFrame = (index) =>
          `/images/hero-sequence/${(index + 1).toString()}.webp`;
      }
      
  
      const images = [];
      const iceberg = {
        frame: 0,
      };
  
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
  
      tl.to(iceberg, {
        frame: frameCount -1,
        snap: "frame",
        ease: "power3.out",
        scrollTrigger: {
          
          scrub: 0.1,
        },
        onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
      });
  
      images[0].onload = render;
  
      function render() {
        scaleImage(images[iceberg.frame], context);
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
      gsap.to(".hero-bg", {
        translateY: -100,
        
        scrollTrigger: {
          trigger: ".hero-bg",
          scrub: 0.2,
          start: "top top",
          end: "bottom top",
        },
      });
      tl.to("#canvas",{
        
        ease:"power4.out",
        scrollTrigger:{
          trigger:".canvas1",
          start:"top top",
          end:"400% top",
          pin:true,
        }
      })
    
      tl.to(".hero-head", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-bg",
          scrub: true,
          start: "top top",
          end: "bottom top",
          
        },
      });
      tl.from(".overlay",{
        opacity:0,
        
        ease:"circ.in",
        scrollTrigger:{
          trigger:".hero-sec",
          scrub:2,
          start:"50% top",
          end:"40% -=200",
          
        
  
        }
  
  
      })
      tl.to(".goodbyeanim",{
        scale:0.5,
        opacity:0,
        duration:5,
        scrollTrigger:{
          trigger:".banner",
          scrub:1,
          pin:true,
          start:"top top",
          end:"200% top",
          
        }
      })
   
    }
   
  });

  return (
    <>
      <section className="h-[500vh] w-screen hero-sec mobile:h-[100vh] mobile:mobile-hero overflow-hidden">
        
        <div className="w-screen h-[100vh] canvas1 mobile:h-[100vh]">
        <div className="h-full bg-[#EAECF4] flex justify-center items-center w-full hero-bg ">
          <div className="w-[45%] -mt-[15%] text-center hero-head mobile:w-[90%] mobile:mt-[-70%] ">
            <h1 className="text-[5.2vw] leading-[1] mobile:text-[10vw]">
              <span className="hero-intro"><span className="text-blue-700"> Unlock </span> the Future</span>
               <span className="hero-intro"> of Authentication</span>
            </h1>
          </div>
          <div className="absolute object-cover w-full mobile:hidden">
            <img src="/images/bg-kelvin.webp" alt="background-image" width={1920} height={1080} />
          </div>
          <div className="absolute object-cover w-full hidden mobile:block mobile:mt-[]">
            <img src="/images/bg_mobile.webp"  alt="bg-mobileimg"/>
          </div>
        </div>
        
          <div className="h-[100vh] absolute top-0 left-0 w-screen mobile:h-full">
            <canvas
              className=" z-10 h-full object-center mobile:object-contain"
              id="canvas"
            />


          
         </div>
          
          

          
        </div>
        <div className="z-20 absolute top-[220%] flex justify-center w-full flex-col items-center">
            <div className="flex flex-col justify-center items-center "><h2 className=" text-white text-[2.5vw] leading-[1.1] z-20 text-center w-[70%] mobile:text-[2.8vh] mobile:w-[90%]">
              Protect your organization with next-gen passwordless
              authentication
            </h2>
            <div className="flex gap-[3vw] pt-[2vw] btn mobile:flex-col mobile:mt-[3vh]">
              <Button
                className="white mobile:w-[25vh] mobile:text-[2vh]"
                content={"Speak to an Expert"}
               
              />
              <Button
                className="transparent mobile:w-[25vh] mobile:text-[2vh]"
                content={"Book Demo"} 
              />
            </div>
            </div>
          </div>
        
        <div className="bg-[#0A0A0A] absolute w-full top-0 h-[700vh] z-10 overlay mobile:hidden"></div>
        <div className="flex flex-col justify-center items-center mt-[20vw] w-full h-screen absolute top-[190%] z-20">
            
            <h3 className="text-white text-[2vw] mobile:mt-[80vh] mobile:text-[2.5vh] mobile:w-[50%] mobile:text-center">Security Solutions Trusted by Leaders</h3>
            <div className="flex justify-between gap-[4vw] pt-[4vw] w-screen px-[5vw] mobile:hidden tablet:hidden">
              <img src="/images/brand1.webp" alt="brand1"/>
              <img src="/images/brand2.webp" alt="brand2"/>
              <img src="/images/brand3.webp" alt="brand3"/>
              <img src="/images/brand4.webp" alt="brand4"/>
              <img src="/images/brand5.webp" alt="brand5"/>
            </div>
            
          </div>
        
        <div className="flex justify-center items-center w-full h-full z-40 absolute top-[270%] banner mobile:top-[300%] ">
          <h3 className="text-[6vw] text-white goodbyeanim font-Instrument mobile:text-[4vh] mobile:text-center mobile:leading-[1.1]">Say Goodbye to Pa$$w0rds</h3>
        </div>
        
       
        
        
      </section>
    </>
  );
}

export default Hero;
