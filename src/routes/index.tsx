import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Stethoscope,
  Home as HomeIcon,
  Mail,
  Phone,
  Play,
  Calendar,
  User,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";
import { motion } from "motion/react";

const DONATE_URL = "https://www.theforgottenintl.org/donate/";
const HERO_IMG =
  "https://seashell-sparrow-179171.hostingersite.com/hopetohope/justice-rising-ECHO-AND-EARL-3.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angels Care Uganda — Hope for Refugee Children" },
      {
        name: "description",
        content:
          "Since 2008, Angels Care Uganda has brought education, healthcare and refuge to children in the Kyaka II settlement.",
      },
      { property: "og:title", content: "Angels Care Uganda" },
      {
        property: "og:description",
        content: "Hope for refugee children through education and care since 2008.",
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
  const [activeVideo, setActiveVideo] = useState(false);

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
      <section className="relative h-[95vh] min-h-[640px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
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
              <HeartHandshake className="h-4 w-4 animate-pulse" /> Established 2008
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-balance font-sans"
            >
              Hope for refugee children through{" "}
              <span className="text-coral">education and care</span> since 2008.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Dedicated to lifting Orphans and Vulnerable Children (OVCs) in the Kyaka II Refugee
              Settlement through sustainable programs.
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
                Join the Hope Family <Heart className="h-4 w-4 fill-current" />
              </Link>
              <a
                href="#vision"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 backdrop-blur-sm transition-all"
              >
                Discover Our Story
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
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-ink font-black tracking-tight leading-[1.1] text-balance">
                Educate and raise the <span className="text-coral">leaders of tomorrow</span>{" "}
                through innovative and sustainable development.
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                Our work in the Kyaka II refugee settlement is diverse and our impact is widespread.
                Operating within South Western Uganda where over 1.5 million refugees seek safety,
                Kyaka II hosts over 130,000 individuals—77% of whom are vulnerable women and
                children fleeing internal conflict in the Democratic Republic of the Congo.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                Angels Care works alongside the Ugandan government, UNHCR initiatives, and global
                partners like Kings Temple Missionary Society (KTMS) to bring relief, education, and
                social care to refugees seeking a stable future. Our vision is to equip the children
                of today to be the leaders of tomorrow.
              </p>
              <div className="pt-2">
                <Link
                  to="/about/our-vision"
                  className="text-sm font-bold text-coral inline-flex items-center gap-1 group hover:translate-x-1 transition-transform"
                >
                  Explore Our Full Vision <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              {/* Overlay graphics placeholder */}
              <div className="absolute inset-0 bg-coral/5 rounded-3xl -rotate-2 scale-98" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-soft bg-slate-150">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Angels Care Children studying"
                  className="w-full h-auto object-cover max-h-[380px]"
                  referrerPolicy="no-referrer"
                />

                {/* Branding asset showcase */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3 border border-border flex items-center gap-3 shadow-md">
                  <img
                    src="/watermarked_img_14364215628709291835.png"
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
              Organization Metrics
            </span>
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight">
              Our Measured Impact
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Transforming raw tracking statistics into clear channels of localized progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD A */}
            <div className="bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[#1cbee7] font-semibold text-xs tracking-wider uppercase bg-[#1cbee7]/5 px-2.5 py-1 rounded">
                  Education Scale
                </span>
                <p className="text-4xl font-extrabold text-ink mt-6">1,000+</p>
                <p className="text-sm font-semibold text-ink mt-1">Active Students</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Enrolled in our nursery and elementary tracks spanning from Kindergarten to Primary
                7 classes.
              </p>
            </div>

            {/* CARD B */}
            <div className="bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[#1cbee7] font-semibold text-xs tracking-wider uppercase bg-[#1cbee7]/5 px-2.5 py-1 rounded">
                  Demographics
                </span>
                <p className="text-4xl font-extrabold text-ink mt-6">80% / 20%</p>
                <p className="text-sm font-semibold text-ink mt-1">Refugee vs Local Host</p>

                {/* Minimal population distribution bar */}
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
                  <div className="flex justify-between items-center text-[9px] text-muted-foreground font-black uppercase mt-1.5">
                    <span>Refugee (80%)</span>
                    <span>Host (20%)</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Serving conflict survivors alongside the local host colony families in high-unity
                settings.
              </p>
            </div>

            {/* CARD C */}
            <div className="bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-coral font-semibold text-xs tracking-wider uppercase bg-coral/5 px-2.5 py-1 rounded">
                  Vulnerable Safeguarding
                </span>
                <p className="text-4xl font-extrabold text-ink mt-6">130</p>
                <p className="text-sm font-semibold text-ink mt-1">Sponsored Orphans</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Receiving total protection shelter, balanced nutrition, clothing, education fees,
                and full medical coverage.
              </p>
            </div>

            {/* CARD D */}
            <div className="bg-white rounded-3xl p-8 border border-border hover:border-coral/20 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-coral font-semibold text-xs tracking-wider uppercase bg-coral/5 px-2.5 py-1 rounded">
                  Healthcare Crisis Response
                </span>
                <p className="text-4xl font-extrabold text-ink mt-6">2,800+</p>
                <p className="text-sm font-semibold text-ink mt-1">Daily Medical Needs</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                ACMC serves as one of only three clinics answering healthcare needs for an
                overwhelmed settlement population.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Three Essential Strategic Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block mb-4">
              Strategic Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-ink font-black tracking-tight mb-4">
              Three Core Strategic Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Operating custom operations targeting absolute educational mastery, safety placements,
              and primary treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* PILLAR 1 */}
            <article className="bg-[#fcfdfd] border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Angels Care School classroom"
                  className="w-full h-full object-cover grayscale-[5%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-border rounded-lg text-ink text-[10px] font-bold uppercase px-3 py-1 scale-90">
                  Primary Education
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-coral transition-colors flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-coral" /> Angels Care School
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-6">
                    Serves the Kyaka II Refugee settlement and local children. Despite structural
                    challenges like an average of 120 children per class, our nursery and primary
                    students achieve the best national test marks within the settlement.
                  </p>
                </div>
                <div className="pt-4 border-t border-border mt-auto">
                  <Link
                    to="/projects/school"
                    className="text-xs font-bold text-coral inline-flex items-center gap-1 hover:underline"
                  >
                    View School Programs <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* PILLAR 2 */}
            <article className="bg-[#fcfdfd] border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                  alt="Medical facility checkup"
                  className="w-full h-full object-cover grayscale-[5%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-border rounded-lg text-ink text-[10px] font-bold uppercase px-3 py-1 scale-90">
                  Clinical Care
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-coral transition-colors flex items-center gap-2">
                    <Stethoscope className="h-6 w-6 text-coral" /> Medical Centre
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-6">
                    A dream five years in the making operating 24 hours a day. We provide subsidized
                    healthcare services priced 40% less than private clinics, and 100% free medical
                    care to all students of Angels Care School.
                  </p>
                </div>
                <div className="pt-4 border-t border-border mt-auto">
                  <Link
                    to="/projects/medical-centre"
                    className="text-xs font-bold text-coral inline-flex items-center gap-1 hover:underline"
                  >
                    View Clinic Services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* PILLAR 3 */}
            <article className="bg-[#fcfdfd] border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                  alt="Loving family sanctuary"
                  className="w-full h-full object-cover grayscale-[5%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-border rounded-lg text-ink text-[10px] font-bold uppercase px-3 py-1 scale-90">
                  Sanctuary Shelter
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-coral transition-colors flex items-center gap-2">
                    <HomeIcon className="h-5 w-5 text-coral" /> Angels Care Orphanage
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-6">
                    Ensuring refugee children escape isolation. 15 orphans live directly within
                    Pastor Godfrey's compassionate home environment, while 115 are safely assigned
                    to foster families throughout our refugee community supported entirely by our
                    sponsorship fund.
                  </p>
                </div>
                <div className="pt-4 border-t border-border mt-auto">
                  <Link
                    to="/projects/orphanage"
                    className="text-xs font-bold text-coral inline-flex items-center gap-1 hover:underline"
                  >
                    View Orphanage Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: Sustainable Hope Projects */}
      <section className="py-24 bg-soft border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block mb-4">
              Sustainability Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4">
              Innovative Community Development Projects
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Creating localized income generation and environmental tools to foster
              self-sustainability within the Kyaka II refugee settlement.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Project A */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#1cbee7] uppercase tracking-wider">
                  Project A
                </span>
                <h4 className="text-lg font-bold text-ink mt-3 mb-2">
                  Girls' Education & Menstrual Care
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Providing reusable sanitary napkins and personal care products to female students
                  on campus to completely eliminate sanitary-related school dropouts and absences.
                </p>
              </div>
            </div>

            {/* Project B */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#1cbee7] uppercase tracking-wider">
                  Project B
                </span>
                <h4 className="text-lg font-bold text-ink mt-3 mb-2">Fuel for the Future</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Producing engineered bio-briquettes from community agricultural residuals to serve
                  as deforestation alternatives, mitigation fuel, and protect women from isolation
                  wood searches.
                </p>
              </div>
            </div>

            {/* Project C */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-coral uppercase tracking-wider">
                  Project C
                </span>
                <h4 className="text-lg font-bold text-ink mt-3 mb-2">
                  Self-Sustainability Corn Milling
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A target campaign for a $25,000 USD Maize Milling Machine to locally grind
                  community corn flour, slash school feeding expenses by 50%, and employ resident
                  women.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/projects/hope-projects"
              className="bg-white hover:bg-slate-50 text-ink border border-border rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 transition"
            >
              Explore Sustainable Projects <ChevronRight className="h-4 w-4" />
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
                Founder Message
              </span>

              <div className="relative">
                <span className="font-serif absolute -top-14 -left-6 text-[150px] leading-none text-coral/10 select-none font-black">
                  “
                </span>
                <blockquote className="relative text-2xl sm:text-3.5xl md:text-4xl text-ink italic font-extrabold leading-tight tracking-tight mb-6 text-balance">
                  "The children of today will be the leaders of tomorrow."
                </blockquote>
                <cite className="not-italic text-sm sm:text-base font-bold text-ink uppercase tracking-wider block">
                  — Byaruhanga Godfrey, <span className="text-coral">CEO and Founder</span>
                </cite>
                <span className="text-xs text-muted-foreground block mt-1 uppercase tracking-widest">
                  Angels Care Uganda
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-border aspect-video bg-soft relative flex items-center justify-center">
                {activeVideo ? (
                  <iframe
                    title="Watch a Firsthand Look at Angels Care"
                    src="https://www.youtube.com/embed/fstkH_h4BM4?autoplay=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80"
                      alt="Refugee Community Play video"
                      className="w-full h-full object-cover grayscale-[10%]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideo(true)}
                        className="h-16 w-16 bg-coral hover:bg-[#d63d3f] text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition"
                        aria-label="Play informational video"
                      >
                        <Play className="h-6 w-6 fill-current ml-1" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Join the Hope Family Campaign Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="bg-coral/5 border border-coral/10 rounded-[32px] p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/10 border border-coral/15 px-3 py-1 rounded inline-block">
                Increase Your Impact
              </span>
              <h3 className="text-2xl sm:text-3.5xl font-extrabold text-ink tracking-tight">
                Join the <span className="text-coral">Hope Family!</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                A transparent community of dedicated sponsors providing recurrent monthly donations
                key to covering long-term infrastructure milestones.
              </p>
            </div>
            <div>
              <Link
                to="/hope-family"
                className="btn-coral rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-block text-center shadow-md hover:shadow-lg transition-transform hover:scale-102"
              >
                Become a Monthly Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Latest News Feed (Static Card Preview) */}
      <section className="py-24 bg-soft border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block mb-3">
                Updates from Kyaka II
              </span>
              <h2 className="text-3xl md:text-4xl text-ink font-black tracking-tight">
                Latest from <span className="text-coral">Hope Stories</span>
              </h2>
            </div>
            <div>
              <Link
                to="/hope-stories"
                className="text-xs font-bold text-[#1cbee7] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
              >
                Browse All Stories <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </header>

          <div className="max-w-md">
            <article className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col justify-between min-h-[460px]">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Angels Care Online Launch header"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-sky" />
                      Jun 18
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-sky" />
                      Angels Care / NSCC
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink hover:text-coral transition-colors mb-3 leading-snug">
                    <Link to="/hope-stories/online-launch">Angels Care Online Launch!</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                    We are excited to launch our online Sponsor Hope initiative for Angels Care! In
                    2008, Pastor Godfrey Byaruhanga opened Angels Care School to address refugee
                    needs...
                  </p>
                </div>
                <div className="pt-4 border-t border-border mt-6">
                  <Link
                    to="/hope-stories/online-launch"
                    className="text-xs font-black text-coral uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
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
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl text-ink font-black tracking-tight leading-tight">
                Contact Us
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We would love to answer any further questions you may have about Angels Care Uganda!
                You can reach our team at the following info:
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:angelscareuganda.info@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-coral/20 hover:shadow-sm transition"
                >
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-full bg-coral/5 border border-coral/15 text-coral">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Email</p>
                    <p className="text-sm font-bold text-ink select-all">
                      angelscareuganda.info@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+16043605868"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-sky/20 hover:shadow-sm transition"
                >
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-full bg-[#1cbee7]/5 border border-[#1cbee7]/15 text-[#1cbee7]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Phone</p>
                    <p className="text-sm font-bold text-ink select-all">(604) 360-5868</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 bg-soft rounded-3xl p-6 sm:p-10 border border-border">
              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-150 rounded-2xl p-8 flex flex-col items-center justify-center text-center animate-fadeIn min-h-[400px]">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-emerald-900">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-2 max-w-md leading-relaxed">
                    Thank you, {formData.name}. We have received your inquiry regarding "
                    {formData.subject || "Angels Care Uganda"}" and our team on the ground will
                    respond to {formData.email} as soon as possible.
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
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Byaruhanga Godfrey"
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
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="godfrey@example.com"
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
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="How would you like to support us?"
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
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="I am interested in supporting the children..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-3xl border border-border bg-white px-5 py-4 text-sm text-ink outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-coral rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-transform hover:scale-102 w-full sm:w-auto"
                    >
                      Send Message <ArrowRight className="h-4 w-4" />
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
