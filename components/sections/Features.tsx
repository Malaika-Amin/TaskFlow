"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const features = [
  {
    title: "Simple task lists",
    text: "Write down what needs doing and tick it off when it's done.",
  },
  {
    title: "Team sharing",
    text: "Give tasks to teammates so everyone knows who does what.",
  },
  {
    title: "Due dates",
    text: "Set a deadline on every task so nothing is forgotten.",
  },
  {
    title: "Progress view",
    text: "See at a glance how much of the project is finished.",
  },
  {
    title: "Reminders",
    text: "Get a gentle nudge before a task is due.",
  },
  {
    title: "Comments",
    text: "Talk about a task right where the work happens.",
  },
];

export default function Features() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  function slide(direction: number) {
    sliderRef.current?.scrollBy({ left: direction * 312, behavior: "smooth" });
  }

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const atEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      if (atEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 312, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="font-heading text-3xl md:text-4xl">
        Everything your team needs
      </h2>
      <p className="mt-3 max-w-xl text-brand-muted">
        Simple tools that help small teams stay organized, without the
        complicated setup.
      </p>

      <div
        className="relative mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={() => slide(-1)}
          aria-label="Previous cards"
          className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-cream text-brand-bg shadow-lg transition hover:bg-brand-accent"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Sliding row */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-72 shrink-0 snap-start rounded-2xl bg-brand-card p-6"
            >
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => slide(1)}
          aria-label="Next cards"
          className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-brand-cream text-brand-bg shadow-lg transition hover:bg-brand-accent"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}