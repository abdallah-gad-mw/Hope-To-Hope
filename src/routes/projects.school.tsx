import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Award,
  HelpCircle,
  Heart,
  Sparkles,
  Users,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Info,
  X,
  Maximize2,
  BookOpen,
  ArrowRight,
  School,
  Star,
  Users2,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/projects/school")({
  head: () => ({
    meta: [
      { title: "Angels Care School — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Discover how Angels Care School empowers refugee children in Kyaka II Settlement. Providing safe learning, curriculum mastery, and building regional leaders.",
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
  component: SchoolProjectPage,
});

// Demographic Metric Data Types
interface MetricCard {
  id: string;
  title: string;
  value: string;
  subtext: string;
  badge?: string;
  icon: React.ReactNode;
  bgGradient: string;
}

// Media Gallery Image Types
interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  category: string;
}

function SchoolProjectPage() {
  const [showBadgeTooltip, setShowBadgeTooltip] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Stats Card data
  const demographicCards: MetricCard[] = [
    {
      id: "active-students",
      title: "1,000+ Active Students",
      value: "1,000+",
      subtext: "Serving both the Kyaka II Refugee Settlement and local Ugandan children.",
      icon: <Users className="h-5 w-5 text-coral" />,
      bgGradient: "from-coral/5 to-soft border border-coral/10",
    },
    {
      id: "refugee-ratio",
      title: "Demographic Breakdown",
      value: "80% Refugee",
      subtext: "Integrating refugee scholars with local host community peers.",
      badge: "Inclusion",
      icon: <BookOpen className="h-5 w-5 text-sky" />,
      bgGradient: "from-sky/5 to-soft border border-sky/10",
    },
    {
      id: "academic-pipeline",
      title: "Nursery to Elementary",
      value: "P1 to P7 Pipeline",
      subtext: "Full academic pipeline from Kindergarten up to Primary 7.",
      icon: <School className="h-5 w-5 text-indigo-500" />,
      bgGradient: "from-indigo-50/20 to-soft border border-indigo-100",
    },
    {
      id: "national-marks",
      title: "Top National Test Marks",
      value: "Grade A Standards",
      subtext:
        "Students receive the best education in the settlement, consistently achieving the highest marks in national tests.",
      badge: "Outstanding Results",
      icon: <Star className="h-5 w-5 text-amber-500 fill-amber-400" />,
      bgGradient: "from-amber-500/5 to-soft border-2 border-amber-500/20 shadow-sm",
    },
  ];

  // Gallery items using high quality Unsplash photos matching refugee/education
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      caption:
        "Recess moments: A cheerful atmosphere and strong peer connections support healing from prior trauma.",
      category: "Extracurricular",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
      caption:
        "Concentration in action: Developing literacy and basic numeracy leads to greater self-determination.",
      category: "Classroom Study",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      caption:
        "Raising hands together: Over 120 children pack our current schoolrooms, and they are eager to participate.",
      category: "Interactive Learning",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      caption:
        "Peer to peer support: Small learning teams build self-confidence, communication, and deep care.",
      category: "Extracurricular",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      caption:
        "A joyful graduate celebrating with educators after high achievement on national examinations.",
      category: "Celebration",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=800&q=80",
      caption:
        "Early development: Engaging our toddlers early ensures a stable foundation for years to come.",
      category: "Early Years",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* SECTION 1: Academic Page Hero Banner Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Soft elegant background glows */}
        <div className="absolute top-1/4 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-sky/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content column */}
            <div className="lg:col-span-7 flex flex-col items-start reveal">
              {/* Minimalist Tech-Forward Hero Badge with Interactive Tooltip */}
              <div className="relative inline-flex items-center gap-2.5 mb-6 z-20">
                <div
                  className="inline-flex items-center gap-1.5 cursor-pointer select-none bg-coral/10 hover:bg-coral/15 text-coral text-xs font-semibold px-4 py-1.5 rounded-full border border-coral/25 transition-all duration-200"
                  onClick={() => setShowBadgeTooltip(!showBadgeTooltip)}
                  onMouseEnter={() => setShowBadgeTooltip(true)}
                  onMouseLeave={() => setShowBadgeTooltip(false)}
                >
                  <Award className="h-4 w-4" />
                  <span>Govt Recognized Since 2011</span>
                  <Info className="h-3.5 w-3.5 opacity-80" />
                </div>

                {/* Tooltip Card */}
                <AnimatePresence>
                  {showBadgeTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-ink text-white rounded-2xl p-4 shadow-xl border border-white/10 text-xs z-30 leading-relaxed"
                    >
                      <div className="absolute -top-1.5 left-8 w-3 h-3 bg-ink rotate-45 border-t border-l border-white/10" />
                      <p className="font-semibold text-coral flex items-center gap-1 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-coral" /> Official Ministerial
                        Status
                      </p>
                      In 2011, the Ugandan government issued a formal document recognizing the
                      exemplary work that Angels Care School does for the Kyaka II settlement,
                      approving our curriculum and licensing public testing on resource grounds.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Title heading with Sky Blue text accent */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance">
                Angels Care <span className="text-coral">School</span>
              </h1>

              <h2 className="mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase">
                Education for Refugee Children: Shaping the Leaders of Tomorrow.
              </h2>

              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-balance">
                Operating directly inside Kyaka II Refugee Settlement, Angels Care School provides
                free, safe, and world-class foundational training. By combining rigorous state
                academics with emotional therapy and protective services, we help orphaned and
                vulnerable children convert survival into stable futures.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 select-none">
                <a
                  href="#demographics"
                  className="btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
                >
                  Explore Our Core <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#needs"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200"
                >
                  Urgent Class Needs
                </a>
              </div>
            </div>

            {/* Right Image Frame showcasing Classroom */}
            <div className="lg:col-span-5 relative flex items-center justify-center reveal reveal-2">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover">
                {/* Asymmetric visual backing grids */}
                <div className="absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" />
                <div className="absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" />

                {/* Main image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-soft">
                    <img
                      src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                      alt="Refugee child engaged in learning at school desk"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating caption tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs">
                      <p className="font-semibold leading-tight">Focus & Growth inside Kyaka II</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: "Our Academic Core" Stats & Narrative */}
      <section id="demographics" className="py-24 bg-white border-b border-border relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative Block */}
            <div className="lg:col-span-6 flex flex-col justify-center h-full">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block">
                  High-Readability Narrative
                </span>

                <h3 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-tight">
                  Empowering Futures Beyond Circumstances
                </h3>

                <div className="mt-6 text-muted-foreground space-y-5 text-sm sm:text-base leading-relaxed text-left text-balance">
                  <p>
                    For refugee children, education is paramount to building their future. For young
                    girls, the classroom provides safety, protection from early childhood marriage,
                    and cultivates their leadership skills.
                  </p>
                  <p>
                    For young boys, education teaches diligence and discipline, engages them in
                    teamwork and cooperation through extracurriculars, and gives them opportunities
                    to serve their community. Education gives refugee children hope that they can
                    accomplish their dreams and have a stable future, even in the midst of grave
                    circumstances.
                  </p>
                  <p className="font-medium text-ink bg-soft/80 p-4 border-l-4 border-sky rounded-r-2xl">
                    Angels Care School educates refugee children so that they can be the leaders of
                    tomorrow. Many of our graduates have gone on to become teachers and doctors,
                    with many proudly returning to Angels Care as staff.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Demographics Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {demographicCards.map((card) => {
                const isRefugeeCard = card.id === "refugee-ratio";
                return (
                  <div
                    key={card.id}
                    className={`rounded-2xl p-6 ${card.bgGradient} flex flex-col justify-between min-h-[190px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`}
                  >
                    <div>
                      {/* Flex header */}
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm border border-border/80 group-hover:scale-110 transition-transform">
                          {card.icon}
                        </div>
                        {card.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white border border-border/30 rounded-md text-slate-500">
                            {card.badge}
                          </span>
                        )}
                      </div>

                      <div className="mt-4">
                        <span className="text-xs uppercase font-semibold text-muted-foreground/80 tracking-normal">
                          {card.title}
                        </span>
                        <h4 className="text-2xl text-ink font-bold tracking-tight mt-1">
                          {card.value}
                        </h4>
                      </div>
                    </div>

                    {/* Progress Bar injection for Card B */}
                    {isRefugeeCard ? (
                      <div className="mt-4 space-y-1">
                        <div className="flex justify-between text-[11px] font-mono leading-none text-muted-foreground/90">
                          <span className="text-sky font-bold">80% Refugee</span>
                          <span className="text-coral font-bold">20% Local Host</span>
                        </div>
                        {/* Progress bar container */}
                        <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden flex">
                          <div className="h-full bg-sky" style={{ width: "80%" }} />
                          <div className="h-full bg-coral" style={{ width: "20%" }} />
                        </div>
                      </div>
                    ) : (
                      <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed">
                        {card.subtext}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "Continued Critical Needs" Section (Premium Bento Grid) */}
      <section id="needs" className="py-24 bg-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Main Headers */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block">
              Immediate Priorities & Interventions
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight">
              Continued Needs for Angels Care School
            </h3>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
              To maintain our high standards and support the growing community, we face urgent
              infrastructure and operational milestones.
            </p>
          </div>

          {/* 3-Column Modern Interactive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Needs Card 1 (The Educators) */}
            <div className="group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[440px]">
              {/* Corner soft accent background circle */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-mono text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded">
                  Priority 01
                </span>

                <h4 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors">
                  1. Teachers & Fair Wages
                </h4>

                <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  Education wouldn’t happen without dedicated educators. A loving teacher who
                  inspires and recognizes potential can directly impact the trajectory of a life.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  Currently, we have 20 teachers, averaging 1 to 2 teachers per classroom of 100
                  students. We are currently unable to pay wages competitive with government
                  schools. Our teachers love and are dedicated to our students, but this comes with
                  heavy challenges.
                </p>
              </div>

              {/* Targets / Output Badge */}
              <div className="mt-6 pt-5 border-t border-border">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 leading-none">
                  Core Mandate
                </span>
                <span className="inline-block text-xs font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2 font-semibold">
                  Our Hope: Increase wages, build staff housing, and hire more educators.
                </span>
              </div>
            </div>

            {/* Needs Card 2 (Classroom Size Expansion) */}
            <div className="group relative rounded-3xl bg-white border-2 border-sky/30 p-8 flex flex-col justify-between shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-lg min-h-[440px]">
              {/* Corner soft sky background circle */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-sky/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky font-bold bg-sky/5 px-2 py-1 rounded">
                    Priority 02
                  </span>
                  <span className="text-[9px] uppercase font-bold bg-sky text-sky-foreground px-2 py-0.5 rounded-full">
                    Crucial Needs
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4">
                  2. Expanding Classrooms
                </h4>

                <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  With the refugee population in Kyaka II ever-increasing, our student body is
                  growing rapidly. At the moment, our classroom sizes are too small to accommodate
                  them.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed font-medium text-ink bg-sky/5 p-3 rounded-xl border border-sky/10">
                  On average, they have 120 children crammed per class. We need physical partition
                  walls and concrete structures.
                </p>
              </div>

              {/* Targets / Output Badge */}
              <div className="mt-6 pt-5 border-t border-sky/20">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-sky mb-1 leading-none">
                  Goal Metric
                </span>
                <span className="inline-block text-xs font-mono text-sky-foreground bg-sky/5 border border-sky/20 rounded-lg px-3 py-2 font-semibold">
                  Our Goal: Raise funds to build 6 new classrooms to safely meet the government
                  standard ratio of 45:1.
                </span>
              </div>
            </div>

            {/* Needs Card 3 (Support & Sponsorship Pipeline) */}
            <div className="group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[440px]">
              {/* Corner soft background circle */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-mono text-coral font-bold bg-coral/5 px-2 py-1 rounded">
                  Priority 03
                </span>

                <h4 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors">
                  3. Child Sponsorship
                </h4>

                <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  For a child to attend school, it takes a village of conscious global supporters.
                  Your continuous backing ensures these children have access to materials, safe
                  classrooms, and bright futures.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  Direct child sponsorship funds their meal plans, learning notebooks, field
                  healthcare checkups, and uniform clothing. Connecting clean accountability from
                  Canada resources to the field.
                </p>
              </div>

              {/* Interactive Target Badge + Pulsing Coral Red Link */}
              <div className="mt-6 pt-5 border-t border-border flex flex-col items-start gap-4">
                <div className="block leading-none">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
                    Direct Outcome
                  </span>
                  <span className="text-xs font-semibold text-slate-700">
                    Your continuous backing ensures tuition materials, food, health care, and care.
                  </span>
                </div>

                <Link
                  to="/hope-family"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline relative group mt-1.5"
                >
                  <span className="relative">
                    Learn how to sponsor a student →
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-coral transform scale-x-100 group-hover:scale-x-110 transition-transform origin-left" />
                  </span>
                  {/* Subtle pulse wrapper icon around link text */}
                  <span className="h-2 w-2 rounded-full bg-coral inline-block animate-ping ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: "Life at ACS" Dynamic Media Gallery Section */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Gallery Header */}
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-sky font-bold bg-sky/5 px-3 py-1 rounded-full border border-sky/10 mb-4 inline-block">
              Daily Impact Gallery
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight">
              Angels Care School Gallery
            </h3>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base text-balance max-w-xl">
              A glimpse inside our classrooms, events, and daily student life. Click any image to
              view it in full definition.
            </p>
          </div>

          {/* Interactive CSS Grid Masonry Gallery (6 slots) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-soft border border-border/60 aspect-[4/3] shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky/20"
              >
                {/* Image element with smooth zoom trigger */}
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Background tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Action zoom icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/25 text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Bottom text description overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-sky bg-sky-foreground/10 border border-sky/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {img.category}
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed font-sans line-clamp-2">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Lightbox popup modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop wrapper click to exit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-ink/90 backdrop-blur-md cursor-pointer"
            />

            {/* Main responsive lightbox chassis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 p-2"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-coral bg-black/60 hover:bg-black p-2 rounded-full border border-white/10 transition z-50 cursor-pointer"
                aria-label="Close image popup"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Inner wrapper image & text */}
              <div className="flex flex-col bg-slate-900 rounded-2xl overflow-hidden">
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="max-h-[75vh] max-w-full object-contain"
                  />
                </div>

                <div className="bg-white p-6 border-t border-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-sky bg-sky/5 border border-sky/10 px-3 py-1 rounded-full inline-block mb-1">
                        {selectedImage.category}
                      </span>
                      <p className="text-sm sm:text-base text-ink font-medium leading-relaxed max-w-2xl text-left text-balance">
                        {selectedImage.caption}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="px-5 py-2 hover:bg-soft text-ink text-xs font-semibold rounded-full border border-border transition select-none"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION 5: Call To Action Footer Banner */}
      <section className="py-24 bg-soft relative overflow-hidden">
        {/* Soft elegant blur rings matching design guide */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-coral/5 blur-[90px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          {/* Glassmorphic main container */}
          <div className="relative rounded-[2.5rem] bg-white border border-border/80 p-8 md:p-14 shadow-xl overflow-hidden text-center backdrop-blur-sm">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-coral/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full mb-6 leading-none">
                Get Involved & Elevate Classrooms
              </span>

              <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-none mb-4 text-balance">
                Help Us Build the Classrooms of Tomorrow
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-10 max-w-xl">
                Every concrete brick, teaching salary contribution, and uniform sponsorship brings a
                displaced refugee scholar closer to taking flight. Join our international efforts
                spanning Canada and Kyaka II.
              </p>

              {/* Action Buttons styled precisely according to brand constraints */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center">
                {/* Solid Coral Red Button 1 (#f05153) */}
                <a
                  href="https://www.theforgottenintl.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Donate for New Classrooms</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Outline Sky Blue Button 2 (#1cbee7) */}
                <Link
                  to="/hope-family"
                  className="border-2 border-[#1cbee7] hover:bg-[#1cbee7] text-[#1cbee7] hover:text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Heart className="h-4 w-4 fill-transparent group-hover:fill-white transition-all duration-200" />
                  <span>Sponsor a Student</span>
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-1.5 text-xs text-muted-foreground/80 font-mono">
                <Globe className="h-3.5 w-3.5 text-slate-400" />
                <span>
                  100% Transparency. Certified through Hopetohope.org (501c3/Registered Canadian
                  Charity)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
