import Link from "next/link";
import { FiHeart, FiTarget, FiUsers } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About | TaskFlow",
  description: "Learn who we are and why we built TaskFlow.",
};

const stats = [
  { value: "500+", label: "Teams using TaskFlow" },
  { value: "12k", label: "Tasks finished every week" },
  { value: "4.8", label: "Average rating" },
];

const values = [
  {
    icon: FiTarget,
    title: "Keep it simple",
    text: "Every feature must save time. If it adds confusion, we remove it.",
  },
  {
    icon: FiUsers,
    title: "Teams first",
    text: "Good work happens together, so sharing is built into everything.",
  },
  {
    icon: FiHeart,
    title: "Built with care",
    text: "We listen to our users and improve TaskFlow every single week.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        text="We help small teams stay organized without the complicated setup."
      />

      {/* Our story */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl">Our story</h2>
            <p className="mt-4 text-brand-muted">
              TaskFlow started when a small team was tired of messy chats and
              lost notes. We wanted one calm place where everyone can see what
              needs doing.
            </p>
            <p className="mt-4 text-brand-muted">
              Today, hundreds of teams use TaskFlow to plan their work, share
              tasks, and finish on time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-brand-card p-6">
                <p className="font-heading text-3xl text-brand-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-brand-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="font-heading text-3xl">What we believe</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-2xl bg-brand-card p-6">
                <Icon size={28} className="text-brand-accent" />
                <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl bg-brand-card p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl">Want to see TaskFlow?</h2>
          <p className="mx-auto mt-3 max-w-md text-brand-muted">
            Ask for a free demo and we will show you around.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-brand-cream px-6 py-3 text-sm font-medium text-brand-bg"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}