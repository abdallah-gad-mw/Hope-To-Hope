import { createFileRoute, Link } from "@/lib/router";
import { useState } from "react";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Stethoscope,
  Mail,
  Phone,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";
import { motion } from "motion/react";
import homeData from "@/content/home.json";

const DONATE_URL = "https://www.theforgottenintl.org/donate/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angels Care Uganda — Hope for Refugee Children" },
      {
        name: "description",
        content: homeData.purpose.paragraphs[0],
      },
      { property: "og:title", content: "Angels Care Uganda" },
      {
        property: "og:description",
        content: homeData.hero.subtitle,
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const d = homeData;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="bg-background overflow-x-hidden">
      {/* SECTION 1: Full-Screen Hero Section */}
      <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src={d.hero.image}
            alt="Refugee children smiling together in Kyaka II"
            className="w-full h-full object-cover grayscale-[10%]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-white py-12">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-coral/10 border border-coral/35 text-coral rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              <HeartHandshake className="h-4 w-4" /> {d.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-balance font-sans"
            >
              {d.hero.title.split("education and care").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-coral font-sans">education and care</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed"
            >
              {d.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/hope-family"
                className="btn-coral rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all"
              >
                {d.hero.primaryBtn} <Heart className="h-4 w-4 fill-current" />
              </Link>
              <a
                href="#vision"
                className="bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-white/20 rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 transition-all"
              >
                {d.hero.secondaryBtn}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Core Vision & Geographic Context */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                {d.purpose.badge}
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl text-ink font-semibold tracking-tight leading-[1.1] text-balance">
                {d.purpose.title.split("leaders of tomorrow").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <span className="text-coral">leaders of tomorrow</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              {d.purpose.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal"
                >
                  {p}
                </p>
              ))}
              <div className="pt-2">
                <Link
                  to="/about/our-vision"
                  className="text-sm font-bold text-coral inline-flex items-center gap-1 group hover:translate-x-1 transition-transform"
                >
                  {d.purpose.linkText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Layout Column (RIGHT) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#f05153]/5 rounded-[2.5rem] -rotate-6 scale-95" />
                <div className="absolute inset-0 bg-[#1cbee7]/10 rounded-[2.5rem] rotate-3 scale-98 border-2 border-[#1cbee7]/20" />

                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={d.purpose.image}
                      alt="Refugee children inside Angels Care primary school classroom"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur rounded-xl p-3 border border-border flex items-center gap-3 shadow-md">
                  <img
                    src="/src/assets/images/Uganda-Stamp.webp"
                    alt="Uganda Stamp Official branding"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-10 w-auto opacity-90 object-contain"
                  />
                  <div className="text-left select-none">
                    <p className="text-[10px] font-bold text-ink uppercase tracking-wider">
                      Angels Care
                    </p>
                    <p className="text-[9px] text-muted-foreground">Certified Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Live Impact Metrics Dashboard */}
      <section className="py-24 bg-soft border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block mb-4">
              {d.metrics.badge}
            </span>
            <h2 className="text-3xl md:text-4xl text-ink font-semibold tracking-tight">
              {d.metrics.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">{d.metrics.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.metrics.cards.map((card, i) => {
              const isCoralAccent = i >= 2;
              return (
                <div
                  key={card.category}
                  className="bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span
                      className={`${isCoralAccent ? "text-coral bg-coral/5" : "text-[#1cbee7] bg-[#1cbee7]/5"} font-semibold text-xs tracking-wider uppercase px-2.5 py-1 rounded`}
                    >
                      {card.category}
                    </span>
                    <p className="text-4xl font-extrabold text-ink mt-6">{card.value}</p>
                    <p className="text-sm font-semibold text-ink mt-1">{card.label}</p>

                    {card.category === "Demographics" && (
                      <div className="mt-4">
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden flex">
                          <div
                            className="h-full bg-[#1cbee7]"
                            style={{ width: "80%" }}
                            title="80% Refugee"
                          />
                          <div
                            className="h-full bg-coral"
                            style={{ width: "20%" }}
                            title="20% Host Colony"
                          />
                        </div>
                        <div className="flex justify-between items-center text-[9px] text-muted-foreground font-semibold uppercase mt-1.5">
                          <span>Refugee (80%)</span>
                          <span>Host (20%)</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6A: Angels Care School Pillar Showcase */}
      <section className="py-24 bg-white border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                {d.pillars.school.badge}
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold text-ink tracking-tight leading-[1.1] text-balance font-sans">
                {d.pillars.school.title}
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              {d.pillars.school.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
              <div className="pt-4">
                <Link
                  to="/projects/school"
                  className="bg-coral hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  {d.pillars.school.btnText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Layout Column (RIGHT) */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#f05153]/5 rounded-[2.5rem] -rotate-6 scale-95" />
                <div className="absolute inset-0 bg-[#1cbee7]/10 rounded-[2.5rem] rotate-3 scale-98 border-2 border-[#1cbee7]/20" />

                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={d.pillars.school.image}
                      alt="Refugee children inside Angels Care primary school classroom"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-coral/10 text-coral">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[10px] font-black uppercase text-coral tracking-widest block">
                      {d.pillars.school.rankBadgeTitle}
                    </p>
                    <p className="text-xs font-bold text-ink">{d.pillars.school.rankBadgeValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6B: Angels Care Medical Centre Pillar Showcase */}
      <section className="py-24 bg-soft border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Layout Column (LEFT) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#1cbee7]/5 rounded-[2.5rem] -rotate-3 scale-95" />
                <div className="absolute inset-0 bg-[#f05153]/10 rounded-[2.5rem] rotate-6 scale-98 border-2 border-[#f05153]/20" />

                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={d.pillars.medical.image}
                      alt="Medical clinic response checkup within settlement region"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -bottom-6 left-4 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky/10 text-[#1cbee7]">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[10px] font-black uppercase text-[#1cbee7] tracking-widest block">
                      {d.pillars.medical.badgeTitle}
                    </p>
                    <p className="text-xs font-bold text-ink">{d.pillars.medical.badgeValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column (RIGHT) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block">
                {d.pillars.medical.badge}
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl text-ink font-bold tracking-tight leading-[1.1] text-balance font-sans">
                {d.pillars.medical.title}
              </h2>
              <div className="w-16 h-1.5 bg-coral rounded-full" />
              {d.pillars.medical.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
              <div className="pt-4">
                <Link
                  to="/projects/medical-centre"
                  className="bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-border rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                >
                  {d.pillars.medical.btnText} <ArrowRight className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6C: Angels Care Orphanage Pillar Showcase */}
      <section className="py-24 bg-white border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column (LEFT) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                {d.pillars.orphanage.badge}
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl text-ink font-bold tracking-tight leading-[1.1] text-balance font-sans">
                {d.pillars.orphanage.title}
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              {d.pillars.orphanage.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
              <div className="pt-4">
                <Link
                  to="/projects/orphanage"
                  className="bg-coral hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  {d.pillars.orphanage.btnText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Layout Column (RIGHT) */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#f05153]/10 rounded-[2.5rem] rotate-3 scale-95" />
                <div className="absolute inset-0 bg-[#1cbee7]/5 rounded-[2.5rem] -rotate-6 scale-98 border-2 border-[#1cbee7]/20" />

                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={d.pillars.orphanage.image}
                      alt="Refugee children growing in our community safe foster network"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-coral/10 text-coral">
                    <Heart className="h-6 w-6 stroke-coral fill-current" />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[10px] font-black uppercase text-coral tracking-widest block">
                      {d.pillars.orphanage.badgeTitle}
                    </p>
                    <p className="text-xs font-bold text-ink">{d.pillars.orphanage.badgeValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Sustainable Hope Projects */}
      <section className="py-24 bg-soft border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block mb-4">
              {d.sustainability.badge}
            </span>
            <h2 className="text-3xl md:text-3xl text-ink font-bold tracking-tight mb-4">
              {d.sustainability.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[500px] m-auto font-sans text-balance">
              {d.sustainability.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {d.sustainability.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between"
              >
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${index === 2 ? "text-coral" : "text-[#1cbee7]"}`}
                  >
                    {project.label}
                  </span>
                  <h4 className="text-lg font-bold text-ink mt-3 mb-2">{project.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects/hope-projects"
              className="bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-border rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 transition"
            >
              {d.sustainability.btnText} <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Founder's Message & Official Media */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                {d.founder.badge}
              </span>

              <div className="relative">
                <span className="font-serif absolute -top-14 -left-6 text-[150px] leading-none text-coral/10 select-none font-black">
                  “
                </span>
                <blockquote className="relative text-2xl sm:text-3.5xl md:text-4xl text-ink italic font-extrabold leading-tight tracking-tight mb-6 text-balance">
                  "{d.founder.quote}"
                </blockquote>
                <cite className="not-italic text-sm sm:text-base font-bold text-ink uppercase tracking-wider block">
                  — {d.founder.name}, <span className="text-coral">{d.founder.role}</span>
                </cite>
                <span className="text-xs text-muted-foreground block mt-1 uppercase tracking-widest">
                  {d.founder.organization}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mx-auto rounded-xl overflow-hidden shadow-md aspect-video max-w-2xl border border-border">
                <iframe
                  title="Watch a Firsthand Look at Angels Care"
                  src={d.founder.youtubeUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Banner */}
      <section className="">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-ink text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-500">
              <img
                src={d.hero.image}
                alt="Angels Care Uganda community assembly with children"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent pointer-events-none" />

            <div className="relative z-10 md:w-3/5 text-left">
              <span className="inline-flex items-center gap-1.5 bg-sky/20 border border-sky/30 text-sky text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4">
                {d.actionBanner.badge}
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
                href={DONATE_URL}
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

      {/* SECTION 9: Direct Contact Area & Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                {d.contact.badge}
              </span>
              <h2 className="text-3xl sm:text-3xl text-ink font-bold tracking-tight leading-tight">
                {d.contact.title}
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {d.contact.description}
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${d.contact.emailValue}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-coral/20 hover:shadow-sm transition"
                >
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-full bg-coral/5 border border-coral/15 text-coral">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">
                      {d.contact.emailLabel}
                    </p>
                    <p className="text-sm font-bold text-ink select-all">{d.contact.emailValue}</p>
                  </div>
                </a>

                <a
                  href={`tel:${d.contact.phoneValue.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-sky/20 hover:shadow-sm transition"
                >
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-full bg-[#1cbee7]/5 border border-[#1cbee7]/15 text-[#1cbee7]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">
                      {d.contact.phoneLabel}
                    </p>
                    <p className="text-sm font-bold text-ink select-all">{d.contact.phoneValue}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 bg-soft rounded-3xl p-6 sm:p-10 border border-border">
              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-150 rounded-2xl p-8 flex flex-col items-center justify-center text-center animate-fadeIn min-h-[400px]">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-bold text-emerald-900">
                    {d.contact.form.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-2 max-w-md leading-relaxed animate-fadeIn">
                    {d.contact.form.successText
                      .replace("{name}", formData.name)
                      .replace("{subject}", formData.subject || "Angels Care Uganda")
                      .replace("{email}", formData.email)}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] uppercase font-bold tracking-widest text-[#1cbee7] mb-2"
                      >
                        {d.contact.form.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder={d.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] uppercase font-bold tracking-widest text-[#1cbee7] mb-2"
                      >
                        {d.contact.form.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder={d.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2"
                    >
                      {d.contact.form.subjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder={d.contact.form.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2"
                    >
                      {d.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder={d.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-3xl border border-border bg-white px-5 py-4 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-coral rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-transform hover:scale-102 w-full sm:w-auto cursor-pointer"
                    >
                      {d.contact.form.submitBtn} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
