import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import { UseScrollToTopOnReload } from "@/components/ReloadToTop";
import Sound from "@/components/Sound";
import Herov2 from "@/components/Herov2";
import Scene from "@/components/Scene";
import React from "react";
import VenueAndRoute from "@/components/VenueAndRoute";
import { RsvpController } from "@/components/RSVPController";
const EventsInfo = dynamic(() => import("@/components/EventsInfo"));
const BrideGroom = dynamic(() => import("@/components/Bride&Groom"));
const ThingsKnow = dynamic(() => import("@/components/ThingsKnow"));
const CountDown = dynamic(() => import("@/components/CountDown"));

export const metadata = {
  title: "Bhaskar Weds Garima | Thursday, 19th February 2026",
  description: "Destination: Bravura Gold Resort, Meerut",
   openGraph: {
    images: '/og-image.jpeg',
  },
  icons: {
    icon: "3.ico",
  },
};

export default function page() {
  return (
    <>
      <Loader />
      <UseScrollToTopOnReload />
      <Sound src={"/sound/bhaskar-audio.mp3"}/>
      <RsvpController  number="9897449928"/>
      <Herov2 name1={"Bhaskar"} name2={"Garima"} />
      <Scene />
      <BrideGroom bride={false}/>
      <EventsInfo eventsInfo={eventsInfo}/>
      <VenueAndRoute bride={false}/>
      <ThingsKnow/>
      <CountDown bride={false}/>
    </>
  );
}
const eventsInfo={
  name1:"Garima",
  daughterOf:" Mrs. Rashmi Rastogi & Late Mr. Anil Rastogi",
  bride:false,
  name2:"Bhaskar",
  sonOf:" Mrs. Vimlesh Varshney & Mr. Mahendra Pal Varshney",
  grandSonOf:" Late Smt. Jaidevi & Late Shri Madan Lal Gupta",
  grandDaughterOf:" Lt. Smt. Premlata Rastogi &  Shri Vinay Kumar Rastogi",
  eventsData: [
  {
    id: 1,
    title: "Ghudchadi",
    text:"Join us as we kickstart the festivities with tradition and pomp.",
    date: "Tuesday, 17th February 2026",
    venue: "at our Residence (Ganga Nagar, Meerut)",
    time: "5:30 PM",
    image: "/img/illustrations/chadath.webp",
    illustration1: "/img/illustrations/turban.webp",
    illustration2: "/img/illustrations/shehnai.webp",
    digonalImages: false,
  },
  {
    id: 2,
    title: "Mehendi",
    text:"An afternoon of vibrant henna, folk tunes, and laughter.",
    date: "Wednesday, 18th February 2026",
    venue: "at Bravura Gold Resort, Meerut",
    time: "1:00 PM Onwards ",
    image: "/img/illustrations/mehndi.webp",
    illustration1: "/img/illustrations/diya.webp",
    illustration2: "/img/illustrations/kalash.webp",
    digonalImages: true,
  },
  {
    id: 3,
    title: "Engagement",
    text:"An evening of rings, rituals, and rejoicing. Followed by Dinner. ",
    date: "Wednesday, 18th February 2026",
    venue: "at Bravura Gold Resort, Meerut",
    time: "6:00 PM Onwards ",
    image: "/img/illustrations/Engagment.webp",
    illustration1: "/img/illustrations/ring.webp",
    illustration2: "/img/illustrations/lotus.webp",
    digonalImages: false,
  },
  {
    id: 4,
    title: "Haldi",
    text:"A splash of turmeric and showers of blessings. ",
    date: "Thursday, 19th February 2026 ",
    venue: "at Bravura Gold Resort, Meerut",
    time: "9:00 AM Onwards ",
    image: "/img/illustrations/Haldi.webp",
    illustration1: "/img/illustrations/haldi-bride.webp",
    illustration2: "/img/illustrations/haldi-groom.webp",
    digonalImages: false,
  },
  {
    id: 5,
    title: "Wedding ",
    text:"Witnessing the sacred fire and the seven vows of eternity. ",
    date: "Thursday, 19th February 2026 ",
    venue: "at Bravura Gold Resort, Meerut",
    time: "4:00 PM Onwards ",
    image: "/img/illustrations/shaadi.webp",
    mirror: true,
    illustration1: "/img/illustrations/diya.webp",
    illustration2: "/img/illustrations/kalash.webp",
    digonalImages: true,
  },
  {
    id: 6,
    title: "Reception",
    text:"Celebrating the newlyweds with elegance and euphoria. ",
    date: "Thursday, 19th February 2026 ",
    venue: "at Bravura Gold Resort, Meerut",
    time: "8:00 PM Onwards ",
    image: "/img/illustrations/reception.webp",
    mirror: true,
    illustration1: "/img/illustrations/reception-heart.webp",
    illustration2: "/img/illustrations/reception-bg.webp",
    digonalImages: false,
  },
]
}