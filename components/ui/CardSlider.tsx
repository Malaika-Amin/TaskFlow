"use client";

import { useEffect, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

const cards = [
  {
    icon: null,
    title: "Visit us",
    text: "Office 12, Main Bazaar Road, Mardan",
  },
  {
    icon: FiPhone,
    title: "Call us",
    text: "+92 300 1234567",
  },
  {
    icon: FiMail,
    title: "Email us",
    text: "hello@taskflow.example",
  },
  {
    icon: null,
    title: "Working hours",
    text: "Monday to Friday, 9am to 6pm",
  },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % cards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="w-full shrink-0 bg-brand-card p-6"
              >
                {Icon && <Icon size={28} className="text-brand-accent" />}
                <h3 className="mt-3 text-lg font-medium">{card.title}</h3>
                <p className="mt-1 text-sm text-brand-muted">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {cards.map((card, i) => (
          <button
            key={card.title}
            onClick={() => setIndex(i)}
            aria-label={`Show ${card.title}`}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-brand-accent" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}