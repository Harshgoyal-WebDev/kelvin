import React from 'react'
import Cards from '../Cards'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Cardwheel() {
    useGSAP(() => {
      
        
        if(globalThis.innerWidth<541){
          const tl = gsap.timeline({
            scrollTrigger:{
              trigger:".cardwheel-section",
              scrub:true
            }
          })
          tl.from(".card",{
            yPercent:50,
            opacity:0,
            ease:"power3.inout",
            stagger:0.5,
            scrollTrigger:{
              trigger:".card",
              scrub:true,
              
            }
          })
          


        }else{
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".cardWheel-bg",
              start: "top top",
              end: "bottom -=1000",
              pin: true,
              scrub: 1,
            },
          });
          tl.to(".cardwheel-heading",{
            yPercent:-20,
            opacity:0,
            ease:"power1.out"
        })
        tl.from(".cardwheel-wrapper",{
            yPercent:100,
            delay:-0.5,
            

        })
        tl.to(".cardwheel-wrapper",{
          yPercent:-20,
          xPercent:-80,
          rotate:-20,
          duration:2,
          
          ease:"power1.inout"
        })
        }
        
      
        
        
       
        
    

    
    
    })
  return (
    <>
      <section className='relative h-[100vh] w-screen z-[50] mt-[-150vh] mobile:mt-[7vh] mobile:py-[7vh] mobile:h-[250vh] cardwheel-section tablet:h-[100vh] tablet:mt-[-100vh]'>
      <div className="cardWheel-bg w-full h-full bg-[#D6D8E2] absolute top-[50%] overflow-hidden mobile:top-0">
          <div className="w-[90%] object-contain absolute top-0 left-0 mobile:w-[150%]">
            <img src="/images/CardwheelBg.svg" alt="Cardwheel-bg-svg" />
          </div>
          <div className="w-full h-1/2 flex justify-center items-center z-[50] cardwheel-heading  mobile:items-start mt-[10vh]">
              <h3 className="text-[5vw] w-[35%] font-Instrument text-center leading-[1] mobile:text-[4vh] mobile:w-[60%]">
                Experience True Security
              </h3>
          </div>
          <div className="w-full h-full absolute top-[17%] left-[35%] z-[50] cardwheel mobile:left-[5%] mobile:top-[10%] ">
            <div className=" inline-flex gap-[4vw] cardwheel-wrapper mobile:flex-col">
              <div className="card translate-y-[-2vw]">
                <Cards
                  content={"Deliver a secure and frictionless login experience"}
                  src={"/images/cardimg1.png"}
                  ind={"{ 01 }"}
                />
              </div>
              <div className="rotate-[9deg] translate-y-[0.5vw] translate-x-[-0.2vw] card mobile:rotate-0 mobile:translate-y-0 mobile:translate-x-0">
                <Cards
                  content={"Meet and exceed stringent regulatory requirements"}
                  src={"/images/cardimg2.png"}
                  ind={"{ 02 }"}
                />
              </div>

              <div className="rotate-[16deg] translate-y-[8vw] translate-x-[-1.5vw] card mobile:rotate-0 mobile:translate-y-0 mobile:translate-x-0">
                <Cards content={"Reduce costs and free up IT resources"}
                src={"/images/cardimg3.png"}
                ind={"{ 03 }"} />
              </div>
              <div className="rotate-[25deg] translate-y-[20vw] translate-x-[-4vw] card mobile:rotate-0 mobile:translate-y-0 mobile:translate-x-0">
                <Cards
                  content={"Future proof against new credential-based threats"}
                  src={"/images/cardimg4.png"}
                  ind={"{ 04 }"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cardwheel
