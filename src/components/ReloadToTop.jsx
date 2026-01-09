"use client";

import React, { useEffect } from "react";
import { useLenis } from "lenis/react";

// Custom hook for scroll to top on reload
function UseScrollToTopOnReload() {

  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    // Scroll to top on page load/reload
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }
  }, [lenis]);
}

export { UseScrollToTopOnReload };