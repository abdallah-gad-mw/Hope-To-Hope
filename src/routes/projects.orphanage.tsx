import { createFileRoute, Link } from "@/lib/router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Info,
  X,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Baby,
  Home,
  HeartHandshake,
  Users,
  Sparkles,
  HelpCircle,
  Shirt,
  GraduationCap,
  Activity,
  DollarSign,
  Coffee,
} from "lucide-react";
import orphanageData from "@/content/projects_orphanage.json";
import { useCMSContent } from "@/hooks/useCMSContent";

export const Route = createFileRoute("/projects/orphanage")({
  head: () => ({
    meta: [
      { title: "Angels Care Orphanage — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Explore how Angels Care Orphanage provides rescue, immediate family care, and community foster integration for rescued refugee orphans in Kyaka II.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: OrphanageProjectPage,
});

function OrphanageProjectPage() {
  const d = useCMSContent("projects_orphanage", orphanageData);
  const [showTooltipLeft, setShowTooltipLeft] = useState(false);

  const getFinancialIcon = (name: string) => {
    if (name.includes("Housing")) return <Home className="h-5 w-5 text-coral" />;
    if (name.includes("Feeding")) return <Coffee className="h-5 w-5 text-sky" />;
    if (name.includes("Schooling")) return <GraduationCap className="h-5 w-5 text-indigo-500" />;
    if (name.includes("Clothing")) return <Shirt className="h-5 w-5 text-coral" />;
    if (name.includes("Medical")) return <Activity className="h-5 w-5 text-sky" />;
    return <Heart className="h-5 w-5 text-sky" />;
  };

  return (
    <div
      className="bg-background min-h-screen text-slate-800"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* SECTION 1: Emotional Page Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Soft elegant background glows */}
        <div className="absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Minimalist Tech-Forward Status Badge */}
              <div className="inline-flex items-center gap-1.5 mb-6 bg-coral/10 text-coral text-xs font-semibold px-4 py-1.5 rounded-full border border-coral/25">
                <Heart className="h-3.5 w-3.5" />
                <span>{d.hero.badge}</span>
              </div>

              {/* Title heading with custom typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-extrabold text-balance">
                Angels Care <span className="text-coral">Orphanage</span>
              </h1>

              <h2 className="mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                {d.hero.subtitle}
              </h2>

              {/* Vision and Emotional Callout Block */}
              <div className="mt-8 p-6 rounded-2xl bg-white border border-border shadow-sm max-w-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-coral animate-pulse" />
                <p
                  className="text-lg sm:text-xl text-ink leading-relaxed text-left text-balance"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {d.hero.quote}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 select-none">
                <a
                  href="#dual-care-model"
                  className="btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 animate-fade-in"
                >
                  {d.hero.primaryBtn} <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#transparency-dashboard"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200"
                >
                  {d.hero.secondaryBtn}
                </a>
              </div>
            </div>

            {/* Right Image Frame showcasing Happy Refugee Kids */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover animate-fade-in">
                {/* Visual backing frames */}
                <div className="absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" />
                <div className="absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" />

                {/* Main image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-soft">
                    <img
                      src="/src/assets/images/Image38-2sized.webp"
                      alt="Happy children playing and laughing outside"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating caption tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs">
                      <p className="font-semibold leading-tight text-center">
                        Fostering Hope & Pure Joy in Kyaka II
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "Our Dual Care Model" Section */}
      <section id="dual-care-model" className="py-24 bg-white border-b border-border relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block">
              {d.dualModel.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight">
              {d.dualModel.title}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
              {d.dualModel.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Card Left: Pastor Godfrey's Home */}
            <div className="group relative rounded-3xl bg-white border-2 border-coral/30 p-8 flex flex-col justify-between shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-lg">
              {/* Corner accent decorative radial glow */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-coral font-bold bg-coral/5 px-2.5 py-1 rounded-full border border-coral/10">
                    {d.dualModel.houseOfGodfrey.badge}
                  </span>
                  <div className="relative">
                    <button
                      onClick={() => setShowTooltipLeft(!showTooltipLeft)}
                      onMouseEnter={() => setShowTooltipLeft(true)}
                      onMouseLeave={() => setShowTooltipLeft(false)}
                      className="p-1.5 text-slate-400 hover:text-coral transition-colors"
                      aria-label="Financial details"
                    >
                      <Info className="h-5 w-5" />
                    </button>

                    {/* Tooltip containing budget needs */}
                    <AnimatePresence>
                      {showTooltipLeft && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 bottom-full mb-2 w-64 bg-slate-900 text-white rounded-xl p-3 shadow-xl text-xs z-30 font-medium leading-relaxed"
                        >
                          <div className="absolute top-full right-4 w-3.5 h-3.5 bg-slate-900 rotate-45 -translate-y-2" />
                          <p className="text-coral font-bold mb-1">Financial Breakdown Required</p>
                          Requires approximately $1,200 CAN per month to handle security, crop
                          acquisitions, water supplies, and logistics for these 15 kids.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-ink mt-4 mb-2">
                  {d.dualModel.houseOfGodfrey.title}
                </h4>
                <div className="text-3xl font-extrabold text-coral/90 tracking-tight mb-4">
                  {d.dualModel.houseOfGodfrey.subtitle}
                </div>

                <p className="text-sm text-balance text-muted-foreground leading-relaxed">
                  {d.dualModel.houseOfGodfrey.description}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide leading-none">
                  Sponsorship Stream
                </span>
                <span className="inline-block text-xs font-mono text-coral bg-coral/5 border border-coral/10 rounded-lg px-3 py-1 font-semibold">
                  {d.dualModel.houseOfGodfrey.footer}
                </span>
              </div>
            </div>

            {/* Card Right: Community Family Placement */}
            <div className="group relative rounded-3xl bg-white border border-border p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden">
              {/* Corner accent decorative radial glow */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-sky/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-mono text-sky font-bold bg-sky/5 px-2.5 py-1 rounded-full border border-sky/10">
                  {d.dualModel.communityFoster.badge}
                </span>

                <h4 className="text-2xl font-bold text-ink mt-4 mb-2">
                  {d.dualModel.communityFoster.title}
                </h4>
                <div className="text-3xl font-extrabold text-sky/95 tracking-tight mb-4">
                  {d.dualModel.communityFoster.subtitle}
                </div>

                <p className="text-sm text-balance text-muted-foreground leading-relaxed">
                  {d.dualModel.communityFoster.description}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide leading-none">
                  Safety Triage
                </span>
                <span className="inline-block text-xs font-mono text-sky bg-sky/5 border border-sky/10 rounded-lg px-3 py-1 font-semibold">
                  {d.dualModel.communityFoster.footer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "The Cost of a Future" Impact & Transparency Section (Bento Financial Dashboard) */}
      <section id="transparency-dashboard" className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Context Text */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block self-start">
                {d.financials.badge}
              </span>
              <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight leading-tight">
                {d.financials.title}
              </h3>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
                {d.financials.description}
              </p>

              {/* Highlight Note */}
              <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                <div className="p-3 bg-sky/10 rounded-xl text-sky flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-ink">92% Direct Action Metric</h5>
                  <p className="text-xs text-muted-foreground">
                    Over 92% of all sponsorship funding goes directly to costs inside Kyaka II.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Bento-style Financial Dashboard */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-border/80 shadow-lg p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-sky/5 to-transparent rounded-bl-full pointer-events-none" />

              {/* Massive Main Figure Block */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 mb-8 border-b border-border">
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-coral">
                    Livelihood Sponsorship Target
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-ink tracking-tight mt-1">
                    $90 CAN{" "}
                    <span className="text-lg sm:text-xl font-bold text-muted-foreground">
                      / Month
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    The cost to fully sponsor and secure one orphan’s entire livelihood.
                  </p>
                </div>

                {/* Visual support badge */}
                <div className="px-4 py-2 bg-slate-50 border border-border rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>100% Tax Deductible (501c3)</span>
                </div>
              </div>

              {/* Allocation Breakdown List with Progress Bars */}
              <div className="space-y-6">
                <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
                  Monthly Allocations Detail
                </h4>

                {d.financials.breakdown.map((item, idx) => (
                  <div key={idx} className="group/item">
                    <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-medium">
                      <div className="flex items-center gap-2 text-ink">
                        <div className="p-1 bg-slate-50 rounded-md shadow-sm border border-border group-hover/item:scale-110 transition-transform">
                          {getFinancialIcon(item.name)}
                        </div>
                        <span className="font-semibold">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-ink font-bold">{item.amount}</span>
                        <span className="text-slate-400 text-xs ml-1">({item.percentage}%)</span>
                      </div>
                    </div>

                    {/* Linear Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden flex">
                      <div
                        className={`h-full ${idx % 2 === 0 ? "bg-coral" : "bg-sky"}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-muted-foreground/90 mt-1 leading-normal pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Core Action Footer */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <div className="relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none">
                {d.tiers.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight leading-none mb-4 text-balance">
                {d.tiers.title}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl">
                {d.tiers.description}
              </p>

              {/* Action Buttons styled precisely according to brand constraints */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center">
                {/* Solid Coral Red Button 1 */}
                <a
                  href="https://www.theforgottenintl.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{d.tiers.childTier.btnText}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Outline Sky Blue Button 2 */}
                <Link
                  to="/projects/school"
                  className="border-2 border-[#1cbee7] hover:bg-[#1cbee7] text-[#1cbee7] hover:text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Learn More About Our School</span>
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/80 font-mono">
                <HeartHandshake className="h-3.5 w-3.5 text-slate-400" />
                <span>100% Tax Deductible (501c3 Registered Partner)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
