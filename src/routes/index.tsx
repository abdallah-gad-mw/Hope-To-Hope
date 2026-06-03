import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  GraduationCap,
  Stethoscope,
  Home as HomeIcon,
  Play,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DONATE_URL = "https://www.theforgottenintl.org/donate/";

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
        href: "https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const HERO_IMG =
  "https://seashell-sparrow-179171.hostingersite.com/hopetohope/justice-rising-ECHO-AND-EARL-3.webp";

function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={HERO_IMG}
        alt="Refugee children smiling together"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 md:pb-20">
        <div className="gap-6 md:gap-10 items-end">
          <div className="text-white">
            <h1 className="reveal text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-semibold">
              Hope for refugee children
              <br />
              <span className="text-white/90">through education</span>
              <br />
              and care.
            </h1>
            <p className="reveal reveal-2 mt-6 text-white/85 text-base md:text-lg max-w-xl">
              Walking alongside Orphans and Vulnerable Children in the Kyaka II refugee settlement
              since 2008.
            </p>
            <div className="reveal reveal-3 mt-8 flex flex-wrap gap-3">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
              >
                Sponsor a Child <Heart className="h-4 w-4 fill-current" />
              </a>
              <a
                href="#vision"
                className="btn-outline-sky rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
              >
                Discover Our Story <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const stats = [
    { value: "900+", label: "Students Enrolled", tag: "Education" },
    { value: "130+", label: "Sponsored Orphans", tag: "Care" },
    { value: "18+", label: "Years of Care", tag: "Since 2008" },
  ];
  return (
    <section id="vision" className="px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Our Vision
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl text-ink text-balance leading-[1.1] font-semibold">
            Educate and raise the <span className="text-coral">leaders</span> of tomorrow through
            innovative and sustainable development.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            Our work in the Kyaka II refugee settlement is diverse and our impact is widespread.
            Angels Care works alongside the government, UNHCR initiatives, and other sectors to
            bring care to refugees seeking refuge.
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="card-hover relative rounded-3xl p-6 md:p-7 bg-gradient-to-br from-white to-soft border border-border overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-10 bg-coral" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>0{i + 1}</span>
                <span className="px-2.5 py-1 rounded-full bg-soft border border-border">
                  {s.tag}
                </span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-display text-5xl md:text-6xl text-ink font-semibold">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground max-w-[160px] text-right">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "Angels Care School",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?auto=format&fit=crop&w=1200&q=80",
    text: "Serves the Kyaka II Refugee settlement and Ugandan local children. We provide education for 900 students, of which 130 orphans are sponsored by Angels Care Uganda.",
    tag: "Education",
  },
  {
    title: "Angels Care Medical Centre",
    icon: Stethoscope,
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
    text: "We deliver continuing care programs that address community health needs — from training health workers to running outreach clinics that meet refugees where they live.",
    tag: "Healthcare",
  },
  {
    title: "Angels Care Orphanage",
    icon: HomeIcon,
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    text: "Cares for 130 orphans through loving family placements or full provision at the orphanage. Many are personally raised, fed, clothed and schooled by Pastor Godfrey and his wife.",
    tag: "Care Home",
  },
];

function Pillars() {
  return (
    <section id="pillars" className="px-4 py-24 md:py-32 bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Core Pillars
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink text-balance max-w-2xl leading-[1.1] font-semibold">
              Three programs, <span className="text-coral">one mission</span> — to raise the leaders
              of tomorrow.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            const span = i === 1 ? "md:col-span-6" : "md:col-span-3";
            return (
              <article
                key={p.title}
                className={`${span} card-hover group relative overflow-hidden rounded-3xl bg-white border border-border min-h-[460px] flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 glass text-ink text-xs px-2.5 py-1.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    {p.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 grid place-items-center h-11 w-11 rounded-full text-white bg-coral">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-[26px] text-ink leading-tight font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.text}
                  </p>
                  <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-between gap-3 rounded-full bg-ink text-white px-4 py-2.5 text-sm font-medium hover:bg-coral transition"
                  >
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    tag: "Water",
    title: "Clean Water Wells",
    text: "Solar-powered wells serving 4 villages and the school campus.",
    img: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Agriculture",
    title: "Sustainable Farming",
    text: "Teaching families to grow nutritious crops year-round.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Education",
    title: "Teacher Training",
    text: "Continuing education for 40+ educators in modern pedagogy.",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Healthcare",
    title: "Mobile Clinics",
    text: "Quarterly outreach reaching remote settlement zones.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Shelter",
    title: "Family Homes",
    text: "Safe, durable shelter for newly arrived refugee families.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
  },
];

function Projects() {
  const [i, setI] = useState(0);
  const max = PROJECTS.length;
  const go = (d: number) => setI((p) => (p + d + max) % max);
  return (
    <section id="projects" className="px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Hope Projects
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1] text-balance font-semibold">
              Sustainable projects that lift entire communities.
            </h2>
            <p className="mt-4 text-muted-foreground">
              At Angels Care, we strive to not only educate and care for our children but to
              implement innovative and sustainable development projects that benefit the entire
              Kyaka II community.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="h-12 w-12 grid place-items-center rounded-full border border-border bg-white hover:bg-soft transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="h-12 w-12 grid place-items-center rounded-full bg-ink text-white hover:bg-coral transition"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4">
          <div
            className="flex gap-5 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(calc(-${i} * (320px + 20px)))` }}
          >
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="card-hover shrink-0 w-[320px] md:w-[380px] rounded-3xl overflow-hidden bg-white border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 glass text-ink text-xs px-3 py-1.5 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-ink font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="px-4 py-24 md:py-32 bg-soft">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Founder's Message
          </span>
          <div className="mt-6 relative">
            <span
              aria-hidden
              className="font-display absolute -top-10 -left-2 text-[160px] md:text-[220px] leading-none text-coral/20 select-none"
            >
              “
            </span>
            <blockquote className="relative font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] text-balance font-semibold">
              The children of today will be the leaders of tomorrow.
            </blockquote>
            <footer className="mt-6 text-muted-foreground">
              — <span className="text-ink font-medium">Byrahunga Godfrey</span>, CEO and Founder
            </footer>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80"
              alt="Pastor Godfrey with the children"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <button aria-label="Play video" className="absolute inset-0 grid place-items-center">
              <span className="h-20 w-20 grid place-items-center rounded-full bg-white/90 backdrop-blur shadow-2xl group-hover:scale-110 transition">
                <Play className="h-7 w-7 text-coral fill-coral ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="donate" className="px-4 py-20">
      <div
        className="relative max-w-7xl mx-auto overflow-hidden rounded-[32px] md:rounded-[44px] p-10 md:p-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.668 0.187 22) 0%, oklch(0.72 0.16 30) 60%, oklch(0.78 0.12 35) 100%)",
        }}
      >
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid md:grid-cols-12 gap-8 items-center text-white">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> Increase your impact
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance font-semibold">
              Join the Hope Family!
            </h2>
            <p className="mt-5 max-w-xl text-white/85 text-lg">
              A community of dedicated sponsors with transparent, transformative results — see
              exactly where your support lands.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white text-coral px-7 py-4 font-semibold hover:bg-ink hover:text-white transition shadow-2xl"
            >
              Become a Sponsor
              <span className="grid place-items-center h-7 w-7 rounded-full bg-coral text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Contact Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1] text-balance font-semibold">
            Let's start a conversation about hope.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            We would love to answer any further questions you may have about Angels Care Uganda!
            Reach our team and we will respond as soon as possible.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href="mailto:angelscareuganda.info@gmail.com"
              className="card-hover flex items-center gap-4 p-4 rounded-2xl border border-border bg-white"
            >
              <span className="grid place-items-center h-11 w-11 rounded-full bg-coral/10 text-coral">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-ink font-medium">angelscareuganda.info@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+16043605868"
              className="card-hover flex items-center gap-4 p-4 rounded-2xl border border-border bg-white"
            >
              <span className="grid place-items-center h-11 w-11 rounded-full bg-coral/10 text-coral">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-ink font-medium">(604) 360-5868</div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="md:col-span-7 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-soft to-white border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your Name" id="name" placeholder="Jane Doe" />
            <Field label="Email" id="email" type="email" placeholder="jane@example.com" />
          </div>
          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="How would you like to support Angels Care?"
              className="w-full rounded-2xl border border-border bg-white px-5 py-4 text-ink placeholder:text-muted-foreground/70 outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15 resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-coral mt-6 inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-semibold"
          >
            Send Message <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-white px-5 py-3.5 text-ink placeholder:text-muted-foreground/70 outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15"
      />
    </div>
  );
}

function Index() {
  return (
    <div className="bg-background overflow-x-hidden">
      <Hero />
      <Vision />
      <Pillars />
      <Projects />
      <Founder />
      <CTA />
      <Contact />
    </div>
  );
}
