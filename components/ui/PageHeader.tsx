type PageHeaderProps = {
  title: string;
  text: string;
};

export default function PageHeader({ title, text }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-heading text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-brand-muted">{text}</p>
      </div>
    </section>
  );
}