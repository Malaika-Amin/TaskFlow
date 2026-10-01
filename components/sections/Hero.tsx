import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-6">
      <div className="relative min-h-[520px] overflow-hidden rounded-3xl">
        <Image
          src="/Hero.jpg"
          alt="A team working together"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-brand-bg/40" />

        <div className="relative z-10 flex min-h-[520px] max-w-xl flex-col justify-center gap-6 p-8 md:p-14">
          <Reveal>
            <h1 className="font-heading text-4xl leading-tight md:text-6xl">
              A simpler way to manage team work
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-brand-cream/100">
              TaskFlow helps small teams plan tasks, track progress, and finish
              projects together.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand-cream px-6 py-3 text-sm font-medium text-brand-bg"
              >
                Request a Demo
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/30 px-6 py-3 text-sm"
              >
                See how it works
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}