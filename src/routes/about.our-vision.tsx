import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Heart,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Award,
  TrendingUp,
  Globe,
  Quote,
  CheckCircle2,
  Users,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import aboutVisionData from "@/content/about_vision.json";

const DONATE_URL = "https://www.theforgottenintl.org/donate/";

export const Route = createFileRoute("/about/our-vision")({
  head: () => ({
    meta: [
      { title: aboutVisionData.metaTitle },
      {
        name: "description",
        content: aboutVisionData.metaDescription,
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
  component: OurVisionPage,
});

// Animation presets compatible with Framer Motion (motion/react)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function OurVisionPage() {
  const d = aboutVisionData;
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      {/* 1. Page Hero Banner Section */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-gradient-to-b from-soft to-background overflow-hidden border-b border-border">
        {/* Abstract decorative ambient background shapes */}
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky/10 blur-3xl pointer-events-none" />
        <div className="absolute top-20 -right-40 h-[350px] w-[350px] rounded-full bg-coral/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                {d.hero.badge}
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight font-semibold text-balance">
                Our Vision & <span className="text-coral">Mission</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                {d.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 shadow"
                >
                  Sponsor a Child <Heart className="h-4 w-4 fill-current" />
                </a>
                <a
                  href="#journey"
                  className="px-6 py-3 rounded-full border border-border bg-white hover:bg-soft text-ink hover:text-coral text-sm font-semibold transition inline-flex items-center gap-1.5"
                >
                  Learn Our History <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Premium Vision Quote Block */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -right-6 -bottom-6 h-full w-full rounded-3xl bg-soft/50 border border-border/40 pointer-events-none transform translate-x-2 translate-y-2 opacity-50" />
              <div className="relative rounded-3xl p-8 md:p-10 border border-sky/30 bg-white shadow-soft overflow-hidden">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-5 bg-sky" />
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky" />

                <Quote className="h-10 w-10 text-sky/30 transform rotate-180 mb-6" />

                <blockquote className="text-xl sm:text-2xl text-ink leading-relaxed font-semibold italic text-balance font-display">
                  {d.founderMsg.quote}
                </blockquote>

                <hr className="my-6 border-border" />

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-coral/15 flex items-center justify-center font-display font-bold text-coral text-base">
                    BG
                  </div>
                  <div>
                    <cite className="not-italic block font-semibold text-ink text-base">
                      {d.founderMsg.author}
                    </cite>
                    <span className="text-xs text-muted-foreground block font-medium">
                      {d.founderMsg.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Who We Are & Our Journey" Section */}
      <section id="journey" className="py-24 md:py-32 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column: Story text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                {d.journey.badge}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1] font-semibold text-balance">
                Rooted in the Community <br />
                <span className="text-coral">Since 2008</span>
              </h2>

              <div className="mt-8 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                {d.journey.paragraphs.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-soft border border-border">
                  <span className="text-coral font-bold text-lg block font-display">
                    Refugee Care
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold">
                    Kyaka II Settlement Support
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-soft border border-border">
                  <span className="text-sky font-bold text-lg block font-display">
                    Community Aid
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold">
                    Local Host Integrations
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-layered Image Grid */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/5]">
                {/* Visual Backdrop decoration */}
                <div className="absolute inset-4 rounded-3xl bg-coral/10 -rotate-3 transform -translate-x-4 scale-105" />

                {/* Primary Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                  <img
                    src={d.journey.imageUrlPrimary}
                    alt="Happy children at Angels Care school smiling"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Secondary Offset Image */}
                <div className="absolute -bottom-8 -right-6 md:-right-8 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl group hidden sm:block">
                  <img
                    src={d.journey.imageUrlSecondary}
                    alt="Active learning session"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Est. Code badge */}
                <div className="absolute -top-4 -left-4 bg-coral text-white rounded-2xl px-5 py-3 shadow-coral flex flex-col items-center justify-center font-display">
                  <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                    Est.
                  </span>
                  <span className="text-2xl font-bold tracking-tight">2008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Current Impact Metrics & Demographics" Section */}
      <section className="py-24 md:py-32 bg-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Dynamic Metrics
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-[1.1] text-balance">
              {d.metrics.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">{d.metrics.subtitle}</p>
          </div>

          {/* Bento Grid Layout (3 card responsive grid) */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* CARD 1: 1,000 Students Served (Refugee / National Split) */}
            <div className="lg:col-span-6 card-hover rounded-3xl p-8 bg-white border border-border flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-sky/10" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-sky font-semibold uppercase tracking-wider bg-sky/10 px-3 py-1 rounded-full mb-6">
                  <Users className="h-3.5 w-3.5" /> Education Reach
                </span>
                <h3 className="text-3xl font-semibold text-ink font-display">
                  {d.metrics.educationCard.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed text-balance">
                  {d.metrics.educationCard.description}
                </p>
              </div>

              {/* Progress split bar */}
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex justify-between text-xs font-semibold mb-3">
                  <span className="text-sky flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky" />
                    {d.metrics.educationCard.labelPrimary}
                  </span>
                  <span className="text-coral flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                    {d.metrics.educationCard.labelSecondary}
                  </span>
                </div>
                <div className="h-4 w-full rounded-full bg-soft overflow-hidden flex border border-border">
                  <div
                    className="h-full bg-sky transition-all duration-1000"
                    style={{ width: `${d.metrics.educationCard.ratioPrimary}%` }}
                  />
                  <div
                    className="h-full bg-coral transition-all duration-1000"
                    style={{ width: `${d.metrics.educationCard.ratioSecondary}%` }}
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground/80 italic text-center">
                  {d.metrics.educationCard.footerLabel}
                </p>
              </div>
            </div>

            {/* CARD 2: 130 Orphans Supported */}
            <div className="lg:col-span-6 card-hover rounded-3xl p-8 bg-white border border-border flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-coral/10" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-coral font-semibold uppercase tracking-wider bg-coral/10 px-3 py-1 rounded-full mb-6">
                  <Heart className="h-3.5 w-3.5 fill-current" /> PSNs & Vulnerables
                </span>
                <h3 className="text-3xl font-semibold text-ink font-display">
                  {d.metrics.orphansCard.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed text-balance">
                  {d.metrics.orphansCard.description}
                </p>
              </div>

              {/* Support tags block */}
              <div className="mt-8 border-t border-border pt-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                  {d.metrics.orphansCard.listHeader}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {d.metrics.orphansCard.items.map((p) => (
                    <div
                      key={p.label}
                      className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-xl bg-coral/5 text-ink font-medium border border-coral/10"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-coral flex-shrink-0" />
                      {p.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 3: Vocational Training & Self-Reliance */}
            <div className="lg:col-span-12 card-hover rounded-3xl p-8 bg-white border border-border overflow-hidden relative">
              <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-sky/5 pointer-events-none" />
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink font-semibold uppercase tracking-wider bg-soft px-3 py-1 rounded-full mb-6 border border-border">
                    <Award className="h-3.5 w-3.5 text-coral" /> Out-of-School Youth Support
                  </span>
                  <h3 className="text-3xl font-semibold text-ink font-display">
                    {d.metrics.vocationalCard.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed text-balance">
                    {d.metrics.vocationalCard.description}
                  </p>
                </div>

                <div className="md:col-span-5 p-6 rounded-2xl bg-soft border border-border/85">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block mb-4 text-center">
                    Active Skills & Self-Reliance Pillars
                  </span>
                  <div className="grid grid-cols-2 gap-3.5">
                    {[
                      { icon: Briefcase, name: "Tailoring & Design" },
                      { icon: Globe, name: "Agriculture Tech" },
                      { icon: ShieldCheck, name: "Hands-on Trades" },
                      { icon: TrendingUp, name: "Self-Reliance" },
                    ].map((pill) => {
                      const Icon = pill.icon;
                      return (
                        <div
                          key={pill.name}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-border text-center shadow-sm"
                        >
                          <Icon className="h-5 w-5 text-coral mb-2" />
                          <span className="text-xs font-semibold text-ink leading-tight">
                            {pill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Trusted Global Alliances" Section */}
      <section className="py-24 md:py-32 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Direct Support
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink font-semibold tracking-tight leading-[1.1]">
              Our Global Supporters & Partners
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Our continuous growth and impact are made possible through strong collaborations with
              dedicated organizations worldwide.
            </p>
          </div>

          {/* Logo Strip / Decorative boxes for partners */}
          <div className="grid md:grid-cols-3 gap-6">
            {d.partners.map((p) => (
              <div
                key={p.title}
                className="card-hover flex flex-col justify-between p-6 rounded-3xl border border-border bg-white text-left relative overflow-hidden h-72 md:h-80"
              >
                <div className="absolute -right-6 -top-6 text-7xl font-black text-soft font-display select-none">
                  {p.abbrev}
                </div>
                <div>
                  <div className="flex gap-1.5 mb-4">
                    {p.pills.map((pL) => (
                      <span
                        key={pL}
                        className="text-[10px] bg-soft border border-border px-2 py-0.5 rounded-full text-muted-foreground font-semibold uppercase tracking-wider"
                      >
                        {pL}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-ink leading-tight mb-3">{p.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-coral group cursor-pointer mt-4">
                  <Sparkles className="h-3 w-3" /> Collaboration Alliance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "International Partnership Spotlight" Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-soft to-[#edf4f9] relative overflow-hidden">
        {/* Background visual graphics */}
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-coral/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-sky/10 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative">
          <div className="rounded-[32px] md:rounded-[44px] bg-white border border-sky/20 p-8 sm:p-12 md:p-16 shadow-soft relative overflow-hidden">
            {/* Glowing borders */}
            <div className="absolute inset-0 border-t-8 border-sky pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-coral" />

            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral font-bold bg-coral/5 px-3 py-1 rounded-full border border-coral/10">
                ⭐ Partner Spotlight
              </span>

              <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl text-ink leading-tight font-semibold text-balance font-display">
                {d.canadaSpotlight.header}
              </h3>

              <span
                aria-hidden
                className="font-display text-[140px] md:text-[180px] leading-none text-sky/20 select-none mt-4 -mb-12 font-bold"
              >
                “
              </span>

              <div className="relative z-10 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl text-center italic font-display">
                <p>{d.canadaSpotlight.quoteParagraph1}</p>
                <p className="mt-4">
                  We have established{" "}
                  <span className="text-ink font-semibold not-italic">hopetohope.org</span> solely
                  as a fundraising arm, here in Canada, to provide financial support to the work
                  that is being done in Uganda by Angels Care and Pastor Godfrey. We are privileged
                  to work with Angels Care in this capacity and believe your donated funds will
                  accomplish more than we could ever dream of for these children and families.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center">
                <span className="font-bold text-ink text-base md:text-lg block">
                  {d.canadaSpotlight.author}
                </span>
                <span className="text-xs text-coral font-bold tracking-widest uppercase mt-1">
                  {d.canadaSpotlight.authorSubtitle}
                </span>
              </div>

              {/* Spotlight call-to-action */}
              <div className="mt-12 w-full max-w-md border-t border-border pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
                >
                  Join as a Sponsor <Heart className="h-4 w-4 fill-current" />
                </a>
                <Link
                  to="/hope-family"
                  className="px-7 py-3.5 rounded-full border border-border bg-white hover:bg-soft text-ink text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition"
                >
                  Meet Hope Family <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
