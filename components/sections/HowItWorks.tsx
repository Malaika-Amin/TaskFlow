const steps = [
  {
    number: "1",
    title: "Create a project",
    text: "Start a new project and give it a name in a few seconds.",
  },
  {
    number: "2",
    title: "Add your tasks",
    text: "List what needs to be done and assign each task to a teammate.",
  },
  {
    number: "3",
    title: "Track progress",
    text: "Watch tasks move to done and see how close you are to the finish.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
    >
      <h2 className="font-heading text-3xl md:text-4xl">How it works</h2>
      <p className="mt-3 max-w-xl text-brand-muted">
        Get started in three simple steps.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="rounded-2xl bg-brand-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent font-medium text-brand-bg">
              {step.number}
            </div>
            <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm text-brand-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}