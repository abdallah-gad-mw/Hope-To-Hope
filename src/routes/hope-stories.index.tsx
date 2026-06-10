import { createFileRoute, Link } from "@/lib/router";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import hopeStoriesData from "@/content/hope_stories.json";

export const Route = createFileRoute("/hope-stories/")({
  head: () => ({
    meta: [
      { title: "Stories of Hope — Angels Care Uganda" },
      {
        name: "description",
        content: hopeStoriesData.hero.subtitle,
      },
    ],
  }),
  component: HopeStoriesArchivePage,
});

function HopeStoriesArchivePage() {
  const d = hopeStoriesData;

  return (
    <div className="bg-soft min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* HERO HEADER */}
        <header className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-coral/80 bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full inline-block mb-4">
            {d.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-ink font-extrabold tracking-tight mb-4">
            Stories of <span className="text-coral">{d.hero.title.split("Hope")[1] || "Hope"}</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {d.hero.subtitle}
          </p>
          <div className="w-16 h-1 bg-sky mx-auto mt-6 rounded-full" />
        </header>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {d.stories.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[450px]"
            >
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1cbee7] bg-white border border-sky/20 rounded px-2.5 py-1 shadow-sm">
                    {story.category}
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
                      {story.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-sky" />
                      {story.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink hover:text-coral transition-colors line-clamp-2 leading-snug mb-3 hover:scale-[1.01] origin-left">
                    <Link to={story.to as "/hope-stories/online-launch"}>{story.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {story.excerpt}
                  </p>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-border mt-4 flex items-center justify-between">
                  <Link
                    to={story.to as "/hope-stories/online-launch"}
                    className="text-xs font-bold text-coral inline-flex items-center gap-1 hover:translate-x-1 transition-transform"
                  >
                    Read full story <ArrowRight className="h-3.5 w-3.5 text-coral" />
                  </Link>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                    {story.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* Placeholder/Coming Soon Cards */}
          <article className="bg-[#fcfdfd]/60 rounded-2xl border border-dashed border-border p-8 flex flex-col justify-center items-center text-center h-[450px]">
            <div className="h-12 w-12 rounded-full bg-sky/5 border border-sky/15 flex items-center justify-center text-sky mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-ink/80 mb-2">
              {d.placeholders.comingSoon.title}
            </h4>
            <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
              {d.placeholders.comingSoon.description}
            </p>
          </article>

          <article className="bg-[#fcfdfd]/60 rounded-2xl border border-dashed border-border p-8 flex flex-col justify-center items-center text-center h-[450px]">
            <div className="h-12 w-12 rounded-full bg-soft border border-border flex items-center justify-center text-muted-foreground mb-4">
              <span className="text-xl font-semibold">＋</span>
            </div>
            <h4 className="text-base font-bold text-ink/60 mb-2">{d.placeholders.sponsor.title}</h4>
            <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
              {d.placeholders.sponsor.description}
            </p>
            <a
              href="https://www.theforgottenintl.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-coral hover:underline"
            >
              {d.placeholders.sponsor.btnText}
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
