import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function ThingsKnow() {
  return (
    <div className=" w-full h-full relative py-[8vw] max-md:py-[15vw]">
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

      <div className="h-full w-full gap-[2vw] flex items-center justify-center flex-col relative max-md:gap-[4vw]">

        <div className="h-auto fadeup w-[7vw] max-md:w-[20vw] rounded-full aspect-square relative">
          <Image
            src="/img/final/webp/yellow-design.webp"
            alt="moon"
            loading="lazy"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <Copy>
          <h2 className="text-primary font-[6vw] font-bizantheum! text-center heading1 max-md:text-[11vw]! leading-[1.2] max-md:w-[80%]">
            Guest Essentials
          </h2>
        </Copy>
        <CopyLines>
          <p className="text-primary w-[65%] text-[1.45vw]!  max-md:w-[90%] text-center content2 max-md:text-[2.5vw]! tracking-wider leading-[1.5] max-md:font-medium">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </p>
        </CopyLines>

        <div className="w-[90%] flex items-center gap-[4vw] max-md:gap-[15vw] max-md:flex-col justify-center mt-[4vw] max-md:mt-[4vw] max-md:w-full pb-[8vw]">
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
              <h3 className="text-primary!  content mt-[.6vw]">{item.title}</h3>
              <p className="text-primary! max-md:text-[3vw] max-md:w-[70%] h-15 text-[1.3vw] leading-[1.3] mt-[.5vw]  max-md:font-medium max-md:h-auto">
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
                "Your camera is our second pair of eyes. Capture the candid joy we might miss and tag #BhaskarKiGarima to complete our wedding album.",
            },
            {
              icon: "/img/final/webp/sun.webp",
              title: "Weather",
              description: "Nature has painted a perfect backdrop. Expect bright skies to illuminate your photos and a cool breeze to keep you dancing all night long."
            },
            {
              icon: "/img/final/webp/card.webp",
              title: "Sartorial Guide",
              description:
                "Radiate in the hues of celebration - Emerald, Sapphire, or Marigold. Leave Red for the bride's sacred moment and avoid Black for the rituals.",
            },
            {
              icon: "/img/final/webp/parking.webp",
              title: "Parking ",
              description:
                "Leave your keys and your worries at the door. Valet is available at the venue entrance to whisk your car away instantly.",
            },
          ]
