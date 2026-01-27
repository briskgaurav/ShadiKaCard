import Image from "next/image";
import React from "react";
import CopyLines from "./CopyLines";
import Copy from "./Copy";

export default function EventsInfo({eventsInfo}) {
  return (
    <>
      <div className="h-fit w-full py-[5vw] max-md:px-[10vw] relative max-sm:py-[15vw]">
        {/* Desktop background */}
        <div className="absolute inset-0 max-md:hidden">
          <Image
            src="/img/final/webp/red-bg-web.webp"
            alt="events"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Mobile background */}
        <div className="absolute inset-0 hidden max-md:block">
          <Image
            src="/img/final/webp/red-bg-mobile-2.webp"
            alt="events"
            fill
            className="object-cover"
          />
        </div>

        <div className="h-full w-full text-primary font-georgia flex items-center gap-[1vw] max-md:gap-[5vw] flex-col relative z-10">
          <p className="text-[1.2vw] max-md:text-[5vw] fadeup">
            || ॐ श्री गणेशाय नमः ||
          </p>
          <div className="h-auto w-[14vw] aspect-square relative max-sm:w-[25vw] fadeup">
            <img
              src="/img/final/webp/ganeshstrokes.webp"
              alt="events"
              className="object-contain"
            />
          </div>
          <div className="text-center space-y-[1vw] max-md:space-y-[5vw]">
            <CopyLines>
              <p className="text-[1.8vw] max-md:text-[5vw]">
                With the blessings of {eventsInfo.bride ? "her" :"his"} grandparents <br/> {eventsInfo.bride ? eventsInfo.grandDaughterOf : eventsInfo.grandSonOf}
              </p>
            </CopyLines>
            <CopyLines>
              <p className="text-[1.8vw] max-md:text-[5vw] ">
                We invite you to join us in the wedding celebration of
              </p>
            </CopyLines>
          </div>

          <div className="mt-[4vw] text-center ">
            <CopyLines>
              <h2 className="text-[8vw] max-md:text-[15vw] font-bizantheum">
                {eventsInfo.bride ? eventsInfo.name1 : eventsInfo.name2}
              </h2>
            </CopyLines>
            <div className="text-center space-y-[1vw]">
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">
                  {eventsInfo.bride ? "Daughter of" : "Son of"}
                </p>
              </CopyLines>
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">
                  {eventsInfo.bride ? eventsInfo.daughterOf : eventsInfo.sonOf}
                </p>
              </CopyLines>
            </div>
          </div>
          
          <CopyLines>
            <p className="text-[9vw] max-md:text-[15vw] font-inria ">&</p>
          </CopyLines>
          
          <div className="-mt-5 text-center ">
            <CopyLines>
              <h2 className="text-[8vw] max-md:text-[15vw] font-bizantheum ">
                {eventsInfo.bride ? eventsInfo.name2 : eventsInfo.name1}
              </h2>
            </CopyLines>
            <div className="text-center space-y-[1vw]">
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">
                  {eventsInfo.bride ? "Son of" : "Daughter of"}
                </p>
              </CopyLines>
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">
                  {eventsInfo.bride ? eventsInfo.sonOf : eventsInfo.daughterOf}
                </p>
              </CopyLines>
            </div>
          </div>
          
          <div className="h-auto w-[25vw] animate-updown fadeup pointer-events-none absolute top-[10%] max-md:top-[5%] left-[3%] max-md:hidden">
            <Image
              src={"/img/illustrations/bouquet.webp"}
              alt="moon"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
         
          <div className="h-auto w-[20vw] animate-updown fadeup pointer-events-none absolute top-[70%] right-[3%] max-md:hidden">
            <Image
              src={"/img/illustrations/moon-2.webp"}
              alt="moon"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="h-fit w-full py-[5vw] relative pt-[10vw]">
        <div className="h-full w-full px-[5vw] max-md:overflow-hidden relative text-primary text-center">
          <CopyLines>
            <h2 className="text-[6.5vw] max-md:text-[10vw] max-md:leading-[1.2] max-md:mt-[10vw] max-md:w-[90%] font-bizantheum">
              On the following auspicious day
            </h2>
          </CopyLines>
          
          <div className={`grid ${eventsInfo.bride ? 'grid-cols-2' : 'grid-cols-3'} max-md:grid-cols-1 gap-x-[10vw] max-md:gap-x-[5vw] gap-y-[8vw] max-md:gap-y-[10vw] place-items-center mt-[8vw] max-md:mt-[10vw]`}>
            {eventsInfo.eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
      </div>
      
      
    </>
  );
}

export function EventCard({ event }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[2vw] max-md:gap-y-[4vw] max-md:mb-[7vw]">
      <div className="h-[57vh] max-md:h-[90vw] w-[22vw] max-md:w-[60vw] p-[1vw] max-md:p-[3vw] relative flex items-center justify-center rounded-full border-5 fadeup max-md:border-4 border-primary">
        <div className={`size-full rounded-full ${event.mirror ? "scale-x-[-1] group-hover:scale-x-[-1.1]" : ""} overflow-hidden group`}>
          <Image
            src={event.image}
            alt="event"
            height={500}
            width={500}
            className={`object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 `}
          />
        </div>
        <div className={`h-auto animate-wiggle pointer-events-none w-[12vw]  max-md:w-[32vw] absolute ${event.digonalImages ? "left-[-25%] max-md:left-[-25%]" : "right-[-25%] max-md:right-[-25%]"} ${event.digonalImages ? "bottom-[10%] max-md:bottom-[15%]" : "top-[60%] max-md:top-[65%]"}`}>
          <Image
            src={event.illustration1}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className={`h-auto w-[12vw] animate-updown pointer-events-none max-md:w-[32vw] absolute ${event.digonalImages ? "right-[-20%] max-md:right-[-25%]" : "left-[-20%] max-md:left-[-25%]"} ${event.digonalImages ? "top-[-20%] max-md:top-[-8%]" : "top-[-20%] max-md:top-[-15%]"}`}>
          <Image
            src={event.illustration2}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative w-full max-md:w-[80vw]">
        <Copy>
        <h3 className="text-[2.5vw] font-medium font-georgia tracking-tight max-md:text-[9vw]">{event.title}</h3>
        </Copy>
        <div className="space-y-[.5vw] mt-[2vw]">
          <CopyLines>
          <p className="text18 font-medium font-georgia leading-[1.1]">{event.date}</p>
          </CopyLines>
          <CopyLines>
          <p className="text18 font-medium font-georgia leading-[1.1]">{event.venue}</p>
          </CopyLines>
          <CopyLines>
          <p className="text18 font-medium font-georgia leading-[1.1]">{event.time}</p>
          </CopyLines>
        </div>
      </div>
    </div>
  );
}