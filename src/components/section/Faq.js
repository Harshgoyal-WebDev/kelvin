import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <>
      <section className="relative z-[60] pt-[5vw] bg-white h-[150vh] w-screen mt-[-1vw] overflow-hidden mobile:py-[10vh] mobile:h-full tablet:h-full">
        <div className="text-[5vw] flex justify-center w-full mb-[5vw]"> <h3 className="w-[50%] text-center leading-[1.1] font-Instrument mobile:text-[4vh] mobile:w-[70%]">Frequently Asked Questions</h3></div>
        <div className="w-full flex justify-center px-[5vw]">
          <Accordion
            type="single"
            collapsible
            className="w-full text-[1.5vw] text-zinc-800 flex flex-col gap-[1vw]"
          >
            <AccordionItem
              value="item-1"
              className="w-full border-[0.1vw] px-[15vw] py-[1.5vw] rounded-[2vw] mobile:px-[1vh] mobile:rounded-[2vh]"
            >
              <AccordionTrigger className="font-normal">
                <p className="ml-[5vw] mobile:text-[2.5vh] mobile:ml-0 leading-[1.1]">What is passwordless authentication?</p>
              </AccordionTrigger>
              <AccordionContent className="text-[1.2vw] leading-[1.2] mobile:text-[2vh]">
                <p className="ml-[7vw] mobile:ml-[4vh] ">
                  Passwords come with inherent vulnerabilities due to the
                  prevalence of weak passwords, password reuse, and social
                  engineering attacks. But by using other systems such as
                  biometrics or hardware signing devices, passwordless
                  authentication provides a more secure and convenient way for
                  users to authenticate themselves. This method eliminates the
                  need for passwords and the associated risks, making it a
                  popular choice for organizations looking to improve security,
                  productivity, and user experience for their consumers and
                  workforce.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="w-full border-[0.1vw] px-[15vw] py-[1.5vw] rounded-[2vw] mobile:px-[1vh] mobile:rounded-[2vh]"
            >
              <AccordionTrigger className="font-normal">
                <p className="ml-[5vw] mobile:text-[2.5vh] mobile:ml-[0vh] leading-[1.1]"> What is Multi-Pass?</p>
              </AccordionTrigger>
              <AccordionContent className="text-[1.2vw] leading-[1.2] mobile:text-[2vh]">
                <p className="ml-[7vw] mobile:ml-[4vh]">
                  Multi-Pass is a global access card and software solution that
                  provides secure and convenient biometric authentication for
                  users. It eliminates the need for passwords and time-consuming
                  multi-step login experiences. Multi-Pass uses biometric
                  technology to authenticate users: the smart card includes a
                  fingerprint sensor and contactless technology to prove
                  proximity and enable users to easily authenticate themselves
                  with a single tap.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="w-full border-[0.1vw] px-[15vw] py-[1.5vw] rounded-[2vw] mobile:px-[1vh] mobile:rounded-[2vh]"
            >
              <AccordionTrigger className="font-normal">
                <p className="ml-[5vw] mobile:text-[2.5vh] mobile:ml-[0vh] leading-[1.1]">
                  {" "}
                  How does Multi-Pass improve Security?
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-[1.5vw] leading-[1.2] mobile:text-[2vh]">
                <p className="ml-[7vw] mobile:ml-[4vh]">
                  {" "}
                  Multi-Pass improves security by eliminating the need for
                  passwords, which can be easily guessed, stolen, or
                  compromised. With biometric authentication built into each
                  card, Multi-Pass ensures only authorized users can access
                  sensitive information or systems. Multi-Pass provides a
                  seamless method of authentication that is difficult to
                  replicate or forge. This results in a more secure and
                  convenient way for employees and customers to authenticate,
                  reducing the risk of data breaches and unauthorized access.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="w-full border-[0.1vw] px-[15vw] py-[1.5vw] rounded-[2vw] mobile:px-[1vh] mobile:rounded-[2vh]"
            >
              <AccordionTrigger className="font-normal">
                <p className="ml-[5vw] mobile:text-[2.5vh] mobile:ml-[0vh] leading-[1.1]">
                  {" "}
                  How do i integrate Multi-pass with an existing system?
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-[1.2vw] leading-[1.2] mobile:text-[2vh]">
                <p className="ml-[7vw]  mobile:ml-[4vh]">
                  {" "}
                  Multi-Pass can be seamlessly integrated with your existing
                  systems and workflows using the FIDO standard. If required,
                  our team will work with you to understand your specific needs
                  and ensure a smooth integration process. Multi-Pass can be
                  customized to meet those unique needs, providing a flexible
                  and adaptable authentication solution.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default Faq;
