import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "@/components/ui/PageHeader";
import { posts } from "@/lib/posts";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Blog | TaskFlow",
  description: "Tips and stories about staying organized.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        text="Simple tips to help your team stay organized."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {posts.map((post, index) => (
  <Reveal key={post.slug} delay={index * 0.1} className="h-full">
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl bg-brand-card p-6 transition hover:-translate-y-1"
    >
      <p className="text-xs text-brand-muted">
        {post.date} · {post.readTime}
      </p>
      <h2 className="mt-3 text-lg font-medium">{post.title}</h2>
      <p className="mt-2 flex-1 text-sm text-brand-muted">{post.excerpt}</p>
      <span className="mt-4 flex items-center gap-2 text-sm text-brand-accent">
        Read more
        <FiArrowRight className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  </Reveal>
))}
        </div>
      </section>
    </>
  );
}