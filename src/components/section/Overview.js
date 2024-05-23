import React from "react";
import Button from "../Button";
import Lottie from "lottie-web";
import { useEffect,useRef } from "react";



function Overview() {
  const container= useRef(null);
  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/overviewLottie1.json'
    });
  }, []);


  return (

    <>
      <section className="relative h-[160vh] bg-white w-screen px-[3vw] z-[60] mt-[-1vw] py-[10vw] font-Instrument overflow-hidden mobile:h-full tablet:h-full">
        <div className="bg-[#F3F4F6] w-full h-[110%] rounded-[3vw] p-[10vw]  mobile:px-[2vh] mobile:py-[10vh]">
          <div className="overview-container w-full h-full">
            <div className="w-full flex justify-center items-center">
              <h3 className="text-[4vw] mobile:text-[4vh] leading-[1] mobile:text-center">
                How <span className="text-blue-700">Multi-Pass</span> Works
              </h3>
            </div>
            <div className="w-full flex justify-between mt-[5vw] gap-[4vw]">
              <div className="text-[2.5vw] mobile:text-[2.2vh] w-1/2">
                <h4 className="cursor-pointer">
                  Multi-Pass{" "}
                  <span className="bg-blue-700 px-[1vw] py-[0.5vw] rounded-full text-white">
                    Pro
                  </span>
                </h4>
                <div className="w-full h-[0.1vw] bg-zinc-800 mt-[2vw] mobile:w-full mobile:mt-[1.5vh]"></div>
              </div>
              <div className="text-[2.5vw] mobile:text-[2.2vh] w-1/2">
                <h4 className="cursor-pointer">
                  Multi-Pass Digital
                </h4>
                <div className="w-[100%] h-[0.1vw] bg-zinc-300 mt-[2vw] mobile:w-full mobile:mt-[1.5vh]"></div>
              </div>
              
            </div>
            <div className="w-full h-full flex justify-between gap-[5vw] relative mobile:flex-col">
                <div className="btn flex flex-col gap-[1vw] mt-[5vw] w-1/2 mobile:w-full mobile:order-2">
                   
                     <Button className="overview w-fit mobile:w-full border-zinc-600" content={"Workstation (NFC Reader)"}/>
                     <Button className="overview w-fit mobile:w-full" content={"Workstation (Built-in NFC)"}/>
                     <Button className="overview w-fit mobile:w-full" content={"SSO / Web App (NFC Reader)"}/>
                     <Button className="overview w-fit mobile:w-full" content={"Mobile App"}/>
                </div>
                <div className="w-[40vw] h-[55vh] justify-start items-center absolute top-[5%] left-[45%] overflow-hidden mobile:w-full mobile:h-[30vh] mobile:static mobile:order-1 mobile:mt-[5vh] tablet:top-[5%] tablet:h-[20vh]" ref={container}>
                   
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
