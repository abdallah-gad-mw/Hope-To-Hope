import { createFileRoute, Link } from "@/lib/router";
import { ArrowLeft, Calendar, User, Heart } from "lucide-react";
import onlineLaunchData from "@/content/story_online_launch.json";

export const Route = createFileRoute("/hope-stories/online-launch")({
  head: () => ({
    meta: [
      { title: onlineLaunchData.meta.title },
      {
        name: "description",
        content: onlineLaunchData.meta.description,
      },
    ],
  }),
  component: OnlineLaunchPage,
});

function OnlineLaunchPage() {
  const d = onlineLaunchData;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Back link */}
        <div className="mb-10">
          <Link
            to="/hope-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-coral transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{d.backButtonText}</span>
          </Link>
        </div>

        {/* 1. ARTICLE HEADER LAYOUT */}
        <header className="mb-12">
          {/* Date & Author Block */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-sky" />
              {d.header.date}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-sky" />
              {d.header.author}
            </span>
          </div>

          {/* Main Article Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-ink font-black tracking-tight leading-tight mb-4">
            {d.header.title}
          </h1>

          {/* Underline decoration accent */}
          <div className="w-24 h-1.5 bg-[#1cbee7] rounded-full mt-4" />
        </header>

        {/* Hero image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-border bg-soft shadow-sm">
          <img
            src={d.header.image}
            alt={d.header.title}
            className="w-full h-auto max-h-[480px] object-cover grayscale-[5%]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2. ARTICLE CORE TEXT */}
        <article className="prose prose-slate max-w-3xl mx-auto text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 md:space-y-8 font-normal mb-16">
          <p className="text-lg font-medium text-ink leading-relaxed">{d.content.lead}</p>

          {d.content.paragraphs.map((p, index) => {
            // Apply a blockquote outline block design to the 3rd paragraph ("In the midst of these challenges...")
            const isBlockquote = p.includes("In the midst of these challenges");
            if (isBlockquote) {
              return (
                <p
                  key={index}
                  className="border-l-4 border-coral pl-4 sm:pl-6 my-8 italic text-ink/90 font-medium"
                >
                  {p}
                </p>
              );
            }
            return <p key={index}>{p}</p>;
          })}
        </article>

        {/* 3. YOUTUBE VIDEO INTEGRATION */}
        <section className="border-t border-b border-border py-12 mb-16 bg-soft/50 rounded-2xl px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-ink mb-6">{d.video.title}</h3>

            <div className="mx-auto rounded-xl overflow-hidden shadow-md aspect-video max-w-2xl border border-border">
              <iframe
                title={d.video.title}
                src={d.video.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 4. ARTICLE CONCLUSION BLOCK */}
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-coral/5 border border-coral/10 text-center mb-16">
          <Heart className="h-8 w-8 text-coral mx-auto mb-4 animate-pulse" />
          <p className="text-sm md:text-base text-ink/90 italic leading-relaxed font-medium">
            {d.advocacy.text}
          </p>
          <div className="mt-6">
            <a
              href="https://www.theforgottenintl.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f05153] hover:bg-[#d63d3f] text-white rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold transition duration-200"
            >
              {d.advocacy.btnText}
            </a>
          </div>
        </div>

        {/* 5. TAGS LAYOUT */}
        <footer className="max-w-3xl mx-auto pt-8 border-t border-border">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Story Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {d.tags.map((tag) => (
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
