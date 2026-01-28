

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
  title: "Garima Weds Bhaskar",
  description: "Garima Weds Bhaskar",
  openGraph: {
    images: '/og-image.jpeg',
  },
  icons: {
    icon: "/3.ico",
  },
};

export default function page() {
  return (
    <>
      <Loader />
      <UseScrollToTopOnReload />
      <Sound src={"/sound/garima-audio.mp3"}/>
      <Herov2 name1={"Garima"} name2={"Bhaskar"} />
      <Scene />
      <EventsInfo eventsInfo={eventsInfo}/>
      <BrideGroom bride={true}/>
      <ThingsKnow/>
      <CountDown bride={true}/>
    </>
  );
}

const eventsInfo={
  name1:"Garima",
  daughterOf:" Mrs. Rashmi Rastogi & Lt. Shri Anil Rastogi",
  bride:true,
  name2:"Bhaskar",
  sonOf:" Mrs. Vimlesh Varshney & Mr. Mahendra Pal Varshney",
  grandSonOf:" Lt. Smt. Jaidevi & Lt. Shri Madan Lal Gupta",
  grandDaughterOf:" Lt. Smt. Premlata Rastogi &  Shri Vinay Kumar Rastogi",
  eventsData: [
  // {
  //   id: 1,
  //   title: "Chadath",
  //   date: "Tuesday, 17th February 2026",
  //   venue: "Ganganagar, Meerut",
  //   time: "5 pm Onwards",
  //   image: "/img/illustrations/chadath.webp",
  //   illustration1: "/img/illustrations/turban.webp",
  //   illustration2: "/img/illustrations/shehnai.webp",
  //   digonalImages: false,
  // },
  // {
  //   id: 2,
  //   title: "Mehendi",
  //   date: "Wednesday, 18th February 2026",
  //   venue: "Hotel Bravura gold Resort, Meerut",
  //   time: "12 pm Onwards",
  //   image: "/img/illustrations/mehndi.webp",
  //   illustration1: "/img/illustrations/diya.webp",
  //   illustration2: "/img/illustrations/kalash.webp",
  //   digonalImages: true,
  // },
  {
    id: 3,
    title: "Engagement",
    date: "Wednesday, 18th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "7 pm Onwards",
    image: "/img/illustrations/Engagment.webp",
    illustration1: "/img/illustrations/ring.webp",
    illustration2: "/img/illustrations/lotus.webp",
    digonalImages: false,
  },
  {
    id: 4,
    title: "Haldi/Bhaat",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "9 am Onwards",
    image: "/img/illustrations/Haldi.webp",
    illustration1: "/img/illustrations/haldi-bride.webp",
    illustration2: "/img/illustrations/haldi-groom.webp",
    digonalImages: false,
  },
  {
    id: 5,
    title: "Wedding",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "4 pm Onwards",
    image: "/img/illustrations/shaadi.webp",
    mirror: true,
    illustration1: "/img/illustrations/diya.webp",
    illustration2: "/img/illustrations/kalash.webp",
    digonalImages: true,
  },
  {
    id: 6,
    title: "Reception",
    date: "Thursday, 19th February 2026",
    venue: "Hotel Bravura gold Resort, Meerut",
    time: "8 pm Onwards",
    image: "/img/illustrations/reception.webp",
    mirror: true,
    illustration1: "/img/illustrations/reception-heart.webp",
    illustration2: "/img/illustrations/reception-bg.webp",
    digonalImages: false,
  },
]

}

