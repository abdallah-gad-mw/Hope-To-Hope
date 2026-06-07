import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { v as Clock, l as Info, a as CircleCheck, h as ChevronRight, w as HeartPulse, f as ArrowRight, H as Heart, x as ShieldCheck, y as BedDouble, e as HeartHandshake, z as Baby, c as Sparkles, D as Syringe, u as Activity, E as FlaskConical, J as MessageSquare, g as Stethoscope, o as Users, K as ShieldAlert, L as Flame } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function MedicalCentrePage() {
  const [showStatusTooltip, setShowStatusTooltip] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const crisisMetrics = [{
    id: "population",
    metric: "140,000+ People",
    title: "Overcoming Isolation",
    subtext: "Total population packed in Kyaka II settlement and the surrounding vulnerable host communities of Kyegegwa.",
    badge: "Settlement Scope",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-coral" })
  }, {
    id: "healthcentres",
    metric: "1 Main Centre Only",
    title: "Extremely Strained Ingress",
    subtext: "Supported by only 5 satellite outposts. Understaffed, distant, and deeply overwhelmed by numbers.",
    badge: "Severe Shortage",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5 text-amber-500" })
  }, {
    id: "daily-patients",
    metric: "2,800 patients daily",
    title: "The Sick Rate Breakdown",
    subtext: "Over 2% of the local population requires immediate medical attention daily. Medical demand far outweighs supply.",
    badge: "Crisis Demand",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-5 w-5 text-coral animate-pulse" })
  }];
  const benefitCards = [{
    id: "benefit-cost",
    title: "Subsidized Relief",
    value: "40% Less Cost",
    subtext: "Pricing is subsidized to be at least 40% less than local private clinics to ensure accessibility for every family.",
    accentClass: "border-coral text-coral bg-coral/5",
    bgGradient: "from-coral/5 to-transparent border-t-2 border-coral",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "h-6 w-6 text-coral" })
  }, {
    id: "benefit-students",
    title: "Angels Care Pipeline",
    value: "100% Free For Students",
    subtext: "All children and students inside Angels Care School receive free checkups, treatments, and immediate emergency care.",
    accentClass: "border-sky text-sky bg-sky/5",
    bgGradient: "from-sky/5 to-transparent border-t-2 border-sky",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-6 w-6 text-sky" })
  }, {
    id: "benefit-prevention",
    title: "Empowering Households",
    value: "Prevention & Education",
    subtext: "Regular outreach programs on hygiene, disease prevention, and family planning build community immunity.",
    accentClass: "border-indigo-500 text-indigo-500 bg-indigo-50",
    bgGradient: "from-indigo-500/5 to-transparent border-t-2 border-indigo-500",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-indigo-500" })
  }];
  const servicesData = [{
    id: "srv-inout",
    title: "In-patients & Out-patients",
    description: "Day-to-day dynamic management of ailments, physical rehabilitation, and critical short-stay hospitalization for recovery.",
    category: "Primary Care",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-6 w-6 text-coral" })
  }, {
    id: "srv-family",
    title: "Family Planning",
    description: "Subsidized counseling sessions, contraception choices, and structural support plans customized to empower young mothers.",
    category: "Support",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "h-6 w-6 text-sky" })
  }, {
    id: "srv-antenatal",
    title: "Antenatal & Postnatal Care",
    description: "Comprehensive medical pathways and checkups checking structural indices before pregnancy and in the recovery phase.",
    category: "Maternal & Child",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-6 w-6 text-indigo-500" })
  }, {
    id: "srv-maternity",
    title: "Maternity & Delivery Services",
    description: "Warm, sterile, 24/7 delivery room equipped with emergency care indicators. Monitored delivery by trained clinical midwives.",
    category: "Maternal & Child",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-coral" })
  }, {
    id: "srv-child",
    title: "Child Health & Immunizations",
    description: "Sustained immunization drives protecting vulnerable infants against rotavirus, measles, polio, and critical respiratory infections.",
    category: "Maternal & Child",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Syringe, { className: "h-6 w-6 text-sky" })
  }, {
    id: "srv-surgery",
    title: "Minor Surgeries",
    description: "Suturing of trauma injuries, soft tissue incisions, cyst extractions, and localized infection drainage handled under precise safety.",
    category: "Specialized",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-6 w-6 text-indigo-500" })
  }, {
    id: "srv-labs",
    title: "Laboratories",
    description: "Fast-turnaround microscopic tests for malaria, typhoid, tuberculosis markers, and comprehensive basic blood panels.",
    category: "Specialized",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-6 w-6 text-coral" })
  }, {
    id: "srv-sti",
    title: "STI Prevention, Care & HIV Treatment",
    description: "Sensitized retrovirus care including safe testing, counseling pipelines, and daily antiretroviral therapeutic treatments.",
    category: "Specialized",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-sky" })
  }, {
    id: "srv-counsel",
    title: "Psychosocial Support & Counselling",
    description: "Trauma healing therapies for families and orphans addressing displacement anxiety, survivor distress, and prior conflict wounds.",
    category: "Support",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6 text-indigo-500" })
  }, {
    id: "srv-ultrasound",
    title: "Ultrasound Services",
    description: "Empowering mid-term mother insights. Non-invasive scan visualization to confirm healthy fetal position and detect complications early.",
    category: "Maternal & Child",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-6 w-6 text-coral" })
  }];
  const filteredServices = activeTab === "all" ? servicesData : servicesData.filter((s) => s.category === activeTab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen text-slate-800", style: {
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center gap-2 mb-6 z-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 cursor-pointer select-none bg-sky/10 hover:bg-sky/15 text-sky text-xs font-semibold px-4 py-1.5 rounded-full border border-sky/25 transition-all duration-200", onClick: () => setShowStatusTooltip(!showStatusTooltip), onMouseEnter: () => setShowStatusTooltip(true), onMouseLeave: () => setShowStatusTooltip(false), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 animate-spin-slow text-sky" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Licensed Clinical Hub — 24 Hours Open" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showStatusTooltip && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 10,
              scale: 0.95
            }, animate: {
              opacity: 1,
              y: 0,
              scale: 1
            }, exit: {
              opacity: 0,
              y: 10,
              scale: 0.95
            }, transition: {
              duration: 0.2
            }, className: "absolute left-0 top-full mt-2 w-72 sm:w-80 bg-ink text-white rounded-2xl p-4 shadow-xl border border-white/10 text-xs z-30 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 left-8 w-3 h-3 bg-ink rotate-45 border-t border-l border-white/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sky flex items-center gap-1 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-sky" }),
                " Official Medical License"
              ] }),
              "Angels Care Medical Centre is officially recognized and fully registered under regional health councils of Uganda. All services are governed by licensed professionals operating round-the-clock for emergencies."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-extrabold text-balance", children: [
            "Angels Care ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Medical Centre" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase", children: "Meeting the medical needs of the refugee community. Open 24 Hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 rounded-2xl bg-white border border-border shadow-sm max-w-xl relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-2 h-full bg-sky" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-ink italic leading-relaxed text-left text-balance", style: {
              fontFamily: "'Playfair Display', serif"
            }, children: "“Every individual’s need is our concern.”" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "— To inspire hope and promote good health and wellbeing by providing the best healthcare to every patient through integrated clinical practice, health education, and community involvement." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4 select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#crisis-dashboard", className: "btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2", children: [
              "Understand the Crisis ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services-grid", className: "px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200", children: "Explore Services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/107050000_579153106133552_4669114132287895332_n.webp", alt: "Refugee families undergoing clinical wellness exam", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in", referrerPolicy: "no-referrer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold leading-tight", children: "ACMC Clinical Diagnostic Area" }) })
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "crisis-dashboard", className: "py-24 bg-white border-b border-border relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-4 py-1.5 rounded-full border border-sky/10 mb-4 inline-block", children: "Sickness Crisis Context" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-bold tracking-tight leading-tight", children: "A Dream Five Years in the Making" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-muted-foreground space-y-5 text-sm sm:text-base leading-relaxed text-left text-balance", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Angels Care Medical Centre was a dream to serve our children and the community. The need was great: the refugee settlement has been overwhelmed by rampant sicknesses due to insufficient and expensive health care services from local private clinics." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most importantly, we saw a need as many of our children at Angels Care School would fall ill, were unable to get proper treatment, and could not attend school." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-coral/5 p-5 border-l-4 border-coral rounded-r-2xl transition hover:bg-coral/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-ink text-base mb-2", children: "Expanding the Dream Pipeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance", children: "Over the past four years, we have bought and renovated a building for the clinic, registered it with Ugandan authorities, recruited staff, and acquired medical supplies. As a part of this dream, Pastor Godfrey’s own daughter and the daughter of Mr. Joseph, our Assistant Director, both attended medical school and graduated with the intention to become doctors right here at ACMC." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-ink", children: "Kyaka II Settlement Healthcare Deficit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Severe warning indicator summary based on official demographic assessments." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: crisisMetrics.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-gradient-to-r from-red-500/5 via-coral/5 to-transparent border border-coral/10 hover:border-coral/20 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-all duration-300 hover:shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white rounded-xl shadow-sm border border-coral/10 flex-shrink-0", children: card.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-coral px-2.5 py-0.5 bg-coral/10 rounded", children: card.badge }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-bold text-ink mt-1", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed max-w-sm", children: card.subtext })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left sm:text-right flex-shrink-0 pl-[52px] sm:pl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-2xl font-extrabold text-coral/90 tracking-tight leading-none", children: card.metric }) })
        ] }, card.id)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-slate-50 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block", children: "Direct Community Benefits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-bold tracking-tight", children: "Community Impact Framework" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance", children: "Our mission is to provide quality, accessible, and affordable health care services to both the refugee and host communities through localized relief." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: benefitCards.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl p-8 bg-white border border-border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${benefit.bgGradient}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-slate-50 rounded-xl", children: benefit.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-widest text-[#2f3e46]", children: "Benefit Card" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-ink mb-1", children: benefit.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: benefit.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: benefit.subtext })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#3a506b]", children: "Target: Local Relief" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-sky animate-ping" })
        ] })
      ] }, benefit.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services-grid", className: "py-24 bg-white border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-4 py-1.5 rounded-full border border-sky/10 mb-4 inline-block", children: "Dynamic Medical Roster" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-bold tracking-tight", children: "Our Medical Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm sm:text-base text-balance max-w-xl", children: "Equipped to handle a wide range of medical concerns 24 hours a day, 7 days a week. Select categories below to filter our medical capabilities." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-8 select-none", children: ["all", "Primary Care", "Maternal & Child", "Specialized", "Support"].map((catName) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab(catName), className: `px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-full border transition duration-200 cursor-pointer ${activeTab === catName ? "bg-ink text-white border-ink" : "bg-slate-50 text-slate-500 border-border hover:bg-slate-100"}`, children: catName === "all" ? "All Services (10)" : catName }, catName)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filteredServices.map((srv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, exit: {
        opacity: 0,
        scale: 0.95
      }, transition: {
        duration: 0.3
      }, className: "rounded-2xl p-6 bg-white border border-border flex flex-col justify-between group hover:border-sky/30 hover:shadow-soft transition-all duration-300 min-h-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-slate-50 rounded-xl max-w-fit mb-4 group-hover:bg-sky/5 transition-colors duration-300", children: srv.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-ink group-hover:text-sky transition-colors mb-2", children: srv.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: srv.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-slate-400 font-semibold uppercase", children: srv.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-3.5 w-3.5 text-coral/10 group-hover:text-coral/50 group-hover:scale-110 transition-all duration-300" })
        ] })
      ] }, srv.id)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-slate-50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none", children: "Support our 24/7 lifeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl text-ink font-bold tracking-tight leading-none mb-4 text-balance", children: "Support Our 24/7 Lifeline Clinic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl", children: "Your contribution directly funds life-saving medical supplies, emergency treatments, and subvention for vulnerable refugees." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org/donate/", target: "_blank", rel: "noopener noreferrer", className: "bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fund Medical Supplies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transform group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/hope-family", className: "border-2 border-[#1cbee7] hover:bg-[#1cbee7] text-[#1cbee7] hover:text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-transparent group-hover:fill-white transition-all duration-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sponsor Clinic Operations" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/80 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100% Transparency. Certified through Hopetohope.org (501c3 Charity Tracker Pipeline)" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  MedicalCentrePage as component
};
