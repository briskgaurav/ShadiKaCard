import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import { UseScrollToTopOnReload } from "@/components/ReloadToTop";
import Sound from "@/components/Sound";
import Herov2 from "@/components/Herov2";
import Scene from "@/components/Scene";
import React from "react";

const EventsInfo = dynamic(() => import("@/components/EventsInfo"));
const BrideGroom = dynamic(() => import("@/components/Bride&Groom"));
const ThingsKnow = dynamic(() => import("@/components/ThingsKnow"));
const CountDown = dynamic(() => import("@/components/CountDown"));

export const metadata = {
  title: "Bhaskar Weds Garima",
  description: "Bhaskar Weds Garima",
  icons: {
    icon: "/3.ico",
  },
};

export default function page() {
  return (
    <>
      <Loader />
      <UseScrollToTopOnReload />
      <Sound src={"/sound/bhaskar-audio.mp3"}/>
      <Herov2 name1={"Bhaskar"} name2={"Garima"} />
      <Scene />
      <EventsInfo eventsInfo={eventsInfo}/>
      <BrideGroom bride={false}/>
      <ThingsKnow/>
      <CountDown bride={false}/>
    </>
  );
}
const eventsInfo={
  name1:"Garima",
  daughterOf:" Mrs. Rashmi Rastogi & Lt. Shri Anil Rastogi",
  bride:false,
  name2:"Bhaskar",
  sonOf:" Mrs. Vimlesh Varshney & Mr. Mahendra Pal Varshney"
}
