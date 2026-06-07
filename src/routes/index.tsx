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
  "/src/assets/images/hero.webp";

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
                className="bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-white/20 rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center  gap-2 transition-all"
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
              <h2 className="text-3xl sm:text-3xl md:text-3xl text-ink font-semi-bold tracking-tight leading-[1.1] text-balance">
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

            {/* Layout Column (RIGHT) */}
            <div className="lg:col-span-5 relative" data-aos="fade-left">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                {/* Layered backgrounds with offset angles */}
                <div className="absolute inset-0 bg-[#f05153]/5 rounded-[2.5rem] -rotate-6 scale-95" />
                <div className="absolute inset-0 bg-[#1cbee7]/10 rounded-[2.5rem] rotate-3 scale-98 border-2 border-[#1cbee7]/20" />

                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="/src/assets/images/kids.webp"
                      alt="Refugee children inside Angels Care primary school classroom"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Branding asset showcase */}
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
              Organization Metrics
            </span>
            <h2 className="text-3xl md:text-4xl text-ink font-semi-bold tracking-tight">
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

      {/* SECTION 6A: Angels Care School Pillar Showcase */}
      <section className="py-24 bg-white border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column (LEFT) */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                OUR EDUCATION STRACETGY
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold text-ink  tracking-tight leading-[1.1] text-balance font-sans">
                Angels Care School: Nurturing the Leaders of Tomorrow
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Operating inside the heart of the Kyaka II refugee settlement and host community,
                our nursery and primary schools provide a sanctuary of learning for over 1,000
                active students from Kindergarten through Primary 7. Fleeing severe instability in
                the DRC, these children find not only safety but an elite academic track.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Despite facing profound resource limitations and accommodating an average of 120
                eager children per classroom, our dedicated faculty inspires excellence—resulting in
                our students achieving the top scores in nationwide educational evaluations within
                the entire settlement region.
              </p>
              <div className="pt-4">
                <Link
                  to="/projects/school"
                  className="bg-coral hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Explore Our School Curriculum & Needs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Layout Column (RIGHT) */}
            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                {/* Layered backgrounds with offset angles */}
                <div className="absolute inset-0 bg-[#f05153]/5 rounded-[2.5rem] -rotate-6 scale-95" />
                <div className="absolute inset-0 bg-[#1cbee7]/10 rounded-[2.5rem] rotate-3 scale-98 border-2 border-[#1cbee7]/20" />

                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="/src/assets/images/school/2.webp"
                      alt="Refugee children inside Angels Care primary school classroom"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-coral/10 text-coral">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[10px] font-black uppercase text-coral tracking-widest">
                      Settlement Rank
                    </p>
                    <p className="text-xs font-bold text-ink">#1 Score Nationwide</p>
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
            <div className="lg:col-span-6 order-2 lg:order-1 relative" data-aos="fade-right">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                {/* Layered backgrounds with offset angles */}
                <div className="absolute inset-0 bg-[#1cbee7]/5 rounded-[2.5rem] -rotate-3 scale-95" />
                <div className="absolute inset-0 bg-[#f05153]/10 rounded-[2.5rem] rotate-6 scale-98 border-2 border-[#f05153]/20" />

                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="/src/assets/images/107050000_579153106133552_4669114132287895332_n.webp"
                      alt="Medical clinic response checkup within settlement region"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 left-4 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky/10 text-[#1cbee7]">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[10px] font-black uppercase text-[#1cbee7] tracking-widest">
                      ACMC Clinic
                    </p>
                    <p className="text-xs font-bold text-ink">24/7 Life-Saving Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column (RIGHT) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6" data-aos="fade-left">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#1cbee7] bg-[#1cbee7]/5 border border-[#1cbee7]/15 px-4 py-1.5 rounded-full inline-block">
                CRITICAL HEALTHCARE RESPONSE
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl text-ink font-bold tracking-tight leading-[1.1] text-balance font-sans">
                Angels Care Medical Centre: 24/7 Life-Saving Care
              </h2>
              <div className="w-16 h-1.5 bg-coral rounded-full" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                A visionary project five years in the making, the Angels Care Medical Centre (ACMC)
                stands as a vital beacon of health, operating round-the-clock to manage critical
                emergencies. Positioned as one of only three operational medical facilities
                servicing a swelling refugee population of over 130,000 individuals, ACMC answers up
                to 2,800 urgent healthcare requests daily.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                To ensure true humanitarian relief, our medical treatments are fully
                subsidized—priced 40% lower than standard private clinics—while extending 100% free
                comprehensive healthcare to every student enrolled in Angels Care School.
              </p>
              <div className="pt-4">
                <Link
                  to="/projects/medical-centre"
                  className="bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-border rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                >
                  View Clinic Infrastructure & Medical Services{" "}
                  <ArrowRight className="h-4 w-4 text-white" />
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
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                CHILD SAFEGUARDING & FAMILY INFRASTRUCTURE
              </span>
              <h2 className="text-3xl sm:text-3xl md:text-3xl text-ink font-bold tracking-tight leading-[1.1] text-balance font-sans">
                Angels Care Orphanage: A Sanctuary of Pure Compassion
              </h2>
              <div className="w-16 h-1.5 bg-[#1cbee7] rounded-full" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                No child should ever face the trauma of displacement in isolation. The Angels Care
                Orphanage program acts as a loving shield for 130 fully sponsored orphans, providing
                complete security, nutrition, clothing, medical care, and permanent educational
                support.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Our model is deeply community-driven: while 15 highly vulnerable orphans reside
                directly within the warm family household of Pastor Godfrey, our robust sponsorship
                network allows us to integrate 115 orphans into vetted, loving foster care homes
                safely distributed across the Kyaka II refugee community.
              </p>
              <div className="pt-4">
                <Link
                  to="/projects/orphanage"
                  className="bg-coral hover:bg-[#d63d3f] text-white rounded-full px-8 py-4 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Sponsor a Refugee Child Today <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Layout Column (RIGHT) */}
            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-lg mx-auto">
                {/* Layered backgrounds with offset angles */}
                <div className="absolute inset-0 bg-[#f05153]/10 rounded-[2.5rem] rotate-3 scale-95" />
                <div className="absolute inset-0 bg-[#1cbee7]/5 rounded-[2.5rem] -rotate-6 scale-98 border-2 border-[#1cbee7]/20" />

                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-2xl bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="/src/assets/images/Image38-2sized.webp"
                      alt="Refugee children growing in our community safe foster network"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-coral/10 text-coral">
                    <Heart className="h-6 w-6 stroke-coral fill-current" />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[10px] font-black uppercase text-coral tracking-widest">
                      Active Guardians
                    </p>
                    <p className="text-xs font-bold text-ink">130 Children Sponsored</p>
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
              Sustainability Initiatives
            </span>
            <h2 className="text-3xl md:text-3xl text-ink font-bold tracking-tight mb-4">
              Innovative Community Development Projects
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[500px] m-auto">
              Creating localized income generation and environmental tools to foster
              self-sustainability within the Kyaka II refugee settlement.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Project A */}
            <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
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
            <div className="bg-white p-8 rounded-3xl border border-border flex flex-col justify-between">
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
            <div className="bg-white p-8 rounded-3xl border border-border  flex flex-col justify-between">
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
              className="bg-[#1cbee7] hover:bg-[#1b97b7] text-white border border-border rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2 transition"
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
              {/* Responsive Iframe Container */}
              <div className="mx-auto rounded-xl overflow-hidden shadow-md aspect-video max-w-2xl border border-border">
                <iframe
                  title="Watch a Firsthand Look at Angels Care"
                  src="https://www.youtube.com/embed/fstkH_h4BM4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Inline Activity Banner (Horizontal visual card) */}
      <section className="">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-ink text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 group">
            {/* Visual background image with gradient overlay */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity duration-500">
              <img
                src="/src/assets/images/hero.webp"
                alt="Angels Care Uganda community assembly with children"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ink fallback gradient structure */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/80 to-transparent pointer-events-none" />

            <div className="relative z-10 md:w-3/5 text-left">
              <span className="inline-flex items-center gap-1.5 bg-sky/20 border border-sky/30 text-sky text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4">
                Life at Angels Care
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none text-white">
                Our Team in Action
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                Empowering the 900+ active scholars of Kyaka II refugee camp daily. Through
                classroom schedules, outdoor assemblies, sports tournaments, and food programs, we
                stand unified to nurture the regional leaders of tomorrow.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.theforgottenintl.org/donate/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral rounded-full px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-center inline-flex items-center justify-center gap-2 hover:shadow-coral"
              >
                Support our School Meal Program <Heart className="h-4 w-4 fill-white" />
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
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-3xl text-ink font-bold tracking-tight leading-tight">
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
