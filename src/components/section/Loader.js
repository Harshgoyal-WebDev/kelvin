import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import {gsap} from "gsap";


function Loader() {
  const load = useRef(null);
  useGSAP(()=>{
    if(globalThis.innerWidth<541){
      const tl= gsap.timeline()
      
      gsap.from(".loader-anim",{
        yPercent:150,
        opacity:0,
        duration:2,
        delay:0.1,
        ease:"power4.out"
      })
      tl.to(load.current, {
        innerHTML: "100",
        duration:3,
        
        onUpdate: () => {
          const percentag = parseInt(load.current.innerHTML);
          const formattedCounter = String(percentag).padStart(2, "0");
          load.current.innerHTML = formattedCounter;
        },
      });
      tl.to(".loader-container",{
        yPercent:-100,
        duration:1,
        ease:"power4.out"
      })
    }
    else{
      const tl= gsap.timeline()
      gsap.from(".load-container",{
        yPercent:100,
        duration:3
      })
      gsap.from(".loader-anim",{
        yPercent:100,
        opacity:0,
        ease:"power4.out"
      })
      tl.to(load.current, {
        innerHTML: "100",
        duration:3,
        
        onUpdate: () => {
          const percentag = parseInt(load.current.innerHTML);
          const formattedCounter = String(percentag).padStart(2, "0");
          load.current.innerHTML = formattedCounter;
        },
      });
      tl.to(".loader-container",{
        yPercent:-100,
        duration:1,
        ease:"power4.out"
      })
      
    }
   
  })

  return (
    <>
      <section className="fixed top-0 left-0 w-screen h-screen loader-container z-[100] bg-black">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[20vw]  overflow-hidden mobile:w-[30vh] border-white">
            <div className="overflow-hidden w-full loader-anim">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 45" fill="#ffffff">
              {" "}
              <path d="m74.14 21.16 7.53-7.75h-5.16l-7.22 7.66v-7.66H65v18.2h4.25V26l2-2 5.56 7.53v.06H82ZM90.14 27.86v-3.54h8.56v-3.75h-8.56v-3.41h9.75v-3.75h-14v18.2H100v-3.75ZM110 27.79V13.41h-4.24v18.2h13.32v-3.82ZM132.41 13.41l-4.68 12.42-4.65-12.35v-.07h-4.66l7.42 18.25v.07h3.68l7.4-18.16.05-.17ZM145.82 13.41h-4.25v18.2h4.25ZM163.95 13.41v10.84l-8.33-10.8h-3.86v18.2h4.19V20.43l8.6 11.13v.06h3.57V13.41ZM175.77 15.27v-1.84h14.34v1.37L178.2 29.72h11.92v1.85h-14.73V30.2l11.9-14.93ZM210.18 15.29H199v6.2h10v1.86h-10v6.35h11.3v1.86h-13.41V13.43h13.28ZM229.76 31.57l-5.34-7h-5.25v7h-2.07V13.43h7.9c4 0 6.65 2.16 6.65 5.43 0 3-2.1 4.8-5 5.31l5.65 7.42h-2.55Zm-4.92-16.24h-5.67v7.36h5.65c2.75 0 4.72-1.4 4.72-3.76s-1.73-3.6-4.7-3.6ZM246.58 31.88a9.17 9.17 0 0 1-9.35-9.36 9.27 9.27 0 0 1 9.4-9.41 9.17 9.17 0 0 1 9.37 9.36 9.25 9.25 0 0 1-9.42 9.41Zm0-16.87a7.18 7.18 0 0 0-7.2 7.47 7.25 7.25 0 0 0 7.25 7.52 7.18 7.18 0 0 0 7.2-7.47 7.26 7.26 0 0 0-7.25-7.53ZM40.41 22.76A18.57 18.57 0 0 1 22 41.2 18.56 18.56 0 0 1 3.63 22.5 18.58 18.58 0 0 1 22 3.8a18 18 0 0 1 10.45 3.31 9.26 9.26 0 0 1 3-2.44A21.54 21.54 0 0 0 22 0 22.3 22.3 0 0 0 0 22.5 22.3 22.3 0 0 0 22 45a22.28 22.28 0 0 0 22-22.5c0-.33 0-.65-.05-1a8.7 8.7 0 0 1-3.54 1.26Z"></path>
              <path d="M39.38 19.17a5.78 5.78 0 0 1-5.63-5.91 5.63 5.63 0 1 1 11.25 0 5.78 5.78 0 0 1-5.62 5.91Zm0-8.57a2.68 2.68 0 1 0 2.55 2.67 2.62 2.62 0 0 0-2.55-2.67ZM26.56 32.4l-5.73-8.26-2.15 2.33v5.93h-4.2V13h4.21v7.9l7.1-7.9h5.31l-7.53 8.24 7.87 11.16Z"></path>{" "}
            </svg></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-[3%] flex text-white text-[5vw] h-full load-container mobile:text-[5vh] mobile:top-[80%] mobile:left-[42%]">
          <h3 ref={load} className="">
              0
          </h3><span>%</span>
        </div>
        
        
      </section>
    </>
  );
}

export default Loader;
