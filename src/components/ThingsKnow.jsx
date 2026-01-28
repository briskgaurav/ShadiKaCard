import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function ThingsKnow() {
  return (
    <div className="min-h-[200vh]  w-full h-fit max-md:h-[580vw] relative">
      <div className="h-full  w-full absolute inset-0">
        <Image
          src="/img/final/webp/bg-star.webp"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-full w-full gap-[2vw]  max-md:h-[610vw]  max-md:gap-[10vw] py-[10vw] max-md:absolute max-md:top-[-5%] left-0 flex items-center justify-center flex-col relative ">
        <RotationComponent
          wheelImage="/img/final/webp/redwheel-2.webp"
          centerImage="/img/final/webp/yellow-cover.webp"
          iconImage="/img/final/webp/red-design.webp"
          textColor="text-[#a20601]"
          title="Things to"
          titleLine2="know"
          subtitle="Click to open the map"
        />

        <div className="h-auto fadeup w-[7vw] max-md:w-[20vw] rounded-full aspect-square relative">
          <img
            src="/img/final/webp/yellow-design.webp"
            alt="moon"
            loading="lazy"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <Copy>
          <h2 className="text-primary text-center text50 max-md:text-[11vw]! font-bizantheum leading-[1.2] max-md:w-[80%]">
            Things To Know
          </h2>
        </Copy>
        <CopyLines>
          <p className="text-primary w-[50%] font-semibold max-md:w-[90%] text-center text-[1.2vw] max-md:text-[4.5vw] tracking-wider leading-normal max-md:font-medium">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </p>
        </CopyLines>

        <div className="w-[90%] flex items-center gap-[4vw] max-md:gap-[30vw] max-md:flex-col justify-center mt-[5vw] max-md:w-full">
          {data.map((item, index) => (
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
              <h5 className="text-primary! font-semibold text30 mt-[.6vw]">{item.title}</h5>
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

const data = [
            {
              icon: "/img/final/webp/hastag.webp",
              title: "Hashtag",
              description:
                "Use #BhaskarKiGarima to share your journey runners.",
            },
            {
              icon: "/img/final/webp/sun.webp",
              title: "Weather",
              description: "Expect pleasant weather with sunny skies and mild, comfortable conditions throughout the day."
            },
            {
              icon: "/img/final/webp/card.webp",
              title: "Staff",
              description:
                "Feel free to reach out to our event staff for any assistance during the events.",
            },
            {
              icon: "/img/final/webp/parking.webp",
              title: "Parking",
              description:
                "Valet parking for all our guests will be available at the venue.",
            },
          ]
