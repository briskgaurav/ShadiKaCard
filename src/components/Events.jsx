import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Events() {
  return (
    <div className="min-h-[100vh] h-fit w-full  pb-[30vh]  overflow-hidden py-[4vw] relative">
      <div className="h-full w-full absolute inset-0">
        <img
          src="https://framerusercontent.com/images/SPr0bvMk9Lu3lQOpXzLoknBPaJo.png?width=1596&height=4794"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-full w-full relative gap-x-[10vw] gap-y-[5vw]   text-primary text-center flex flex-wrap items-center justify-center relative">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export function EventCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[2vw]">
      <div className="h-[57vh] w-[22vw] p-[1vw] relative flex items-center justify-center rounded-full border-5 border-primary">
        <div className="size-full bg-primary rounded-full"></div>
        <div className="h-auto w-[15vw] absolute right-[-32%] top-[33%] ">
          <Image
            src={"/img/moon.png"}
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-auto w-[15vw] absolute left-[-10%] top-[-10%] ">
          <Image
            src={"/img/shoe_Balloon_2.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-auto w-[15vw] -rotate-15 absolute left-[-25%] top-[58%] ">
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
        <p className="text40 font-semibold tracking-tight">Mehendi</p>
        <p className="text12 font-semibold leading-[1.1]">Friday, 13th March 2026</p>
        <p className="text12 font-semibold leading-[1.1]">The Savay, Maussorie</p>
        <p className="text12 font-semibold leading-[1.1]">6pm Onwards</p>
        <Link className="underline text12 font-bold " href="#">
          See the route
        </Link>
      </div>
    </div>
  );
}
