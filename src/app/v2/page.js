import Loader from "@/components/Loader";
import { UseScrollToTopOnReload } from "@/components/ReloadToTop";
import Sound from "@/components/Sound";
import ThingsKnow from "@/components/ThingsKnow";
import BrideGroom from "@/components/v2/Bride&Groom";
import CountDown from "@/components/v2/CountDown";
import EventsInfo from "@/components/v2/EventsInfo";
import Herov2 from "@/components/v2/Herov2";
import Scene from "@/components/v2/Scene";
import React from "react";

export default function page() {
  return (
    <>
      <Loader />
      <UseScrollToTopOnReload />
      <Sound />
      <Herov2 />
      <Scene />
      <EventsInfo />
      <BrideGroom />
      <ThingsKnow/>
      <CountDown />
    </>
  );
}
