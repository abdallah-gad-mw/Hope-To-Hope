import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { a1 as MapPin, O as TrendingUp, a2 as Compass, c as Sparkles, j as Calendar, a3 as CircleAlert, H as Heart, m as Maximize2, g as Stethoscope, G as GraduationCap, o as Users, X } from "../_libs/lucide-react.mjs";
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
function KyakaIISettlementPage() {
  const [isLightboxOpen, setIsLightboxOpen] = reactExports.useState(false);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-sky/10 blur-[100px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 animate-bounce text-coral" }),
            "Uganda Conflict & Settlement Context"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance", children: [
            "Kyaka II Refugee ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky", children: "Settlement" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl text-balance", children: "The context of our mission. Where resilience meets the urgent need for hope, education, safety, and sustainable development." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#stats", className: "btn-coral rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 shadow", children: [
              "View Vital Statistics ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#history", className: "px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-sm font-semibold transition", children: "Our Regional History" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-3xl bg-sky/10 blur-xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[32px] overflow-hidden border border-border bg-white p-3 shadow-soft group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-2xl overflow-hidden bg-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/Image8.webp", alt: "Aerial overview of the Kyaka II refugee settlement camp showing shelters", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 inset-x-4 glass rounded-xl p-3 border border-white/20 backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-coral font-bold block mb-0.5", children: "Geographic Landscape" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-ink flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4 text-sky" }),
                " South Western Uganda region"
              ] })
            ] })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stats", className: "py-16 md:py-20 bg-white border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-sky font-bold", children: "The Big Picture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-semibold text-ink mt-2", children: "Displacement Scale in Uganda & Kyaka" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-hover bg-soft border border-border rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-border/50 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold text-xs uppercase tracking-wider block mb-2", children: "Nationwide Influx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl md:text-6xl font-black text-ink tracking-tight block font-display", children: "1.5 Million+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-12 bg-coral rounded mt-4 block" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground mt-6 leading-relaxed", children: "Refugees seeking safety and asylum across Uganda nationwide, making it the largest refugee-hosting nation in all of Africa." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-hover bg-gradient-to-b from-sky/5 to-white border-2 border-sky rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky/20 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky font-bold text-xs uppercase tracking-wider block mb-2", children: "Local Camp Density" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl md:text-6xl font-black text-ink tracking-tight block font-display", children: "130,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-12 bg-sky rounded mt-4 block" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-ink font-medium mt-6 leading-relaxed", children: "Vulnerable individuals hosted inside Kyaka II Settlement. Integrating refugee families with the surrounding Ugandan nationals." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "history", className: "py-24 md:py-32 bg-soft border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16 md:mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
          " Settlement Framework"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-[1.1]", children: "History, Zone & Scale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-base md:text-lg", children: "Kyaka II represents a vast landscape housing several generations of displaced populations under sustainable developmental integration." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 card-hover bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs text-sky font-semibold uppercase tracking-wider mb-6 bg-sky/10 px-3 py-1 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
              " Historical Timeline"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-semibold text-ink tracking-tight font-display", children: "Origin & Scale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-balance", children: "Located in South Western Uganda, the Government of Uganda created the Kyaka I Settlement in 1984 to address the heavy influx of Rwandan refugees fleeing conflict. In 2005, Kyaka I was merged with Kyaka II." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-balance", children: [
              "Today, the total settlement encompasses",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink font-bold", children: "nine administrative zones" }),
              ", stretching across a vast land area of approximately",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink font-bold", children: "81.5 km²" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-border pt-6 flex items-center gap-4 text-xs font-semibold text-sky", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            " Comprehensive Zonal Regional Planning"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 card-hover bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-coral/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs text-coral font-semibold uppercase tracking-wider mb-6 bg-coral/10 px-3 py-1 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5" }),
              " Humanitarian Crisis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-semibold text-ink tracking-tight font-display", children: "The Congo Crisis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed", children: "In December of 2017, the settlement faced a massive humanitarian refugee influx, as thousands and thousands of families crossed the border fleeing intense ethnic violence and political conflicts inside the Democratic Republic of the Congo (DRC)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed", children: "Today, the grand majority of the refugee population hosted inside Kyaka II is of Congolese nationality, a number that continues to grow with ongoing rebel activity across the border." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-border pt-6 flex items-center gap-2 text-xs font-semibold text-coral/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-current text-coral" }),
            " Caring for displaced families since day one."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-12 rounded-[32px] border border-border bg-white shadow-soft p-8 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky font-bold mb-4", children: "Verified UNHCR Data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-semibold text-ink font-display", children: "Uganda Refugee Statistics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-muted-foreground leading-relaxed", children: "Review the official UNHCR statistical profile dashboard map for the Kyaka II Refugee Settlement. This certified data outlines country of origin breakdown, age brackets, occupation segments, and vulnerability indexes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsLightboxOpen(true), className: "mt-6 self-start inline-flex items-center gap-2 text-xs font-bold text-coral bg-coral/5 hover:bg-coral/10 border border-coral/10 hover:border-coral/20 px-4 py-2.5 rounded-xl transition cursor-pointer", children: [
              "Expand UNHCR Profile ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3.5 w-3.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setIsLightboxOpen(true), className: "relative rounded-2xl overflow-hidden border border-border bg-soft group cursor-zoom-in group shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/Kyaka+II+Settlement+Profile_31Jan2022+(1).webp", alt: "UNHCR Kyaka II settlement statistical profile map from January 2022", className: "w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass rounded-full p-4 border border-white/20 text-ink shadow flex items-center gap-2 font-semibold text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4 text-coral" }),
              " Click to View Detailed Map"
            ] }) })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-6 bg-gradient-to-br from-[#fef5f5] to-[#fffcfc] border-b border-border text-center overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 h-64 w-64 rounded-full bg-coral/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-coral/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/10 px-3.5 py-1.5 rounded-full border border-coral/15 mb-6", children: "Demographic Reality" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-6xl sm:text-7xl md:text-8xl font-black text-coral font-display tracking-tight leading-none", children: "77%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl sm:text-3xl md:text-4xl text-ink font-semibold tracking-tight text-balance max-w-2xl font-display leading-snug", children: "of Kyaka II’s refugee population are Women and Children." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-balance", children: "Investing in early primary education, youth vocational empowerment, and women's specialized health-care clinics is not just an initiative—it is paramount to easing the heavy, daily burdens refugees in Kyaka II face every single day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-16 bg-coral/40 rounded mt-8" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "response", className: "py-24 md:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0ea5e9] font-bold mb-4", children: "Active Field Intervention" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl text-ink leading-tight font-semibold tracking-tight", children: [
          "Our Frontline Response — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Angels Care Medical Clinic" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-muted-foreground text-base md:text-lg leading-relaxed", children: [
          "Within the massive landscape of the settlement, the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink font-bold", children: "Angels Care Medical Clinic" }),
          " stands proudly as one of only three medical clinics serving this entire population of 130,000. It is in this exact context of Kyaka II that Angels Care Uganda works day and night to bring hope to refugees."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 relative rounded-3xl p-6 md:p-8 bg-soft border border-sky/20 overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-sky" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-sky uppercase tracking-wider mb-2", children: "Our Mission Command" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink font-medium text-base sm:text-lg italic leading-relaxed text-balance", children: "“By meeting core educational, medical, and social needs, our mission is to bring immediate relief and long-term sustainable development to this community in need.”" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/medical-centre", className: "btn-coral rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2 shadow cursor-pointer justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-4 w-4" }),
            " Support Our Medical Clinic"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/school", className: "px-6 py-3.5 rounded-full border-2 border-sky/60 hover:border-sky bg-white hover:bg-sky/5 text-ink text-sm font-semibold inline-flex items-center gap-2 transition cursor-pointer justify-center", style: {
            borderColor: "var(--color-sky)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-sky" }),
            " Explore Our School Programs"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-coral/10 -rotate-3 transform -translate-x-4 scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/kids.webp", alt: "Happy children at Angels Care school smiling", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-8 -right-6 md:-right-8 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl group hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/school/2.webp", alt: "Active learning session", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 -left-4 bg-coral text-white rounded-2xl px-5 py-3 shadow-coral flex flex-col items-center justify-center font-display", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-bold opacity-80", children: "Est." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold tracking-tight", children: "2008" })
        ] })
      ] }) })
    ] }) }) }),
    mounted && reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isLightboxOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 0.3
    }, className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center cursor-zoom-out", onClick: () => setIsLightboxOpen(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl flex justify-between items-center text-white mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-widest text-sky font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
          " UNHCR January 2022 Statistics Profile"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
          e.stopPropagation();
          setIsLightboxOpen(false);
        }, className: "p-2 rounded-full hover:bg-white/10 transition text-white/80 hover:text-white cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        scale: 0.95,
        y: 15
      }, animate: {
        scale: 1,
        y: 0
      }, exit: {
        scale: 0.95,
        y: 15
      }, transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }, className: "relative max-w-6xl max-h-[80vh] overflow-auto rounded-xl border border-white/10 bg-black shadow-2xl", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/Kyaka+II+Settlement+Profile_31Jan2022+(1).webp", alt: "Detailed UNHCR Refugee Statistics map from OPM Progress version 4", className: "w-full h-auto object-contain max-h-[80vh]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 text-xs mt-4 italic max-w-xl leading-relaxed", children: "*Source: United Nations High Commissioner for Refugees (UNHCR) & Office of the Prime Minister (OPM) ProGreq version 4." })
    ] }) }), document.body)
  ] });
}
export {
  KyakaIISettlementPage as component
};
