import { createFileRoute, Link } from "@/lib/router";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Users,
  Compass,
  ArrowUpRight,
  Heart,
  Calendar,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Maximize2,
  X,
  Stethoscope,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import aboutKyakaData from "@/content/about_kyaka.json";
import { useCMSContent } from "@/hooks/useCMSContent";

const DONATE_URL = "https://www.theforgottenintl.org/donate/";

export const Route = createFileRoute("/about/kyaka-ii")({
  head: () => ({
    meta: [
      { title: aboutKyakaData.metaTitle },
      {
        name: "description",
        content: aboutKyakaData.metaDescription,
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: KyakaIISettlementPage,
});

function KyakaIISettlementPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const d = useCMSContent("about_kyaka", aboutKyakaData);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      {/* 1. Dynamic Page Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Soft radial background glow for premium vibe */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-sky/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-5">
                <MapPin className="h-3 w-3 animate-bounce text-coral" />
                {d.hero.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance">
                Kyaka II Refugee <span className="text-sky">Settlement</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl text-balance">
                {d.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#stats"
                  className="btn-coral rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 shadow"
                >
                  View Vital Statistics <TrendingUp className="h-4 w-4" />
                </a>
                <a
                  href="#history"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-sm font-semibold transition"
                >
                  {d.hero.secondaryBtn}
                </a>
              </div>
            </div>

            {/* Hero right: Framed aerial settlement landscape view */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-3xl bg-sky/10 blur-xl pointer-events-none" />
              <div className="relative rounded-[32px] overflow-hidden border border-border bg-white p-3 shadow-soft group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-soft">
                  <img
                    src={d.hero.imageUrl}
                    alt="Aerial overview of the Kyaka II refugee settlement camp showing shelters"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

                  {/* Floating glass overlay caption */}
                  <div className="absolute bottom-4 inset-x-4 glass rounded-xl p-3 border border-white/20 backdrop-blur">
                    <span className="text-xs uppercase tracking-wider text-coral font-bold block mb-0.5">
                      Geographic Landscape
                    </span>
                    <span className="text-sm font-semibold text-ink flex items-center gap-1.5">
                      <Compass className="h-4 w-4 text-sky" /> South Western Uganda region
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "The Big Picture" Global Refugee Stats Section */}
      <section id="stats" className="py-16 md:py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section subtitle summary heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-sky font-bold">
              {d.refugeeStats.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink mt-2">
              {d.refugeeStats.sectionTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Stat Card 1 */}
            <div className="card-hover bg-soft border border-border rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-border/50 pointer-events-none" />
              <div>
                <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider block mb-2">
                  {d.refugeeStats.cardPrimary.badge}
                </span>
                <span className="text-5xl md:text-6xl font-black text-ink tracking-tight block font-display">
                  {d.refugeeStats.cardPrimary.value}
                </span>
                <span className="h-1 w-12 bg-coral rounded mt-4 block" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-6 leading-relaxed">
                {d.refugeeStats.cardPrimary.description}
              </p>
            </div>

            {/* Stat Card 2 (Sky Blue Highlight) */}
            <div className="card-hover bg-gradient-to-b from-sky/5 to-white border-2 border-sky rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-soft">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky/20 pointer-events-none" />
              <div>
                <span className="text-sky font-bold text-xs uppercase tracking-wider block mb-2">
                  {d.refugeeStats.cardSecondary.badge}
                </span>
                <span className="text-5xl md:text-6xl font-black text-ink tracking-tight block font-display">
                  {d.refugeeStats.cardSecondary.value}
                </span>
                <span className="h-1 w-12 bg-sky rounded mt-4 block" />
              </div>
              <p className="text-sm md:text-base text-ink font-medium mt-6 leading-relaxed">
                {d.refugeeStats.cardSecondary.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "History, Zone & Scale" Section (Bento Grid Split Layout) */}
      <section id="history" className="py-24 md:py-32 bg-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10">
              <Sparkles className="h-3 w-3" /> Settlement Framework
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-[1.1]">
              {d.history.sectionTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              {d.history.sectionSubtitle}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Grid Card A: Historical Scale */}
            <div className="lg:col-span-7 card-hover bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky/10" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-sky font-semibold uppercase tracking-wider mb-6 bg-sky/10 px-3 py-1 rounded-full">
                  <Calendar className="h-3.5 w-3.5" /> Historical Timeline
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight font-display">
                  {d.history.originCard.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-balance">
                  {d.history.originCard.p1}
                </p>
                <p
                  className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-balance"
                  dangerouslySetInnerHTML={{ __html: d.history.originCard.p2 }}
                />
              </div>
              <div className="mt-8 border-t border-border pt-6 flex items-center gap-4 text-xs font-semibold text-sky">
                <MapPin className="h-4 w-4" /> Comprehensive Zonal Regional Planning
              </div>
            </div>

            {/* Grid Card B: Crisis context */}
            <div className="lg:col-span-5 card-hover bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-coral/10" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-coral font-semibold uppercase tracking-wider mb-6 bg-coral/10 px-3 py-1 rounded-full">
                  <AlertCircle className="h-3.5 w-3.5" /> Humanitarian Crisis
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight font-display">
                  {d.history.congoCard.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {d.history.congoCard.p1}
                </p>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {d.history.congoCard.p2}
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-6 flex items-center gap-2 text-xs font-semibold text-coral/90">
                <Heart className="h-4 w-4 fill-current text-coral" /> Caring for displaced families
                since day one.
              </div>
            </div>

            {/* Grid Card C: Visual UNHCR Profile Map Grid Box */}
            <div className="lg:col-span-12 rounded-[32px] border border-border bg-white shadow-soft p-8 relative overflow-hidden">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Text explanation */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky font-bold mb-4">
                    {d.history.unhcrCard.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink font-display">
                    {d.history.unhcrCard.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {d.history.unhcrCard.description}
                  </p>

                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="mt-6 self-start inline-flex items-center gap-2 text-xs font-bold text-coral bg-coral/5 hover:bg-coral/10 border border-coral/10 hover:border-coral/20 px-4 py-2.5 rounded-xl transition cursor-pointer"
                  >
                    Expand UNHCR Profile <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Image container box */}
                <div className="md:col-span-7">
                  <div
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative rounded-2xl overflow-hidden border border-border bg-soft group cursor-zoom-in group shadow-md"
                  >
                    <img
                      src={d.history.unhcrCard.mapImageUrl}
                      alt="UNHCR Kyaka II settlement statistical profile map"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="glass rounded-full p-4 border border-white/20 text-ink shadow flex items-center gap-2 font-semibold text-sm">
                        <Maximize2 className="h-4 w-4 text-coral" /> Click to View Detailed Map
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "The Most Vulnerable" High-Impact Stat Section (Coral Accent Panel) */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#fef5f5] to-[#fffcfc] border-b border-border text-center overflow-hidden relative">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-coral/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-coral/5 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/10 px-3.5 py-1.5 rounded-full border border-coral/15 mb-6">
            Demographic Reality
          </span>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-coral font-display tracking-tight leading-none">
            {d.demographics.ratioBadge}
          </h2>

          <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl text-ink font-semibold tracking-tight text-balance max-w-2xl font-display leading-snug">
            {d.demographics.ratioTitle}
          </h3>

          <p className="mt-6 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-balance">
            {d.demographics.description}
          </p>

          <span className="h-1 w-16 bg-coral/40 rounded mt-8" />
        </div>
      </section>

      {/* 5. "Our Response & Mission" Section */}
      <section id="response" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text details */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0ea5e9] font-bold mb-4">
                Active Field Intervention
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-ink leading-tight font-semibold tracking-tight">
                Our Frontline Response — <br />
                <span className="text-coral">Angels Care Medical Clinic</span>
              </h2>

              <p
                className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: d.response.description }}
              />

              {/* Glassmorphism Highlight container */}
              <div className="mt-8 relative rounded-3xl p-6 md:p-8 bg-soft border border-sky/20 overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky" />
                <h4 className="text-sm font-bold text-sky uppercase tracking-wider mb-2">
                  Our Mission Command
                </h4>
                <p className="text-ink font-medium text-base sm:text-lg italic leading-relaxed text-balance">
                  {d.response.missionQuote}
                </p>
              </div>

              {/* Action buttons footer */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/projects/medical-centre"
                  className="btn-coral rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2 shadow cursor-pointer justify-center"
                >
                  <Stethoscope className="h-4 w-4" /> Support Our Medical Clinic
                </Link>
                <Link
                  to="/projects/school"
                  className="px-6 py-3.5 rounded-full border-2 border-sky/60 hover:border-sky bg-white hover:bg-sky/5 text-ink text-sm font-semibold inline-flex items-center gap-2 transition cursor-pointer justify-center"
                  style={{ borderColor: "var(--color-sky)" }}
                >
                  <GraduationCap className="h-4 w-4 text-sky" /> Explore Our School Programs
                </Link>
              </div>
            </div>

            {/* Right side floating brand artwork */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5]">
                {/* Visual Backdrop decoration */}
                <div className="absolute inset-4 rounded-3xl bg-coral/10 -rotate-3 transform -translate-x-4 scale-105" />

                {/* Primary Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                  <img
                    src={d.response.imageUrlPrimary}
                    alt="Happy children at Angels Care school smiling"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Secondary Offset Image */}
                <div className="absolute -bottom-8 -right-6 md:-right-8 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl group hidden sm:block">
                  <img
                    src={d.response.imageUrlSecondary}
                    alt="Active learning session"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Est. Code badge */}
                <div className="absolute -top-4 -left-4 bg-coral text-white rounded-2xl px-5 py-3 shadow-coral flex flex-col items-center justify-center font-display">
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                    Est.
                  </span>
                  <span className="text-2xl font-bold tracking-tight">2008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom High-Fidelity Lightbox Modal (For UNHCR Infographics) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center cursor-zoom-out"
                onClick={() => setIsLightboxOpen(false)}
              >
                {/* Top Bar controls */}
                <div className="w-full max-w-6xl flex justify-between items-center text-white mb-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky font-bold">
                    <Users className="h-4 w-4" /> {d.history.unhcrCard.lightboxBadge}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(false);
                    }}
                    className="p-2 rounded-full hover:bg-white/10 transition text-white/80 hover:text-white cursor-pointer"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Lightbox full-size image wrapper */}
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="relative max-w-6xl max-h-[80vh] overflow-auto rounded-xl border border-white/10 bg-black shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={d.history.unhcrCard.mapImageUrl}
                    alt="Detailed UNHCR Refugee Statistics map"
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                </motion.div>

                {/* Bottom Credit Caption */}
                <div className="text-center text-white/60 text-xs mt-4 italic max-w-xl leading-relaxed">
                  {d.history.unhcrCard.lightboxCredit}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
