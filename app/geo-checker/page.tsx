"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search, Loader2, AlertCircle } from "lucide-react";

const serif = { fontFamily: "var(--font-fraunces)" };

type GeoResult = {
  brandName: string;
  domain: string;
  queries: string[];
  simulatedQuery: string;
  simulatedResponse: string;
  mentioned: boolean;
  prominence: "primary" | "secondary" | "brief" | "not mentioned";
  competitors: string[];
  score: number;
  scoreLabel: string;
  analysis: string;
  recommendations: string[];
};

function ScoreMeter({ score, label }: { score: number; label: string }) {
  const color =
    score >= 81 ? { bar: "#059669", bg: "#d1fae5", text: "#065f46" } :
    score >= 61 ? { bar: "#2563eb", bg: "#dbeafe", text: "#1e40af" } :
    score >= 41 ? { bar: "#d97706", bg: "#fef3c7", text: "#92400e" } :
    score >= 21 ? { bar: "#dc2626", bg: "#fee2e2", text: "#991b1b" } :
                  { bar: "#6b7280", bg: "#f3f4f6", text: "#374151" };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Circle */}
      <div
        className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-4"
        style={{ borderColor: color.bar, background: color.bg }}
      >
        <span className="text-3xl font-black" style={{ color: color.bar, fontFamily: "var(--font-fraunces)" }}>
          {score}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: color.text }}>
          / 100
        </span>
      </div>
      <span
        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
        style={{ background: color.bg, color: color.text }}
      >
        {label}
      </span>
    </div>
  );
}

const prominenceLabels: Record<string, { label: string; color: string }> = {
  primary:        { label: "Primary recommendation", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  secondary:      { label: "Mentioned alongside others", color: "text-blue-700 bg-blue-50 border-blue-200" },
  brief:          { label: "Brief mention only", color: "text-amber-700 bg-amber-50 border-amber-200" },
  "not mentioned":{ label: "Not mentioned", color: "text-red-700 bg-red-50 border-red-200" },
};

export default function GeoChecker() {
  const [domain, setDomain] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeoResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);

  async function runCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!domain.trim() || !category.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    setShowResponse(false);

    try {
      const res = await fetch("/api/geo-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domain.trim(), category: category.trim() }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const prominence = result ? prominenceLabels[result.prominence] ?? prominenceLabels["not mentioned"] : null;

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{ background: "linear-gradient(180deg, #F0F7FA 0%, #E8F4F8 100%)", fontFamily: "var(--font-inter)" }}
    >
      {/* Nav */}
      <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition font-medium">
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
        <div className="mb-12 max-w-2xl">
          <div className="inline-block text-xs uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-4 font-bold">
            Free Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5" style={serif}>
            GEO Visibility Checker
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Enter your brand and category. We&apos;ll simulate the buyer queries that are happening in ChatGPT, Claude, and Perplexity right now — and show you exactly how (or whether) you appear.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={runCheck} className="bg-white/80 border border-sky-100 rounded-3xl p-8 md:p-10 mb-8">
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Website domain
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g. hubspot.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white text-sm"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category or use case
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. CRM for mid-market B2B"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white text-sm"
                disabled={loading}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">
              Free · No account needed · Takes ~10 seconds
            </p>
            <button
              type="submit"
              disabled={loading || !domain.trim() || !category.trim()}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Check Visibility
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading state */}
        {loading && (
          <div className="bg-white/60 border border-sky-100 rounded-2xl p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Simulating buyer queries and analyzing visibility...</p>
            <p className="text-slate-400 text-sm mt-1">This is what happens every time a prospect searches your category in an AI tool.</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-800">Something went wrong</p>
              <p className="text-sm text-red-600 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div className="space-y-6">
            {/* Score + prominence */}
            <div className="bg-white/80 border border-sky-100 rounded-3xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <ScoreMeter score={result.score} label={result.scoreLabel} />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2" style={serif}>
                    {result.brandName || result.domain} in &ldquo;{category}&rdquo;
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${prominence?.color}`}>
                      {prominence?.label}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">{result.analysis}</p>
                </div>
              </div>
            </div>

            {/* Queries AI asked */}
            <div className="bg-white/60 border border-sky-100 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Buyer queries AI systems are answering</h3>
              <div className="space-y-3">
                {result.queries.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-black text-slate-300 mt-1 w-4 shrink-0">{i + 1}</span>
                    <p className="text-sm text-slate-600 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            {result.competitors.length > 0 && (
              <div className="bg-white/60 border border-sky-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Brands AI recommends instead {result.mentioned ? "(also appeared)" : ""}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.competitors.map((c) => (
                    <span key={c} className="text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Simulated AI response */}
            <div className="bg-white/60 border border-sky-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Simulated AI response
                </h3>
                <button
                  onClick={() => setShowResponse(!showResponse)}
                  className="text-xs text-blue-600 font-semibold hover:underline"
                >
                  {showResponse ? "Hide" : "Show response"}
                </button>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Query answered: <span className="italic">&ldquo;{result.simulatedQuery}&rdquo;</span>
              </p>
              {showResponse && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {result.simulatedResponse}
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-br from-slate-50 to-sky-50 border border-sky-200 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">What to do about it</h3>
              <div className="space-y-3">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white text-[10px] font-black shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">Want the full picture?</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight" style={serif}>
                  This is a snapshot. A real GEO audit goes deeper.
                </h3>
                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                  I audit how your brand appears across ChatGPT, Claude, and Perplexity for every relevant buyer query — then build a structured plan to fix the gaps before your competitors do.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/work-with-me"
                    className="flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition text-sm"
                  >
                    See how I work <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:ctjdorsey@gmail.com?subject=GEO Audit Inquiry"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition text-sm"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* Run again */}
            <div className="text-center">
              <button
                onClick={() => { setResult(null); setError(null); }}
                className="text-sm text-slate-500 hover:text-blue-600 font-medium transition"
              >
                ← Check another brand
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
