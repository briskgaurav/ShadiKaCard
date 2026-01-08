"use client"
import React from "react";
import useTablet from "./IsTablet";
import DecorativeSectionMobile from "./DecorativeSectionMobile";
import DecorativeSectionDesktop from "./DecorativeSectionDesktop";

export default function DecorativeSection() {
  const isTablet = useTablet();

  return isTablet ? <DecorativeSectionMobile /> : <DecorativeSectionDesktop />;
}
