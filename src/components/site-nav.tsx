import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/angels-care-logo.webp.asset.json";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Vision", to: "/about/our-vision" },
      { label: "Kyaka II", to: "/about/kyaka-ii" },
      { label: "Our Team", to: "/about/our-team" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    children: [
      { label: "Angels Care School", to: "/projects/school" },
      { label: "Medical Centre", to: "/projects/medical-centre" },
      { label: "Angels Care Orphanage", to: "/projects/orphanage" },
      { label: "Hope Projects", to: "/projects/hope-projects" },
    ],
  },
  { label: "Hope Stories", to: "/hope-stories" },
  { label: "Hope Family", to: "/hope-family" },
];

const DONATE_URL = "https://www.theforgottenintl.org/donate/";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  const isHomeUnscrolled = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 md:px-12 lg:px-16">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-300 px-3 sm:px-6 py-1.5 sm:py-2 ${
          scrolled
            ? "glass backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-white/20 pdi-10-20"
            : "bg-white/20 backdrop-blur-md border border-white/10 pdi-10-20"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo.url} alt="Angels Care Uganda" className="h-7 sm:h-9 md:h-10 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {NAV.map((n) => {
            const isActive =
              n.to === "/" ? location.pathname === "/" : location.pathname.startsWith(n.to);
            return (
              <li key={n.label} className="relative group">
                <Link
                  to={n.to}
                  className={`px-3 py-2 rounded-full transition inline-flex items-center gap-1 ${
                    isActive
                      ? "text-coral font-semibold"
                      : isHomeUnscrolled
                        ? "text-white/95 hover:text-white hover:bg-white/10"
                        : "text-foreground/75 hover:text-foreground hover:bg-white/70"
                  }`}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                  {n.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {n.children && (
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-0 top-full pt-3 w-60 z-50">
                    <div className="rounded-2xl bg-white border border-border shadow-xl p-2">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-3 py-2 rounded-xl text-sm text-foreground/80 hover:text-coral hover:bg-soft transition"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 btn-coral rounded-full px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium shrink-0"
          >
            Donate Now <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-ink text-white shrink-0"
            aria-label="Open menu"
          >
            <Menu className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile full-height slide-in drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <img src={logo.url} alt="Angels Care Uganda" className="h-9 w-auto" />
            <button
              onClick={() => setOpen(false)}
              className="grid place-items-center h-10 w-10 rounded-full bg-soft text-ink"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="flex flex-col">
              {NAV.map((n) => {
                const isOpenGroup = openGroup === n.label;
                return (
                  <li key={n.label} className="border-b border-border/60">
                    <div className="flex items-center">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="flex-1 block px-3 py-3.5 text-base font-medium text-ink"
                      >
                        {n.label}
                      </Link>
                      {n.children && (
                        <button
                          onClick={() => setOpenGroup(isOpenGroup ? null : n.label)}
                          className="px-3 py-3.5 text-ink/60"
                          aria-label="Expand"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isOpenGroup ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {n.children && isOpenGroup && (
                      <ul className="pb-2 pl-4">
                        {n.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2.5 text-sm text-foreground/75 hover:text-coral"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-coral rounded-full px-5 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 w-full"
            >
              Donate Now <Heart className="h-3.5 w-3.5 fill-current" />
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
