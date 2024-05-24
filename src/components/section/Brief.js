import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Brief() {
  const text = useRef(null);
    useGSAP(()=>{
      let mm = gsap.matchMedia();
      
       let tl= gsap.timeline({
        scrollTrigger:{
          trigger:".brief-sec",
          scrub:1,
          pin:true,
          duration:5,          
          start: "top top",
          end: "+=1000 -=100",
          
      }
       });
       const textAnim = new SplitType(text.current, { types: 'words, chars' });
       const chars = document.querySelectorAll("#text-anim .char");
     
       tl.from(".brief-sec", {
        opacity:0,
        ease:"power4.out",
        delay:-1.7,
       })
       .from(".brief-text",{
        opacity:0,
        delay:-0.4,
        
       })
       .to(chars,{
        color:"white",
      
        stagger:0.3,
       })
       .to(".brief-text",{
        opacity:0,
        duration:1,
        ease:"power4.out"
       })

    },[])
  return (
    <>
      <section className="relative mt-[-300vh] z-40 brief-sec h-[500vh] bg-[#0A0A0A] w-full mobile:mt-[-100vh] mobile:h-[100vh] overflow-hidden">
        <div className=" absolute flex top-[7%] justify-center items-center mobile:top-[40%]">
          <div id='text-anim' ref={text} className="text-zinc-600 text-[5vw] text-center w-[70%] brief-text font-Instrument leading-[1] mobile:text-[3vh] ">
            Secure your workforce and customers with phishing - resistant MFA
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Brief;
