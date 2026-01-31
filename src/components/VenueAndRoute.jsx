import React from "react";
import Image from "next/image";
import RotationComponent from "./RotationComponent";
import CopyLines from "./CopyLines";


export default function VenueAndRoute() {
    return (
        <div data-dark-nav className="h-fit w-full py-[5vw] max-md:pt-[10vw] text-[#A20601] relative max-md:pb-[30vw] ">
            <div className="absolute inset-0">
                <Image
                    src="/img/final/webp/yellowbg.webp"
                    alt="background"
                    fill
                    loading="lazy"
                    className="object-cover"
                />
            </div>
            <div className="text-center">
                <CopyLines>
                    <h2 className="text-[6.5vw] max-md:text-[10vw] max-md:leading-[1.2] max-md:mt-[10vw] max-md:w-[90%] font-bizantheum">
                        The Venue & Route
                    </h2>
                </CopyLines>
            </div>
            <div className="h-full w-full font-georgia flex items-center gap-[1vw] max-md:gap-[2vw] flex-col relative z-10">
                <div className="h-full w-full max-md:py-[10vw] relative flex items-center justify-center">
                    <RotationComponent textColor="text-primary" />
                </div>

            </div>
            <div className="w-full flex items-center justify-center">
            <CopyLines>
                <p className="text18 font-semibold tracking-wider leading-normal max-md:text-[4.5vw]! w-[55%] max-md:w-[85%] text-center mt-[2vw] max-md:mt-[25vw] ">
                    Click the map, follow the route, and drive straight into our hearts
                </p>
            </CopyLines>
            </div>
        </div>
    );
}
