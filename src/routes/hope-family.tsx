import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp, Heart, Sparkles, Mail, CheckCircle2, Quote } from "lucide-react";

export const Route = createFileRoute("/hope-family")({
  head: () => ({
    meta: [
      { title: "Join the Hope Family — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Join a community of dedicated giving with transparent, transformative results in Kyaka II.",
      },
    ],
  }),
  component: HopeFamilyPage,
});

function HopeFamilyPage() {
  // Accordion active state trackers
  const [openAccordion, setOpenAccordion] = useState<number | null>(0); // Default open the first tab (Transparency)
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Accordion items mapping
  const accordionData = [
    {
      title: "Transparency",
      content:
        "All members of the Hope Family receive monthly updates from our team on the ground via our newsletter. We are accountable to you, letting you know exactly where those funds were directed.",
    },
    {
      title: "Education",
      content:
        "All members of the Hope Family also receive educational newsletters. We want you to be informed about what we are doing, why, and why it matters. For example, you’ll learn about the importance of girls’ education, refugee education, and the impact of dedicated health care workers.",
    },
    {
      title: "Hope",
      content:
        "Our world needs hope. All members of the Hope Family receive hope stories of lives being changed and impacted. We are your source of good news, and we’ll always remind you that you are a part of something impactful.",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail("");
      }, 5000);
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Full-Screen Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 text-center bg-gradient-to-b from-soft via-background to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 reveal">
          <span className="text-xs uppercase tracking-widest font-semibold text-coral bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="h-3 w-3 animate-pulse" /> Monthly Giving Community
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7.5xl text-ink font-black tracking-tight leading-[1.05] mb-6">
            Join the <span className="text-coral">Hope Family!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            A community of dedicated giving with transparent, transformative results.
          </p>
          <div className="flex justify-center">
            <a
              href="#donation-section"
              className="btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all"
            >
              Join the Hope Family
            </a>
          </div>
        </div>
      </section>



      {/* 3. Interactive Accordion Section ("Why join the Hope Family?") */}
      <section className="py-24 bg-soft">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 reveal reveal-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4">
              Why join the Hope Family?
            </h2>
            <p className="text-sm text-muted-foreground">
              Discover how your sustained commitment builds long-term impact on the ground.
            </p>
          </div>

          {/* Minimalist Accordion component */}
          <div className="space-y-4 mb-12">
            {accordionData.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-ink hover:text-coral transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{item.title}</span>
                    <span className="ml-4 h-6 w-6 rounded-full bg-soft border border-border flex items-center justify-center text-muted-foreground group-hover:text-ink">
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
              Join the Hope Family
            </a>
          </div>
        </div>
      </section>

      {/* 4. Core Context Section ("Why give monthly?") */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4">
              Why give monthly?
            </h2>
            <div className="w-12 h-1 bg-coral mx-auto rounded-full" />
          </div>


          {/* test the new cards */}
          {/* 3-Column Modern Interactive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Needs Card 1 (The Educators) */}
            <div className="group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[240px]">
              {/* Corner soft accent background circle */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full pointer-events-none" />
              <div>
                <span className="text-xs font-mono text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded">
                  Sustainability
                </span>

                <h4 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors">
                  Key to Long-Term Impact
                </h4>

                <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  Monthly giving is key to long-term impact. By knowing that we have a recurring base of donations, we can cover our monthly costs and take on long-term projects that require support.
                </p>
              </div>
            </div>


            {/* Needs Card 3 (Support & Sponsorship Pipeline) */}
            <div className="group relative rounded-3xl bg-white border border-border/80 p-8 flex flex-col justify-between card-hover shadow-sm overflow-hidden min-h-[240px]">
              {/* Corner soft background circle */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-coral/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-xs font-mono text-coral font-bold bg-coral/5 px-2 py-1 rounded">
                  Partnership
                </span>

                <h4 className="text-xl sm:text-2xl text-ink font-semibold tracking-tight mt-3 mb-4 group-hover:text-coral transition-colors">
                  Spread Out Your Giving
                </h4>

                <p className="text-xs sm:text-sm text-balance text-muted-foreground leading-relaxed">
                  Monthly giving helps you as well! You can spread your giving beyond a year-end donation, helping you to be a part of something for the long-run and staying informed as to the effects of your donation.
                </p>
              </div>
            </div>
          </div>

          {/* end of the test cards */}

          <div className="text-center">
            <a
              href="#donation-section"
              className="btn-coral rounded-full px-8 py-4 text-sm tracking-wider capitalize font-bold inline-flex items-center gap-2 shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 hover:scale-[1.02] transition-all"
            >
              Support Monthly Giving
            </a>
          </div>
        </div>
      </section>

      {/* 5. Split 2-Column Donation Section (The Main Layout Action) */}
      <section id="donation-section" className="py-24 bg-soft border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (Text & Instructions) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-coral/80 bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block">
                Start Today
              </span>
              <h2 className="text-3xl sm:text-4xl text-ink font-black tracking-tight leading-tight">
                Ready to Make <span className="text-coral">an Impact?</span>
              </h2>
              <div className="w-16 h-1 bg-[#1cbee7] rounded-full" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To join the Hope Family, simply use the DonorBox checkout to the right of your
                screen. You will automatically be signed up for our monthly newsletters and will
                receive a year-end tax receipt from KTMS.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-border flex gap-4 items-center">
                <div className="h-10 w-10 shrink-0 bg-coral/5 border border-coral/10 rounded-full flex items-center justify-center text-coral">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Your monthly connection provides healthcare, education, and safe shelter in Kyaka
                  II.
                </p>
              </div>

              {/* Premium Vision Quote Block */}
              <div className="relative">
                <div className="absolute -right-6 -bottom-6 h-full w-full rounded-3xl bg-soft/50 border border-border/40 pointer-events-none transform translate-x-2 translate-y-2 opacity-50" />
                <div className="relative rounded-3xl p-8 md:p-10 border border-sky/30 bg-white shadow-soft overflow-hidden">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-5 bg-sky" />
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky" />

                  <Quote className="h-10 w-10 text-sky/30 transform rotate-180 mb-6" />

                  <blockquote className="text-ink leading-relaxed italic text-balance font-display">
                    “I know that what I give is having a profound and direct impact on lives that truly need support. Lives have been torn apart by war, and many have nothing. By giving what I can monthly, I know I am a part of lasting change.”
                  </blockquote>

                  <hr className="my-6 border-border" />

                  <div className="flex items-center gap-4">
                    <div>
                      <cite className="not-italic block font-semibold text-base text-coral">
                        — A member of the Hope Family
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (The Vertical DonorBox Widget) */}
            <div className="lg:col-span-5 h-full bg-white rounded-3xl p-2 sm:p-2 border border-border shadow-soft">
              <iframe
                src="https://donorbox.org/embed/the-hope-family-1?a=b"
                name="donorbox"
                allowpaymentrequest="allowpaymentrequest"
                seamless={true}
                frameBorder="0"
                height="100%"
                title="DonorBox Donation Form"
                className="w-full rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
