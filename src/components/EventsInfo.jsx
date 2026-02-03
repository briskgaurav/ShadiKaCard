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
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 hidden max-md:block">
          <Image
            src="/img/final/webp/red-bg-mobile-2.webp"
            alt="events"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>

        <div className="h-full w-full text-primary flex items-center gap-[2vw] max-md:gap-[5vw] flex-col relative z-10">
          <p className="text-[1.2vw] max-md:text-[5vw] fadeup">
            || ॐ श्री गणेशाय नमः ||
          </p>
          <div className="h-auto w-[10vw] aspect-square relative max-sm:w-[25vw] fadeup">
            <Image
              src="/img/final/webp/ganeshstrokes.webp"
              alt="events"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center pt-20 flex flex-col items-center justify-center space-y-[2vw] max-md:space-y-[5vw] max-md:pt-10">
            <CopyLines>
              <p className=" max-md:text-[4.5vw] text-[2vw] leading-[1.9] max-md:leading-[1.3] italic">
                Under the heavenly blessings of our revered grandparents 
              </p>
              <p className=" max-md:text-[4.5vw] text-[2vw] leading-[1.9] max-md:leading-[1.3] font-semibold max-md:mt-7 italic"> {eventsInfo.bride ? eventsInfo.grandDaughterOf : eventsInfo.grandSonOf} </p>
            </CopyLines>
            <CopyLines>
              <p className="text-[2.3vw] max-md:text-[6vw] mt-5 font-bold! ">
                {eventsInfo.bride? eventsInfo.daughterOf:eventsInfo.sonOf}
              </p>
            </CopyLines>
            
              <p className=" text-[1.8vw]  leading-[1.5] fadeup w-[70%] max-md:w-[100%] max-md:text-[4vw] text-center italic">Solicit your gracious presence and blessings as they celebrate the holy union of their beloved {eventsInfo.bride? "daughter":"son"}.</p>
            
          </div>

          <div className="mt-[5vw] text-center  max-md:mt-10">
            <CopyLines>
              <h2 className="text-[8vw] max-md:text-[17vw] font-bizantheum leading-[1.2]">
                {eventsInfo.bride ? eventsInfo.name1 : eventsInfo.name2}
              </h2>
            </CopyLines>
            
          </div>
          
          <CopyLines>
            <p className="heading1 text-[4vw]! max-md:text-[10vw]! font-bizantheum! leading-[1.5] my-[-2.5vw] max-md:-mt-7 max-md:-mb-6">with</p>
          </CopyLines>
          
          <div className="-mt-2 text-center ">
            <CopyLines>
              <h2 className="text-[8vw] max-md:text-[17vw] font-bizantheum leading-[1.2]">
                {eventsInfo.bride ? eventsInfo.name2 : eventsInfo.name1} 
              </h2>
            </CopyLines>
            <div className="text-center mt-[-1vw] max-md:mt-0 space-y-2">
              <CopyLines>
                <p className=" text-[1.8vw] max-md:text-[4vw] italic ">
                  {eventsInfo.bride ? "Son of " : "Daughter of "} {eventsInfo.bride ? eventsInfo.sonOf : eventsInfo.daughterOf}
                </p>
              </CopyLines>
              
            </div>
          </div>
          
          <div className="h-auto w-[18vw] animate-updown fadeup pointer-events-none absolute top-[10%] max-md:top-[5%] left-[1%] max-md:hidden">
            <Image
              src={"/img/final/webp/rose2.webp"}
              alt="moon"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
         
          <div className="h-auto w-[18vw] animate-updown fadeup pointer-events-none absolute top-[70%] right-[1%] max-md:hidden">
            <Image
              src={"/img/final/webp/ring.webp"}
              alt="moon"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="h-fit w-full py-[5vw] relative pt-[10vw] max-md:pt-[15vw]">
        <div className="h-full w-full px-[5vw] max-md:overflow-hidden relative text-primary text-center max-md:px-0">
          <CopyLines>
            <h2 className="text-[6.5vw] max-md:text-[12vw] max-md:leading-[1.2] max-md:mt-[10vw] max-md:w-full font-bizantheum">
              On the following auspicious days
            </h2>
          </CopyLines>
          
          <div className={`grid ${eventsInfo.bride ? 'grid-cols-2' : 'grid-cols-3'} max-md:grid-cols-1 gap-x-[8vw] max-md:gap-x-[5vw] gap-y-[8vw] max-md:gap-y-[15vw] place-items-center mt-[8vw] max-md:mt-[15vw]`}>
            {eventsInfo.eventsData.map((event) => (
              <EventCard key={event.id} event={event}  bride={eventsInfo.bride}/>
            ))}
          </div>
        </div>
      </div>
      </div>
      
      
    </>
  );
}

export function EventCard({ event , bride}) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[2vw] max-md:gap-y-[4vw] max-md:mb-[7vw]">
      <div className="h-[50vh] max-md:h-[90vw] w-[19vw] max-md:w-[60vw] p-[0.5vw] max-md:p-[3vw] relative flex items-center justify-center rounded-full border-3 fadeup max-md:border-4 border-primary">
        <div className={`size-full rounded-full ${event.mirror ? "scale-x-[-1] group-hover:scale-x-[-1.1]" : ""} overflow-hidden group`}>
          <Image
            src={event.image}
            alt="event"
            height={500}
            width={500}
            loading="lazy"
            className={`object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 `}
          />
        </div>
        <div className={`h-auto animate-wiggle pointer-events-none w-[10vw]  max-md:w-[32vw] absolute ${event.digonalImages ? "left-[-25%] max-md:left-[-25%]" : "right-[-25%] max-md:right-[-25%]"} ${event.digonalImages ? "bottom-[10%] max-md:bottom-[15%]" : "top-[60%] max-md:top-[65%]"}`}>
          <Image
            src={event.illustration1}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className={`h-auto w-[10vw] animate-updown pointer-events-none max-md:w-[32vw] absolute ${event.digonalImages ? "right-[-20%] max-md:right-[-25%]" : "left-[-20%] max-md:left-[-25%]"} ${event.digonalImages ? "top-[-20%] max-md:top-[-8%]" : "top-[-20%] max-md:top-[-15%]"}`}>
          <Image
            src={event.illustration2}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative w-full max-md:w-[80vw] flex flex-col items-center justify-center max-md:mt-4 ">
        <Copy>
        <h3 className="text-[2.2vw] font-medium font-notoserif tracking-wide max-md:text-[8vw]">{event.title}</h3>
        </Copy>
         
        <p className="text-[1.3vw] fadeup font-medium font-notoserif-italic pt-8 tracking-tight w-[90%] max-md:w-full leading-[1.4] text-center max-md:text-[4.5vw] max-md:pt-5 italic ">{event.text}</p>
       
        <div className={`space-y-[.5vw] mt-[1vw] max-md:mt-4  max-md:w-full ${bride ?" w-[70%]" :"w-[90%]"}`}>
          {/* <CopyLines> */}
          <p className="text-[1.3vw] font-medium font-notoserif-italic leading-[1.2] max-md:leading-[1.4] max-md:text-[4vw] italic">{event.date} {event.time} {event.venue} </p>
          {/* </CopyLines> */}
        </div>
      </div>
    </div>
  );
}