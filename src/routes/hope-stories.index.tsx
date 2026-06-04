import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hope-stories/")({
  head: () => ({
    meta: [
      { title: "Stories of Hope — Angels Care Uganda" },
      {
        name: "description",
        content:
          "Read the latest updates and testimonies from our community in the Kyaka II refugee settlement.",
      },
    ],
  }),
  component: HopeStoriesArchivePage,
});

function HopeStoriesArchivePage() {
  return (
    <div className="bg-soft min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* TASK 1 HERO HEADER: Centered, minimal, and simple */}
        <header className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal">
          <span className="text-xs uppercase tracking-widest font-semibold text-coral/80 bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block mb-4">
            Testimonies & Updates
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-ink font-extrabold tracking-tight mb-4">
            Stories of <span className="text-coral">Hope</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Read the latest updates and testimonies from our community.
          </p>
          <div className="w-16 h-1 bg-sky mx-auto mt-6 rounded-full" />
        </header>

        {/* ARTICLES GRID: Simple 2 or 3-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto reveal reveal-2">
          {/* THE FIRST STORY CARD: "Angels Care Online Launch!" */}
          <article className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[450px]">
            {/* Optional elegant card top banner image or color block */}
            <div className="h-48 relative overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="Angels Care Students smiling"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1cbee7] bg-white border border-sky/20 rounded px-2.5 py-1 shadow-sm">
                  Community Update
                </span>
              </div>
            </div>

            {/* Card Content area */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-medium mb-3">
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

                {/* Title */}
                <h3 className="text-xl font-bold text-ink hover:text-coral transition-colors line-clamp-2 leading-snug mb-3">
                  <Link to="/hope-stories/online-launch">Angels Care Online Launch!</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  We are excited to launch our online Sponsor Hope initiative for Angels Care! In
                  2008, Pastor Godfrey Byaruhanga opened Angels Care School...
                </p>
              </div>

              {/* Action - Simple text link in Coral Red */}
              <div className="pt-4 border-t border-border mt-4 flex items-center justify-between">
                <Link
                  to="/hope-stories/online-launch"
                  className="text-xs font-bold text-coral inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Read full story <ArrowRight className="h-3.5 w-3.5 text-coral" />
                </Link>
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                  3 min read
                </span>
              </div>
            </div>
          </article>

          {/* Placeholder/Coming Soon Cards to balance the grid visually */}
          <article className="bg-[#fcfdfd]/60 rounded-2xl border border-dashed border-border p-8 flex flex-col justify-center items-center text-center h-[450px]">
            <div className="h-12 w-12 rounded-full bg-sky/5 border border-sky/15 flex items-center justify-center text-sky mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-ink/80 mb-2">More Testimonies Coming</h4>
            <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
              We are gathering hope-filled stories directly from Kyaka II. Stay tuned for updates!
            </p>
          </article>

          <article className="bg-[#fcfdfd]/60 rounded-2xl border border-dashed border-border p-8 flex flex-col justify-center items-center text-center h-[450px]">
            <div className="h-12 w-12 rounded-full bg-soft border border-border flex items-center justify-center text-muted-foreground mb-4">
              <span className="text-xl font-semibold">＋</span>
            </div>
            <h4 className="text-base font-bold text-ink/60 mb-2">Sponsor a Life</h4>
            <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
              Every child's success story is made possible by supporters like you.
            </p>
            <a
              href="https://www.theforgottenintl.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-coral hover:underline"
            >
              Get involved →
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
