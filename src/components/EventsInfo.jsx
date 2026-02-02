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
          <div className="text-center pt-20 flex flex-col items-center justify-center space-y-[2vw] max-md:space-y-[5vw]">
            <CopyLines>
              <p className="italic max-md:text-[3.5vw] text-[2vw] leading-[1.9]">
                Under the heavenly blessings of our revered grandparents <br/> <span className="font-semibold!"> {eventsInfo.bride ? eventsInfo.grandDaughterOf : eventsInfo.grandSonOf} </span>
              </p>
            </CopyLines>
            <CopyLines>
              <p className="italic text-[2.3vw] max-md:text-[5vw] mt-5 font-bold!">
               Mrs. Vimlesh Varshney & Mr. Mahendra Pal Varshney
              </p>
            </CopyLines>
            
              <p className="italic text-[1.8vw]  leading-[1.5] fadeup w-[70%] max-md:w-[90%] max-md:text-[3vw] text-center">Solicit your gracious presence and blessings as they celebrate the holy union of their beloved son</p>
            
          </div>

          <div className="mt-[5vw] text-center ">
            <Copy>
              <h2 className="text-[8vw] max-md:text-[15vw] font-bizantheum leading-[1.2]">
                {eventsInfo.bride ? eventsInfo.name1 : eventsInfo.name2}
              </h2>
            </Copy>
            
          </div>
          
          <CopyLines>
            <p className="heading1 max-md:text-[15vw] !font-bizantheum  leading-[1.5] my-[-2vw]">with</p>
          </CopyLines>
          
          <div className="-mt-2 text-center ">
            <CopyLines>
              <h2 className="text-[8vw] max-md:text-[15vw] font-bizantheum leading-[1.2]">
                {eventsInfo.bride ? eventsInfo.name2 : eventsInfo.name1} 
              </h2>
            </CopyLines>
            <div className="text-center mt-[-1vw] max-md:mt-[3vw] space-y-2">
              <CopyLines>
                <p className=" text-[1.8vw] italic max-md:text-[3vw] ">
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
        <div className="h-fit w-full py-[5vw] relative pt-[10vw]">
        <div className="h-full w-full px-[5vw] max-md:overflow-hidden relative text-primary text-center">
          <CopyLines>
            <h2 className="text-[6.5vw] max-md:text-[10vw] max-md:leading-[1.2] max-md:mt-[10vw] max-md:w-[90%] font-bizantheum">
              On the following auspicious days
            </h2>
          </CopyLines>
          
          <div className={`grid ${eventsInfo.bride ? 'grid-cols-2' : 'grid-cols-3'} max-md:grid-cols-1 gap-x-[8vw] max-md:gap-x-[5vw] gap-y-[8vw] max-md:gap-y-[10vw] place-items-center mt-[8vw] max-md:mt-[10vw]`}>
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
      <div className="relative w-full max-md:w-[80vw] flex flex-col items-center justify-center">
        <Copy>
        <h3 className="text-[2.2vw] font-medium italic font-notoserif-italic tracking-wide max-md:text-[8vw]">{event.title}</h3>
        </Copy>
         
        <p className="text-[1.3vw] fadeup font-medium font-notoserif-italic pt-8 tracking-tight w-[90%] max-md:w-full leading-[1.4] text-center max-md:text-[5vw] italic">{event.text}</p>
       
        <div className="space-y-[.5vw] mt-[1vw] max-md:mt-[3vw] w-[90%] max-md:w-full">
          <CopyLines>
          <p className="text-[1.3vw] italic font-medium font-notoserif-italic leading-[1.2] max-md:leading-[1.4] max-md:text-[4vw]">{event.date}, {event.time},{event.venue} </p>
          </CopyLines>
        </div>
      </div>
    </div>
  );
}