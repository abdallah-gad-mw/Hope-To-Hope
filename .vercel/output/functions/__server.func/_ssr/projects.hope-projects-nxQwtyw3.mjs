import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Leaf, h as ChevronRight, f as ArrowRight, O as TrendingUp, R as Coins, x as ShieldCheck, B as BookOpen, V as Sprout } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function HopeProjectsPage() {
  const [selectedProject, setSelectedProject] = reactExports.useState(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = reactExports.useState(1);
  const hopeProjects = [{
    id: "girls-education",
    title: "Girls' Education & Menstrual Care",
    tag: "Social Impact & Inclusion",
    problem: "Every month, refugee girls miss a full week of school due to a lack of menstrual products, causing poor academic performance and subsequent school dropouts.",
    solution: "Our Girls’ Education & Menstrual Care Project provides female students with reusable sanitary napkins so they can continue to attend school continuously. This durable solution keeps girls safely in classrooms and directly narrows the gap between boys' and girls’ education.",
    accentBadge: "Durable Reusable Solution",
    imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-coral" }),
    bgGradient: "from-coral/5 to-transparent border-t-2 border-coral"
  }, {
    id: "fuel-future",
    title: "Fuel for the Future",
    tag: "Eco-Sustainability & Climate",
    problem: "Deforestation in Uganda is rapidly increasing due to both refugees and host communities gathering natural firewood needed for cooking food.",
    solution: "This sustainability initiative produces bio-briquettes engineered directly from agricultural residues. These clean bio-briquettes mitigate deforestation, protect the local ecosystem, and keep refugee women completely out of the danger of searching for isolated wood, providing a safe, sustainable fuel source.",
    accentBadge: "Eco-Friendly Biomass Residues",
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "h-5 w-5 text-sky" }),
    bgGradient: "from-sky/5 to-transparent border-t-2 border-sky"
  }];
  const millingMilestones = [{
    label: "Phase 1: Civil Foundation & Shed Structure",
    allocated: "$5,000 USD",
    achievement: "Securing concrete structure, protection fences, and water pipelines.",
    progressPercent: 100,
    unlocked: true,
    notes: "Fully funded and cleared. Construction of the dry milling room footprint is underway inside Kyaka II."
  }, {
    label: "Phase 2: Machinery Procurement & Electrical Setup",
    allocated: "$15,000 USD",
    achievement: "Acquiring electric grinding mills, separators, and packaging units.",
    progressPercent: 62,
    unlocked: true,
    notes: "Currently raising core funding. These high-grade diesel-powered heavy milling rigs will bypass rural power grids."
  }, {
    label: "Phase 3: Logistics, Sacks & Local Employment Startup",
    allocated: "$5,000 USD",
    achievement: "Hiring local refugee women, purchasing sacks, and inventory setup.",
    progressPercent: 0,
    unlocked: false,
    notes: "Awaiting final equipment setup to secure employment contracts for 12 local widowed and vulnerable single mothers."
  }];
  const totalFunded = 14250;
  const fundingTarget = 25e3;
  const overallPercent = Math.round(totalFunded / fundingTarget * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen text-slate-800", style: {
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 mb-6 bg-sky/15 text-sky text-xs font-semibold px-4 py-1.5 rounded-full border border-sky/25", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active Sustainability Pipelines" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-extrabold text-balance", children: [
            "Hope ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase", children: "Innovative and sustainable solutions built for years to come, enabling us to expand our reach and impact." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-balance text-left", children: "At Angels Care Uganda, we strive to not only educate and care for our children and community, but to implement innovative and sustainable development projects that benefit the entire Kyaka II refugee community. The needs of our community are central to the very heart of our projects." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4 select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#projects-in-need", className: "btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2", children: [
              "Explore Support Needs ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#maize-milling-campaign", className: "px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200", children: "Featured: Maize milling" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/assets/images/kids.webp", alt: "Refugee youth working with agricultural products and smiles", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", referrerPolicy: "no-referrer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold leading-tight text-center", children: "Localized Social & Agricultural Resilience" }) })
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects-in-need", className: "py-24 bg-white border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block", children: "Interventions Seeking Donors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-bold tracking-tight", children: "Projects in Need of Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance max-w-xl", children: "We tackle fundamental community and environmental challenges directly on site. Click any project card below to expand details." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch", children: hopeProjects.map((project) => {
        const isSelected = selectedProject === project.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: `project-card-${project.id}`, onClick: () => setSelectedProject(isSelected ? null : project.id), className: `bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer ${isSelected ? "ring-2 ring-sky/50 shadow-md border-sky/30 scale-[1.01]" : "hover:shadow-md hover:border-slate-300"} ${project.bgGradient}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white rounded-xl shadow-sm border border-border/80", children: project.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-100 rounded px-2.5 py-1", children: project.tag })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-coral transition-colors", children: project.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-500/5 hover:bg-red-500/10 border-l-4 border-red-500/40 p-4 rounded-r-xl my-4 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-red-600 mb-1 leading-none uppercase tracking-wide text-[10px]", children: "The Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-600 font-medium leading-relaxed italic text-balance", children: [
                '"',
                project.problem,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed mt-4", children: project.solution })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-slate-50 border-t border-border flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block text-[11px] font-extrabold text-sky tracking-wide uppercase", children: [
              "★ ",
              project.accentBadge
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-xs font-bold text-[#f05153] inline-flex items-center gap-1.5 hover:underline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSelected ? "Collapse Details" : "Read Full Proposal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-4 w-4 transform transition-transform ${isSelected ? "rotate-90" : ""}` })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            height: 0,
            opacity: 0
          }, animate: {
            height: "auto",
            opacity: 1
          }, exit: {
            height: 0,
            opacity: 0
          }, transition: {
            duration: 0.3
          }, className: "overflow-hidden bg-slate-900 text-white border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-sky uppercase text-[11px] tracking-widest mb-1.5", children: "Action Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/85 leading-relaxed", children: "Deploying specialized local monitoring team oversight ensuring targeted, complete distribution. Reusable sanitary towels are sourced from regional cooperatives, fostering indirect micro-economies." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-coral uppercase text-[11px] tracking-widest mb-1.5", children: "Ecological Return" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/85 leading-relaxed", children: "Standard wood collecting trips risk exposure to local forest conflict for female populations. Bio-briquette generation cuts local timber requirements by up to 60%, saving vital resources." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase font-bold text-slate-400 tracking-wider", children: "Estimated Project Cost" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white", children: "$4,500 CAN / Launch Cycle" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org/donate/", target: "_blank", rel: "noopener noreferrer", className: "bg-coral text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full hover:bg-red-600 transition inline-flex items-center gap-2 cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fund This Project" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
              ] })
            ] })
          ] }) }) })
        ] }, project.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "maize-milling-campaign", className: "py-24 bg-slate-50 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block", children: "High-Priority Display Card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl text-ink font-bold tracking-tight mb-6 leading-tight", children: "Self-Sustainability: The Maize Milling Project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-ink font-medium leading-relaxed italic mb-6 text-balance border-l-4 border-coral pl-4", style: {
          fontFamily: "'Playfair Display', serif"
        }, children: "“At Angels Care, our immediate field needs often outweigh the funds we receive in monthly donations. Creating localized income-generation tools is key to becoming a self-sustaining organization. The opportunity lies directly in maize.”" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground text-xs sm:text-sm leading-relaxed text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Angels Care and the surrounding community depend entirely on corn flour for daily nourishment. A maize milling machine will enable us to grind our own maize to feed our school children directly rather than purchasing expensive milled flour." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We will then open a store to employ local refugee women, selling subsidized maize flour to the community while reducing our overall food expenditure. The remaining residues will then feed our local poultry, cattle, and pig farming." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-emerald-50 text-emerald-600 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 animate-pulse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-bold text-ink uppercase tracking-wider", children: "Multi-Stream Sustainability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Flour feeds children; sales generate wages; waste residues feed the farm animals." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 bg-white rounded-3xl border-2 border-coral/20 shadow-xl p-8 sm:p-10 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 mb-8 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-extrabold text-coral tracking-wider", children: "Direct Machinery Funding Drive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl text-ink font-extrabold tracking-tight mt-1", children: "$25,000 USD Needed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "For complete Machinery Procurement & Construction." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 bg-[#f05153]/5 border border-[#f05153]/20 rounded-xl text-xs font-extrabold text-coral flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$14,250 Raised So Far" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 uppercase tracking-widest", children: "Maize milling funding progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-coral font-bold text-sm bg-coral/5 px-2.5 py-1 rounded border border-coral/15", children: [
              overallPercent,
              "% Funded"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-slate-150 rounded-full border border-border overflow-hidden relative group cursor-help", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-[#f05153] to-[#d63d3f] transition-all duration-1000 ease-out relative", style: {
            width: `${overallPercent}%`
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-line-stripes animate-stripe-slide opacity-20" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] text-muted-foreground font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start: Construction footprint cleared" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Goal: Output 20 tons weekly" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4 block", children: "Campaign Project Milestones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: millingMilestones.map((milestone, index) => {
            const isActive = activeMilestoneIndex === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setActiveMilestoneIndex(index), className: `p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left ${isActive ? "bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-[1px]" : "bg-slate-50 text-slate-700 border-border hover:bg-slate-100"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold tracking-wide ${isActive ? "text-sky" : "text-coral"}`, children: milestone.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-mono font-bold ${isActive ? "text-white" : "text-slate-500"}`, children: milestone.allocated })
              ] }),
              isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                height: 0
              }, animate: {
                opacity: 1,
                height: "auto"
              }, className: "text-xs space-y-2 mt-2 pt-2 border-t border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 leading-normal", children: milestone.notes }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-white/5 p-2 rounded", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-sky font-bold uppercase tracking-wide", children: "Status Outcomes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest", children: milestone.progressPercent === 100 ? "✓ 100% Secure" : `● ${milestone.progressPercent}% Subscribed` })
                ] })
              ] })
            ] }, index);
          }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-soft relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none", children: "Resonating Sustainability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-none mb-4 text-balance", children: "“If any of these Hope Projects resonate with you, please consider sponsoring hope today!”" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl", children: "Empowering vulnerable communities through sustainable, holistic development across four interconnected pillars of hope." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org/donate/", target: "_blank", rel: "noopener noreferrer", className: "bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Give Hope Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transform group-hover:translate-x-1 transition-transform" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-1.5 text-xs text-muted-foreground/80 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Certified direct-to-field pipeline through registered 501c3 & Canadian Charities" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  HopeProjectsPage as component
};
