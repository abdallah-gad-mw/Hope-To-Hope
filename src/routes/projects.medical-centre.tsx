import { createFileRoute, Link } from "@/lib/router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  Award,
  Heart,
  Info,
  X,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Baby,
  Users,
  ShieldCheck,
  MessageSquare,
  HeartHandshake,
  Syringe,
  FlaskConical,
  BedDouble,
  Stethoscope,
  HeartPulse,
  Clock,
  ShieldAlert,
  Flame,
  PlusCircle,
  Sparkles,
} from "lucide-react";
import medicalData from "@/content/projects_medical.json";
import { useCMSContent } from "@/hooks/useCMSContent";

export const Route = createFileRoute("/projects/medical-centre")({
  head: () => ({
    meta: [
      { title: "Angels Care Medical Centre — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Discover Angels Care Medical Centre inside the Kyaka II Refugee Settlement. Providing critical, 24/7 healthcare, maternal facilities, and free student care services.",
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
  component: MedicalCentrePage,
});

function MedicalCentrePage() {
  const d = useCMSContent("projects_medical", medicalData);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const getCrisisIcon = (id: string) => {
    switch (id) {
      case "population":
        return <Users className="h-5 w-5 text-coral" />;
      case "healthcentres":
        return <ShieldAlert className="h-5 w-5 text-amber-500" />;
      case "daily-patients":
        return <Flame className="h-5 w-5 text-coral animate-pulse" />;
      default:
        return <Activity className="h-5 w-5 text-coral" />;
    }
  };

  const getBenefitIcon = (id: string) => {
    switch (id) {
      case "benefit-cost":
        return <HeartHandshake className="h-6 w-6 text-coral" />;
      case "benefit-students":
        return <Baby className="h-6 w-6 text-sky" />;
      case "benefit-prevention":
        return <CheckCircle2 className="h-6 w-6 text-indigo-500" />;
      default:
        return <Heart className="h-6 w-6 text-coral" />;
    }
  };

  const getBenefitGradient = (id: string) => {
    switch (id) {
      case "benefit-cost":
        return "from-coral/5 to-transparent border-t-2 border-coral";
      case "benefit-students":
        return "from-sky/5 to-transparent border-t-2 border-sky";
      case "benefit-prevention":
        return "from-indigo-500/5 to-transparent border-t-2 border-indigo-500";
      default:
        return "from-soft to-transparent border-t-2 border-border";
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "service-outpatient":
        return <BedDouble className="h-6 w-6 text-coral" />;
      case "service-maternal":
        return <Sparkles className="h-6 w-6 text-coral" />;
      case "service-pediatric":
        return <Syringe className="h-6 w-6 text-sky" />;
      case "service-malaria":
        return <Activity className="h-6 w-6 text-indigo-500" />;
      case "service-pharma":
        return <HeartHandshake className="h-6 w-6 text-sky" />;
      case "service-lab":
        return <FlaskConical className="h-6 w-6 text-coral" />;
      case "service-nutrition":
        return <Baby className="h-6 w-6 text-indigo-500" />;
      case "service-dental":
        return <Stethoscope className="h-6 w-6 text-coral" />;
      default:
        return <HeartPulse className="h-6 w-6 text-coral" />;
    }
  };

  const filteredServices =
    activeTab === "all"
      ? d.services.cards
      : d.services.cards.filter((s) => s.category === activeTab);

  return (
    <div
      className="bg-background min-h-screen text-slate-800"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* SECTION 1: Clinical Page Hero Banner Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Ambient artistic circles */}
        <div className="absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Responsive status badge with tooltips */}
              <div className="relative inline-flex items-center gap-2 mb-6 z-20">
                <div
                  className="inline-flex items-center gap-1.5 cursor-pointer select-none bg-sky/10 hover:bg-sky/15 text-sky text-xs font-semibold px-4 py-1.5 rounded-full border border-sky/25 transition-all duration-200"
                  onClick={() => setShowStatusTooltip(!showStatusTooltip)}
                  onMouseEnter={() => setShowStatusTooltip(true)}
                  onMouseLeave={() => setShowStatusTooltip(false)}
                >
                  <Clock className="h-4 w-4 animate-spin-slow text-sky" />
                  <span>{d.hero.isLive}</span>
                  <Info className="h-3.5 w-3.5 opacity-80" />
                </div>

                {/* Status Tooltip Card */}
                <AnimatePresence>
                  {showStatusTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-ink text-white rounded-2xl p-4 shadow-xl border border-white/10 text-xs z-30 leading-relaxed"
                    >
                      <div className="absolute -top-1.5 left-8 w-3 h-3 bg-ink rotate-45 border-t border-l border-white/10" />
                      <p className="font-semibold text-sky flex items-center gap-1 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky" /> Official Medical License
                      </p>
                      Angels Care Medical Centre is officially recognized and fully registered under
                      regional health councils of Uganda. All services are governed by licensed
                      professionals operating round-the-clock for emergencies.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Title heading with custom typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-extrabold text-balance">
                Angels Care <span className="text-coral">Medical Centre</span>
              </h1>

              <h2 className="mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                {d.hero.subtitle}
              </h2>

              {/* Elegant Vision Block using custom fonts */}
              <div className="mt-8 p-6 rounded-2xl bg-white border border-border shadow-sm max-w-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-sky" />
                <p
                  className="text-xl text-ink italic leading-relaxed text-left text-balance"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  “Every individual’s need is our concern.”
                </p>
                <p className="mt-2 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  — To inspire hope and promote good health and wellbeing by providing the best
                  healthcare to every patient through integrated clinical practice, health
                  education, and community involvement.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 select-none">
                <a
                  href="#crisis-dashboard"
                  className="btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
                >
                  Understand the Crisis <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#services-grid"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200"
                >
                  {d.hero.secondaryBtn}
                </a>
              </div>
            </div>

            {/* Right Image Frame showcasing Clinical Care */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover">
                {/* Visual backing frames */}
                <div className="absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" />
                <div className="absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" />

                {/* Main medical image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-soft">
                    <img
                      src="/src/assets/images/107050000_579153106133552_4669114132287895332_n.webp"
                      alt="Refugee families undergoing clinical wellness exam"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating caption tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs">
                      <p className="font-semibold leading-tight">ACMC Clinical Diagnostic Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "The Crisis vs. Our Dream" Section */}
      <section id="crisis-dashboard" className="py-24 bg-white border-b border-border relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative of the 5-Year Journey */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-4 py-1.5 rounded-full border border-sky/10 mb-4 inline-block">
                  {d.crisis.badge}
                </span>

                <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight leading-tight">
                  {d.crisis.title}
                </h3>

                <div className="mt-6 text-muted-foreground space-y-5 text-sm sm:text-base leading-relaxed text-left text-balance">
                  <p>
                    Angels Care Medical Centre was a dream to serve our children and the community.
                    The need was great: the refugee settlement has been overwhelmed by rampant
                    sicknesses due to insufficient and expensive health care services from local
                    private clinics.
                  </p>
                  <p>
                    Most importantly, we saw a need as many of our children at Angels Care School
                    would fall ill, were unable to get proper treatment, and could not attend
                    school.
                  </p>

                  {/* Legacy Note Box with warm amber/coral left bar */}
                  <div className="bg-coral/5 p-5 border-l-4 border-coral rounded-r-2xl transition hover:bg-coral/10">
                    <p className="font-semibold text-ink text-base mb-2">
                      Expanding the Dream Pipeline
                    </p>
                    <p className="text-xs sm:text-sm text-balance">
                      Over the past four years, we have bought and renovated a building for the
                      clinic, registered it with Ugandan authorities, recruited staff, and acquired
                      medical supplies. As a part of this dream, Pastor Godfrey’s own daughter and
                      the daughter of Mr. Joseph, our Assistant Director, both attended medical
                      school and graduated with the intention to become doctors right here at ACMC.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sickness Crisis Dashboard - Stats Grid */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-ink font-sans">
                  Kyaka II Settlement Healthcare Deficit
                </h4>
                <p className="text-xs text-muted-foreground">
                  Severe warning indicator summary based on official demographic assessments.
                </p>
              </div>

              <div className="space-y-6">
                {d.crisis.metrics.map((card) => (
                  <div
                    key={card.id}
                    className="p-6 rounded-2xl bg-gradient-to-r from-red-500/5 via-coral/5 to-transparent border border-coral/10 hover:border-coral/20 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-coral/10 flex-shrink-0">
                        {getCrisisIcon(card.id)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-coral px-2.5 py-0.5 bg-coral/10 rounded">
                            {card.badge}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-ink mt-1">{card.title}</h5>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed max-w-sm">
                          {card.subtext}
                        </p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right flex-shrink-0 pl-[52px] sm:pl-0">
                      <span className="block text-2xl font-extrabold text-coral/90 tracking-tight leading-none">
                        {card.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "Community Impact Framework" Section */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header Block */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block">
              {d.benefits.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight">
              {d.benefits.title}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
              {d.benefits.description}
            </p>
          </div>

          {/* 3 Horizontal Modern Interaction Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.benefits.cards.map((benefit) => (
              <div
                key={benefit.id}
                className={`rounded-2xl p-8 bg-white border border-border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${getBenefitGradient(benefit.id)}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-slate-50 rounded-xl">{getBenefitIcon(benefit.id)}</div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2f3e46]">
                      Benefit Card
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-ink mb-1">{benefit.value}</h4>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {benefit.title}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                    {benefit.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-bold">
                  <span className="text-[#3a506b]">Target: Local Relief</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-sky animate-ping" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Comprehensive 24/7 Care Services Section */}
      <section id="services-grid" className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header Block and Subtitles */}
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-4 py-1.5 rounded-full border border-sky/10 mb-4 inline-block">
              {d.services.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight">
              {d.services.title}
            </h3>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base text-balance max-w-xl">
              {d.services.description}
            </p>
          </div>

          {/* Service filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 select-none">
            {d.services.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-full border transition duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-ink text-white border-ink"
                    : "bg-slate-50 text-slate-500 border-border hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout for services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((srv) => (
                <motion.div
                  key={srv.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-6 bg-white border border-border flex flex-col justify-between group hover:border-sky/30 hover:shadow-soft transition-all duration-300 min-h-[220px]"
                >
                  <div>
                    {/* Icon section with ambient backgrounds on hover */}
                    <div className="p-3 bg-slate-50 rounded-xl max-w-fit mb-4 group-hover:bg-sky/5 transition-colors duration-300">
                      {getServiceIcon(srv.id)}
                    </div>

                    <h4 className="text-base font-bold text-ink group-hover:text-sky transition-colors mb-2">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                      {srv.category}
                    </span>
                    <HeartPulse className="h-3.5 w-3.5 text-coral/10 group-hover:text-coral/50 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 5: Medical Emergency Call To Action Footer */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Soft elegant blur rings matching design guide */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none animate-pulse" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          {/* Glassmorphic main container */}
          <div className="relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none">
                {d.campaign.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight leading-none mb-4 text-balance">
                {d.campaign.title}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl">
                {d.campaign.intro}
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
                  <span>{d.hero.primaryBtn}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Outline Sky Blue Button 2 */}
                <Link
                  to="/hope-family"
                  className="border-2 border-[#1cbee7] hover:bg-[#1cbee7] text-[#1cbee7] hover:text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Heart className="h-4 w-4 fill-transparent group-hover:fill-white transition-all duration-200" />
                  <span>Sponsor Clinic Operations</span>
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/80 font-mono">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                <span>
                  100% Transparency. Certified through Hopetohope.org (501c3 Charity Tracker
                  Pipeline)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
