"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DragCarousel({ children, autoScroll = true, scrollSpeed = 0.5 }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!autoScroll || isDragging || !containerRef.current) return;

    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let animationId;
    let currentScroll = container.scrollLeft;

    const animate = () => {
      currentScroll += scrollSpeed;

      if (currentScroll >= maxScroll) {
        currentScroll = 0;
      }

      container.scrollLeft = currentScroll;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [autoScroll, isDragging, scrollSpeed]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.clientX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - dragStart) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const x = e.clientX - (containerRef.current?.offsetLeft || 0);
      const walk = (x - dragStart) * 1.2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, scrollLeft]);

  return (
    <motion.div
      ref={containerRef}
      className="scrollbar-hide overflow-x-auto scroll-smooth"
      onMouseDown={handleMouseDown}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {children}
    </motion.div>
  );
}
