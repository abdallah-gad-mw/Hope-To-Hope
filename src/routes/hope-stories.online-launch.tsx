import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, Heart, Share2 } from "lucide-react";

export const Route = createFileRoute("/hope-stories/online-launch")({
  head: () => ({
    meta: [
      { title: "Angels Care Online Launch! — Angels Care Uganda" },
      {
        name: "description",
        content:
          "We are excited to launch our online Sponsor Hope initiative for Angels Care! Read the full story of our journey since 2008.",
      },
    ],
  }),
  component: OnlineLaunchPage,
});

function OnlineLaunchPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Back link */}
        <div className="mb-10 reveal">
          <Link
            to="/hope-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-coral transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Stories of Hope</span>
          </Link>
        </div>

        {/* 1. ARTICLE HEADER LAYOUT */}
        <header className="mb-12 reveal reveal-2">
          {/* Date & Author Block */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-sky" />
              June 18
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-sky" />
              Written By Angels Care / NSCC
            </span>
          </div>

          {/* Main Article Headline (Large, bold) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-ink font-black tracking-tight leading-tight mb-4">
            Angels Care Online Launch!
          </h1>

          {/* Underline decoration accent using Sky Blue (#1cbee7) */}
          <div className="w-24 h-1.5 bg-[#1cbee7] rounded-full mt-4" />
        </header>

        {/* Hero image for decoration */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-border bg-soft shadow-sm reveal reveal-2">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
            alt="Angels Care Sanctuary Children"
            className="w-full h-auto max-h-[480px] object-cover grayscale-[5%]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2. ARTICLE CORE TEXT (Styled for clean typography readability) */}
        <article className="prose prose-slate max-w-3xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 md:space-y-8 font-normal mb-16 reveal reveal-3">
          <p className="text-lg font-medium text-ink leading-relaxed">
            From Hope to Hope… We are excited to launch our online Sponsor Hope initiative for
            Angels Care!
          </p>

          <p>
            In 2008, Pastor Godfrey Byaruhanga opened Angels Care School and Orphanage to meet the
            ever-growing needs of the Kyaka II Refugee Settlement outside of Kygegwa, Uganda. Today,
            Angels Care, also formerly known as Village of Hope, provides care for over 130 orphans
            and provides education for over 1,000 students. The Ugandan Government recognizes Angels
            Care School as providing competitive and quality education for Orphaned and Vulnerable
            Children (OVCs).
          </p>

          <p>
            Located between several war-torn countries, such as the Congo and South Sudan, Uganda is
            the third-largest refugee-hosting country in the world, providing safety and new homes
            to over 1.5 million refugees. The Kyaka II Refugee Settlement is home to 150,000 of
            these refugees, along with many other Ugandan locals. The needs here are many,
            especially in the midst of the worldwide COVID-19 pandemic. Markets have closed and
            travel banned, causing many to lose their already sparse incomes. Families are facing
            food shortages and health emergencies.
          </p>

          <p className="border-l-4 border-coral pl-4 sm:pl-6 my-8 italic text-ink/90 font-medium">
            In the midst of these challenges, Angels Care Uganda brings hope! Our mission is to
            educate and raise the leaders of tomorrow through innovative and sustainable development
            practices.
          </p>

          <p>
            Currently, our immediate needs are continued support for our children at Angels Care
            Orphanage and our students at Angels Care School. We are also in serious need of
            financial support to help feed our community due to the effects of the COVID-19
            pandemic, as well as support to purchase medical supplies for the launch of Angels Care
            Medical Centre. If you wish to support us in these ways, you can sponsor hope here.
          </p>

          <p>
            Alongside our orphanage and school, Angels Care is also spearheading several development
            initiatives within the Kyaka II refugee settlement. Angels Care Fuel for the Future is a
            sustainability project that uses bio-briquettes as sustainable and environmentally
            friendly fuel to mitigate the challenges of decreased deforestation due to
            ever-increasing refugee influxes and to prevent the abuse women face when searching for
            wood fuel. Angels Care is also in the process of fundraising for a Maize Milling Machine
            so that we can subsidize the costs of feeding our children and students and provide the
            refugee community with access to maize milling as a source of income for Angels Care.
            Other projects we have undertaken include our Feminine Care project to provide our
            female students with menstrual products so they can attend school all month, every
            month. To learn more about our innovative development projects, please visit our Hope
            Projects page.
          </p>

          <p>
            As of June 2020, we are also excited to announce the opening of Angels Care Medical
            Centre. ACMC is a vision five years in the making, and it is for this reason that Pastor
            Godfrey’s daughter recently graduated medical school. ACMC is ready to serve and save
            the lives of our children and students at ACS who have been overwhelmed by rampant
            sicknesses due to insufficient and expensive health care services from the local private
            clinics and public health care centres in Kyaka II refugee settlement.
          </p>

          <p>
            ACMC will provide subsidized health care services and treatments to the refugee
            community, free service for the children and students of ACS, and we commit to always
            carrying out community health education and sensitization on disease prevention and
            better health practices. “Every individual’s health is our concern,” is our motto. ACMC
            will provide a wide range of services, from family planning, antenatal and postnatal
            care, maternity/delivery services, to child health and immunizations, minor surgeries,
            STI prevention and treatment (including for HIV), to psycho-social support including
            counselling.
          </p>
        </article>

        {/* 3. YOUTUBE VIDEO INTEGRATION SECTION */}
        <section className="border-t border-b border-border py-12 mb-16 reveal reveal-3 bg-soft/50 rounded-2xl px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title subtitle */}
            <h3 className="text-xl font-bold text-ink mb-6">
              Watch a Firsthand Look at Angels Care
            </h3>

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
        </section>

        {/* 4. ARTICLE CONCLUSION BLOCK */}
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-coral/5 border border-coral/10 text-center mb-16 reveal">
          <Heart className="h-8 w-8 text-coral mx-auto mb-4 animate-pulse" />
          <p className="text-sm md:text-base text-ink/90 italic leading-relaxed font-medium">
            "As a grassroots, locally run and operated organization, every dollar you give goes
            directly to our work on the ground. There are no donation processing fees, and donations
            are kindly processed without fees through a Canadian non-profit."
          </p>
          <div className="mt-6">
            <a
              href="https://www.theforgottenintl.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold transition duration-200"
            >
              Sponsor Hope Now
            </a>
          </div>
        </div>

        {/* 5. STORY TAXONOMY TAGS LAYOUT */}
        <footer className="max-w-3xl mx-auto pt-8 border-t border-border reveal">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Story Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "non-profit",
              "Uganda-refugees",
              "kyaka-II-refugee",
              "settlement",
              "kygegwa",
              "Uganda",
              "orphanage",
              "school",
              "medical-clinic",
              "refugee-care",
              "sustainable-development",
              "innovative-development",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-soft border border-border px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-ink transition cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
