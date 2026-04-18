"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 900;

export function useLowPowerMode() {
  const [lowPowerMode, setLowPowerMode] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkMode = () => {
      const reducedMotion = reducedMotionMedia.matches;
      const smallViewport = media.matches;
      const weakCpu = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const weakMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;

      setLowPowerMode(Boolean(reducedMotion || smallViewport || weakCpu || weakMemory));
    };

    checkMode();
    media.addEventListener("change", checkMode);
    reducedMotionMedia.addEventListener("change", checkMode);

    return () => {
      media.removeEventListener("change", checkMode);
      reducedMotionMedia.removeEventListener("change", checkMode);
    };
  }, []);

  return lowPowerMode;
}
