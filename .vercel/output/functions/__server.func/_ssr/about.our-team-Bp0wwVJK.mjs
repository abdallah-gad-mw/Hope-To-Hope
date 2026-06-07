import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { o as Users, h as ChevronRight, c as Sparkles, x as ShieldCheck, _ as ExternalLink, p as School, H as Heart, $ as Search, X, a as CircleCheck, a0 as HandHelping, i as Mail, J as MessageSquare, n as Globe } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function OurTeamPage() {
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedStaff, setSelectedStaff] = reactExports.useState(null);
  const [isLiaisonContactOpen, setIsLiaisonContactOpen] = reactExports.useState(false);
  const [liaisonSubject, setLiaisonSubject] = reactExports.useState("");
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (selectedStaff || isLiaisonContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStaff, isLiaisonContactOpen]);
  const [heroImageSrc, setHeroImageSrc] = reactExports.useState("/src/assets/images/107050000_579153106133552_4669114132287895332_n.webp");
  const [galleryImageSrc, setGalleryImageSrc] = reactExports.useState("/src/assets/images/WhatsApp+Image+2020-12-06+at+04.27.32.webp");
  const handleHeroImageError = () => {
    setHeroImageSrc("https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80");
  };
  const handleGalleryImageError = () => {
    setGalleryImageSrc("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80");
  };
  const staffMembers = [
    // Teachers
    {
      id: "alinda-george",
      name: "Alinda George",
      role: "Head Teacher",
      category: "teaching",
      initials: "AG",
      grad: "Bachelor of Education (MUK)",
      avatarBg: "from-sky/80 to-sky",
      bio: "Leads school administration and curriculum planning. George ensures academic standards are maintained and matches child support with high quality learning."
    },
    {
      id: "bamwesigye-daniel",
      name: "Bamwesigye Daniel",
      role: "Deputy Head Teacher",
      category: "teaching",
      initials: "BD",
      grad: "Diploma in Primary Education",
      avatarBg: "from-coral/30 to-coral/10",
      bio: "Coordinates academic timetables, co-curricular sports, and general safety policies for our 900+ registered students."
    },
    {
      id: "nagasha-eden",
      name: "Nagasha Eden",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "NE",
      grad: "Early Childhood Teacher",
      avatarBg: "from-sky/30 to-coral/10"
    },
    {
      id: "kansiime-mwajabu",
      name: "Kansiime Mwajabu",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "KM",
      grad: "Primary Education Grade III Cert",
      avatarBg: "from-coral/20 to-sky/20"
    },
    {
      id: "angabire-mary-gorret",
      name: "Angabire Mary Gorret",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "AM",
      grad: "Grade III Teaching Certificate",
      avatarBg: "from-sky/40 to-sky/20"
    },
    {
      id: "twesigomwe-jonathan",
      name: "Twesigomwe Jonathan",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "TJ",
      grad: "Primary Specialist Teacher",
      avatarBg: "from-coral/40 to-coral/10"
    },
    {
      id: "nzamurambaho-george",
      name: "Nzamurambaho George",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "NG",
      grad: "Science & Math Specialist",
      avatarBg: "from-sky/50 to-coral/25"
    },
    {
      id: "ninsiima-catheline",
      name: "Ninsiima Catheline",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "NC",
      grad: "Languages Teacher",
      avatarBg: "from-coral/35 to-coral/15"
    },
    {
      id: "nkarubo-mary",
      name: "Nkarubo Mary",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "NM",
      grad: "Lower Primary Specialist",
      avatarBg: "from-sky/30 to-coral/20"
    },
    {
      id: "tuhaise-balongo",
      name: "Tuhaise Balongo",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "TB",
      grad: "Grade III Educator",
      avatarBg: "from-coral/30 to-sky/30"
    },
    {
      id: "baguma-maria",
      name: "Baguma Maria",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "BM",
      grad: "Primary Methods Cert",
      avatarBg: "from-sky/35 to-sky/15"
    },
    {
      id: "kabugho-rehema",
      name: "Kabugho Rehema",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "KR",
      grad: "Language Arts",
      avatarBg: "from-coral/25 to-coral/10"
    },
    {
      id: "jafoyombe-paul",
      name: "Jafoyombe Paul",
      role: "Classroom Teacher",
      category: "teaching",
      initials: "JP",
      grad: "Primary Grade III Cert",
      avatarBg: "from-sky/40 to-sky/10"
    },
    // Support Staff
    {
      id: "turyamureba-vanansio",
      name: "Turyamureba Vanansio",
      role: "Security Guard",
      category: "support",
      initials: "TV",
      grad: "Campus Safety & Field Security",
      avatarBg: "from-ink/10 to-ink/30"
    },
    {
      id: "vuguziga-emmanuel",
      name: "Vuguziga Emmanuel",
      role: "Lead Cook",
      category: "support",
      initials: "VE",
      grad: "Nutrition & Mess Coordinator",
      avatarBg: "from-coral/20 to-coral/10"
    },
    {
      id: "turyaheebwa-atanazio",
      name: "Turyaheebwa Atanazio",
      role: "Cook",
      category: "support",
      initials: "TA",
      grad: "Meal Prep Specialist",
      avatarBg: "from-sky/20 to-sky/10"
    },
    {
      id: "twongirwe-saliva",
      name: "Twongirwe Saliva",
      role: "Cook",
      category: "support",
      initials: "TS",
      grad: "Meal Prep Specialist",
      avatarBg: "from-coral/15 to-sky/15"
    },
    // International Liaison (Hopetohope.org Contacts)
    {
      id: "robert-tarnowski",
      name: "Robert Tarnowski",
      role: "Canadian Liaison & Coordinator",
      category: "liaison",
      initials: "RT",
      grad: "Hopetohope.org Partnership Director",
      avatarBg: "from-sky/50 to-sky",
      bio: "Manages donor transparency, reporting metrics, and international support funds crossing Canada and USA to the Field operations in Kyaka II Refugee Settlement."
    },
    {
      id: "tatum-bergen",
      name: "Tatum Bergen",
      role: "Canadian Support Partners Liaison",
      category: "liaison",
      initials: "TB",
      grad: "Hopetohope.org Support Liaison",
      avatarBg: "from-coral/40 to-coral",
      bio: "Coordinates sponsor outreach, children messaging systems, community fundraising projects, and field reporting updates."
    }
  ];
  const filteredStaff = staffMembers.filter((staff) => {
    const matchesTab = activeTab === "all" || staff.category === activeTab;
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) || staff.role.toLowerCase().includes(searchQuery.toLowerCase()) || staff.grad && staff.grad.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-sky/10 blur-[100px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-start reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-coral animate-pulse" }),
            "Staff Members & Coordinators"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance", children: [
            "Meet Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Dedicated" }),
            " Team"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl text-balance", children: "“Dedicated staff with a heart to serve the children and community.”" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground/90 text-sm md:text-base leading-relaxed max-w-xl", children: "At Angels Care Uganda, our local educators, admin leaders, and supportive caretakers work tirelessly in Kyaka II Refugee Settlement. We provide educational foundations, security, health initiatives, and compassionate mentorship to empower 900+ active students daily." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#directory", className: "btn-coral rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 shadow", children: [
              "Explore Directory ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#leadership", className: "px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-sm font-semibold transition", children: "Our Leadership" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative flex items-center justify-center reveal reveal-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/5] xl:aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-coral/10 -rotate-3 transform -translate-x-4 scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-3xl bg-sky/10 rotate-2 transform translate-x-3 scale-102" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-white p-3 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full rounded-2xl overflow-hidden bg-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImageSrc, alt: "Teaching staff at Angels Care School standing proudly", onError: handleHeroImageError, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/20 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold leading-snug", children: "Our teachers in front of Angels Care Primary School inside Kyaka II settlement." }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 -left-4 bg-coral text-white rounded-2xl px-4 py-3 shadow-coral flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest font-bold opacity-80", children: "Est." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold tracking-tight", children: "2008" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "leadership", className: "py-24 bg-soft border-border relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-3 py-1 rounded-full border border-sky/10 mb-4", children: "Governing Bodies & Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight", children: "Senior Leadership & Field Directors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed text-balance", children: "Driven by conviction, experience, and local expertise. Our leadership steers the vision, finances, operations, and academic excellence of Angels Care." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 flex flex-col h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-grow flex flex-col rounded-[2.2rem] bg-white p-8 border-2 border-coral shadow-coral/10 hover:shadow-coral/20 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-coral/5 to-transparent rounded-tr-full pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-6 right-6 flex items-center gap-1.5 bg-coral text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            " Founder & ED"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-gradient-to-tr from-coral to-[#f37c7e] text-white font-display text-4xl flex items-center justify-center font-bold shadow opacity-90 transition-transform duration-500 group-hover:rotate-6", children: "BG" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -left-2 bg-white rounded-full p-1.5 shadow-sm border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-coral" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex-grow flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl text-ink font-semibold", children: "Byaruhunga Godfrey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-coral mt-1 uppercase tracking-wider", children: "Executive Director & Founder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Godfrey founded Angels Care Uganda in 2008 inside Kyaka II Refugee Settlement with a bold goal: guaranteeing education, medical access, and shelter to children fleeing regional conflicts. Under his stewardship, the school evolved from basic temporary straw shelters to a fully active, certifiable educational campus hosting 900+ scholars." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/80 font-mono", children: "Status: Founder & ED" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org", target: "_blank", rel: "noopener noreferrer", className: "text-xs font-semibold text-coral inline-flex items-center gap-1 hover:underline", children: [
                "Field Liaison ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white p-6 border border-border/80 card-hover flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-sky/10 text-ink font-display text-xl flex items-center justify-center font-semibold border border-sky/25", children: "AG" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-ink font-semibold group-hover:text-coral transition-colors", children: "Alinda George" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground/80", children: "Head Teacher" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-xs leading-relaxed", children: "Leads core primary school operations, academic curriculum design, and instructional planning across standard subjects. Focuses on local staff development." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80 bg-soft px-2.5 py-1 rounded-md border border-border/30", children: "Teaching Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sky", children: "Academic Head" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white p-6 border border-border/80 card-hover flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-sky/10 text-ink font-display text-xl flex items-center justify-center font-semibold border border-sky/25", children: "BD" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-ink font-semibold group-hover:text-coral transition-colors", children: "Bamwesigye Daniel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground/80", children: "Deputy Head Teacher" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-xs leading-relaxed", children: "Oversees student affairs, classroom activities, disciplinary affairs, and field events for safe settlement learning. Coordinates teaching schedules." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80 bg-soft px-2.5 py-1 rounded-md border border-border/30", children: "Teaching Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sky", children: "Co-Management" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white p-6 border border-border/80 card-hover flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-coral/5 text-ink font-display text-xl flex items-center justify-center font-semibold border border-coral/10", children: "SW" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-ink font-semibold group-hover:text-coral transition-colors", children: "Sangwa Willy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground/80", children: "School Bursar" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-xs leading-relaxed", children: "Controls budget allocations, tracks donor funding transfers, manages vendor agreements, and coordinates field project financial sheets." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80 bg-soft px-2.5 py-1 rounded-md border border-border/30", children: "Finance Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-coral", children: "Finance Lead" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white p-6 border border-border/80 card-hover flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-coral/5 text-ink font-display text-xl flex items-center justify-center font-semibold border border-coral/10", children: "DA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-ink font-semibold group-hover:text-coral transition-colors", children: "Dusengeyezu Auginia" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground/80", children: "Secretary & Admin Assistant" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-xs leading-relaxed", children: "Coordinates file databases, handles child registration forms, student rosters, and logs reports matching international liaisons." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80 bg-soft px-2.5 py-1 rounded-md border border-border/30", children: "Administration Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-coral", children: "Administration" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] overflow-hidden border border-border bg-ink text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: galleryImageSrc, alt: "Angels Care Uganda community assembly with children", onError: handleGalleryImageError, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/80 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 md:w-3/5 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 bg-sky/20 border border-sky/30 text-sky text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(School, { className: "h-3 w-3" }),
          " Life at Angels Care"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-semibold tracking-tight leading-none text-white", children: "Our Team in Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-gray-300 leading-relaxed", children: "Empowering the 900+ active scholars of Kyaka II refugee camp daily. Through classroom schedules, outdoor assemblies, sports tournaments, and food programs, we stand unified to nurture the regional leaders of tomorrow." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.theforgottenintl.org/donate/", target: "_blank", rel: "noopener noreferrer", className: "btn-coral rounded-full px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-center inline-flex items-center justify-center gap-2 hover:shadow-coral", children: [
        "Support our School Meal Program ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-white" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "directory", className: "py-24 bg-soft border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-3 inline-block", children: "Interactive Directory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl text-ink font-semibold tracking-tight", children: "Our Dedicated Professionals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm md:text-base", children: "Click tabs to filter our teaching staff, campus support crew, and international liaison partners. Use the input field to find staff by name or role." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 md:mt-0 max-w-sm w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground/60" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search staff by name/qualification...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full bg-white text-ink border border-border pl-10 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition" }),
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchQuery(""), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-border overflow-x-auto scrollbar-none mb-10 gap-8", children: [{
        id: "all",
        label: "All Team"
      }, {
        id: "teaching",
        label: "Teaching Staff"
      }, {
        id: "support",
        label: "Support Staff"
      }, {
        id: "liaison",
        label: "International Liaison"
      }].map((tab) => {
        const isActive = activeTab === tab.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(tab.id), className: `py-4 px-1 text-sm font-semibold relative transition-colors cursor-pointer whitespace-nowrap outline-none ${isActive ? "text-coral" : "text-muted-foreground hover:text-ink"}`, children: [
          tab.label,
          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layoutId: "activeTabBorder", className: "absolute bottom-0 left-0 right-0 h-0.5 bg-coral", transition: {
            type: "spring",
            stiffness: 350,
            damping: 30
          } })
        ] }, tab.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filteredStaff.map((staff) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, exit: {
          opacity: 0,
          scale: 0.9
        }, transition: {
          duration: 0.35,
          ease: "easeInOut"
        }, onClick: () => {
          if (staff.bio || staff.grad) {
            setSelectedStaff(staff);
          }
        }, className: `rounded-2xl p-5 border border-border/70 bg-white shadow-sm flex flex-col justify-between transition-all duration-300 ${staff.bio || staff.grad ? "cursor-pointer hover:shadow-md hover:border-coral/20" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-11 w-11 rounded-lg bg-gradient-to-tr ${staff.avatarBg} text-ink font-display text-sm font-bold flex items-center justify-center border border-black/5 shadow-inner`, children: staff.initials }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-soft border border-border/40 px-2.5 py-1 rounded-full", children: staff.category === "teaching" ? "Educator" : staff.category === "support" ? "Support Crew" : "Hopetohope" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base text-ink line-clamp-1", children: staff.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/90 font-medium tracking-tight mt-0.5 line-clamp-1", children: staff.role })
            ] }),
            staff.grad && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] font-mono text-coral/80 bg-coral/5 border border-coral/10 px-2 py-1 rounded-md inline-block", children: staff.grad })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/80 font-medium", children: "Kyaka II Mission" }),
            (staff.bio || staff.grad) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-coral hover:underline font-semibold flex items-center", children: [
              "Read Bio ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
            ] })
          ] })
        ] }, staff.id)) }),
        filteredStaff.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full py-16 text-center text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-10 w-10 text-muted-foreground/40 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold", children: "No team members match your filter or search query" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Try resetting the tab selection or checking your spelling." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setActiveTab("all");
            setSearchQuery("");
          }, className: "mt-4 text-xs font-semibold text-coral uppercase tracking-wider hover:underline", children: "Reset filters" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-white border-b border-border relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-1/4 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block", children: "Canadian Support Liaison" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl text-ink font-semibold tracking-tight text-balance", children: "Hopetohope.org — Canadian Liaison Contacts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-sm md:text-base leading-relaxed text-balance", children: "Our Canadian coordinates represent the funding and communication lifeblood of the Angels Care Uganda operation. Bridging the gap between compassionate donors in Canada and our immediate field needs in Uganda." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground/80 text-xs md:text-sm leading-relaxed", children: "Robert and Tatum support our funding audits, student sponsorship matches, educational packages procurement, and local transparency logs. They ensure that every dollar directly hits field budgets in Kyaka II Refugee settlement." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-sky/10 rounded-full p-1 border border-sky/25 text-ink mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-ink" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100% of designated sponsorships reach Kyaka II settlement budgets." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-sky/10 rounded-full p-1 border border-sky/25 text-ink mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-ink" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regular auditing reports and tax receipts for Canadian and Global donors." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setLiaisonSubject("Hopetohope.org Sponsorship Inquiry");
            setIsLiaisonContactOpen(true);
          }, className: "btn-coral rounded-full px-7 py-3 text-sm font-semibold inline-flex items-center gap-2", children: [
            "Partner With Us ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(HandHelping, { className: "h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-soft border border-border/80 rounded-3xl p-6 shadow-sm hover:shadow hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-80 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-tr from-sky/60 to-sky text-ink font-display text-lg font-bold flex items-center justify-center border border-black/5 shadow-inner", children: "RT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-white border border-border/50 px-2.5 py-1 rounded-full", children: "Partnership Dir" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-ink group-hover:text-coral transition-colors", children: "Robert Tarnowski" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono mt-0.5", children: "Canadian Liaison & Coordinator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground/90 leading-relaxed line-clamp-4", children: "Robert manages reporting metrics, sponsor communication funnels, and works alongside key donors to maintain building projects and meal programs at our Uganda school campus." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border/50 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:rob@hopetohope.org", className: "text-xs font-semibold text-coral inline-flex items-center gap-1 hover:underline", children: [
                "rob@hopetohope.org ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setLiaisonSubject("Inquiry for Robert Tarnowski");
                setIsLiaisonContactOpen(true);
              }, className: "text-muted-foreground hover:text-coral text-xs", title: "Send inquiry", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-soft border border-border/80 rounded-3xl p-6 shadow-sm hover:shadow hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-80 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-to-tr from-coral/40 to-coral text-white font-display text-lg font-bold flex items-center justify-center border border-black/5 shadow-inner", children: "TB" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-white border border-border/50 px-2.5 py-1 rounded-full", children: "Support Liaison" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-ink group-hover:text-coral transition-colors", children: "Tatum Bergen" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono mt-0.5", children: "Support Partners Liaison" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground/90 leading-relaxed line-clamp-4", children: "Tatum maps outreach programs, handles sponsor letters packages, coordinates children updates logs and shares visual reports from the Uganda field coordinators." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border/50 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:tatum@hopetohope.org", className: "text-xs font-semibold text-coral inline-flex items-center gap-1 hover:underline", children: [
                "tatum@hopetohope.org ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setLiaisonSubject("Inquiry for Tatum Bergen");
                setIsLiaisonContactOpen(true);
              }, className: "text-muted-foreground hover:text-coral text-xs", title: "Send inquiry", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    mounted && reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedStaff && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setSelectedStaff(null), className: "absolute inset-0 bg-ink/75 backdrop-blur-md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9,
        y: 20
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.9,
        y: 20
      }, className: "relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden border border-border shadow-2xl p-8 z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedStaff(null), className: "absolute top-6 right-6 text-muted-foreground hover:text-ink cursor-pointer p-1 rounded-full hover:bg-soft transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start border-b border-border pb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-16 w-16 rounded-2xl bg-gradient-to-tr ${selectedStaff.avatarBg} text-ink font-display text-2xl font-bold flex items-center justify-center shadow-inner border border-black/5`, children: selectedStaff.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-widest text-coral bg-coral/5 px-2.5 py-1 rounded-md border border-coral/10", children: selectedStaff.category === "teaching" ? "Teaching Staff" : selectedStaff.category === "support" ? "Support Staff" : "Liaison Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl text-ink font-semibold mt-1.5", children: selectedStaff.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: selectedStaff.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
          selectedStaff.grad && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-coral font-bold mb-1", children: "Credentials & Specialty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-ink bg-soft border border-border/60 px-3 py-2 rounded-xl", children: selectedStaff.grad })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-coral font-bold mb-1", children: "About / Bio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground/90 leading-relaxed text-balance", children: selectedStaff.bio || `${selectedStaff.name} works active hours supporting educational, nutritional or shelter initiatives inside Kyaka II Refuge settlement. Dedicated with a commitment to build stable opportunities for vulnerable children.` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border flex justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedStaff(null), className: "px-6 py-2.5 bg-soft hover:bg-border/60 focus:outline-none text-ink text-xs font-semibold rounded-full border border-border/80 transition", children: "Close Profile" }),
          selectedStaff.category === "liaison" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setLiaisonSubject(`Sponsorship Partner with ${selectedStaff.name}`);
            setSelectedStaff(null);
            setIsLiaisonContactOpen(true);
          }, className: "btn-coral rounded-full px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5", children: [
            "Contact Liaison ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] })
    ] }) }), document.body),
    mounted && reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isLiaisonContactOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setIsLiaisonContactOpen(false), className: "absolute inset-0 bg-ink/75 backdrop-blur-md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9,
        y: 20
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.9,
        y: 20
      }, className: "relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden border border-border shadow-2xl p-8 z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsLiaisonContactOpen(false), className: "absolute top-6 right-6 text-muted-foreground hover:text-ink cursor-pointer p-1 rounded-full hover:bg-soft transition animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center border-b border-border pb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-coral/10 text-coral rounded-full p-2 border border-coral/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-coral" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-widest text-sky", children: "Hopetohope.org Canadian Branch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl text-ink font-semibold", children: "Hopetohope Support Partner" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => {
          e.preventDefault();
          alert("Thank you for reaching out! In production, this form will coordinate directly with rob@hopetohope.org via secure servers. Our Canadian coordinators will contact you shortly.");
          setIsLiaisonContactOpen(false);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider font-bold text-coral mb-1", children: "Canadian Liaison Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: liaisonSubject, onChange: (e) => setLiaisonSubject(e.target.value), className: "w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider font-bold text-coral mb-1", children: "Your Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, placeholder: "e.g. Emily Wilson", className: "w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider font-bold text-coral mb-1", children: "Your Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "name@domain.ca", className: "w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider font-bold text-coral mb-1", children: "Message / Partnership Intention" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, placeholder: "Tell us how you would like to support the primary school, build classrooms or sponsor meal programs.", className: "w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-soft border border-border/80 rounded-xl px-4 py-3 flex gap-2.5 items-start text-[11px] text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-emerald-500 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your messages are encrypted and audited through Hopetohope.org partnership policies. No personal information is shared with outside vendors." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border flex justify-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsLiaisonContactOpen(false), className: "px-6 py-2.5 bg-soft hover:bg-border/60 focus:outline-none text-ink text-xs font-semibold rounded-full border border-border/80 transition", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-coral rounded-full px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow", children: [
              "Send Secure Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" })
            ] })
          ] })
        ] })
      ] })
    ] }) }), document.body)
  ] });
}
export {
  OurTeamPage as component
};
