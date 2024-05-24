import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from "../Button";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const frameCountByWidth = (width) => (width < 541 ? 115 : 140);
const currentFrameByWidth = (width, index) =>
  width < 541
    ? `/images/mobile/${(index + 1).toString()}.webp`
    : `/images/hero-sequence/${(index + 1).toString()}.webp`;

const scaleImage = (img, ctx) => {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
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
};

const Hero = () => {
  const canvasRef = useRef(null);

  useGSAP(() => {
    const width = globalThis.innerWidth;
    const frameCount = frameCountByWidth(width);
    const currentFrame = (index) => currentFrameByWidth(width, index);
    const images = [];
    const iceberg = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const render = () => scaleImage(images[iceberg.frame], context);

    const tl = gsap.timeline({
      scrollTrigger: {
        pin: ".mobile-hero",
        start: "top top",
        end: "bottom -=100",
      },
    });

    images[0].onload = render;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    tl.to(iceberg, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "power3.out",
      scrollTrigger: {
        scrub: 0.1,
      },
      onUpdate: render,
    });

    gsap.to(".hero-bg", {
      translateY: -50,
      scrollTrigger: {
        trigger: ".hero-bg",
        scrub: 0.2,
        start: "top top",
        end: "bottom top",
      },
    });

    tl.to("#canvas", {
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".canvas1",
        start: "top top",
        end: "400% top",
        pin: true,
      },
    });

    tl.to(".hero-head", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-bg",
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });

    tl.from(".overlay", {
      opacity: 0,
      ease: "circ.in",
      scrollTrigger: {
        trigger: ".hero-sec",
        scrub: 2,
        start: "50% top",
        end: "40% -=200",
      },
    });

    tl.to(".goodbyeanim", {
      scale: 0.5,
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: ".banner",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "200% top",
      },
    });
  });

  return (
    <section className="h-[500vh] w-screen hero-sec mobile:h-[100vh] mobile:mobile-hero overflow-hidden">
      <div className="w-screen h-[100vh] canvas1 mobile:h-[100vh]">
        <div className="h-full bg-[#EAECF4] flex justify-center items-center w-full hero-bg ">
          <div className="w-[45%] -mt-[15%] text-center hero-head mobile:w-[90%] mobile:mt-[-70%] ">
            <h1 className="text-[5.2vw] leading-[1] mobile:text-[10vw]">
              <span className="hero-intro">
                <span className="text-blue-700"> Unlock </span> the Future
              </span>
              <span className="hero-intro"> of Authentication</span>
            </h1>
          </div>
          <div className="absolute object-cover w-full mobile:hidden">
            <img
              src="/images/bg-kelvin.webp"
              alt="background-image"
              
             
            />
          </div>
          <div className="absolute object-cover w-full hidden mobile:block mobile:mt-[]">
            <img src="/images/bg_mobile.webp" alt="bg-mobileimg" loading="lazy" />
          </div>
        </div>
        <div className="h-[100vh] absolute top-0 left-0 w-screen mobile:h-full">
          <canvas
            className="z-10 h-full object-center mobile:object-contain"
            ref={canvasRef}
            id="canvas"
          />
        </div>
      </div>
      <div className="z-20 absolute top-[220%] flex justify-center w-full flex-col items-center">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-white text-[2.5vw] leading-[1.1] z-20 text-center w-[70%] mobile:text-[2.8vh] mobile:w-[90%]">
            Protect your organization with next-gen passwordless authentication
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
        <h3 className="text-white text-[2vw] mobile:mt-[80vh] mobile:text-[2.5vh] mobile:w-[50%] mobile:text-center">
          Security Solutions Trusted by Leaders
        </h3>
        <div className="flex justify-between gap-[4vw] pt-[4vw] w-screen px-[5vw] mobile:hidden tablet:hidden">
          <img src="/images/brand1.webp" alt="brand1" height={200} width={200}/>
          <img src="/images/brand2.webp" alt="brand2" height={200} width={200} />
          <img src="/images/brand3.webp" alt="brand3" height={200} width={200} />
          <img src="/images/brand3.webp" alt="brand3" height={200} width={200} />
          <img src="/images/brand4.webp" alt="brand4" height={200} width={200} />
          <img src="/images/brand5.webp" alt="brand5" height={200} width={200} />
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full z-40 absolute top-[270%] banner mobile:top-[300%] ">
        <h3 className="text-[6vw] text-white goodbyeanim font-Instrument mobile:text-[4vh] mobile:text-center mobile:leading-[1.1]">
          Say Goodbye to Pa$$w0rds
        </h3>
      </div>
    </section>
  );
};

export default Hero;
