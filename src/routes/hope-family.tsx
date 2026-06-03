import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp, Heart, Sparkles, Mail, CheckCircle2 } from "lucide-react";

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
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 text-center bg-gradient-to-b from-soft via-background to-background">
        <div className="max-w-4xl mx-auto reveal">
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
              className="btn-coral rounded-full px-8 py-4 text-sm font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join the Hope Family
            </a>
          </div>
        </div>
      </section>

      {/* 2. Description Section ("What is the Hope Family?") */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center reveal reveal-2">
          <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-6">
            What is the Hope Family?
          </h2>
          <div className="w-12 h-1 bg-coral mx-auto mb-8 rounded-full" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            The Hope Family is a community of dedicated hope sponsors. Our unique partnership with
            Angels Care Uganda ensures that 100% of donations go directly to the work on the ground.
            Our commitment is key to long-term transformation.
          </p>
        </div>
      </section>

      {/* 3. Interactive Accordion Section ("Why join the Hope Family?") */}
      <section className="py-24 px-6 md:px-12 bg-soft">
        <div className="max-w-3xl mx-auto reveal reveal-2">
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
              className="btn-coral rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2"
            >
              Join the Hope Family
            </a>
          </div>
        </div>
      </section>

      {/* 4. Core Context Section ("Why give monthly?") */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-ink font-extrabold tracking-tight mb-4">
              Why give monthly?
            </h2>
            <div className="w-12 h-1 bg-coral mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
            {/* Block A */}
            <div className="p-8 rounded-3xl bg-soft border border-border flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-coral bg-coral/5 border border-coral/15 px-3 py-1 rounded inline-block mb-4">
                  Sustainability
                </span>
                <h3 className="text-xl font-bold text-ink mb-4">Key to Long-Term Impact</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Monthly giving is key to long-term impact. By knowing that we have a recurring
                  base of donations, we can cover our monthly costs and take on long-term projects
                  that require long-term support.
                </p>
              </div>
            </div>

            {/* Block B */}
            <div className="p-8 rounded-3xl bg-soft border border-border flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-sky bg-sky/5 border border-sky/15 px-3 py-1 rounded inline-block mb-4">
                  Partnership
                </span>
                <h3 className="text-xl font-bold text-ink mb-4">Spread Out Your Giving</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Monthly giving helps you as well! You can spread your giving beyond a year-end
                  donation, helping you to be a part of something for the long-run and staying
                  informed as to the effects of your donation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#donation-section"
              className="btn-coral rounded-full px-8 py-4 text-xs tracking-wider uppercase font-extrabold inline-flex items-center gap-2"
            >
              Support Monthly Giving
            </a>
          </div>
        </div>
      </section>

      {/* 5. Split 2-Column Donation Section (The Main Layout Action) */}
      <section id="donation-section" className="py-24 px-6 md:px-12 bg-soft border-t border-border">
        <div className="max-w-6xl mx-auto reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (Text & Instructions) */}
            <div className="lg:col-span-5 space-y-6">
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
            </div>

            {/* Right Column (The Vertical DonorBox Widget) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-border shadow-soft">
              <iframe
                src="https://donorbox.org/embed/the-hope-family-1?a=b"
                name="donorbox"
                allowpaymentrequest="allowpaymentrequest"
                seamless={true}
                frameBorder="0"
                scrolling="no"
                title="DonorBox Donation Form"
                className="w-full min-h-[600px] rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Premium Testimonial Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="relative">
            <span
              aria-hidden
              className="font-serif absolute -top-16 -left-4 text-[140px] md:text-[200px] leading-none text-coral/10 select-none font-black"
            >
              “
            </span>
            <blockquote className="relative text-xl sm:text-2xl md:text-3xl text-ink italic font-medium leading-relaxed mb-8">
              “I know that what I give is having a profound and direct impact on lives that truly
              need support. Lives have been torn apart by war, and many have nothing. By giving what
              I can monthly, I know I am a part of lasting change.”
            </blockquote>
            <cite className="not-italic text-sm sm:text-base font-bold text-coral uppercase tracking-wider block">
              — A member of the Hope Family
            </cite>
          </div>
        </div>
      </section>

      {/* 7. Separate Newsletter Form */}
      <section className="py-20 px-6 md:px-12 bg-soft border-t border-border">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="h-12 w-12 rounded-full bg-[#1cbee7]/5 border border-[#1cbee7]/15 flex items-center justify-center text-[#1cbee7] mx-auto mb-6">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-4">
            Stay Connected
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-8">
            Sign up with your email address to receive monthly news, hope stories, and updates.
          </p>

          {isSubscribed ? (
            <div className="bg-emerald-50 border border-emerald-150 rounded-2xl p-6 flex flex-col items-center max-w-md mx-auto animate-fadeIn">
              <CheckCircle2 className="h-8 w-8 text-emerald-500 mb-2" />
              <p className="text-sm font-bold text-emerald-800">Successfully Subscribed!</p>
              <p className="text-xs text-emerald-600 mt-1">
                Thank you for subscribing to our updates.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                id="hope-family-newsletter-input"
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-grow rounded-full border border-border bg-white px-5 py-3.5 text-sm text-ink placeholder:text-muted-foreground outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/15"
              />
              <button
                type="submit"
                className="bg-[#1cbee7] hover:bg-[#15a2c6] text-white rounded-full px-6 py-3.5 text-xs uppercase tracking-wider font-bold transition duration-200 shadow-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
