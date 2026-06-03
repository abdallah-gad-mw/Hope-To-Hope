import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Angels Care Uganda" },
      {
        name: "description",
        content: "Read the Terms of Service guidelines of Angels Care Uganda.",
      },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
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
          <div className="h-12 w-12 rounded-full bg-[#1cbee7]/5 border border-[#1cbee7]/15 flex items-center justify-center text-[#1cbee7] mb-4">
            <FileText className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl text-ink font-black tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-2">
            Angels Care Uganda
          </p>
          <div className="w-16 h-1 bg-[#1cbee7] mt-4 rounded-full" />
        </header>

        {/* Content body */}
        <div className="prose prose-slate text-sm sm:text-base text-slate-700 leading-relaxed space-y-6 md:space-y-8 font-normal">
          <p>
            Welcome to Angels Care Uganda. By navigating our platform, subscribing to our hope
            family newsletters, or forwarding programmatic inquiries, you explicitly align with our
            non-profit mission conditions.
          </p>
          <p>
            All submitted financial inputs are processed cleanly with zero commercial transaction
            processing deductions through registered Canadian entities.
          </p>
          <p>
            Content shared within our Hope Stories taxonomy is strictly intended for humanitarian
            awareness and must not be repurposed without official verification.
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
