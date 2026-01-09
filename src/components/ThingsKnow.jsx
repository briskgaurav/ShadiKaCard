import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function ThingsKnow() {
  return (
    <div className="min-h-[200vh]  w-full h-fit max-md:h-[650vw]  relative">
      <div className="h-full  w-full absolute inset-0">
        <Image
          src="/img/webp/purpleBg.webp"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-full w-full gap-[2vw] overflow-x-hidden max-md:pt-[80vw]  max-md:gap-[10vw] py-[10vw] max-md:absolute max-md:top-[-4%] left-0 flex items-center justify-center flex-col relative ">
        <RotationComponent
          wheelImage="/img/webp/wheel2/redwheel-2.png"
          centerImage="/img/webp/wheel2/yellow-cover.png"
          iconImage="/img/webp/wheel2/red-design.png"
          textColor="text-[#a20601]"
          title="Things to"
          titleLine2="know"
          subtitle="Click to open the map"
        />

        <div className="h-auto fadeup w-[7vw] max-md:w-[20vw] rounded-full aspect-square relative">
          <img
            src="/img/webp/wheel3/yellow-design.png"
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
          <p className="text-primary text-center text60  leading-[1.2]">
            Things to <br /> know
          </p>
        </Copy>
        <CopyLines>
          <p className="text-primary w-[60%] max-md:w-[90%] leading-[1.2] text-center text30">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </p>
        </CopyLines>

        <div className="w-[80%] flex items-center gap-[4vw] max-md:gap-[15vw] max-md:flex-col justify-center mt-[5vw]">
          {[
            {
              icon: "/img/webp/hastag-2.png",
              title: "Hashtag",
              description:
                "Use #thebestmarathon to share your journey runners.",
            },
            {
              icon: "/img/webp/sun-2.png",
              title: "Weather",
              description:
                "It will be mostly cloudy with temperature reaching up to 22 degrees at the venue",
            },
            {
              icon: "/img/webp/card-2.png",
              title: "Staff",
              description:
                "We recommend the nearby lodge called Amba Valley near the venue for the staff members",
            },
            {
              icon: "/img/webp/parking-2.png",
              title: "Parking",
              description:
                "Valet parking for all our guests will be available at the venue",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full !text-primary fadeup text-center flex flex-col items-center justify-center"
            >
              <div className="w-[5vw] max-md:w-[25vw] h-auto ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="!text-primary text30 mt-[.6vw]">{item.title}</p>
              <p className="!text-primary max-md:w-[60%] text18 leading-[.9] mt-[.5vw] w-[80%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
