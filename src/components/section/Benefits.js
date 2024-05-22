import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Benefits() {
  useGSAP(()=>{
    if(globalThis.innerWidth < 541){
      const tl = gsap.timeline();
      tl.from(".intro-anim", {
        opacity: 0,
        delay: -1.8,
        ease: "power2.out",
        duration: 1,
        scrollTrigger:{
          trigger:".intro-anim",
          start:"top 35%",
          end:"bottom -=150",
          pin:true,
          scrub:true,
         
        }
      })
      tl.from(".mob-benefits-card",{
        yPercent:50,
        opacity:0,
        duration:1,
        ease:"power3.out",
        stagger:0.2,
        
        scrollTrigger:{
          trigger:".mob-benefits-card",
          
          scrub:true
        }
      })
    } else {
      
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:".benefits-canvas",
          start:"top top",
          end:"bottom top",
          pin:true,
          scrub:true
        }
      });

      const canvas = document.getElementById("canvas3");
      const context = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });
      const frameCount = 41;
      const currentFrame = (index) =>
        `/images/benefits-seq/${(index + 1).toString()}.webp`;
  
      const images = [];
      const benefits = {
        frame: 0,
      };
  
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
  
      tl.to(benefits, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "linear",
  
        onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
      });
  
      images[0].onload = render;
  
      function render() {
        scaleImage(images[benefits.frame], context);
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
      tl.from(".benefits-canvas", {
        opacity: 0,
        delay: -1.7,
  
        ease: "power4.out",
      })
        .from("#canvas3", {
          opacity: 0,
          scale: 0.6,
          delay: -1.9,
          duration: 1,
        })
        .from(".intro-anim", {
          opacity: 0,
          delay: -1.8,
          ease: "power2.in",
          duration: 1,
        })
        .to(".intro-anim", {
          opacity: 0,
          duration: 0.5,
          delay: -0.5,
        })
        .from(".multi-anim", {
          opacity: 0,
          duration: 0.5,
          
        })
        .set(".img-anim", {
          opacity: 1,
          duration: 1,
          delay: -0.5,
        })
        .set("#canvas3", {
          opacity: 0,
          delay: -0.5,
        })
        .to(".img-anim1", {
          xPercent: -100,
          duration: 2,
          delay: -0.5,
          ease: "power1.in",
        })
        .to(".img-anim2", {
          xPercent: 100,
          delay: -2,
          duration: 2,
          ease: "power1.in",
        })
        .to(".multi-anim", {
          opacity: 0,
          duration: 1,
          delay:-1.6,
          
          ease: "power4.out",
        })
        .from(".card-anim", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: -0.5,
          ease: "power2.out",
        })
    }
  })
 
  
  return (
    <>
      <section className="mt-[-500vh] relative z-40 bg-[#0A0A0A] w-full benefits-canvas h-[200vh] overflow-hidden mobile:mt-[-50vh] mobile:h-fit">
        <div className="absolute top-0 left-0 h-[100vh] mobile:hidden">
          <canvas className="z-30 w-full h-screen" id="canvas3"/>
        </div>
        <div className="absolute top-[20%] z-50 w-full h-full mobile:top-[5%]">
          <div className="flex flex-col w-full justify-center items-center intro-anim">
            <h3 className="text-[6vw] text-white mobile:text-[4vh] mobile:w-[50%] mobile:leading-[1] mobile:text-center">
              Introducing <span className="text-blue-700"> Multi-Pass </span>
            </h3>
            <p className="text-white text-[1.5vw] w-[40%] text-center mobile:text-[2vh] mobile:w-[80%] mobile:mt-[2vh] ">
              bolster security and delight your employees and customers with a
              seamless authentication experience.
            </p>
          </div>
        </div>
        <div className="hidden mobile:block mobile:mt-[110vh]">
            <div className="w-full h-full flex justify-center items-center">
              <img src="/images/1@2x.png" alt="mobile-benefits" className=" w-[80%]"/>  
            </div>
            <div className="w-screen flex flex-col  justify-center items-center text-white mt-[12vh]">
              <h4 className="text-[4vh] ">
                 Multi-Pass <span className="bg-blue-700 px-[1.5vh] py-[0.5vh] rounded-full">Pro</span>
              </h4>
              <p className=" w-[80%] text-center text-[2vh] leading-[1.1] mt-[2.5vh]">Redefine authentication with a secure biometric pass</p>
              <div className="mt-[6vh] w-[85%]">
                <img src="/images/2@2x.png" alt="benefits-credit"/>
              </div>
            </div>
          </div>
        <div className="absolute top-[20%] z-50 w-full h-full multi-anim mobile:hidden">
          <div className="flex justify-between px-[2vw] text-white font-Instrument">
            <div className="flex flex-col px-[6vw] gap-[1vw]">
              <h3 className="text-[2.5vw]">
                Multi-Pass{" "}
                <span className="bg-blue-700 px-[1vw] py-[0.5vw] rounded-full">
                  Pro
                </span>
              </h3>
              <p className="text-[1.5vw] w-full">
                Equip your users with <br />
                biometric smart card security
              </p>
            </div>
            <div className="flex flex-col  gap-[1vw] items-center justify-center">
              <h3 className="text-[2.5vw]">Multi-Pass Digital</h3>
              <p className="text-[1.5vw] w-[70%] text-center">
                Turn user mobile devices into smart authenticators
              </p>
            </div>
          </div>
        </div>
        <div className="absolute h-screen z-50 w-full top-[0.25%] img-anim opacity-0 mobile:hidden">
          <img
            src="/images/benifit-card.png"
            alt="benefit-card"
            className="absolute top-0 left-0 img-anim1 w-full h-full object-cover"
          />
          <img
            src="/images/benifit-mob.png"
            alt="benifit-mob"
            className="absolute top-0 left-0 img-anim2 w-full h-full object-cover"
          />
        </div>
        <div className="absolute mt-[-23vw] w-full h-full flex flex-col justify-center items-center card-anim mobile:flex mobile-flex-col mobile:static mobile:mt-[10vh]">
          <h3 className="text-white text-[2.5vw] font-Instrument text-center w-[50%] leading-[1.2] mobile:text-[2.5vh] mobile:w-[80%]">
            Enterprise passwordless solutions tailored to meet the security
            needs of all your users
          </h3>
          <div className="flex justify-around  w-full text-white mt-[3vw] h-[25vw] px-[2vw] gap-[2vw] mobile:flex-col mobile:h-[100vh] mobile:px-[3vh] mobile:gap-[2vh] mobile:mt-[6vh] ">
            <div className="w-[32%] bg-[#1A1A1A] p-[4vw]  border-opacity-20 border-neutral-700 border-[0.2vw] mobile:w-full mobile:h-[40%] mobile:p-[4vh] mob-benefits-card ">
              <div className="w-[4vw] mobile:w-[7vh]">
                <img src="/images/kzero-key.svg" alt="kzero-key" />
              </div>
              <div className="w-full h-[1px] bg-white my-[1vw] mobile:my-[2vh]"></div>
              <h3 className="text-[3vw] font-Instrument mobile:text-[3vh]">Security</h3>
              <p className="text-[1.5vw] font-Instrument opacity-70 mobile:text-[2vh] mobile:mt-[2vh]">
                Biometrics and public key cryptography.
              </p>
            </div>
            <div className="w-[32%] bg-[#1A1A1A] p-[4vw]  border-opacity-20 border-neutral-700 border-[0.2vw] mobile:w-full mobile:h-[40%] mobile:p-[4vh] mob-benefits-card ">
              <div className="w-[4vw] mobile:w-[7vh]">
                <img src="/images/kzero-secure.svg" alt="kzero-key" />
              </div>
              <div className="w-full h-[1px] bg-white my-[1vw] mobile:my-[2vh]"></div>
              <h3 className="text-[3vw] font-Instrument mobile:text-[3vh]">Convenience</h3>
              <p className="text-[1.5vw] font-Instrument opacity-70 mobile:text-[2vh] mobile:mt-[2vh]">
                One-tap validations.
              </p>
            </div>
            <div className="w-[32%] bg-[#1A1A1A] p-[4vw]  border-opacity-20 border-neutral-700 border-[0.2vw] mobile:w-full mobile:h-[40%] mobile:p-[4vh] mob-benefits-card">
              <div className="w-[4vw] mobile:w-[7vh]">
                {" "}
                <img src="/images/kzero-share.svg" alt="kzero-key" />
              </div>
              <div className="w-full h-[1px] bg-white my-[1vw] mobile:my-[2vh]"></div>
              <h3 className="text-[3vw] font-Instrument mobile:text-[3vh]">Interoperability</h3>
              <p className="text-[1.5vw] font-Instrument opacity-70 mobile:text-[2vh] mobile:mt-[2vh]">
                Connect with various protocols and standards.
              </p>
            </div>
          </div>
        </div>
       
        
      </section>
    </>
  );
}

export default Benefits;
