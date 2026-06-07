import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation, e as useChildMatches, M as Match } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports, R as React } from "../_libs/react.mjs";
import { C as ChevronDown, H as Heart, M as Menu, X, a as CircleCheck, I as Instagram, F as Facebook, Y as Youtube, T as Twitter } from "../_libs/lucide-react.mjs";
import { u as useReducedMotion, A as AnimatePresence, m as motion, a as useIsPresent } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-Cj_teWhB.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const url = "https://seashell-sparrow-179171.hostingersite.com/hopetohope/angels-care-logo.png";
const logo = {
  url
};
const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Vision", to: "/about/our-vision" },
      { label: "Kyaka II", to: "/about/kyaka-ii" },
      { label: "Our Team", to: "/about/our-team" }
    ]
  },
  {
    label: "Projects",
    to: "/projects",
    children: [
      { label: "Angels Care School", to: "/projects/school" },
      { label: "Medical Centre", to: "/projects/medical-centre" },
      { label: "Angels Care Orphanage", to: "/projects/orphanage" },
      { label: "Hope Projects", to: "/projects/hope-projects" }
    ]
  },
  { label: "Hope Stories", to: "/hope-stories" },
  { label: "Hope Family", to: "/hope-family" }
];
const DONATE_URL = "https://www.theforgottenintl.org/donate/";
function SiteNav() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [openGroup, setOpenGroup] = reactExports.useState(null);
  const location = useLocation();
  const isHomeUnscrolled = location.pathname === "/" && !scrolled;
  reactExports.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 md:px-12 lg:px-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: `max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-300 px-3 sm:px-6 py-1.5 sm:py-2 ${scrolled ? "glass backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-white/20 pdi-10-20" : "bg-white/20 backdrop-blur-md border border-white/10 pdi-10-20"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo.url, alt: "Angels Care Uganda", className: "h-7 sm:h-9 md:h-10 w-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden lg:flex items-center gap-1 text-sm", children: NAV.map((n) => {
            const isActive = n.to === "/" ? location.pathname === "/" : location.pathname.startsWith(n.to);
            const hasChildren = !!n.children;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative group nav-group-desktop", children: [
              hasChildren ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `px-3 py-2 rounded-full transition inline-flex items-center gap-1 cursor-pointer outline-none ${isActive ? "text-coral font-semibold" : isHomeUnscrolled ? "text-white/95 hover:text-white hover:bg-white/10" : "text-foreground/75 hover:text-foreground hover:bg-white/70"}`,
                  children: [
                    n.label,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: n.to,
                  className: `px-3 py-2 rounded-full transition inline-flex items-center gap-1 ${isActive ? "text-coral font-semibold" : isHomeUnscrolled ? "text-white/95 hover:text-white hover:bg-white/10" : "text-foreground/75 hover:text-foreground hover:bg-white/70"}`,
                  activeOptions: { exact: n.to === "/" },
                  children: n.label
                }
              ),
              n.children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-0 top-full pt-3 w-60 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-white border border-border shadow-xl p-2", children: n.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: c.to,
                  className: "block px-3 py-2 rounded-xl text-sm text-foreground/80 hover:text-coral hover:bg-soft transition",
                  children: c.label
                },
                c.to
              )) }) })
            ] }, n.label);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: DONATE_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1.5 sm:gap-2 btn-coral rounded-full px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium shrink-0",
                children: [
                  "Donate Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen(true),
                className: "lg:hidden grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-ink text-white shrink-0",
                "aria-label": "Open menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-ink/40 backdrop-blur-sm",
              onClick: () => setOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "aside",
            {
              className: `absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo.url, alt: "Angels Care Uganda", className: "h-9 w-auto" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setOpen(false),
                      className: "grid place-items-center h-10 w-10 rounded-full bg-soft text-ink",
                      "aria-label": "Close menu",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 overflow-y-auto px-3 py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col", children: NAV.map((n) => {
                    const isOpenGroup = openGroup === n.label;
                    const hasChildren = !!n.children;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-b border-border/60", children: [
                      hasChildren ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setOpenGroup(isOpenGroup ? null : n.label),
                          className: "w-full flex items-center justify-between px-3 py-3.5 text-base font-medium text-ink text-left cursor-pointer outline-none",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: n.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ChevronDown,
                              {
                                className: `h-4 w-4 text-ink/60 transition-transform duration-200 ${isOpenGroup ? "rotate-180" : ""}`
                              }
                            )
                          ]
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: n.to,
                          onClick: () => setOpen(false),
                          className: "block px-3 py-3.5 text-base font-medium text-ink",
                          children: n.label
                        }
                      ),
                      n.children && isOpenGroup && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "pb-2 pl-4", children: n.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: c.to,
                          onClick: () => setOpen(false),
                          className: "block px-3 py-2.5 text-sm text-foreground/75 hover:text-coral transition-colors duration-200",
                          children: c.label
                        }
                      ) }, c.to)) })
                    ] }, n.label);
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: DONATE_URL,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "mt-6 btn-coral rounded-full px-5 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 w-full",
                      children: [
                        "Donate Now ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 fill-current" })
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function SiteFooter() {
  const [email, setEmail] = reactExports.useState("");
  const [isSubscribed, setIsSubscribed] = reactExports.useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 5e3);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ink text-white w-full border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 pb-10 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "Stay Connected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Sign up with your email address to receive monthly news, hope stories, and updates." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: isSubscribed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-3 text-emerald-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Successfully Subscribed!" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubscribe, className: "flex flex-col sm:flex-row gap-2 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "footer-newsletter-email",
            type: "email",
            required: true,
            placeholder: "Your email address",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: "flex-grow rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20 w-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "bg-[#1cbee7] hover:bg-[#15a2c6] text-white rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold transition duration-200 shrink-0 w-full sm:w-auto",
            children: "Subscribe"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo.url, alt: "Angels Care Uganda", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 max-w-sm", children: "Bringing hope, education and care to refugee children in the Kyaka II settlement since 2008." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-2", children: [Instagram, Facebook, Youtube, Twitter].map((I, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-coral transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4" })
          },
          k
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "About",
          links: [
            { label: "Our Vision", to: "/about/our-vision" },
            { label: "Kyaka II", to: "/about/kyaka-ii" },
            { label: "Our Team", to: "/about/our-team" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Projects",
          links: [
            { label: "Angels Care School", to: "/projects/school" },
            { label: "Medical Centre", to: "/projects/medical-centre" },
            { label: "Orphanage", to: "/projects/orphanage" },
            { label: "Hope Projects", to: "/projects/hope-projects" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Community",
          links: [
            { label: "Hope Stories", to: "/hope-stories" },
            { label: "Hope Family", to: "/hope-family" }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center md:text-left", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Angels Care Uganda. All rights reserved. Powered by",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://morellis.us/", target: "_blank", children: "Morellis" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-white transition", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms-of-service", className: "hover:text-white transition", children: "Terms of Service" })
      ] })
    ] })
  ] }) });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm text-white/50 uppercase tracking-widest font-medium", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-white/85 hover:text-coral transition", children: l.label }) }, l.to)) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$i = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Angels Care Uganda" },
      {
        name: "description",
        content: "Hope for refugee children through education and care since 2008. Educate and raise the leaders of tomorrow through innovative and sustainable development."
      },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Angels Care Uganda" },
      {
        property: "og:description",
        content: "Hope for refugee children through education and care since 2008. Educate and raise the leaders of tomorrow through innovative and sustainable development."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Angels Care Uganda" },
      {
        name: "twitter:description",
        content: "Hope for refugee children through education and care since 2008. Educate and raise the leaders of tomorrow through innovative and sustainable development."
      },
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/dtinPFfnlydOXNcF9N6SWqBC8ZH2/social-images/social-1780386990884-AngelsCareUgandaLogo.webp"
      },
      {
        name: "twitter:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/dtinPFfnlydOXNcF9N6SWqBC8ZH2/social-images/social-1780386990884-AngelsCareUgandaLogo.webp"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
class ExitErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex-grow" });
    }
    return this.props.children;
  }
}
function FrozenMatch({ matchId }) {
  const isPresent = useIsPresent();
  const frozenMatchId = reactExports.useRef(matchId);
  if (isPresent && matchId) {
    frozenMatchId.current = matchId;
  }
  return frozenMatchId.current ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExitErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Match, { matchId: frozenMatchId.current }) }) : null;
}
function AnimatedOutlet() {
  const childMatches = useChildMatches();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const childMatchId = childMatches[0]?.id;
  const variants = {
    initial: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
      filter: shouldReduceMotion ? "none" : "blur(8px)",
      zIndex: 10
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      zIndex: 10,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.5 },
        scale: { duration: 0.6 },
        filter: { duration: 0.5 }
      }
    },
    exit: {
      opacity: shouldReduceMotion ? 0 : 0.3,
      scale: shouldReduceMotion ? 1 : 0.97,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
      zIndex: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
      className: "w-full flex-grow flex flex-col relative",
      style: {
        transformOrigin: "center center",
        willChange: "transform, opacity, filter",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FrozenMatch, { matchId: childMatchId })
    },
    location.pathname
  ) });
}
function RootComponent() {
  const { queryClient } = Route$i.useRouteContext();
  const router = useRouter();
  reactExports.useEffect(() => {
    if (router.stores?.matchStores && !router.stores.matchStores.__animated_outlet_patched) {
      router.stores.matchStores.__animated_outlet_patched = true;
      const matchStores = router.stores.matchStores;
      const originalGet = matchStores.get;
      const cache = /* @__PURE__ */ new Map();
      matchStores.get = function(key) {
        const res = originalGet.call(matchStores, key);
        if (res) {
          cache.set(key, res);
          return res;
        }
        const activeMatches = router.state.matches || [];
        const pendingMatches = router.state.pendingMatches || [];
        const isActiveOrPending = activeMatches.some((m) => m.id === key) || pendingMatches.some((m) => m.id === key);
        if (!isActiveOrPending && cache.has(key)) {
          return cache.get(key);
        }
        return res;
      };
      const originalGetMatch = router.getMatch;
      if (typeof originalGetMatch === "function") {
        const matchCache = /* @__PURE__ */ new Map();
        router.getMatch = function(key) {
          const res = originalGetMatch.call(router, key);
          if (res) {
            matchCache.set(key, res);
            return res;
          }
          const activeMatches = router.state.matches || [];
          const pendingMatches = router.state.pendingMatches || [];
          const isActiveOrPending = activeMatches.some((m) => m.id === key) || pendingMatches.some((m) => m.id === key);
          if (!isActiveOrPending && matchCache.has(key)) {
            return matchCache.get(key);
          }
          return res;
        };
      }
      const originalGetRouteMatchStore = router.stores.getRouteMatchStore;
      if (typeof originalGetRouteMatchStore === "function") {
        const routeMatchCache = /* @__PURE__ */ new Map();
        router.stores.getRouteMatchStore = function(key) {
          const res = originalGetRouteMatchStore.call(router.stores, key);
          if (res) {
            routeMatchCache.set(key, res);
            return res;
          }
          const activeMatches = router.state.matches || [];
          const pendingMatches = router.state.pendingMatches || [];
          const isActiveOrPending = activeMatches.some((m) => m.id === key || m.routeId === key) || pendingMatches.some((m) => m.id === key || m.routeId === key);
          if (!isActiveOrPending && routeMatchCache.has(key)) {
            return routeMatchCache.get(key);
          }
          return res;
        };
      }
    }
  }, [router]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative flex-grow flex flex-col overflow-x-hidden min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedOutlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$f = () => import("./terms-of-service-C7aUO_00.mjs");
const Route$h = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [{
      title: "Terms of Service — Angels Care Uganda"
    }, {
      name: "description",
      content: "Read the Terms of Service guidelines of Angels Care Uganda."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./projects-BFsOu0JM.mjs");
const Route$g = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Angels Care Uganda"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./privacy-policy-Byby2SP7.mjs");
const Route$f = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — Angels Care Uganda"
    }, {
      name: "description",
      content: "Read the Privacy Policy guidelines of Angels Care Uganda."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./hope-stories-BFsOu0JM.mjs");
const Route$e = createFileRoute("/hope-stories")({
  head: () => ({
    meta: [{
      title: "Stories of Hope — Angels Care Uganda"
    }, {
      name: "description",
      content: "Read the latest updates and testimonies from our community in the Kyaka II refugee settlement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./hope-family-LiHB7xWf.mjs");
const Route$d = createFileRoute("/hope-family")({
  head: () => ({
    meta: [{
      title: "Join the Hope Family — Angels Care Uganda"
    }, {
      name: "description",
      content: "Join a community of dedicated giving with transparent, transformative results in Kyaka II."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./about-BFsOu0JM.mjs");
const Route$c = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Angels Care Uganda"
    }, {
      name: "description",
      content: "About Angels Care Uganda."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index-DwMyMoRO.mjs");
const Route$b = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Angels Care Uganda — Hope for Refugee Children"
    }, {
      name: "description",
      content: "Since 2008, Angels Care Uganda has brought education, healthcare and refuge to children in the Kyaka II settlement."
    }, {
      property: "og:title",
      content: "Angels Care Uganda"
    }, {
      property: "og:description",
      content: "Hope for refugee children through education and care since 2008."
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const Route$a = createFileRoute("/projects/")({
  beforeLoad: () => {
    throw redirect({ to: "/projects/school", replace: true });
  }
});
const $$splitComponentImporter$8 = () => import("./hope-stories.index-Dag3iD3P.mjs");
const Route$9 = createFileRoute("/hope-stories/")({
  head: () => ({
    meta: [{
      title: "Stories of Hope — Angels Care Uganda"
    }, {
      name: "description",
      content: "Read the latest updates and testimonies from our community in the Kyaka II refugee settlement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Route$8 = createFileRoute("/about/")({
  beforeLoad: () => {
    throw redirect({ to: "/about/our-vision", replace: true });
  }
});
const $$splitComponentImporter$7 = () => import("./projects.school-BbOZEzwZ.mjs");
const Route$7 = createFileRoute("/projects/school")({
  head: () => ({
    meta: [{
      title: "Angels Care School — Angels Care Uganda"
    }, {
      name: "description",
      content: "Discover how Angels Care School empowers refugee children in Kyaka II Settlement. Providing safe learning, curriculum mastery, and building regional leaders."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./projects.orphanage-D_p2Xgzv.mjs");
const Route$6 = createFileRoute("/projects/orphanage")({
  head: () => ({
    meta: [{
      title: "Angels Care Orphanage — Angels Care Uganda"
    }, {
      name: "description",
      content: "Explore how Angels Care Orphanage provides rescue, immediate family care, and community foster integration for rescued refugee orphans in Kyaka II."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./projects.medical-centre-DlmV9Xr7.mjs");
const Route$5 = createFileRoute("/projects/medical-centre")({
  head: () => ({
    meta: [{
      title: "Angels Care Medical Centre — Angels Care Uganda"
    }, {
      name: "description",
      content: "Discover Angels Care Medical Centre inside the Kyaka II Refugee Settlement. Providing critical, 24/7 healthcare, maternal facilities, and free student care services."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./projects.hope-projects-nxQwtyw3.mjs");
const Route$4 = createFileRoute("/projects/hope-projects")({
  head: () => ({
    meta: [{
      title: "Hope Projects & Sustainability — Angels Care Uganda"
    }, {
      name: "description",
      content: "Explore innovative, community-led, and self-sustaining developments in Kyaka II Settlement. From menstrual care shielding class attendance to eco bio-briquettes and physical agricultural mill integration."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..950;1,400..950&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./hope-stories.online-launch-BgG_zpHn.mjs");
const Route$3 = createFileRoute("/hope-stories/online-launch")({
  head: () => ({
    meta: [{
      title: "Angels Care Online Launch! — Angels Care Uganda"
    }, {
      name: "description",
      content: "We are excited to launch our online Sponsor Hope initiative for Angels Care! Read the full story of our journey since 2008."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about.our-vision-CzaY-Jf6.mjs");
const Route$2 = createFileRoute("/about/our-vision")({
  head: () => ({
    meta: [{
      title: "Our Vision & Mission — Angels Care Uganda"
    }, {
      name: "description",
      content: "Explore the vision, mission, and global impact of Angels Care Uganda in the Kyaka II refugee settlement."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about.our-team-Bp0wwVJK.mjs");
const Route$1 = createFileRoute("/about/our-team")({
  head: () => ({
    meta: [{
      title: "Our Dedicated Team — Angels Care Uganda"
    }, {
      name: "description",
      content: "Meet the incredible team of teachers, administrators, and coordinators supporting our children in Kyaka II Refugee Settlement."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2&family=Google+Sans+Text:wght@400;500;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./about.kyaka-ii-j2z0VBjK.mjs");
const Route = createFileRoute("/about/kyaka-ii")({
  head: () => ({
    meta: [{
      title: "Kyaka II Refugee Settlement — Angels Care Uganda"
    }, {
      name: "description",
      content: "Understand the context of our mission inside Kyaka II Refugee Settlement. Supporting over 130,000 vulnerable individuals."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsOfServiceRoute = Route$h.update({
  id: "/terms-of-service",
  path: "/terms-of-service",
  getParentRoute: () => Route$i
});
const ProjectsRoute = Route$g.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$i
});
const PrivacyPolicyRoute = Route$f.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$i
});
const HopeStoriesRoute = Route$e.update({
  id: "/hope-stories",
  path: "/hope-stories",
  getParentRoute: () => Route$i
});
const HopeFamilyRoute = Route$d.update({
  id: "/hope-family",
  path: "/hope-family",
  getParentRoute: () => Route$i
});
const AboutRoute = Route$c.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$i
});
const IndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$i
});
const ProjectsIndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjectsRoute
});
const HopeStoriesIndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => HopeStoriesRoute
});
const AboutIndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => AboutRoute
});
const ProjectsSchoolRoute = Route$7.update({
  id: "/school",
  path: "/school",
  getParentRoute: () => ProjectsRoute
});
const ProjectsOrphanageRoute = Route$6.update({
  id: "/orphanage",
  path: "/orphanage",
  getParentRoute: () => ProjectsRoute
});
const ProjectsMedicalCentreRoute = Route$5.update({
  id: "/medical-centre",
  path: "/medical-centre",
  getParentRoute: () => ProjectsRoute
});
const ProjectsHopeProjectsRoute = Route$4.update({
  id: "/hope-projects",
  path: "/hope-projects",
  getParentRoute: () => ProjectsRoute
});
const HopeStoriesOnlineLaunchRoute = Route$3.update({
  id: "/online-launch",
  path: "/online-launch",
  getParentRoute: () => HopeStoriesRoute
});
const AboutOurVisionRoute = Route$2.update({
  id: "/our-vision",
  path: "/our-vision",
  getParentRoute: () => AboutRoute
});
const AboutOurTeamRoute = Route$1.update({
  id: "/our-team",
  path: "/our-team",
  getParentRoute: () => AboutRoute
});
const AboutKyakaIiRoute = Route.update({
  id: "/kyaka-ii",
  path: "/kyaka-ii",
  getParentRoute: () => AboutRoute
});
const AboutRouteChildren = {
  AboutKyakaIiRoute,
  AboutOurTeamRoute,
  AboutOurVisionRoute,
  AboutIndexRoute
};
const AboutRouteWithChildren = AboutRoute._addFileChildren(AboutRouteChildren);
const HopeStoriesRouteChildren = {
  HopeStoriesOnlineLaunchRoute,
  HopeStoriesIndexRoute
};
const HopeStoriesRouteWithChildren = HopeStoriesRoute._addFileChildren(
  HopeStoriesRouteChildren
);
const ProjectsRouteChildren = {
  ProjectsHopeProjectsRoute,
  ProjectsMedicalCentreRoute,
  ProjectsOrphanageRoute,
  ProjectsSchoolRoute,
  ProjectsIndexRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute: AboutRouteWithChildren,
  HopeFamilyRoute,
  HopeStoriesRoute: HopeStoriesRouteWithChildren,
  PrivacyPolicyRoute,
  ProjectsRoute: ProjectsRouteWithChildren,
  TermsOfServiceRoute
};
const routeTree = Route$i._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
