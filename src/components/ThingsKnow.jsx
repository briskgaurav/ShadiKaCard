import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function ThingsKnow() {
  return (
    <div className="min-h-[200vh]  w-full h-fit max-md:h-[550vw] relative">
      <div className="h-full  w-full absolute inset-0">
        <Image
          src="/img/final/bg-star.png"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-full w-full gap-[2vw]  max-md:h-[590vw]  max-md:gap-[10vw] py-[10vw] max-md:absolute max-md:top-[-5%] left-0 flex items-center justify-center flex-col relative ">
        <RotationComponent
          wheelImage="/img/final/wheel2/redwheel-2.png"
          centerImage="/img/final/wheel2/yellow-cover.png"
          iconImage="/img/final/wheel2/red-design.png"
          textColor="text-[#a20601]"
          title="Things to"
          titleLine2="know"
          subtitle="Click to open the map"
        />

        <div className="h-auto fadeup w-[7vw] max-md:w-[20vw] rounded-full aspect-square relative">
          <img
            src="/img/final/wheel3/yellow-design.png"
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        {/* <p className="text-[#f6e1ba] text-[3vw] font-normal font-serif">
          MEET THE
        </p> */}
        <Copy>
          <p className="text-primary text-center text50  font-bizantheum leading-[1.2] max-md:w-[80%]">
            Things To Know
          </p>
        </Copy>
        <CopyLines>
          <p className="text-primary w-[50%] font-semibold max-md:w-[90%] text-center text-[1.2vw] max-md:text-[4.5vw] tracking-wider leading-normal max-md:font-medium">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </p>
        </CopyLines>

        <div className="w-[90%] flex items-center gap-[4vw] max-md:gap-[30vw] max-md:flex-col justify-center mt-[5vw] max-md:w-full">
          {[
            {
              icon: "/img/final/hastag.png",
              title: "Hashtag",
              description:
                "Use #BhaskarKiGarima to share your journey runners.",
            },
            {
              icon: "/img/final/sun.png",
              title: "Weather",
              description: "Expect pleasant weather with sunny skies and mild, comfortable conditions throughout the day."
            },
            {
              icon: "/img/final/card.png",
              title: "Staff",
              description:
                "Feel free to reach out to our event staff for any assistance during the events.",
            },
            {
              icon: "/img/final/parking.png",
              title: "Parking",
              description:
                "Valet parking for all our guests will be available at the venue.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-1/4 text-primary! fadeup text-center flex flex-col items-center justify-center max-md:w-full "
            >
              <div className="w-[6vw] h-[8vw] max-md:w-[20vw] max-md:h-[20vw] ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-[1vw] flex items-center justify-start flex-col">
              <p className="text-primary! font-semibold text30 mt-[.6vw]">{item.title}</p>
              <p className="text-primary! max-md:w-[60%] h-15 text18 leading-normal mt-[.5vw] font-semibold max-md:font-medium">
                {item.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
