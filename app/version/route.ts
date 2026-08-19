// /version — which commit is live right now?
// Baked at build time on Vercel, so publish.sh can poll it after a push and
// know definitively when the new deploy is serving (or that it never arrived).
export const dynamic = "force-static";

const sha = process.env.VERCEL_GIT_COMMIT_SHA ?? "dev";

export function GET() {
  return Response.json({ sha });
}
