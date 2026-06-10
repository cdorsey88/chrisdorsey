import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, FileText } from "lucide-react";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/app/lib/site-config";
import Infographic from "./Infographic";

const serif = { fontFamily: "var(--font-fraunces)" };

export const metadata: Metadata = {
  title: "Track Record — Christopher Dorsey",
  description:
    "The career scoreboard: 15 years taking new AI and enterprise technology to market, from first sales hire to Fortune 500 accounts. The numbers, in one screen.",
  alternates: {
    canonical: "https://chrisdorsey.co/track-record",
  },
};

export default function TrackRecord() {
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

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block text-xs uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4 font-bold">
            Track record
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4" style={serif}>
            Fifteen years, one screen.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-2">
            Senior enterprise sales leader who takes new AI products to market. First sales hire,
            category creator, Fortune 500 closer. The details live in the resume; the shape of it lives here.
          </p>
          <p className="text-sm text-slate-500 mb-6">Denver, CO · Open to remote</p>
          <a
            href="[FILL: link to PDF resume]"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
          >
            <FileText className="w-4 h-4" /> Download resume (PDF)
          </a>
        </div>

        <Infographic />

        {/* Deal stories cross-link */}
        <div className="mb-16">
          <Link
            href="/deal-stories"
            className="group flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
          >
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-blue-600 transition" style={serif}>
                Three deals, start to finish.
              </h3>
              <p className="text-slate-600 text-sm">How the hard ones actually got closed. Situation, obstacle, what I did, result.</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition shrink-0" />
          </Link>
        </div>

        {/* What I'm looking for */}
        <div className="mb-16 bg-gradient-to-br from-sky-50 to-emerald-50 border-l-4 border-blue-500 rounded-r-2xl p-7">
          <h2 className="text-xl font-bold tracking-tight mb-3" style={serif}>
            What I&apos;m looking for
          </h2>
          <p className="text-slate-700 leading-relaxed">
            [FILL: target role types, e.g., Director/VP, Strategic AE; fully remote; AI-native companies — 2–3 sentences]
          </p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
        </div>
      </main>
    </div>
  );
}
