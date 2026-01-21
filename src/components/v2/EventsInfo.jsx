import Image from "next/image";
import React from "react";
import CopyLines from "../CopyLines";

export default function EventsInfo() {
  return (
    <>
      <div className="h-fit w-full py-[5vw] max-md:px-[10vw] relative max-sm:py-[15vw]">
        <div className="absolute inset-0">
          <Image
            src="/v2/bgplain.png"
            alt="events"
            fill
            className="object-cover"
          />
        </div>

        <div className="h-full w-full  text-primary font-georgia flex items-center gap-[1vw] max-md:gap-[5vw] flex-col relative z-10">
          <p className="text-[1.2vw] max-md:text-[5vw] ">
            || ॐ श्री गणेशाय नमः ||
          </p>
          <div className="h-auto w-[14vw] aspect-square relative max-sm:w-[25vw]">
            <img
              src="/v2/ganeshstrokes.png"
              alt="events"
              className="object-contain"
            />
          </div>
          <div className="text-center space-y-[1vw] max-md:space-y-[5vw]">
            <CopyLines>
              <p className="text-[1.8vw] max-md:text-[5vw]">
                with the heavenly blessings of almighty
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
              <p className="text-[8vw] max-md:text-[15vw] font-bizantheum ">Garima</p>
            </CopyLines>
            <div className="text-center space-y-[1vw]">
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">Daughter of</p>
              </CopyLines>
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">
                   Mrs. Rashmi Rastogi & Lt. Shri Anil Rastogi
                 
                </p>
              </CopyLines>
            </div>
          </div>
          <CopyLines>
            <p className="text-[9vw] max-md:text-[15vw] font-inria ">&</p>
          </CopyLines>
          <div className="-mt-5 text-center ">
            <CopyLines>
              <p className="text-[8vw] max-md:text-[15vw] font-bizantheum ">Bhaskar</p>
            </CopyLines>
            <div className="text-center space-y-[1vw]">
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">Son of</p>
              </CopyLines>
              <CopyLines>
                <p className="text-[1.8vw] max-md:text-[5vw] ">
                  Mrs. Vimlesh Varshney & Mr. Mahendra Pal Varshney
                </p>
              </CopyLines>
            </div>
          </div>
          <div
          className={`h-auto w-[25vw] animate-updown pointer-events-none  absolute top-[10%] max-md:top-[5%] right-[3%] max-md:hidden`}
        >
          <Image
            src={"/img/illustrations/bouquet.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className={`h-auto w-[30vw] animate-updown pointer-events-none max-md:hidden absolute top-[70%] left-[3%]`}
        >
          <Image
            src={"/v2/BG.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className={`h-auto w-[20vw] animate-updown pointer-events-none  absolute top-[70%] right-[3%] max-md:hidden`}
        >
          <Image
            src={"/img/illustrations/moon.png"}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        </div>
      </div>
      <div className="h-fit w-full py-[5vw] relative pb-[10vw] ">
        <div className="absolute h-full w-full max-sm:h-auto  inset-0 max-md:hidden">
          <Image
            src="/v2/bgplain.png"
            alt="events"
            height={1000}
            width={1000}
            className="bg-repeat-y h-full w-full object-cover max-md:object-contain"
          />
        </div>
        <div className="absolute h-full w-full max-sm:h-full max-md:block  inset-0 hidden">
          <Image
            src="/v2/redbg-mobile.png"
            alt="events"
            height={1000}
            width={1000}
            className="bg-repeat-y h-full w-full object-cover max-md:object-cover"
          />
        </div>

        <div className="h-full w-full max-md:overflow-hidden relative gap-x-[10vw] max-md:gap-x-[5vw] gap-y-[8vw] max-md:gap-y-[10vw] text-primary text-center flex flex-wrap items-center justify-center max-md:px-[5vw]">
          <CopyLines>
            <p className="text-[6.5vw] max-md:text-[10vw] max-md:leading-[1.2] max-md:mt-[10vw] max-md:w-[90%] font-bizantheum">
              On the following auspicious day
            </p>
          </CopyLines>
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export function EventCard({ event }) {
  return (
    <div className="flex flex-col items-center  justify-center gap-y-[2vw] max-md:gap-y-[4vw] max-md:mb-[7vw]">
      <div className="h-[57vh] max-md:h-[90vw] w-[22vw] max-md:w-[60vw] p-[1vw] max-md:p-[3vw] relative flex items-center justify-center rounded-full border-5 fadeup max-md:border-4 border-primary">
        <div
          className={`size-full rounded-full ${
            event.mirror ? "scale-x-[-1] group-hover:scale-x-[-1.1]" : ""
          } overflow-hidden group`}
        >
          <Image
            src={event.image}
            alt="event"
            height={500}
            width={500}
            className={`object-cover  h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 `}
          />
        </div>
        <div
          className={`h-auto animate-wiggle pointer-events-none w-[12vw] max-md:w-[35vw] absolute ${
            event.digonalImages
              ? "left-[-25%] max-md:left-[-25%]"
              : "right-[-25%] max-md:right-[-25%]"
          } ${
            event.digonalImages
              ? "bottom-[10%] max-md:bottom-[15%]"
              : "top-[60%] max-md:top-[65%]"
          }`}
        >
          <Image
            src={event.illustration1}
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className={`h-auto w-[12vw] animate-updown pointer-events-none max-md:w-[35vw] absolute ${
            event.digonalImages
              ? "right-[-20%] max-md:right-[-25%]"
              : "left-[-20%] max-md:left-[-35%]"
          } ${
            event.digonalImages
              ? "top-[-20%] max-md:top-[-8%]"
              : "top-[-20%] max-md:top-[-1%]"
          }`}
        >
          <Image
            src={event.illustration2}
            alt="moon"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative fadeup">
        <p className="text-[2.5vw] font-medium font-georgia tracking-tight max-md:text-[9vw]">{event.title}</p>
        <div className="space-y-[.5vw] mt-[2vw]">
          <p className="text18 font-medium font-georgia leading-[1.1]">{event.date}</p>
          <p className="text18 font-medium font-georgia leading-[1.1]">{event.venue}</p>
          <p className="text18 font-medium font-georgia leading-[1.1]">{event.time}</p>
        </div>
      </div>
    </div>
  );
}

const eventsData = [
  {
    id: 1,
    title: "Chadath",
    date: "Tuesday, 17th February 2026",
    venue: "Ganganagar, Meerut",
    time: "5 pm Onwards",
    image: "/img/illustrations/chadath.png",
    illustration1: "/img/illustrations/turban.png",
    illustration2: "/img/illustrations/shehnai.png",
    digonalImages: false,
  },
  {
    id: 2,
    title: "Mehendi",
    date: "Wednesday, 18th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "12 pm Onwards",
    image: "/img/illustrations/mehndi.png",
    illustration1: "/img/illustrations/diya.png",
    illustration2: "/img/illustrations/kalash.png",
    digonalImages: true,
  },
  {
    id: 3,
    title: "Engagement",
    date: "Wednesday, 18th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "7 pm Onwards",
    image: "/img/illustrations/Engagment.png",
    illustration1: "/img/illustrations/ring.png",
    illustration2: "/img/illustrations/lotus.png",
    digonalImages: false,
  },
  {
    id: 4,
    title: "Haldi",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "9 am Onwards",
    image: "/img/illustrations/Haldi.png",
    illustration1: "/img/illustrations/haldi-bride.png",
    illustration2: "/img/illustrations/haldi-groom.png",
    digonalImages: false,
  },
  {
    id: 5,
    title: "Wedding",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "4 pm Onwards",
    image: "/img/illustrations/shaadi.png",
    mirror: true,
    illustration1: "/img/illustrations/diya.png",
    illustration2: "/img/illustrations/kalash.png",
    digonalImages: true,
  },
  {
    id: 6,
    title: "Reception",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "8 pm Onwards",
    image: "/img/illustrations/reception.png",
    mirror: true,
    illustration1: "/img/illustrations/reception-heart.png",
    illustration2: "/img/illustrations/reception-bg.png",
    digonalImages: false,
  },
];
