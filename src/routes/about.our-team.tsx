import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Compass,
  Heart,
  Mail,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  MapPin,
  Calendar,
  Sparkles,
  School,
  HelpingHand,
  CheckCircle2,
  X,
  MessageSquare,
  Globe,
} from "lucide-react";
import aboutTeamData from "@/content/about_team.json";

export const Route = createFileRoute("/about/our-team")({
  head: () => ({
    meta: [
      { title: "Our Dedicated Team — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Meet the incredible team of teachers, administrators, and coordinators supporting our children in Kyaka II Refugee Settlement.",
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
  component: OurTeamPage,
});

// Full Team Member Interface
interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  initials: string;
  grad?: string; // Teacher qualification or helper tag
  avatarBg: string; // Gradient color indicator
  bio?: string;
}

function OurTeamPage() {
  const d = aboutTeamData;
  const [activeTab, setActiveTab] = useState<"all" | "teaching" | "support" | "liaison">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStaff, setSelectedStaff] = useState<TeamMember | null>(null);
  const [isLiaisonContactOpen, setIsLiaisonContactOpen] = useState(false);
  const [liaisonSubject, setLiaisonSubject] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedStaff || isLiaisonContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStaff, isLiaisonContactOpen]);

  // Primary image fallback handlers for bulletproof loading
  const [heroImageSrc, setHeroImageSrc] = useState(
    "/src/assets/images/107050000_579153106133552_4669114132287895332_n.webp",
  );
  const [galleryImageSrc, setGalleryImageSrc] = useState(
    "/src/assets/images/WhatsApp+Image+2020-12-06+at+04.27.32.webp",
  );

  const handleHeroImageError = () => {
    setHeroImageSrc(
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80",
    );
  };

  const handleGalleryImageError = () => {
    setGalleryImageSrc(
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    );
  };

  // Directory Staff list loaded from JSON
  const staffMembers: TeamMember[] = d.directory.staffList;

  // Filters staff by Tab selection & search input
  const filteredStaff = staffMembers.filter((staff) => {
    const matchesTab = activeTab === "all" || staff.category === activeTab;
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (staff.grad && staff.grad.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      {/* 1. Page Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Soft background glow accents */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-sky/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Left content block */}
            <div className="lg:col-span-7 flex flex-col items-start reveal">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-5">
                <Users className="h-3 w-3 text-coral animate-pulse" />
                {d.hero.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance">
                Meet Our <span className="text-coral">Dedicated</span> Team
              </h1>
              <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl text-balance">
                {d.hero.subtitle}
              </p>
              {d.hero.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="mt-4 text-muted-foreground/90 text-sm md:text-base leading-relaxed max-w-xl"
                >
                  {p}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#directory"
                  className="btn-coral rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 shadow"
                >
                  {d.hero.primaryBtn} <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#leadership"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-sm font-semibold transition"
                >
                  {d.hero.secondaryBtn}
                </a>
              </div>
            </div>

            {/* Hero Right image frame showing the beautiful teaching staff */}
            <div className="lg:col-span-5 relative flex items-center justify-center reveal reveal-2">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/5] xl:aspect-[4/3]">
                {/* Visual backdrop aesthetic accents */}
                <div className="absolute inset-4 rounded-3xl bg-coral/10 -rotate-3 transform -translate-x-4 scale-105" />
                <div className="absolute inset-4 rounded-3xl bg-sky/10 rotate-2 transform translate-x-3 scale-102" />

                {/* Primary Image wrapper */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-white p-3 group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-soft">
                    <img
                      src={heroImageSrc}
                      alt="Teaching staff at Angels Care School standing proudly"
                      onError={handleHeroImageError}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Caption block */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/20 border border-white/10">
                      <p className="text-xs font-semibold leading-snug">
                        Our teachers in front of Angels Care Primary School inside Kyaka II
                        settlement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Est Code badge */}
                <div className="absolute -top-4 -left-4 bg-coral text-white rounded-2xl px-4 py-3 shadow-coral flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                    Est.
                  </span>
                  <span className="text-xl font-bold tracking-tight">2008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Senior Leadership Section */}
      <section id="leadership" className="py-24 bg-soft border-border relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-3 py-1 rounded-full border border-sky/10 mb-4">
              {d.leadership.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight">
              {d.leadership.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-balance">
              {d.leadership.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
            {/* Byaruhunga Godfrey — Prominent card with glowing outline */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="relative flex-grow flex flex-col rounded-[2.2rem] bg-white p-8 border-2 border-coral shadow-coral/10 hover:shadow-coral/20 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-coral/5 to-transparent rounded-tr-full pointer-events-none" />

                {/* Highlight banner indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-coral text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                  <Sparkles className="h-3 w-3" /> {d.leadership.founder.status}
                </div>

                {/* Prominent monogram avatar */}
                <div className="relative mt-2">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-coral to-[#f37c7e] text-white font-display text-4xl flex items-center justify-center font-bold shadow opacity-90 transition-transform duration-500 group-hover:rotate-6">
                    BG
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-1.5 shadow-sm border border-border">
                    <ShieldCheck className="h-5 w-5 text-coral" />
                  </div>
                </div>

                <div className="mt-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl text-ink font-semibold">{d.leadership.founder.name}</h3>
                    <p className="text-sm font-medium text-coral mt-1 uppercase tracking-wider">
                      {d.leadership.founder.role}
                    </p>
                    <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                      {d.leadership.founder.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/80 font-mono">
                      Status: {d.leadership.founder.status}
                    </span>
                    <a
                      href={d.leadership.founder.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-coral inline-flex items-center gap-1 hover:underline"
                    >
                      {d.leadership.founder.linkText} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Leaders Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {d.leadership.leaders.map((leader) => {
                const initials = leader.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("");
                const isOdd = leader.id === "alinda-george" || leader.id === "bamwesigye-daniel";
                return (
                  <div
                    key={leader.id}
                    className="rounded-3xl bg-white p-6 border border-border/80 card-hover flex flex-col justify-between group"
                  >
                    <div className="flex gap-4 items-start">
                      <div
                        className={`h-14 w-14 rounded-2xl ${isOdd ? "bg-sky/10 border-sky/25" : "bg-coral/5 border-coral/10"} text-ink font-display text-xl flex items-center justify-center font-semibold border`}
                      >
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-lg text-ink font-semibold group-hover:text-coral transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-medium text-muted-foreground/80">
                          {leader.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground text-xs leading-relaxed">
                      {leader.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-[10px]">
                      <span className="text-muted-foreground/80 bg-soft px-2.5 py-1 rounded-md border border-border/30">
                        {leader.category}
                      </span>
                      <span className={`font-semibold ${isOdd ? "text-sky" : "text-coral"}`}>
                        {leader.subrole}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inline Activity Banner (Horizontal visual card) */}
      <section className="bg-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-ink text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 group">
            {/* Visual background image with gradient overlay */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-500">
              <img
                src={galleryImageSrc}
                alt="Angels Care Uganda community assembly with children"
                onError={handleGalleryImageError}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ink fallback gradient structure */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/80 to-transparent pointer-events-none" />

            <div className="relative z-10 md:w-3/5 text-left">
              <span className="inline-flex items-center gap-1.5 bg-sky/20 border border-sky/30 text-sky text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4">
                <School className="h-3 w-3" /> {d.actionBanner.badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none text-white">
                {d.actionBanner.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                {d.actionBanner.description}
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.theforgottenintl.org/donate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral rounded-full px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-center inline-flex items-center justify-center gap-2 hover:shadow-coral"
              >
                {d.actionBanner.btnText} <Heart className="h-4 w-4 fill-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Team Directory */}
      <section id="directory" className="py-24 bg-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-3 inline-block">
                {d.directory.badge}
              </span>
              <h2 className="text-3xl md:text-4xl text-ink font-semibold tracking-tight">
                {d.directory.title}
              </h2>
              <p className="mt-3 text-muted-foreground text-sm md:text-base">
                {d.directory.description}
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative mt-6 md:mt-0 max-w-sm w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground/60" />
              </div>
              <input
                type="text"
                placeholder={d.directory.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-ink border border-border pl-10 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex border-b border-border overflow-x-auto scrollbar-none mb-10 gap-8">
            {[
              { id: "all", label: "All Team" },
              { id: "teaching", label: "Teaching Staff" },
              { id: "support", label: "Support Staff" },
              { id: "liaison", label: "International Liaison" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`py-4 px-1 text-sm font-semibold relative transition-colors cursor-pointer whitespace-nowrap outline-none ${
                    isActive ? "text-coral" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Directory Grid with Framer Motion AnimatePresence */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredStaff.map((staff) => (
                <motion.div
                  layout
                  key={staff.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  onClick={() => {
                    if (staff.bio || staff.grad) {
                      setSelectedStaff(staff);
                    }
                  }}
                  className={`rounded-2xl p-5 border border-border/70 bg-white shadow-sm flex flex-col justify-between transition-all duration-300 ${
                    staff.bio || staff.grad
                      ? "cursor-pointer hover:shadow-md hover:border-coral/20"
                      : ""
                  }`}
                >
                  <div>
                    {/* Card avatar */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`h-11 w-11 rounded-lg bg-gradient-to-tr ${staff.avatarBg} text-ink font-display text-sm font-bold flex items-center justify-center border border-black/5 shadow-inner`}
                      >
                        {staff.initials}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-soft border border-border/40 px-2.5 py-1 rounded-full">
                        {staff.category === "teaching"
                          ? "Educator"
                          : staff.category === "support"
                            ? "Support Crew"
                            : "Hopetohope"}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-semibold text-base text-ink line-clamp-1">
                        {staff.name}
                      </h3>
                      <p className="text-xs text-muted-foreground/90 font-medium tracking-tight mt-0.5 line-clamp-1">
                        {staff.role}
                      </p>
                    </div>

                    {staff.grad && (
                      <p className="mt-3 text-[11px] font-mono text-coral/80 bg-coral/5 border border-coral/10 px-2 py-1 rounded-md inline-block">
                        {staff.grad}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground/80 font-medium font-mono">
                      Kyaka II Mission
                    </span>
                    {(staff.bio || staff.grad) && (
                      <span className="text-coral hover:underline font-semibold flex items-center">
                        Read Bio <ChevronRight className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Empty result view */}
            {filteredStaff.length === 0 && (
              <div className="col-span-full py-16 text-center text-muted-foreground">
                <Users className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-base font-semibold">{d.directory.emptyState.title}</p>
                <p className="text-xs mt-1">{d.directory.emptyState.subtext}</p>
                <button
                  onClick={() => {
                    setActiveTab("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-semibold text-coral uppercase tracking-wider hover:underline"
                >
                  {d.directory.emptyState.btnText}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 5. International Support & Funding Branch Section */}
      <section className="py-24 bg-white border-b border-border relative overflow-hidden">
        {/* Soft background decor */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Canadian Liaison Info Column */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block">
                {d.liaison.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight text-balance">
                {d.liaison.title}
              </h2>
              <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed text-balance">
                {d.liaison.description}
              </p>
              <p className="mt-3 text-muted-foreground/80 text-xs md:text-sm leading-relaxed">
                {d.liaison.subtext}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {d.liaison.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="bg-sky/10 rounded-full p-1 border border-sky/25 text-ink mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-ink" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setLiaisonSubject("Hopetohope.org Sponsorship Inquiry");
                    setIsLiaisonContactOpen(true);
                  }}
                  className="btn-coral rounded-full px-7 py-3 text-sm font-semibold inline-flex items-center gap-2"
                >
                  {d.liaison.btnText} <HelpingHand className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Canadian Partner Contact Profiles right block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {staffMembers
                .filter((s) => s.category === "liaison")
                .map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-soft border border-border/80 rounded-3xl p-6 shadow-sm hover:shadow hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-80 group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${staff.avatarBg} text-ink font-display text-lg font-bold flex items-center justify-center border border-black/5 shadow-inner`}
                        >
                          {staff.initials}
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-white border border-border/50 px-2.5 py-1 rounded-full">
                          {staff.role.includes("Director") ? "Partnership Dir" : "Support Liaison"}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-xl font-semibold text-ink group-hover:text-coral transition-colors">
                          {staff.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">
                          {staff.role}
                        </p>
                        <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed line-clamp-4">
                          {staff.bio}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                      <a
                        href={`mailto:${staff.id === "robert-tarnowski" ? "rob" : "tatum"}@hopetohope.org`}
                        className="text-xs font-semibold text-coral inline-flex items-center gap-1 hover:underline"
                      >
                        {staff.id === "robert-tarnowski" ? "rob" : "tatum"}@hopetohope.org{" "}
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                      <button
                        onClick={() => {
                          setLiaisonSubject(`Inquiry for ${staff.name}`);
                          setIsLiaisonContactOpen(true);
                        }}
                        className="text-muted-foreground hover:text-coral text-xs"
                        title="Send inquiry"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Modal - Teacher / Admin Bio Dialog details */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedStaff && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Overlaid background dark translucent */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedStaff(null)}
                  className="absolute inset-0 bg-ink/75 backdrop-blur-md"
                />

                {/* Modal Body card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden border border-border shadow-2xl p-8 z-10"
                >
                  {/* Topclose button */}
                  <button
                    onClick={() => setSelectedStaff(null)}
                    className="absolute top-6 right-6 text-muted-foreground hover:text-ink cursor-pointer p-1 rounded-full hover:bg-soft transition"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="flex gap-4 items-start border-b border-border pb-6">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-tr ${selectedStaff.avatarBg} text-ink font-display text-2xl font-bold flex items-center justify-center shadow-inner border border-black/5`}
                    >
                      {selectedStaff.initials}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-coral bg-coral/5 px-2.5 py-1 rounded-md border border-coral/10">
                        {selectedStaff.category === "teaching"
                          ? "Teaching Staff"
                          : selectedStaff.category === "support"
                            ? "Support Staff"
                            : "Liaison Contact"}
                      </span>
                      <h3 className="text-2xl text-ink font-semibold mt-1.5">
                        {selectedStaff.name}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {selectedStaff.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {selectedStaff.grad && (
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-coral font-bold mb-1">
                          Credentials & Specialty
                        </h4>
                        <p className="text-sm font-mono text-ink bg-soft border border-border/60 px-3 py-2 rounded-xl">
                          {selectedStaff.grad}
                        </p>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-coral font-bold mb-1">
                        About / Bio
                      </h4>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed text-balance">
                        {selectedStaff.bio ||
                          `${selectedStaff.name} works active hours supporting educational, nutritional or shelter initiatives inside Kyaka II Refugee settlement. Dedicated with a commitment to build stable opportunities for vulnerable children.`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedStaff(null)}
                      className="px-6 py-2.5 bg-soft hover:bg-border/60 focus:outline-none text-ink text-xs font-semibold rounded-full border border-border/80 transition"
                    >
                      Close Profile
                    </button>
                    {selectedStaff.category === "liaison" && (
                      <button
                        onClick={() => {
                          setLiaisonSubject(`Sponsorship Partner with ${selectedStaff.name}`);
                          setSelectedStaff(null);
                          setIsLiaisonContactOpen(true);
                        }}
                        className="btn-coral rounded-full px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5"
                      >
                        Contact Liaison <Mail className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}

      {/* 7. Dynamic Modal - Contact Liaison Popup Form Dialog */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isLiaisonContactOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsLiaisonContactOpen(false)}
                  className="absolute inset-0 bg-ink/75 backdrop-blur-md"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden border border-border shadow-2xl p-8 z-10"
                >
                  <button
                    onClick={() => setIsLiaisonContactOpen(false)}
                    className="absolute top-6 right-6 text-muted-foreground hover:text-ink cursor-pointer p-1 rounded-full hover:bg-soft transition animate-pulse"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="flex gap-3 items-center border-b border-border pb-6">
                    <div className="bg-coral/10 text-coral rounded-full p-2 border border-coral/20">
                      <Globe className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-sky">
                        Hopetohope.org Canadian Branch
                      </span>
                      <h3 className="text-xl text-ink font-semibold">Hopetohope Support Partner</h3>
                    </div>
                  </div>

                  {/* Secure simulated contact portal form */}
                  <form
                    className="mt-6 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(
                        "Thank you for reaching out! In production, this form will coordinate directly with rob@hopetohope.org via secure servers. Our Canadian coordinators will contact you shortly.",
                      );
                      setIsLiaisonContactOpen(false);
                    }}
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-coral mb-1">
                        {d.liaison.dialog.subjectLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={liaisonSubject}
                        onChange={(e) => setLiaisonSubject(e.target.value)}
                        className="w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-coral mb-1">
                          {d.liaison.dialog.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Emily Wilson"
                          className="w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-coral mb-1">
                          {d.liaison.dialog.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.ca"
                          className="w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-coral mb-1">
                        {d.liaison.dialog.messageLabel}
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us how you would like to support the primary school, build classrooms or sponsor meal programs."
                        className="w-full bg-soft text-ink border border-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-coral/40"
                      />
                    </div>

                    <div className="bg-soft border border-border/80 rounded-xl px-4 py-3 flex gap-2.5 items-start text-[11px] text-muted-foreground leading-relaxed">
                      <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        Your messages are encrypted and audited through Hopetohope.org partnership
                        policies. No personal information is shared with outside vendors.
                      </span>
                    </div>

                    <div className="pt-4 border-t border-border flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsLiaisonContactOpen(false)}
                        className="px-6 py-2.5 bg-soft hover:bg-border/60 focus:outline-none text-ink text-xs font-semibold rounded-full border border-border/80 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-coral rounded-full px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow"
                      >
                        {d.liaison.dialog.submitBtn} <Mail className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
