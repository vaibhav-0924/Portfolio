"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlayInterval?: number;
}

export function Carousel({ children, autoPlayInterval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);
  const lastTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(100);
  const requestRef = useRef<number>();
  const isHoveredRef = useRef<boolean>(false);
  const isManualPauseRef = useRef<boolean>(false);

  const totalCards = children.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    progressRef.current = 100;
    setProgress(100);
  }, [totalCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    progressRef.current = 100;
    setProgress(100);
  }, [totalCards]);

  const togglePause = () => {
    isManualPauseRef.current = !isManualPauseRef.current;
    setIsPaused(isManualPauseRef.current);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    progressRef.current = 100;
    setProgress(100);
  };

  const updateProgress = useCallback((time: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = time;
    }
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    if (!isHoveredRef.current && !isManualPauseRef.current) {
      // Decrease progress
      const decreaseRate = (100 / autoPlayInterval) * deltaTime;
      progressRef.current -= decreaseRate;

      if (progressRef.current <= 0) {
        nextSlide();
      } else {
        setProgress(progressRef.current);
      }
    }

    requestRef.current = requestAnimationFrame(updateProgress);
  }, [autoPlayInterval, nextSlide]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateProgress]);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => { isHoveredRef.current = true; setIsPaused(true); }}
      onMouseLeave={() => { isHoveredRef.current = false; setIsPaused(isManualPauseRef.current); }}
    >
      {/* Carousel Track */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full shrink-0 px-2 sm:px-4">
            {child}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="mt-6 flex justify-center px-4">
        <div className="flex gap-1.5">
          {Array.from({ length: totalCards }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentIndex === i 
                  ? "w-4 bg-primary" 
                  : "w-1.5 bg-border"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
