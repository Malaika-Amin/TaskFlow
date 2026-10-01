import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { posts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return {
    title: post ? `${post.title} | TaskFlow` : "Post not found",
    description: post?.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-cream"
      >
        <FiArrowLeft /> Back to blog
      </Link>

      <p className="mt-8 text-sm text-brand-muted">
        {post.date} · {post.readTime}
      </p>
      <h1 className="mt-3 font-heading text-3xl md:text-5xl">{post.title}</h1>

      <div className="mt-8 space-y-5 text-brand-muted">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}