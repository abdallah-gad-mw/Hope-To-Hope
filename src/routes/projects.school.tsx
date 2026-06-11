import { createFileRoute, Link } from "@/lib/router";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  Globe,
} from "lucide-react";
import schoolData from "@/content/projects_school.json";
import { useCMSContent } from "@/hooks/useCMSContent";

export const Route = createFileRoute("/projects/school")({
  head: () => ({
    meta: [
      { title: "Angels Care School — Angels Care Uganda" },
      {
        name: "description",
        content: schoolData.hero.subheading,
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

interface GalleryImage {
  id: number;
  url: string;
}

function SchoolProjectPage() {
  const d = useCMSContent("projects_school", schoolData);
  const [showBadgeTooltip, setShowBadgeTooltip] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Gallery items using local assets
  const galleryImages: GalleryImage[] = [
    { id: 1, url: "/src/assets/images/school/1.webp" },
    { id: 2, url: "/src/assets/images/school/2.webp" },
    { id: 3, url: "/src/assets/images/school/3.webp" },
    { id: 4, url: "/src/assets/images/school/4.webp" },
    { id: 5, url: "/src/assets/images/school/5.webp" },
    { id: 6, url: "/src/assets/images/school/6.webp" },
    { id: 7, url: "/src/assets/images/school/7.webp" },
    { id: 8, url: "/src/assets/images/school/8.webp" },
    { id: 9, url: "/src/assets/images/school/9.webp" },
    { id: 10, url: "/src/assets/images/school/10.webp" },
    { id: 11, url: "/src/assets/images/school/12.webp" },
    { id: 12, url: "/src/assets/images/school/13.webp" },
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
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Minimalist Top Badge with Interactive Tooltip */}
              <div className="relative inline-flex items-center gap-2.5 mb-6 z-20">
                <div
                  className="inline-flex items-center gap-1.5 cursor-pointer select-none bg-coral/10 hover:bg-coral/15 text-coral text-xs font-semibold px-4 py-1.5 rounded-full border border-coral/25 transition-all duration-200"
                  onClick={() => setShowBadgeTooltip(!showBadgeTooltip)}
                  onMouseEnter={() => setShowBadgeTooltip(true)}
                  onMouseLeave={() => setShowBadgeTooltip(false)}
                >
                  <Award className="h-4 w-4" />
                  <span>{d.hero.badge}</span>
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
                      className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-ink text-white rounded-2xl p-4 shadow-xl border border-white/10 text-xs z-30 leading-relaxed text-left"
                    >
                      <div className="absolute -top-1.5 left-8 w-3 h-3 bg-ink rotate-45 border-t border-l border-white/10" />
                      <p className="font-semibold text-coral flex items-center gap-1 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-coral" /> Official Ministerial
                        Status
                      </p>
                      In 2011, the Ugandan government issued formal recognition of our exemplary
                      educational standards within Kyaka II Refugee Settlement, authorizing
                      curriculum testing and standards criteria.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Title heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance">
                Angels Care <span className="text-coral">School</span>
              </h1>

              <h2 className="mt-4 text-sky font-semibold tracking-wide text-lg sm:text-xl md:text-2xl uppercase font-sans">
                {d.hero.subheading}
              </h2>

              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-balance">
                {d.hero.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 select-none">
                <a
                  href="#demographics"
                  className="btn-coral rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer"
                >
                  Explore Our Core <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#needs"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink text-xs uppercase tracking-wider font-bold transition duration-200 cursor-pointer"
                >
                  Urgent Class Needs
                </a>
              </div>
            </div>

            {/* Right Image Frame showcasing Classroom */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5] object-cover">
                {/* Asymmetric visual backing grids */}
                <div className="absolute inset-4 rounded-3xl bg-sky/15 -rotate-3 transform -translate-x-3 scale-105" />
                <div className="absolute inset-4 rounded-3xl bg-coral/10 rotate-2 transform translate-x-3 scale-102" />

                {/* Main image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-white p-3 group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-soft">
                    <img
                      src="/src/assets/images/school/2.webp"
                      alt="Refugee child engaged in learning at school desk"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating caption tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 p-2 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 text-xs text-center">
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
            <div className="lg:col-span-6 flex flex-col justify-center h-full text-left">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block">
                  {d.curriculum.badge}
                </span>

                <h3 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-tight">
                  {d.curriculum.title}
                </h3>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {d.curriculum.description}
                </p>

                <div className="mt-6 text-muted-foreground space-y-3 text-sm leading-relaxed">
                  {d.curriculum.list.map((item, id) => (
                    <div key={id} className="flex gap-2 items-start">
                      <span className="text-emerald-500 font-bold font-sans">✓</span>
                      <p className="font-medium text-ink/90">{item}</p>
                    </div>
                  ))}
                  <p className="font-medium text-ink bg-soft/80 p-4 border-l-4 border-sky rounded-r-2xl mt-4">
                    Angels Care School educates refugee children so that they can be the leaders of
                    tomorrow. Many of our graduates return to Angels Care proudly as teachers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Metrics Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
              {/* Stat 1 */}
              <div className="rounded-2xl p-6 bg-coral/5 border border-coral/10 flex flex-col justify-between min-h-[190px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-border/80 w-fit">
                    <Users className="h-5 w-5 text-coral" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs uppercase font-semibold text-muted-foreground/85 tracking-tight block">
                      {d.metrics.students.label}
                    </span>
                    <h4 className="text-3xl text-ink font-bold tracking-tight mt-1">
                      {d.metrics.students.value}
                    </h4>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed">
                  {d.metrics.students.detail}
                </p>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl p-6 bg-sky/5 border border-sky/10 flex flex-col justify-between min-h-[190px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-border/80 w-fit">
                    <BookOpen className="h-5 w-5 text-sky" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs uppercase font-semibold text-muted-foreground/85 tracking-tight block">
                      {d.metrics.ratio.label}
                    </span>
                    <h4 className="text-3xl text-ink font-bold tracking-tight mt-1">
                      {d.metrics.ratio.value}
                    </h4>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed">
                  {d.metrics.ratio.detail}
                </p>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl p-6 bg-indigo-50/40 border border-indigo-100 flex flex-col justify-between min-h-[190px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-border/80 w-fit">
                    <GraduationCap className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs uppercase font-semibold text-muted-foreground/85 tracking-tight block">
                      {d.metrics.rank.label}
                    </span>
                    <h4 className="text-3xl text-ink font-bold tracking-tight mt-1 col-auto">
                      {d.metrics.rank.value}
                    </h4>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed">
                  {d.metrics.rank.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Continued Critical Needs */}
      <section id="needs" className="py-24 bg-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Main Headers */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10 mb-4 inline-block">
              {d.needs.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight">
              {d.needs.title}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
              {d.needs.description}
            </p>
          </div>

          {/* Dynamic 5-Column Grid spanning beautifully */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {d.needs.items.map((item, index) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white border border-border p-6 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[380px] text-left"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-indigo-500 font-bold bg-indigo-50 px-2 py-0.5 rounded">
                      Priority 0{index + 1}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-coral bg-coral/5 border border-coral/10 px-2 py-0.5 rounded">
                      {item.cost}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-ink mb-3 group-hover:text-coral transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    {item.pills.map((pill, pId) => (
                      <span
                        key={pId}
                        className="text-[9px] font-bold uppercase tracking-tight text-slate-500 bg-slate-105 px-2 py-0.5 rounded border border-border/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://www.theforgottenintl.org/donate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-coral hover:underline mt-1"
                  >
                    Sponsor This Needs →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Live at ACS Gallery */}
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

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-soft border border-border/60 aspect-[4/3] shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky/20"
              >
                <img
                  src={img.url}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/25 text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Lightbox Modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute inset-0 bg-ink/90 backdrop-blur-md cursor-pointer"
                />

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

                  <div className="flex flex-col bg-slate-900 rounded-2xl overflow-hidden">
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative bg-slate-950 flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedImage.url}
                        className="max-h-[75vh] max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}

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
                {d.advocacy.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl text-ink font-semibold tracking-tight leading-none mb-4 text-balance">
                {d.advocacy.title}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-balance mb-6 max-w-xl">
                {d.advocacy.description}
              </p>

              <div className="bg-coral/5 p-4 rounded-xl border border-coral/10 text-coral font-medium text-xs sm:text-sm italic mb-10 text-center max-w-lg">
                {d.advocacy.quote}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center">
                <a
                  href="https://www.theforgottenintl.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider font-bold transition duration-200 text-center shadow-lg hover:shadow-[#f05153]/35 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{d.advocacy.primaryBtn}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

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
