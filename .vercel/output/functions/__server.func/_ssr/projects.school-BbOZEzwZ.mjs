import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { k as Award, l as Info, a as CircleCheck, h as ChevronRight, m as Maximize2, X, f as ArrowRight, H as Heart, n as Globe, o as Users, B as BookOpen, p as School, q as Star } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SchoolProjectPage() {
  const [showBadgeTooltip, setShowBadgeTooltip] = reactExports.useState(false);
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);
  const demographicCards = [{
    id: "active-students",
    title: "1,000+ Active Students",
    value: "1,000+",
    subtext: "Serving both the Kyaka II Refugee Settlement and local Ugandan children.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-coral" }),
    bgGradient: "from-coral/5 to-soft border border-coral/10"
  }, {
    id: "refugee-ratio",
    title: "Demographic Breakdown",
    value: "80% Refugee",
    subtext: "Integrating refugee scholars with local host community peers.",
    badge: "Inclusion",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-sky" }),
    bgGradient: "from-sky/5 to-soft border border-sky/10"
  }, {
    id: "academic-pipeline",
    title: "Nursery to Elementary",
    value: "P1 to P7 Pipeline",
    subtext: "Full academic pipeline from Kindergarten up to Primary 7.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(School, { className: "h-5 w-5 text-indigo-500" }),
    bgGradient: "from-indigo-50/20 to-soft border border-indigo-100"
  }, {
    id: "national-marks",
    title: "Top National Test Marks",
    value: "Grade A Standards",
    subtext: "Students receive the best education in the settlement, consistently achieving the highest marks in national tests.",
    badge: "Outstanding Results",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-amber-500 fill-amber-400" }),
    bgGradient: "from-amber-500/5 to-soft border-2 border-amber-500/20 shadow-sm"
  }];
  const galleryImages = [{
    id: 1,
    url: "/src/assets/images/school/1.webp",
    caption: "",
    category: ""
  }, {
    id: 2,
    url: "/src/assets/images/school/2.webp",
    caption: "",
    category: ""
  }, {
    id: 3,
    url: "/src/assets/images/school/3.webp",
    caption: "",
    category: ""
  }, {
    id: 4,
    url: "/src/assets/images/school/4.webp",
    caption: "",
    category: ""
  }, {
    id: 5,
    url: "/src/assets/images/school/5.webp",
    caption: "",
    category: ""
  }, {
    id: 6,
    url: "/src/assets/images/school/6.webp",
    caption: "",
    category: ""
  }, {
    id: 7,
    url: "/src/assets/images/school/7.webp",
    caption: "",
    category: ""
  }, {
    id: 8,
    url: "/src/assets/images/school/8.webp",
    caption: "",
    category: ""
  }, {
    id: 9,
    url: "/src/assets/images/school/9.webp",
    caption: "",
    category: ""
  }, {
    id: 10,
    url: "/src/assets/images/school/10.webp",
    caption: "",
    category: ""
  }, {
    id: 11,
    url: "/src/assets/images/school/12.webp",
    caption: "",
    category: ""
  }, {
    id: 12,
    url: "/src/assets/images/school/13.webp",
    caption: "",
    category: ""
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-start reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center gap-2.5 mb-6 z-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 cursor-pointer select-none bg-coral/10 hover:bg-coral/15 text-coral text-xs font-semibold px-4 py-1.5 rounded-full border border-coral/25 transition-all duration-200", onClick: () => setShowBadgeTooltip(!showBadgeTooltip), onMouseEnter: () => setShowBadgeTooltip(true), onMouseLeave: () => setShowBadgeTooltip(false), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Govt Recognized Since 2011" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showBadgeTooltip && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-coral flex items-center gap-1 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-coral" }),
                " Official Ministerial Status"
              ] }),
              "In 2011, the Ugandan government issued a formal document recognizing the exemplary work that Angels Care School does for the Kyaka II settlement, approving our curriculum and licensing public testing on resource grounds."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance", children: [
            "Angels Care ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "School" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase", children: "Education for Refugee Children: Shaping the Leaders of Tomorrow." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-balance", children: "Operating directly inside Kyaka II Refugee Settlement, Angels Care School provides free, safe, and world-class foundational training. By combining rigorous state academics with emotional therapy and protective services, we help orphaned and vulnerable children convert survival into stable futures." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4 select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#demographics", className: "btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2", children: [
              "Explore Our Core ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#needs", className: "px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200", children: "Urgent Class Needs" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative flex items-center justify-center reveal reveal-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/school/2.webp", alt: "Refugee child engaged in learning at school desk", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold leading-tight", children: "Focus & Growth inside Kyaka II" }) })
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "demographics", className: "py-24 bg-white border-b border-border relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 flex flex-col justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block", children: "High-Readability Narrative" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-tight", children: "Empowering Futures Beyond Circumstances" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-muted-foreground space-y-5 text-sm sm:text-base leading-relaxed text-left text-balance", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For refugee children, education is paramount to building their future. For young girls, the classroom provides safety, protection from early childhood marriage, and cultivates their leadership skills." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For young boys, education teaches diligence and discipline, engages them in teamwork and cooperation through extracurriculars, and gives them opportunities to serve their community. Education gives refugee children hope that they can accomplish their dreams and have a stable future, even in the midst of grave circumstances." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-ink bg-soft/80 p-4 border-l-4 border-sky rounded-r-2xl", children: "Angels Care School educates refugee children so that they can be the leaders of tomorrow. Many of our graduates have gone on to become teachers and doctors, with many proudly returning to Angels Care as staff." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full", children: demographicCards.map((card) => {
        const isRefugeeCard = card.id === "refugee-ratio";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl p-6 ${card.bgGradient} flex flex-col justify-between min-h-[190px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-white rounded-xl shadow-sm border border-border/80 group-hover:scale-110 transition-transform", children: card.icon }),
              card.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white border border-border/30 rounded-md text-slate-500", children: card.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-semibold text-muted-foreground/80 tracking-normal", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl text-ink font-bold tracking-tight mt-1", children: card.value })
            ] })
          ] }),
          isRefugeeCard ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-mono leading-none text-muted-foreground/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky font-bold", children: "80% Refugee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral font-bold", children: "20% Local Host" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-2.5 rounded-full bg-slate-100 overflow-hidden flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-sky", style: {
                width: "80%"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-coral", style: {
                width: "20%"
              } })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground/90 leading-relaxed", children: card.subtext })
        ] }, card.id);
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "needs", className: "py-24 bg-soft border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block", children: "Immediate Priorities & Interventions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight", children: "Continued Needs for Angels Care School" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance", children: "To maintain our high standards and support the growing community, we face urgent infrastructure and operational milestones." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[440px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded", children: "Priority 01" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors", children: "1. Teachers & Fair Wages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "Education wouldn’t happen without dedicated educators. A loving teacher who inspires and recognizes potential can directly impact the trajectory of a life." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "Currently, we have 20 teachers, averaging 1 to 2 teachers per classroom of 100 students. We are currently unable to pay wages competitive with government schools. Our teachers love and are dedicated to our students, but this comes with heavy challenges." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 leading-none", children: "Core Mandate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2 font-semibold", children: "Our Hope: Increase wages, build staff housing, and hire more educators." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl bg-white border-2 border-sky/30 p-8 flex flex-col justify-between shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-lg min-h-[440px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-sky/10 to-transparent rounded-bl-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-sky font-bold bg-sky/5 px-2 py-1 rounded", children: "Priority 02" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase font-bold bg-sky text-sky-foreground px-2 py-0.5 rounded-full", children: "Crucial Needs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4", children: "2. Expanding Classrooms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "With the refugee population in Kyaka II ever-increasing, our student body is growing rapidly. At the moment, our classroom sizes are too small to accommodate them." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed font-medium text-ink bg-sky/5 p-3 rounded-xl border border-sky/10", children: "On average, they have 120 children crammed per class. We need physical partition walls and concrete structures." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-sky/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase font-bold tracking-wider text-sky mb-1 leading-none", children: "Goal Metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-mono text-sky-foreground bg-sky/5 border border-sky/20 rounded-lg px-3 py-2 font-semibold", children: "Our Goal: Raise funds to build 6 new classrooms to safely meet the government standard ratio of 45:1." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[440px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-coral font-bold bg-coral/5 px-2 py-1 rounded", children: "Priority 03" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors", children: "3. Child Sponsorship" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "For a child to attend school, it takes a village of conscious global supporters. Your continuous backing ensures these children have access to materials, safe classrooms, and bright futures." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed", children: "Direct child sponsorship funds their meal plans, learning notebooks, field healthcare checkups, and uniform clothing. Connecting clean accountability from Canada resources to the field." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border flex flex-col items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1", children: "Direct Outcome" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-slate-700", children: "Your continuous backing ensures tuition materials, food, health care, and care." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/hope-family", className: "inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline relative group mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                "Learn how to sponsor a student →",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 w-full h-[1.5px] bg-coral transform scale-x-100 group-hover:scale-x-110 transition-transform origin-left" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-coral inline-block animate-ping ml-1" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-3 py-1 rounded-full border border-sky/10 mb-4 inline-block", children: "Daily Impact Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight", children: "Angels Care School Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm sm:text-base text-balance max-w-xl", children: "A glimpse inside our classrooms, events, and daily student life. Click any image to view it in full definition." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none", children: galleryImages.map((img) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedImage(img), className: "group relative cursor-pointer overflow-hidden rounded-2xl bg-soft border border-border/60 aspect-[4/3] shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.url, className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/25 text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" }) })
      ] }, img.id)) })
    ] }) }),
    mounted && reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setSelectedImage(null), className: "absolute inset-0 bg-ink/90 backdrop-blur-md cursor-pointer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95,
        y: 10
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.95,
        y: 10
      }, transition: {
        duration: 0.3,
        ease: "easeOut"
      }, className: "relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedImage(null), className: "absolute top-4 right-4 text-white hover:text-coral bg-black/60 hover:bg-black p-2 rounded-full border border-white/10 transition z-50 cursor-pointer", "aria-label": "Close image popup", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col bg-slate-900 rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] sm:aspect-[16/9] w-full relative bg-slate-950 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedImage.url, className: "max-h-[75vh] max-w-full object-contain" }) }) })
      ] })
    ] }) }), document.body),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-soft relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none", children: "Get Involved & Elevate Classrooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-none mb-4 text-balance", children: "Help Us Build the Classrooms of Tomorrow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl", children: "Every concrete brick, teaching salary contribution, and uniform sponsorship brings a displaced refugee scholar closer to taking flight. Join our international efforts spanning Canada and Kyaka II." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org/donate/", target: "_blank", rel: "noopener noreferrer", className: "bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Donate for New Classrooms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transform group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/hope-family", className: "border-2 border-[#1cbee7] hover:bg-[#1cbee7] text-[#1cbee7] hover:text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-transparent group-hover:fill-white transition-all duration-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sponsor a Student" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-1.5 text-xs text-muted-foreground/80 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100% Transparency. Certified through Hopetohope.org (501c3/Registered Canadian Charity)" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  SchoolProjectPage as component
};
