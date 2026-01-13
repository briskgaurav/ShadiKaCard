import BrideGroom from "@/components/v2/Bride&Groom";
import EventsInfo from "@/components/v2/EventsInfo";
import Herov2 from "@/components/v2/Herov2";
import Scene from "@/components/v2/Scene";
import React from "react";

export default function page() {
  return (
    <>
      <Herov2 />
      <Scene />
      {/* <EventsInfo /> */}
      <BrideGroom />
    </>
  );
}
