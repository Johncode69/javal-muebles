"use client";

import { useRef, useState, MouseEvent } from "react";

interface DraggableCarouselProps {
  children: React.ReactNode;
}

export function DraggableCarousel({ children }: DraggableCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`w-full overflow-x-auto hide-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
    >
      {/* We use pointer-events-none when dragging so clicks on child links don't trigger */}
      <div className={isDragging ? "pointer-events-none" : ""}>
        {children}
      </div>
    </div>
  );
}
