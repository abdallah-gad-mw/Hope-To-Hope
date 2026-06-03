import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Angels Care Uganda" },
      {
        name: "description",
        content: "Read the Privacy Policy guidelines of Angels Care Uganda.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="bg-soft min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-border p-8 md:p-12 shadow-soft reveal">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-coral transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header decoration */}
        <header className="mb-10">
          <div className="h-12 w-12 rounded-full bg-coral/5 border border-coral/15 flex items-center justify-center text-coral mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl text-ink font-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-2">
            Angels Care Uganda
          </p>
          <div className="w-16 h-1 bg-coral mt-4 rounded-full" />
        </header>

        {/* Content body */}
        <div className="prose prose-slate text-sm sm:text-base text-slate-700 leading-relaxed space-y-6 md:space-y-8 font-normal">
          <p>
            Your privacy is paramount to us. Angels Care Uganda operates in absolute conjunction
            with global fundraising compliance parameters.
          </p>
          <p>
            We do not store, distribute, trade, or share any personal identity criteria or contact
            emails collected through our monthly newsletters and subscription boxes.
          </p>
          <p>
            Donation tracking records are managed independently by secured non-profit clearing
            systems (DonorBox / KTMS) ensuring extreme end-to-end payment protection protocols.
          </p>
        </div>

        {/* Date updated */}
        <footer className="mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground">
          Last updated: June 3, 2026
        </footer>
      </div>
    </div>
  );
}
