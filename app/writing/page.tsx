import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { posts } from "@/app/lib/posts-data";

const serif = { fontFamily: "var(--font-fraunces)" };

export const metadata: Metadata = {
  title: "Thoughts — Christopher Dorsey",
  description: "Writing on AI, GEO, enterprise sales, and the future of how technology gets bought and sold.",
};

export default function WritingIndex() {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: "linear-gradient(180deg, #F0F7FA 0%, #E8F4F8 100%)",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Nav */}
      <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link href="/" className="font-bold" style={serif}>
            <span className="text-slate-900">Christopher </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Dorsey</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block text-xs uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-4 font-bold">
            Thoughts
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight" style={serif}>
            Notes from the field.
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-xl">
            On AI, GEO, enterprise sales, and the future of how technology gets bought and sold.
          </p>
        </div>

        {/* Posts grid */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block bg-white/70 hover:bg-white border border-sky-100 hover:border-blue-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap text-white px-3 py-1 rounded-full bg-gradient-to-r ${post.color}`}
                    >
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" /> {post.readTime} read
                    </span>
                  </div>
                  <h2
                    className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-blue-600 transition leading-tight mb-2"
                    style={serif}
                  >
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
