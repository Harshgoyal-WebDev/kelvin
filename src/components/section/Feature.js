import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Feature() {
    useGSAP(()=>{
      if(globalThis.innerWidth<541){
          const tl = gsap.timeline();
          tl.from(".feature-card",{
            yPercent:10,
            opacity:0,
            
            ease:"power3.inOut",
            scrollTrigger:{
              trigger:".feature-card",
              
              start:"top 90%",
              end:"bottom top",
              scrub:true
            },
            stagger:0.5
          })
      }else{
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:".feature",
            pin:true,
            scrub:1
          }
        });
        tl.to(".feature-container2",{
          yPercent:-95,
          
          ease:"power4.out"
          
        })
        tl.to(".feature-container",{
          scale:0.90,
          delay:-0.5
        })
        tl.to(".feature-container3",{
          yPercent:-190,
          ease:"power4.out",
          delay:-0.3

        })
        tl.to(".feature-container2",{
          scale:0.95,
          delay:-0.5
          
        })
      }
       

    })
  return (
    <>
      <section className="relative h-[120vh]  bg-white z-[60] w-screen feature overflow-hidden mobile:h-full tablet:h-full">
        <div className="feature-container w-full flex justify-center items-center py-[10vw] mobile:py-[2vh] feature-card">
          <div className="h-[35vw] w-[80vw] bg-[#141414] rounded-[3vw] flex mobile:h-[90vh] mobile:w-[95%] mobile:rounded-[3vh] mobile:flex-col">
            <div className="w-[45%] h-[50%] mobile:w-[95%]">
              <Image
                src="/images/featureimg1.webp"
                alt="feature1"
                className="px-[3vw]"
                width={691}
                height={651}
              />
            </div>
            <div className="w-[50%] flex flex-col  text-white font-Instrument mobile:w-full mobile:px-[4vh] mobile:mt-[-5vh]">
              <p className="text-[1vw] my-[2vw] mobile:text-[2vh]">{`{  01  }`}</p>
              <h3 className="text-[2.5vw] justify-start my-[2vw] mobile:text-[2.5vh]">
                Tamper-Proof Private Keys
              </h3>
              <p className="text-[1.5vw] mobile:text-[2vh] mt-[2vh]">
                The Power of Secure Element Technology
              </p>
              <p className=" text-[1.3vw] mt-[1vw] text-zinc-400 mobile:text-[2vh] mobile:mt-[1vh]">
                Keep your private keys safe in a securely housed
                tamper-resistant smart card chip. This is not just any chip, but
                a secure element built with the rigorous standards that protect
                the global financial system. Any attempt to compromise it? The
                keys are instantly destroyed, eliminating potential misuse.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-container2 w-full flex justify-center items-center py-[10vw] mobile:py-[1vh] feature-card">
          <div className="h-[35vw] w-[80vw] bg-[#E1F0FD] rounded-[3vw] flex mobile:h-[70vh] mobile:w-[95%] mobile:rounded-[3vh] mobile:flex-col">
            <div className="w-[45%] h-[50%] mobile:w-full mobile:flex mobile:justify-center mobile:items-center">
              <Image
                src="/images/featureimg2.webp"
                alt="feature1"
                className="px-[3vw] mobile:w-[90%]"
                width={691}
                height={651}
              />
            </div>
            <div className="w-[50%] flex flex-col  text-zinc-800 font-Instrument mobile:w-full mobile:px-[4vh] mobile:mt-[4vh] ">
              <p className="text-[1vw] my-[2vw] mobile:text-[2vh]">{`{  02  }`}</p>
              <h3 className="text-[2.5vw] justify-start my-[2vw] mobile:text-[2.5vh]">
                Your Fingerprints, Your Privacy
              </h3>

              <p className=" text-[1.5vw] mt-[1vw] text-zinc-800 mobile:text-[2vh] mobile:mt-[1vh]">
                With Multi-Pass Pro, only a non-reversible biometric fingerprint
                template is saved on the card and biometrics are never stored
                online or on the device.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-container3 w-full flex justify-center items-center py-[10vw] mobile:py-[1vh] feature-card">
          <div className="h-[35vw] w-[80vw] bg-[#324EEF] rounded-[3vw] flex mobile:w-[95%] mobile:h-[70vh] mobile:rounded-[3vh] mobile:flex-col overflow-hidden">
            <div className="w-[40%] h-[50%]  mobile:w-full mobile:flex mobile:justify-center mobile:items-center mobile:overflow-hidden ">
              <Image
                src="/images/featureimg3.webp"
                alt="feature1"
                className="object-cover mobile:w-[90%]"
                width={691}
                height={651}
              />
            </div>
            <div className="w-[50%] flex flex-col  text-white font-Instrument mobile:w-full mobile:px-[4vh] mobile:mt-[4vh] ">
              <p className="text-[1vw] my-[2vw]  mobile:text-[2vh]">{`{  03  }`}</p>
              <h3 className="text-[2.5vw] justify-start my-[2vw] mobile:text-[2.5vh]">
                Your Fingerprints, Your Privacy
              </h3>

              <p className=" text-[1.5vw] mt-[1vw] text-white mobile:text-[2vh] mobile:mt-[1vh]">
                With Multi-Pass Pro, only a non-reversible biometric fingerprint
                template is saved on the card and biometrics are never stored
                online or on the device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
