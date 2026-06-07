import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as HeartHandshake, H as Heart, f as ArrowRight, G as GraduationCap, g as Stethoscope, h as ChevronRight, i as Mail, P as Phone, a as CircleCheck } from "../_libs/lucide-react.mjs";
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
const HERO_IMG = "/src/assets/images/hero.webp";
function IndexPage() {
  const [formSubmitted, setFormSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [activeVideo, setActiveVideo] = reactExports.useState(false);
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 5e3);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[100vh] w-full overflow-hidden flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: HERO_IMG, alt: "Refugee children smiling together in Kyaka II", className: "w-full h-full object-cover grayscale-[10%]", loading: "eager", referrerPolicy: "no-referrer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-white py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "inline-flex items-center gap-2 bg-coral/10 border border-coral/35 text-coral rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "h-4 w-4 animate-pulse" }),
          " Established 2008"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 25
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, className: "text-5xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-balance font-sans", children: [
          "Hope for refugee children through",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "education and care" }),
          " since 2008."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "text-white/80 text-base md:text-lg max-w-xl leading-relaxed", children: "Dedicated to lifting Orphans and Vulnerable Children (OVCs) in the Kyaka II Refugee Settlement through sustainable programs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 35
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          delay: 0.3
        }, className: "flex flex-wrap gap-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/hope-family", className: "btn-coral rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all", children: [
            "Join the Hope Family ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-current" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#vision", className: "bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-white/20 rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center  gap-2 transition-all", children: "Discover Our Story" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "vision", className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block", children: "Our Purpose" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-3xl md:text-3xl text-ink font-semi-bold tracking-tight leading-[1.1] text-balance", children: [
          "Educate and raise the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "leaders of tomorrow" }),
          " ",
          "through innovative and sustainable development."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-[#1cbee7] rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-sm sm:text-base font-normal", children: "Our work in the Kyaka II refugee settlement is diverse and our impact is widespread. Operating within South Western Uganda where over 1.5 million refugees seek safety, Kyaka II hosts over 130,000 individuals—77% of whom are vulnerable women and children fleeing internal conflict in the Democratic Republic of the Congo." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 leading-relaxed text-sm sm:text-base font-normal", children: "Angels Care works alongside the Ugandan government, UNHCR initiatives, and global partners like Kings Temple Missionary Society (KTMS) to bring relief, education, and social care to refugees seeking a stable future. Our vision is to equip the children of today to be the leaders of tomorrow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about/our-vision", className: "text-sm font-bold text-coral inline-flex items-center gap-1 group hover:translate-x-1 transition-transform", children: [
          "Explore Our Full Vision ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative", "data-aos": "fade-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#f05153]/5 rounded-[2.5rem] -rotate-6 scale-95" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#1cbee7]/10 rounded-[2.5rem] rotate-3 scale-98 border-2 border-[#1cbee7]/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/kids.webp", alt: "Refugee children inside Angels Care primary school classroom", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105", loading: "lazy", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 right-5 bg-white/90 backdrop-blur rounded-xl p-3 border border-border flex items-center gap-3 shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/Uganda-Stamp.webp", alt: "Uganda Stamp Official branding", onError: (e) => {
            e.currentTarget.style.display = "none";
          }, className: "h-10 w-auto opacity-90 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-ink uppercase tracking-wider", children: "Angels Care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "Certified Partner" })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-soft border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block mb-4", children: "Organization Metrics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl text-ink font-semi-bold tracking-tight", children: "Our Measured Impact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground mt-2", children: "Transforming raw tracking statistics into clear channels of localized progress." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1cbee7] font-semibold text-xs tracking-wider uppercase bg-[#1cbee7]/5 px-2.5 py-1 rounded", children: "Education Scale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold text-ink mt-6", children: "1,000+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-ink mt-1", children: "Active Students" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 leading-relaxed", children: "Enrolled in our nursery and elementary tracks spanning from Kindergarten to Primary 7 classes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1cbee7] font-semibold text-xs tracking-wider uppercase bg-[#1cbee7]/5 px-2.5 py-1 rounded", children: "Demographics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold text-ink mt-6", children: "80% / 20%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-ink mt-1", children: "Refugee vs Local Host" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-2 w-full rounded-full bg-slate-100 overflow-hidden flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-[#1cbee7]", style: {
                  width: "80%"
                }, title: "80% Refugee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-coral", style: {
                  width: "20%"
                }, title: "20% Host Colony" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[9px] text-muted-foreground font-black uppercase mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Refugee (80%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Host (20%)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 leading-relaxed", children: "Serving conflict survivors alongside the local host colony families in high-unity settings." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral font-semibold text-xs tracking-wider uppercase bg-coral/5 px-2.5 py-1 rounded", children: "Vulnerable Safeguarding" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold text-ink mt-6", children: "130" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-ink mt-1", children: "Sponsored Orphans" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 leading-relaxed", children: "Receiving total protection shelter, balanced nutrition, clothing, education fees, and full medical coverage." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral font-semibold text-xs tracking-wider uppercase bg-coral/5 px-2.5 py-1 rounded", children: "Healthcare Crisis Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold text-ink mt-6", children: "2,800+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-ink mt-1", children: "Daily Medical Needs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 leading-relaxed", children: "ACMC serves as one of only three clinics answering healthcare needs for an overwhelmed settlement population." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", "data-aos": "fade-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block", children: "OUR EDUCATION STRACETGY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-3xl md:text-3xl font-bold text-ink  tracking-tight leading-[1.1] text-balance font-sans", children: "Angels Care School: Nurturing the Leaders of Tomorrow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-[#1cbee7] rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal", children: "Operating inside the heart of the Kyaka II refugee settlement and host community, our nursery and primary schools provide a sanctuary of learning for over 1,000 active students from Kindergarten through Primary 7. Fleeing severe instability in the DRC, these children find not only safety but an elite academic track." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal", children: "Despite facing profound resource limitations and accommodating an average of 120 eager children per classroom, our dedicated faculty inspires excellence—resulting in our students achieving the top scores in nationwide educational evaluations within the entire settlement region." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/school", className: "bg-coral hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all cursor-pointer", children: [
          "Explore Our School Curriculum & Needs ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 relative", "data-aos": "fade-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#f05153]/5 rounded-[2.5rem] -rotate-6 scale-95" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#1cbee7]/10 rounded-[2.5rem] rotate-3 scale-98 border-2 border-[#1cbee7]/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/school/2.webp", alt: "Refugee children inside Angels Care primary school classroom", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105", loading: "lazy", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-coral/10 text-coral", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase text-coral tracking-widest", children: "Settlement Rank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-ink", children: "#1 Score Nationwide" })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-soft border-t border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 order-2 lg:order-1 relative", "data-aos": "fade-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#1cbee7]/5 rounded-[2.5rem] -rotate-3 scale-95" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#f05153]/10 rounded-[2.5rem] rotate-6 scale-98 border-2 border-[#f05153]/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/107050000_579153106133552_4669114132287895332_n.webp", alt: "Medical clinic response checkup within settlement region", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105", loading: "lazy", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 left-4 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-sky/10 text-[#1cbee7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase text-[#1cbee7] tracking-widest", children: "ACMC Clinic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-ink", children: "24/7 Life-Saving Care" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 order-1 lg:order-2 space-y-6", "data-aos": "fade-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block", children: "CRITICAL HEALTHCARE RESPONSE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-3xl md:text-3xl text-ink font-bold tracking-tight leading-[1.1] text-balance font-sans", children: "Angels Care Medical Centre: 24/7 Life-Saving Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-coral rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal", children: "A visionary project five years in the making, the Angels Care Medical Centre (ACMC) stands as a vital beacon of health, operating round-the-clock to manage critical emergencies. Positioned as one of only three operational medical facilities servicing a swelling refugee population of over 130,000 individuals, ACMC answers up to 2,800 urgent healthcare requests daily." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal", children: "To ensure true humanitarian relief, our medical treatments are fully subsidized—priced 40% lower than standard private clinics—while extending 100% free comprehensive healthcare to every student enrolled in Angels Care School." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/medical-centre", className: "bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-border rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer", children: [
          "View Clinic Infrastructure & Medical Services",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-white" })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white border-t border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", "data-aos": "fade-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block", children: "CHILD SAFEGUARDING & FAMILY INFRASTRUCTURE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-3xl md:text-3xl text-ink font-bold tracking-tight leading-[1.1] text-balance font-sans", children: "Angels Care Orphanage: A Sanctuary of Pure Compassion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-[#1cbee7] rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal", children: "No child should ever face the trauma of displacement in isolation. The Angels Care Orphanage program acts as a loving shield for 130 fully sponsored orphans, providing complete security, nutrition, clothing, medical care, and permanent educational support." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm sm:text-base leading-relaxed font-normal", children: "Our model is deeply community-driven: while 15 highly vulnerable orphans reside directly within the warm family household of Pastor Godfrey, our robust sponsorship network allows us to integrate 115 orphans into vetted, loving foster care homes safely distributed across the Kyaka II refugee community." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/orphanage", className: "bg-coral hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all cursor-pointer", children: [
          "Sponsor a Refugee Child Today ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 relative", "data-aos": "fade-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#f05153]/10 rounded-[2.5rem] rotate-3 scale-95" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#1cbee7]/5 rounded-[2.5rem] -rotate-6 scale-98 border-2 border-[#1cbee7]/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/Image38-2sized.webp", alt: "Refugee children growing in our community safe foster network", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105", loading: "lazy", referrerPolicy: "no-referrer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-coral/10 text-coral", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 stroke-coral fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase text-coral tracking-widest", children: "Active Guardians" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-ink", children: "130 Children Sponsored" })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-soft border-t border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block mb-4", children: "Sustainability Initiatives" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-3xl text-ink font-bold tracking-tight mb-4", children: "Innovative Community Development Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[500px] m-auto", children: "Creating localized income generation and environmental tools to foster self-sustainability within the Kyaka II refugee settlement." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-8 rounded-3xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-[#1cbee7] uppercase tracking-wider", children: "Project A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-ink mt-3 mb-2", children: "Girls' Education & Menstrual Care" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Providing reusable sanitary napkins and personal care products to female students on campus to completely eliminate sanitary-related school dropouts and absences." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-8 rounded-3xl border border-border flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-[#1cbee7] uppercase tracking-wider", children: "Project B" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-ink mt-3 mb-2", children: "Fuel for the Future" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Producing engineered bio-briquettes from community agricultural residuals to serve as deforestation alternatives, mitigation fuel, and protect women from isolation wood searches." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-8 rounded-3xl border border-border  flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-coral uppercase tracking-wider", children: "Project C" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-ink mt-3 mb-2", children: "Self-Sustainability Corn Milling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "A target campaign for a $25,000 USD Maize Milling Machine to locally grind community corn flour, slash school feeding expenses by 50%, and employ resident women." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/hope-projects", className: "bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-border rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 transition", children: [
        "Explore Sustainable Projects ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block", children: "Founder Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif absolute -top-14 -left-6 text-[150px] leading-none text-coral/10 select-none font-black", children: "“" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "relative text-2xl sm:text-3.5xl md:text-4xl text-ink italic font-extrabold leading-tight tracking-tight mb-6 text-balance", children: '"The children of today will be the leaders of tomorrow."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("cite", { className: "not-italic text-sm sm:text-base font-bold text-ink uppercase tracking-wider block", children: [
            "— Byaruhanga Godfrey, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "CEO and Founder" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground block mt-1 uppercase tracking-widest", children: "Angels Care Uganda" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto rounded-xl overflow-hidden shadow-md aspect-video max-w-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Watch a Firsthand Look at Angels Care", src: "https://www.youtube.com/embed/fstkH_h4BM4", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "w-full h-full" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] overflow-hidden border border-border bg-ink text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/hero.webp", alt: "Angels Care Uganda community assembly with children", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/80 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 md:w-3/5 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 bg-sky/20 border border-sky/30 text-sky text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4", children: "Life at Angels Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-semibold tracking-tight leading-none text-white", children: "Our Team in Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-gray-300 leading-relaxed", children: "Empowering the 900+ active scholars of Kyaka II refugee camp daily. Through classroom schedules, outdoor assemblies, sports tournaments, and food programs, we stand unified to nurture the regional leaders of tomorrow." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org/donate/", target: "_blank", rel: "noopener noreferrer", className: "btn-coral rounded-full px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-center inline-flex items-center justify-center gap-2 hover:shadow-coral", children: [
        "Support our School Meal Program ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-white" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-3xl text-ink font-bold tracking-tight leading-tight", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-[#1cbee7] rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-slate-700 leading-relaxed font-normal", children: "We would love to answer any further questions you may have about Angels Care Uganda! You can reach our team at the following info:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:angelscareuganda.info@gmail.com", className: "flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-coral/20 hover:shadow-sm transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 shrink-0 rounded-full bg-coral/5 border border-coral/15 text-coral", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-ink select-all", children: "angelscareuganda.info@gmail.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+16043605868", className: "flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-sky/20 hover:shadow-sm transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 shrink-0 rounded-full bg-[#1cbee7]/5 border border-[#1cbee7]/15 text-[#1cbee7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-ink select-all", children: "(604) 360-5868" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 bg-soft rounded-3xl p-6 sm:p-10 border border-border", children: formSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-50 border border-emerald-150 rounded-2xl p-8 flex flex-col items-center justify-center text-center animate-fadeIn min-h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-emerald-500 mb-4 animate-bounce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-emerald-900", children: "Message Sent Successfully!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-emerald-700 mt-2 max-w-md leading-relaxed", children: [
          "Thank you, ",
          formData.name,
          '. We have received your inquiry regarding "',
          formData.subject || "Angels Care Uganda",
          '" and our team on the ground will respond to ',
          formData.email,
          " as soon as possible."
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleContactSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-name", className: "block text-[10px] uppercase font-bold tracking-widest text-[#1cbee7] mb-2", children: "Your Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-name", type: "text", required: true, placeholder: "Byaruhanga Godfrey", value: formData.name, onChange: (e) => setFormData({
              ...formData,
              name: e.target.value
            }), className: "w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-email", className: "block text-[10px] uppercase font-bold tracking-widest text-[#1cbee7] mb-2", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-email", type: "email", required: true, placeholder: "godfrey@example.com", value: formData.email, onChange: (e) => setFormData({
              ...formData,
              email: e.target.value
            }), className: "w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-subject", className: "block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-subject", type: "text", placeholder: "How would you like to support us?", value: formData.subject, onChange: (e) => setFormData({
            ...formData,
            subject: e.target.value
          }), className: "w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-message", className: "block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "contact-message", required: true, rows: 5, placeholder: "I am interested in supporting the children...", value: formData.message, onChange: (e) => setFormData({
            ...formData,
            message: e.target.value
          }), className: "w-full rounded-3xl border border-border bg-white px-5 py-4 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15 resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-coral rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-transform hover:scale-102 w-full sm:w-auto", children: [
          "Send Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) })
    ] }) }) })
  ] });
}
export {
  IndexPage as component
};
