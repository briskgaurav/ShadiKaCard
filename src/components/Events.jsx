import Image from "next/image";
import Link from "next/link";
import React from "react";

const eventsData = [
  {
    id: 1,
    title: "Mehendi",
    date: "Friday, 13th March 2026",
    venue: "The Savay, Maussorie",
    time: "6pm Onwards",
    image: "/img/mehndi.png",
  },
  {
    id: 2,
    title: "Haldi",
    date: "Saturday, 14th March 2026",
    venue: "The Savay, Maussorie",
    time: "10am Onwards",
    image: "/img/haldi.png",
  },
  {
    id: 3,
    title: "Cocktail",
    date: "Saturday, 14th March 2026",
    venue: "The Savay, Maussorie",
    time: "7pm Onwards",
    image: "/img/cocktail.png",
  },
  {
    id: 4,
    title: "Pre-Wedding",
    date: "Saturday, 14th March 2026",
    venue: "The Savay, Maussorie",
    time: "9pm Onwards",
    image: "/img/ring.png",
  },
  {
    id: 5,
    title: "Shadi",
    date: "Sunday, 15th March 2026",
    venue: "The Savay, Maussorie",
    time: "11am Onwards",
    image: "/img/shadi.png",
  },
  {
    id: 6,
    title: "Reception",
    date: "Sunday, 15th March 2026",
    venue: "The Savay, Maussorie",
    time: "7pm Onwards",
    image: "/img/reception.png",
  },
];

export default function Events() {
  return (
    <div className="min-h-[100vh]  max-md:pt-[15vh] max-md:mt-[-1vh] h-fit w-full pb-[30vh] max-md:pb-[15vh] overflow-x-hidden overflow-hidden py-[4vw] max-md:py-[8vw] relative">
      <div className="h-full w-full absolute inset-0">
        <img
          src="https://framerusercontent.com/images/SPr0bvMk9Lu3lQOpXzLoknBPaJo.png?width=1596&height=4794"
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
      <div className="h-[57vh] max-md:h-[50vh] w-[22vw] max-md:w-[70vw] p-[1vw] max-md:p-[3vw] relative flex items-center justify-center rounded-full border-5 max-md:border-4 border-primary">
        <div className="size-full rounded-full overflow-hidden">
          <img
            src={event.image}
            alt="event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-auto w-[15vw] max-md:w-[45vw] absolute right-[-32%] max-md:right-[-30%] top-[33%] max-md:top-[25%]">
          <Image
            src={"/img/moon.png"}
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-auto w-[15vw] max-md:w-[40vw] absolute left-[-10%] max-md:left-[-5%] top-[-10%] max-md:top-[-8%]">
          <Image
            src={"/img/shoe_Balloon_2.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-auto w-[15vw] max-md:w-[40vw] -rotate-15 max-md:-rotate-8 absolute left-[-25%] max-md:left-[-25%] top-[58%] max-md:top-[55%]">
          <Image
            src={"/img/cloud_House.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative">
        <p className="text40 font-semibold tracking-tight">{event.title}</p>
        <p className="text12 font-semibold leading-[1.1]">
          {event.date}
        </p>
        <p className="text12 font-semibold leading-[1.1]">
          {event.venue}
        </p>
        <p className="text12 font-semibold leading-[1.1]">{event.time}</p>
        <Link className="underline text12 font-bold " href="#">
          See the route
        </Link>
      </div>
    </div>
  );
}
