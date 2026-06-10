import { createFileRoute } from "@/lib/router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  ChevronRight,
  ArrowRight,
  Sprout,
  Leaf,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  Coins,
} from "lucide-react";
import projectsHopeData from "@/content/projects_hope.json";

export const Route = createFileRoute("/projects/hope-projects")({
  head: () => ({
    meta: [
      { title: "Hope Projects & Sustainability — Angels Care Uganda" },
      {
        name: "description",
        content: projectsHopeData.hero.subtitle,
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..950;1,400..950&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: HopeProjectsPage,
});

interface ProjectCardDetails {
  id: string;
  title: string;
  tag: string;
  problem: string;
  solution: string;
  accentBadge: string;
  imageUrl: string;
  icon: React.ReactNode;
  bgGradient: string;
}

function HopeProjectsPage() {
  const d = projectsHopeData;
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(1);

  // Setup dynamic icons for hopeProjects items
  const iconMap: Record<string, React.ReactNode> = {
    "girls-education": <BookOpen className="h-5 w-5 text-coral" />,
    "fuel-future": <Sprout className="h-5 w-5 text-sky" />,
  };

  const bgGradientMap: Record<string, string> = {
    "girls-education": "from-coral/5 to-transparent border-t-2 border-coral",
    "fuel-future": "from-sky/5 to-transparent border-t-2 border-sky",
  };

  const hopeProjects: ProjectCardDetails[] = d.hopeProjects.map((proj) => ({
    ...proj,
    icon: iconMap[proj.id] || <Leaf className="h-5 w-5 text-sky" />,
    bgGradient: bgGradientMap[proj.id] || "from-sky/5 to-transparent border-t-2 border-sky",
  }));

  const totalFunded = d.millingCampaign.funding.funded;
  const fundingTarget = d.millingCampaign.funding.target;
  const overallPercent = Math.round((totalFunded / fundingTarget) * 100);

  return (
    <div
      className="bg-background min-h-screen text-slate-800"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* SECTION 1: Visionary Page Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Soft elegant background glows */}
        <div className="absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-start text-left">
              {/* Minimalist Top Status Badge */}
              <div className="inline-flex items-center gap-1.5 mb-6 bg-sky/15 text-sky text-xs font-semibold px-4 py-1.5 rounded-full border border-sky/25">
                <Leaf className="h-3.5 w-3.5" />
                <span>{d.hero.badge}</span>
              </div>

              {/* Title heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-extrabold text-balance">
                Hope <span className="text-coral">Projects</span>
              </h1>

              <h2 className="mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase font-sans">
                {d.hero.subtitle}
              </h2>

              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-balance">
                {d.hero.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 select-none">
                <a
                  href="#projects-in-need"
                  className="btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer"
                >
                  {d.hero.primaryBtn} <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#maize-milling-campaign"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-205 cursor-pointer"
                >
                  {d.hero.secondaryBtn}
                </a>
              </div>
            </div>

            {/* Right Asset Container: Sustainability/Agriculture Hero Visual */}
            <div className="lg:col-span-12 xl:col-span-5 relative flex items-center justify-center mt-8 xl:mt-0">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover animate-fade-in">
                {/* Visual backing frames */}
                <div className="absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" />
                <div className="absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" />

                {/* Main image card wrapper */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-soft">
                    <img
                      src="/src/assets/images/kids.webp"
                      alt="Refugee youth working with agricultural products and smiles"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating caption tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs text-center">
                      <p className="font-semibold leading-tight text-center">
                        Localized Social & Agricultural Resilience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "Projects in Need of Support" Interactive Grid */}
      <section id="projects-in-need" className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Headers */}
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block">
              Interventions Seeking Donors
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight">
              Projects in Need of Support
            </h3>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance max-w-xl">
              We tackle fundamental community and environmental challenges directly on site. Click
              any project card below to expand details.
            </p>
          </div>

          {/* Interactive Bento Style Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {hopeProjects.map((project) => {
              const isSelected = selectedProject === project.id;
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => setSelectedProject(isSelected ? null : project.id)}
                  className={`bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "ring-2 ring-sky/50 shadow-md border-sky/30 scale-[1.01]"
                      : "hover:shadow-md hover:border-slate-300"
                  } ${project.bgGradient}`}
                >
                  <div className="p-8 text-left">
                    {/* Header bar inside the card */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-border/80">
                        {project.icon}
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-100 rounded px-2.5 py-1">
                        {project.tag}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-ink mb-3 transition-colors">
                      {project.title}
                    </h4>

                    {/* Problem Accent Box */}
                    <div className="bg-red-500/5 hover:bg-red-500/10 border-l-4 border-red-500/40 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-left">
                      <p className="font-semibold text-red-600 mb-1 leading-none uppercase tracking-wide text-[10px]">
                        The Challenge
                      </p>
                      <p className="text-slate-600 font-medium leading-relaxed italic text-balance">
                        "{project.problem}"
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed mt-4 text-left">
                      {project.solution}
                    </p>
                  </div>

                  {/* Visual Footer detailing action tags */}
                  <div className="p-6 bg-slate-50 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <span className="inline-block text-[11px] font-extrabold text-sky tracking-wide uppercase">
                      ★ {project.accentBadge}
                    </span>

                    <button className="text-xs font-bold text-[#f05153] inline-flex items-center gap-1.5 hover:underline cursor-pointer">
                      <span>{isSelected ? "Collapse Details" : "Read Full Proposal"}</span>
                      <ChevronRight
                        className={`h-4 w-4 transform transition-transform ${isSelected ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Fully Animated Expandable Drawer inside the card */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-slate-900 text-white border-t border-white/10 text-left"
                      >
                        <div className="p-8 space-y-6 text-sm">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
                            <div>
                              <h5 className="font-bold text-sky uppercase text-[11px] tracking-widest mb-1.5 font-sans">
                                Action Plan
                              </h5>
                              <p className="text-xs text-white/85 leading-relaxed">
                                Deploying specialized local monitoring team oversight ensuring
                                targeted, complete distribution. Reusable sanitary towels are
                                sourced from regional cooperatives, fostering indirect
                                micro-economies.
                              </p>
                            </div>
                            <div>
                              <h5 className="font-bold text-coral uppercase text-[11px] tracking-widest mb-1.5 font-sans">
                                Ecological Return
                              </h5>
                              <p className="text-xs text-white/85 leading-relaxed">
                                Standard wood collecting trips risk exposure to local forest
                                conflict for female populations. Bio-briquette generation cuts local
                                timber requirements by up to 60%, saving vital resources.
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono">
                                Estimated Project Cost
                              </span>
                              <span className="text-lg font-bold text-white font-sans">
                                $4,500 CAN / Launch Cycle
                              </span>
                            </div>
                            <a
                              href="https://www.theforgottenintl.org/donate/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-coral text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full hover:bg-red-600 transition inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Fund This Project</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: "The Maize Initiative" Featured Crowdfunding Campaign */}
      <section id="maize-milling-campaign" className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center text-left">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-4 py-1.5 rounded-full border border-coral/10 mb-4 inline-block">
                  {d.millingCampaign.badge}
                </span>

                <h3 className="text-3xl sm:text-4xl text-ink font-bold tracking-tight mb-6 leading-tight">
                  {d.millingCampaign.title}
                </h3>

                <h4 className="text-sm uppercase font-bold text-sky tracking-wider mb-4 font-sans text-left">
                  {d.millingCampaign.subtitle}
                </h4>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 text-left">
                  {d.millingCampaign.description}
                </p>

                <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed text-left">
                  {d.millingCampaign.points.map((pt, idx) => (
                    <div key={idx} className="border-l-4 border-coral pl-4 text-left">
                      <p className="font-bold text-ink mb-1">{pt.title}</p>
                      <p className="text-muted-foreground">{pt.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                    <TrendingUp className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-ink uppercase tracking-wider font-mono">
                      Multi-Stream Sustainability
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Flour feeds children; sales generate wages; waste residues feed the farm
                      animals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Crowdfunding Showcase */}
            <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-3xl border-2 border-coral/20 shadow-xl p-8 sm:p-10 relative overflow-hidden text-left w-full mt-8 xl:mt-0">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" />

              {/* Header Box */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 mb-8 border-b border-border">
                <div>
                  <span className="text-xs uppercase font-extrabold text-coral tracking-wider font-mono">
                    Direct Machinery Funding Drive
                  </span>
                  <h4 className="text-2xl text-ink font-extrabold tracking-tight mt-1">
                    ${fundingTarget.toLocaleString()} {d.millingCampaign.funding.currency} Needed
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    For complete Machinery Procurement & Construction.
                  </p>
                </div>

                {/* Visual raised stat */}
                <div className="px-4 py-2 bg-[#f05153]/5 border border-[#f05153]/20 rounded-xl text-xs font-extrabold text-coral flex items-center gap-2">
                  <Coins className="h-4 w-4" />
                  <span>
                    ${totalFunded.toLocaleString()} {d.millingCampaign.funding.text}
                  </span>
                </div>
              </div>

              {/* Progress Bar with rich states */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-400 uppercase tracking-widest font-mono">
                    Maize milling funding progress
                  </span>
                  <span className="text-coral font-bold text-sm bg-coral/5 px-2.5 py-1 rounded border border-coral/15 font-sans animate-pulse">
                    {overallPercent}% Funded
                  </span>
                </div>

                {/* Outer gauge */}
                <div className="h-4 w-full bg-slate-100 rounded-full border border-border overflow-hidden relative group">
                  <div
                    className="h-full bg-gradient-to-r from-[#f05153] to-[#d63d3f] transition-all duration-1000 ease-out relative"
                    style={{ width: `${overallPercent}%` }}
                  />
                </div>

                <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
                  <span>Start: Construction footprint cleared</span>
                  <span>Goal: Output 20 tons weekly</span>
                </div>
              </div>

              {/* Interactive Milestones Tracker */}
              <div className="mt-10">
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4 block font-mono">
                  Campaign Project Milestones
                </h5>

                <div className="grid grid-cols-1 gap-3">
                  {d.millingCampaign.milestones.map((milestone, index) => {
                    const isActive = activeMilestoneIndex === index;
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveMilestoneIndex(index)}
                        className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                          isActive
                            ? "bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-[1px]"
                            : "bg-slate-50 text-slate-700 border-border hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <span
                            className={`text-xs font-extrabold tracking-wide ${isActive ? "text-sky" : "text-coral"}`}
                          >
                            {milestone.label}
                          </span>
                          <span
                            className={`text-xs font-mono font-bold ${isActive ? "text-white" : "text-slate-500"}`}
                          >
                            {milestone.allocated}
                          </span>
                        </div>

                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-xs space-y-2 mt-2 pt-2 border-t border-white/10"
                          >
                            <p className="text-white/85 leading-normal">{milestone.notes}</p>
                            <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                              <span className="text-[10px] text-sky font-bold uppercase tracking-wide">
                                Status Outcomes
                              </span>
                              <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                {milestone.progressPercent === 100
                                  ? "✓ 100% Secure"
                                  : `● ${milestone.progressPercent}% Subscribed`}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Call To Action Footer Banner */}
      <section className="py-24 bg-soft relative overflow-hidden">
        {/* Soft elegant blur rings */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          {/* Glassmorphic main container */}
          <div className="relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none font-mono">
                Resonating Sustainability
              </span>

              <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-none mb-4 text-balance">
                “If any of these Hope Projects resonate with you, please consider sponsoring hope
                today!”
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl">
                Empowering vulnerable communities through sustainable, holistic development across
                four interconnected pillars of hope.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center">
                <a
                  href="https://www.theforgottenintl.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{d.millingCampaign.sidebar.btnText}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 flex items-center gap-1.5 text-xs text-muted-foreground/80 font-mono">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                <span>
                  Certified direct-to-field pipeline through registered 501c3 & Canadian Charities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
