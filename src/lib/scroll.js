"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(docHeight > 0 ? scrolled / docHeight : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const prevScroll = useState(0)[0];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();

    const onScroll = () => {
      const now = Date.now();
      const deltaTime = Math.max(now - lastTime, 16);
      const deltaScroll = window.scrollY - lastScrollY;
      const currentVelocity = deltaScroll / deltaTime;

      setVelocity(currentVelocity);
      lastScrollY = window.scrollY;
      lastTime = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prevScroll]);

  return velocity;
}
