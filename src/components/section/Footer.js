import React from "react";
import Button from "../Button";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useGSAP(() => {
    if(globalThis.innerWidth<541){
        gsap.from(".footercontent",{
          yPercent:-20,
          ease:"power4.out",
          scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "bottom bottom",
            
            scrub: true,
          },
        })
    }
    else{
      gsap.to(".footercontent", {
        yPercent: 40,
  
        
  
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
          end: "bottom bottom",
  
          scrub: true,
        },
      });
    }
    
  });
  return (
    <>
      <footer className="relative w-screen h-full  bg-[#141414] px-[5vw] z-[-1] py-[5vw] footer overflow-hidden mobile:h-full">
        <div className="translate-y-[-40%] footercontent mobile:hidden">
          <div className="grid grid-cols-16 w-full h-full">
            <div className="col-span-4 col-start-2 h-full w-full">
              <div className="">
                <div className="w-[15vw] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 45"
                    fill="#ffffff"
                  >
                    {" "}
                    <path d="M74.14,21.16l7.53-7.75H76.51l-7.22,7.66V13.41H65v18.2h4.25V26l2-2,5.56,7.53,0,.06H82Z"></path>{" "}
                    <path d="M90.14,27.86V24.32H98.7V20.57H90.14V17.16h9.75V13.41h-14v18.2H100V27.86Z"></path>{" "}
                    <path d="M110,27.79V13.41h-4.24v18.2h13.32V27.79Z"></path>{" "}
                    <path d="M132.41,13.41l-4.68,12.42-4.65-12.35,0-.07h-4.66l7.42,18.25,0,.07h3.68l7.4-18.16.05-.17Z"></path>{" "}
                    <path d="M145.82,13.41h-4.25v18.2h4.25Z"></path>{" "}
                    <path d="M163.95,13.41V24.25l-8.33-10.8,0,0h-3.86v18.2h4.19V20.43l8.6,11.13,0,.06h3.57V13.41Z"></path>{" "}
                    <path d="M175.77,15.27V13.43h14.34V14.8L178.2,29.72h11.92v1.85H175.39V30.2l11.9-14.93Z"></path>{" "}
                    <path d="M210.18,15.29H199v6.2h10v1.86H199v6.35H210.3v1.86H196.89V13.43h13.28Z"></path>{" "}
                    <path d="M229.76,31.57l-5.34-7h-5.25v7H217.1V13.43H225c4,0,6.65,2.16,6.65,5.43,0,3-2.1,4.8-5,5.31l5.65,7.42h-2.55Zm-4.92-16.24h-5.67v7.36h5.65c2.75,0,4.72-1.4,4.72-3.76S227.81,15.33,224.84,15.33Z"></path>{" "}
                    <path d="M246.58,31.88a9.17,9.17,0,0,1-9.35-9.36,9.27,9.27,0,0,1,9.4-9.41A9.17,9.17,0,0,1,256,22.47,9.25,9.25,0,0,1,246.58,31.88Zm0-16.87a7.18,7.18,0,0,0-7.2,7.47A7.25,7.25,0,0,0,246.63,30a7.18,7.18,0,0,0,7.2-7.47A7.26,7.26,0,0,0,246.58,15Z"></path>{" "}
                    <path d="M40.41,22.76A18.57,18.57,0,0,1,22,41.2,18.56,18.56,0,0,1,3.63,22.5,18.58,18.58,0,0,1,22,3.8,18,18,0,0,1,32.45,7.11a9.26,9.26,0,0,1,3-2.44A21.54,21.54,0,0,0,22,0,22.3,22.3,0,0,0,0,22.5,22.3,22.3,0,0,0,22,45,22.28,22.28,0,0,0,44,22.5c0-.33,0-.65-.05-1A8.7,8.7,0,0,1,40.41,22.76Z"></path>{" "}
                    <path d="M39.38,19.17a5.78,5.78,0,0,1-5.63-5.91,5.63,5.63,0,1,1,11.25,0A5.78,5.78,0,0,1,39.38,19.17Zm0-8.57a2.68,2.68,0,1,0,2.55,2.67A2.62,2.62,0,0,0,39.38,10.6Z"></path>{" "}
                    <path d="M26.56,32.4l-5.73-8.26-2.15,2.33V32.4H14.48V13h4.21v7.9l7.1-7.9H31.1l-7.53,8.24L31.44,32.4Z"></path>{" "}
                  </svg>
                </div>
                <h4 className="text-[2.5vw] text-white leading-[1.2] mt-[3vw] font-Instrument">
                  <span className="text-blue-600">Unlock</span> the Future of
                  Authentication
                </h4>
                <div className="btn mt-[10vw]">
                  <Button
                    className="blue w-[10vw]"
                    content={"Try Multi-Pass"}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 col-span-12 col-start-8 font-Instrument">
              <div className="col-span-3 col-start-1 h-full w-full">
                <div className=" flex flex-col justify-between">
                  <h5 className="text-white text-[1.1vw] font-bold">
                    Solutions
                  </h5>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[2vw] cursor-pointer"
                  >
                    Workforce Passwordless
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Remote Authentication
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Customer Passwordless
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Physical Access
                  </a>
                </div>
              </div>
              <div className="col-span-3 col-start-5 h-full w-full">
                <div className=" flex flex-col justify-between">
                  <h5 className="text-white text-[1.1vw] font-bold">
                    Resources
                  </h5>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[2vw] cursor-pointer"
                  >
                    Resource Center
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Authentication Guides
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Encyclopedia
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Blog
                  </a>
                </div>
              </div>
              <div className="col-span-2 col-start-9 col">
                <div className=" flex flex-col justify-between">
                  <h5 className="text-white text-[1.1vw] font-bold">Company</h5>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[2vw] cursor-pointer"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[1vw] mt-[1.5vw] cursor-pointer"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mobile:block footercontent py-[5vh]">
          <div className="w-[60%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 45"
              fill="#ffffff"
            >
              {" "}
              <path d="m74.14 21.16 7.53-7.75h-5.16l-7.22 7.66v-7.66H65v18.2h4.25V26l2-2 5.56 7.53v.06H82ZM90.14 27.86v-3.54h8.56v-3.75h-8.56v-3.41h9.75v-3.75h-14v18.2H100v-3.75ZM110 27.79V13.41h-4.24v18.2h13.32v-3.82ZM132.41 13.41l-4.68 12.42-4.65-12.35v-.07h-4.66l7.42 18.25v.07h3.68l7.4-18.16.05-.17ZM145.82 13.41h-4.25v18.2h4.25ZM163.95 13.41v10.84l-8.33-10.8h-3.86v18.2h4.19V20.43l8.6 11.13v.06h3.57V13.41ZM175.77 15.27v-1.84h14.34v1.37L178.2 29.72h11.92v1.85h-14.73V30.2l11.9-14.93ZM210.18 15.29H199v6.2h10v1.86h-10v6.35h11.3v1.86h-13.41V13.43h13.28ZM229.76 31.57l-5.34-7h-5.25v7h-2.07V13.43h7.9c4 0 6.65 2.16 6.65 5.43 0 3-2.1 4.8-5 5.31l5.65 7.42h-2.55Zm-4.92-16.24h-5.67v7.36h5.65c2.75 0 4.72-1.4 4.72-3.76s-1.73-3.6-4.7-3.6ZM246.58 31.88a9.17 9.17 0 0 1-9.35-9.36 9.27 9.27 0 0 1 9.4-9.41 9.17 9.17 0 0 1 9.37 9.36 9.25 9.25 0 0 1-9.42 9.41Zm0-16.87a7.18 7.18 0 0 0-7.2 7.47 7.25 7.25 0 0 0 7.25 7.52 7.18 7.18 0 0 0 7.2-7.47 7.26 7.26 0 0 0-7.25-7.53ZM40.41 22.76A18.57 18.57 0 0 1 22 41.2 18.56 18.56 0 0 1 3.63 22.5 18.58 18.58 0 0 1 22 3.8a18 18 0 0 1 10.45 3.31 9.26 9.26 0 0 1 3-2.44A21.54 21.54 0 0 0 22 0 22.3 22.3 0 0 0 0 22.5 22.3 22.3 0 0 0 22 45a22.28 22.28 0 0 0 22-22.5c0-.33 0-.65-.05-1a8.7 8.7 0 0 1-3.54 1.26Z"></path>
              <path d="M39.38 19.17a5.78 5.78 0 0 1-5.63-5.91 5.63 5.63 0 1 1 11.25 0 5.78 5.78 0 0 1-5.62 5.91Zm0-8.57a2.68 2.68 0 1 0 2.55 2.67 2.62 2.62 0 0 0-2.55-2.67ZM26.56 32.4l-5.73-8.26-2.15 2.33v5.93h-4.2V13h4.21v7.9l7.1-7.9h5.31l-7.53 8.24 7.87 11.16Z"></path>{" "}
            </svg>
          </div>
          <h4 className="text-[4vh] w-[80%] text-white leading-[1.2] mt-[3vh] font-Instrument">
            <span className="text-blue-600">Unlock</span> the Future of
            Authentication
          </h4>
          <div className="text-white">
            <p className="font-medium text-[2.2vh] mt-[5vh]">Solutions</p>
            <div className="w-full bg-slate-300 h-[0.1vh] mb-[3vh] mt-[2vh]"></div>
            <div className="flex flex-col">
            <a
                    href="#"
                    className="text-zinc-300 text-[2vh]  cursor-pointer"
                  >
                    Workforce Passwordless
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Remote Authentication
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Customer Passwordless
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Physical Access
                  </a>
            </div>
          </div>
          <div className="text-white">
            <p className="font-medium text-[2.2vh] mt-[5vh]">Resources</p>
            <div className="w-full bg-slate-300 h-[0.1vh] mb-[3vh] mt-[2vh]"></div>
            <div className="flex flex-col">
            <a
                    href="#"
                    className="text-zinc-300 text-[2vh]  cursor-pointer"
                  >
                    Resource Center
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Authentication guide
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Encyclopedia
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Blog
                  </a>
            </div>
          </div>
          <div className="text-white">
            <p className="font-medium text-[2.2vh] mt-[5vh]">company</p>
            <div className="w-full bg-slate-300 h-[0.1vh] mb-[3vh] mt-[2vh]"></div>
            <div className="flex flex-col">
            <a
                    href="#"
                    className="text-zinc-300 text-[2vh]  cursor-pointer"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="text-zinc-300 text-[2vh] mt-[1.5vh] cursor-pointer"
                  >
                    contact us
                  </a>
                  
            </div>
          </div>
          <div className="btn mt-[7vh] w-full">
                  <Button
                    className="blue w-[20vh] py-[4vh]"
                    content={"Try Multi-Pass"}
                  />
                </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
