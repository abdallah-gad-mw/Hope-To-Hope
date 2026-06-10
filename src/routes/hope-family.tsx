import { createFileRoute } from "@/lib/router";
import { useState } from "react";
import { ChevronDown, ChevronUp, Heart, Sparkles, Quote } from "lucide-react";
import hopeFamilyData from "@/content/hope_family.json";

export const Route = createFileRoute("/hope-family")({
  head: () => ({
    meta: [
      { title: "Join the Hope Family — Angels Care Uganda" },
      {
        name: "description",
        content: hopeFamilyData.hero.subtitle,
      },
    ],
  }),
  component: HopeFamilyPage,
});

function HopeFamilyPage() {
  const d = hopeFamilyData;
  const [openAccordion, setOpenAccordion] = useState<number | null>(0); // Default open first tab

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Full-Screen Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 text-center bg-gradient-to-b from-soft via-background to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="h-3 w-3 animate-pulse" /> {d.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7.5xl text-ink font-black tracking-tight leading-[1.05] mb-6">
            Join the <span className="text-coral">Hope Family!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            {d.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <a
              href="#donation-section"
              className="btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all"
            >
              {d.hero.btnText}
            </a>
          </div>
        </div>
      </section>

      {/* 3. Interactive Accordion Section */}
      <section className="py-24 bg-soft">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4">
              {d.accordion.title}
            </h2>
            <p className="text-sm text-muted-foreground">{d.accordion.subtitle}</p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4 mb-12">
            {d.accordion.items.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-ink hover:text-coral transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{item.title}</span>
                    <span className="ml-4 h-6 w-6 rounded-full bg-soft border border-border flex items-center justify-center text-muted-foreground">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-border/60" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="#donation-section"
              className="btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all"
            >
              {d.hero.btnText}
            </a>
          </div>
        </div>
      </section>

      {/* 4. Core Context Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4">
              {d.benefits.title}
            </h2>
            <div className="w-12 h-1 bg-coral mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {d.benefits.cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between hover:border-coral/20 hover:shadow-md transition-all sm:shadow-sm overflow-hidden min-h-[240px]"
              >
                <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full pointer-events-none" />
                <div>
                  <span className="text-xs font-mono text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded">
                    {card.tag}
                  </span>
                  <h4 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#donation-section"
              className="btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all"
            >
              {d.benefits.btnText}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Split 2-Column Donation Section */}
      <section id="donation-section" className="py-24 bg-soft border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-coral/80 bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                {d.donation.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl text-ink font-black tracking-tight leading-tight">
                {d.donation.title.split("an Impact?")[0]}
                <span className="text-coral">an Impact?</span>
              </h2>
              <div className="w-16 h-1 bg-[#1cbee7] rounded-full" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {d.donation.description}
              </p>
              <div className="p-5 rounded-2xl bg-white border border-border flex gap-4 items-center">
                <div className="h-10 w-10 shrink-0 bg-coral/5 border border-coral/10 rounded-full flex items-center justify-center text-coral">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <p className="text-xs text-muted-foreground">{d.donation.infoText}</p>
              </div>

              {/* Premium Vision Quote Block */}
              <div className="relative">
                <div className="absolute -right-6 -bottom-6 h-full w-full rounded-3xl bg-soft/50 border border-border/40 pointer-events-none transform translate-x-2 translate-y-2 opacity-50" />
                <div className="relative rounded-3xl p-8 md:p-10 border border-sky/30 bg-white shadow-soft overflow-hidden">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-5 bg-sky" />
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky" />

                  <Quote className="h-10 w-10 text-sky/30 transform rotate-180 mb-6" />

                  <blockquote className="text-ink leading-relaxed italic text-balance font-display">
                    {d.donation.quote}
                  </blockquote>

                  <hr className="my-6 border-border" />

                  <div className="flex items-center gap-4">
                    <div>
                      <cite className="not-italic block font-semibold text-base text-coral">
                        {d.donation.quoteAuthor}
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 h-[800px] bg-white rounded-3xl p-2 sm:p-2 border border-border shadow-soft">
              <iframe
                src={d.donation.widget.url}
                name="donorbox"
                allowpaymentrequest="allowpaymentrequest"
                seamless={true}
                frameBorder="0"
                height="100%"
                title={d.donation.widget.title}
                className="w-full rounded-xl shadow-sm h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
