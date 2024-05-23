import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Level() {
  useEffect(() => {
    if (globalThis.innerWidth < 541) {
      gsap.to(".flow-line", {
        scaleY: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: ".flow",
          start: "top 50%",
          end: "bottom top",
          scrub: true,
        },
      });
    } else {
      const tl = gsap.timeline();
      gsap.fromTo(
        ".line-progress",
        {
          strokeDashoffset: 0.000999,
          strokeDasharray: "0px , 4800px",
        },
        {
          strokeDashoffset: 0.000111,
          strokeDasharray: "4800px , 0px",
          duration: 10,
          scrollTrigger: {
            trigger: ".line-progress",
            scrub: true,
            start: "top 75%",
            end: "bottom top",
          },
        }
      );
      tl.to(".img1", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".image",
          scrub: true,
          pin: true,
          start: "top 10%",
          end: "bottom 60%",
        },
      });
    }
  }, []);

  return (
    <section className="h-full relative mt-[220vh] bg-white z-[60] level w-screen pb-[20vh] mobile:mt-[-10vh] overflow-hidden">
      <div className="my-[5vw]">
        <div className="flex flex-col gap-[2vw]">
          <div className="w-full flex justify-center items-center mt-[7vw] mobile:mt-[7vh]">
            <h3 className="text-[5vw] font-extralight font-Instrument w-[60%] text-center text-zinc-900 leading-[1] mobile:text-[4vh] mobile:w-[80%]">
              Level Up with Passwordless MFA
            </h3>
          </div>
          <div className="flex w-full justify-center items-center mt-[2vw] mobile:flex-col">
            <div className="flex gap-[1vw] mobile:gap-[4vh] mobile:w-full mobile:justify-center">
              <div className="w-[30%] mobile:w-[20%]">
                <Image
                  src="/images/FidoLevel.webp"
                  loading="lazy"
                  alt="fidobrand"
                  width={123}
                  height={76}
                />
              </div>
              <p className="w-[60%] text-[0.8vw] mobile:text-[2vh] mobile:w-[40%]">
                Powered by secure biometrics
              </p>
            </div>
            <div className="w-[38%] mobile:w-[85%] mobile:mt-[5vh]">
              <p className="text-[1.5vw] font-Instrument mobile:text-[2vh] mobile:text-center">
                Eliminate passwords and implement zero trust authentication with
                enterprise-grade FIDO2 certified software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[92vw] mx-auto h-full mobile:hidden">
        <svg
          width="1742"
          height="2365"
          viewBox="0 0 1742 2365"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[90%]"
        >
          <path
            d="M857.752 0V220.451C857.752 275.793 902.615 320.656 957.957 320.656H1639.35C1694.69 320.656 1739.56 365.52 1739.56 420.861V788.614C1739.56 843.956 1694.69 888.819 1639.35 888.819H102.205C46.8635 888.819 2 933.683 2 989.025V2364.34"
            stroke="#E5E6E8"
            strokeWidth="3"
          ></path>
          <path
            className="line-progress"
            d="M857.752 0V220.451C857.752 275.793 902.615 320.656 957.957 320.656H1639.35C1694.69 320.656 1739.56 365.52 1739.56 420.861V788.614C1739.56 843.956 1694.69 888.819 1639.35 888.819H102.205C46.8635 888.819 2 933.683 2 989.025V2364.34"
            stroke="url(#line-progress)"
            strokeWidth="3"
            style={{
              strokeDashoffset: 0.000999,
              strokeDasharray: "0px, 4800px",
            }}
          ></path>
          <defs>
            <linearGradient
              id="line-progress"
              x1="-106"
              y1="2316.5"
              x2="-117"
              y2="-45.4999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E5E6E8"></stop>
              <stop offset="0.172313" stopColor="#324EEF"></stop>
              <stop offset="0.881552" stopColor="#324EEF"></stop>
              <stop offset="1" stopColor="#E5E6E8"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-[7%] right-[15%]">
          <div className="w-full h-full flex flex-col">
            <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70">
              {`{ 01 }`}
            </p>
            <h3 className="text-[2.5vw] font-Instrument text-zinc-800">
              Traditional Passwords
            </h3>
          </div>
        </div>
        <div className="absolute top-[30%] w-full">
          <div className="w-full flex justify-around px-[2vw]">
            <div className="h-full w-auto flex flex-col">
              <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70">
                {`{ 03 }`}
              </p>
              <h3 className="text-[2.5vw] font-Instrument text-zinc-800">
                Multi-Device Passkeys
              </h3>
            </div>
            <div className="w-auto h-full flex flex-col">
              <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70">
                {`{ 02 }`}
              </p>
              <h3 className="text-[2.5vw] font-Instrument text-zinc-800">
                Password + Phishable MFA
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute flex top-[50%] justify-between items-start pr-[4vw]">
          <div className="flex flex-col gap-[7vw] ps-[10vw] w-[45%]">
            <div className="flex flex-col font-Instrument">
              <p className="text-zinc-800 opacity-60 text-[1.5vw]">{`{ 04 }`}</p>
              <h3 className="text-[2.5vw] text-zinc-800 leading-[1.2] mt-[1vw]">
                Single-Device Enterprise Passkeys
              </h3>
              <p className="text-[1.6vw] text-blue-700 mt-[2vw]">
                Multi-Pass Digital
              </p>
              <p className="text-[1.3vw] text-zinc-800 opacity-60 leading-[1.2] mt-[1vw]">
                Transform your mobile device into a FIDO2 passkey, eliminating
                passwords and shared secrets with secure asymmetric
                cryptography.
              </p>
            </div>
            <div className="flex flex-col font-Instrument">
              <p className="text-zinc-800 opacity-60 text-[1.5vw]">{`{ 05 }`}</p>
              <h3 className="text-[2.5vw] text-zinc-800 w-full leading-[1.2] mt-[1vw]">
                Next-Gen Authentication
              </h3>
              <p className="text-[1.6vw] text-blue-700 mt-[2vw]">Multi-Pass Pro</p>
              <p className="text-[1.3vw] text-zinc-800 opacity-60 leading-[1.2] mt-[1vw]">
                The Fort Knox of Authentication. Deliver the most robust
                security with offline-first authentication technology. Keep keys
                off connected devices and offer an added layer of security
                against online threats.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-[40vw] rounded-[3vw] overflow-hidden relative image">
            <Image
              src="/images/level1img.webp"
              alt="level1img"
              loading="lazy"
              className="img1 absolute w-full z-[10] h-full object-cover top-0 left-0"
              height={768}
              width={676}
            />
            <Image
              src="/images/level2img.webp"
              alt="level2img"
              loading="lazy"
              className="img2 absolute w-full h-full object-cover top-0 left-0"
              height={768}
              width={676}
            />
          </div>
        </div>
      </div>
      <div className="hidden mobile:block">
        <div className="w-full h-full flex flex-col ps-[8vh] mt-[15vh]">
          <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70 mobile:text-[2vh]">
            {`{ 01 }`}
          </p>
          <h3 className="text-[2.5vw] font-Instrument font-medium text-zinc-800 mobile:text-[2.8vh] mobile:mt-[2vh]">
            Traditional Passwords
          </h3>
          <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70 mobile:text-[2vh] mobile:mt-[12vh]">
            {`{ 02 }`}
          </p>
          <h3 className="text-[2.5vw] font-Instrument font-medium text-zinc-800 mobile:text-[2.8vh] mobile:mt-[2vh]">
            Password + Phishable MFA
          </h3>
          <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70 mobile:text-[2vh] mobile:mt-[12vh]">
            {`{ 03 }`}
          </p>
          <h3 className="text-[2.5vw] font-Instrument font-medium text-zinc-800 mobile:text-[2.8vh] mobile:mt-[2vh]">
            Multi-Device Passkeys
          </h3>
          <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70 mobile:text-[2vh] mobile:mt-[12vh]">
            {`{ 04 }`}
          </p>
          <h3 className="text-[2.5vw] font-Instrument font-medium text-zinc-800 mobile:text-[2.8vh] mobile:mt-[2vh]">
            Single-Device Enterprise Passkeys
          </h3>
          <p className="text-blue-600 text-[2vh] mt-[2vh]">Multi-pass Digital</p>
          <p className="text-[2vh] mt-[2vh]">
            Transform your mobile into a FIDO2 passkey, eliminating passwords and shared secrets
          </p>
          <div className="w-[90%] mt-[7vh]">
            <img
              src="/images/level1img.webp"
              alt="levelmobimg"
              loading="lazy"
              className="rounded-[3vh]"
            />
          </div>
          <p className="text-[1.5vw] font-Instrument text-zinc-800 opacity-70 mobile:text-[2vh] mobile:mt-[12vh]">
            {`{ 05 }`}
          </p>
          <h3 className="text-[2.5vw] font-Instrument font-medium text-zinc-800 mobile:text-[2.8vh] mobile:mt-[2vh]">
            Next-Gen Authentication
          </h3>
          <p className="text-blue-600 text-[2vh] mt-[2vh]">Multi-pass Pro</p>
          <p className="text-[2vh] mt-[2vh]">
            Transform your mobile into a FIDO2 passkey, eliminating passwords and shared secrets
          </p>
          <div className="w-[90%] mt-[7vh]">
            <img
              src="/images/level2img.webp"
              alt="levelmobimg"
              loading="lazy"
              className="rounded-[3vh]"
            />
          </div>
        </div>
        <div className="absolute top-[20%] left-[5%] h-[75%] w-[0.2vh] bg-slate-300 flow overflow-hidden rounded-full">
          <div className="h-full w-full bg-blue-600 flow-line scale-y-0 absolute top-0 left-0 origin-top"></div>
        </div>
      </div>
    </section>
  );
}

export default Level;
