"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const eventsData = [
  {
    id: 1,
    title: "Chadath",
    date: "Tuesday, 17th February 2026",
    venue: "Meerut",
    time: "6 pm Onwards",
    image: "/img/illustrations/chadath.png",
  },
  {
    id: 2,
    title: "Mehndi",
    date: "Wednesday, 18th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "12 pm Onwards",
    image: "/img/illustrations/mehndi.png",
  },
  {
    id: 3,
    title: "Engagement",
    date: "Wednesday, 18th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "6 pm Onwards",
    image: "/img/illustrations/Engagment.png",
  },
  {
    id: 4,
    title: "Haldi",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "10 am Onwards",
    image: "/img/illustrations/Haldi.png",
  },
  {
    id: 5,
    title: "Wedding",
     date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "5 pm Onwards",
    image: "/img/illustrations/shaadi.png",
   mirror:true
  },
  {
    id: 6,
    title: "Reception",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "8 pm Onwards",
    image: "/img/illustrations/reception.png",
   mirror:true

  },
];

export default function Events() {
  return (
    <div className="min-h-[100vh]  max-md:pt-[15vh] max-md:mt-[-1vh] h-fit w-full pb-[30vh] max-md:pb-[15vh] overflow-x-hidden overflow-hidden py-[4vw] max-md:py-[8vw] relative">
      <div className="h-full w-full absolute inset-0">
        <Image
          src="/img/webp/bluebg.webp"
          width={1000}
          height={1000}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-full w-full relative gap-x-[10vw] max-md:gap-x-[5vw] gap-y-[5vw] max-md:gap-y-[10vw] text-primary text-center flex flex-wrap items-center justify-center relative max-md:px-[5vw]">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export function EventCard({ event }) {
    
  return (
    <div className="flex flex-col items-center justify-center gap-y-[2vw] max-md:gap-y-[4vw]">
      <div className="h-[57vh] max-md:h-[50vh] w-[22vw] max-md:w-[70vw] p-[1vw] max-md:p-[3vw] relative flex items-center justify-center rounded-full border-5 fadeup max-md:border-4 border-primary">
        <div className={`size-full rounded-full ${event.mirror ? "scale-x-[-1] group-hover:scale-x-[-1.1]":""} overflow-hidden group`}>
          <img
            src={event.image}
            alt="event"
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 `}
          />
        </div>
        <div className="h-auto animate-wiggle pointer-events-none w-[15vw] max-md:w-[45vw] absolute right-[-32%] max-md:right-[-30%] top-[33%] max-md:top-[25%]">
          <Image
            src={"/img/moon.png"}
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-auto w-[15vw] animate-updown pointer-events-none max-md:w-[40vw] absolute left-[-10%] max-md:left-[-5%] top-[-10%] max-md:top-[-8%]">
          <Image
            src={"/img/shoe_Balloon_2.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-auto w-[15vw] animate-wiggle pointer-events-none max-md:w-[40vw] -rotate-15 max-md:-rotate-8 absolute left-[-25%] max-md:left-[-25%] top-[58%] max-md:top-[55%]">
          <Image
            src={"/img/cloud_House.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative fadeup">
        <p className="text40 font-semibold tracking-tight">{event.title}</p>
        <p className="text18 font-semibold leading-[1.1]">
          {event.date}
        </p>
        <p className="text18 font-semibold leading-[1.1]">
          {event.venue}
        </p>
        <p className="text18 font-semibold leading-[1.1]">{event.time}</p>
      
      </div>
    </div>
  );
}
