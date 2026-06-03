import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useChildMatches,
  useLocation,
  Match,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Angels Care Uganda" },
      {
        name: "description",
        content:
          "Hope for refugee children through education and care since 2008. Educate and raise the leaders of tomorrow through innovative and sustainable development.",
      },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Angels Care Uganda" },
      {
        property: "og:description",
        content:
          "Hope for refugee children through education and care since 2008. Educate and raise the leaders of tomorrow through innovative and sustainable development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Angels Care Uganda" },
      {
        name: "twitter:description",
        content:
          "Hope for refugee children through education and care since 2008. Educate and raise the leaders of tomorrow through innovative and sustainable development.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/dtinPFfnlydOXNcF9N6SWqBC8ZH2/social-images/social-1780386990884-AngelsCareUgandaLogo.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/dtinPFfnlydOXNcF9N6SWqBC8ZH2/social-images/social-1780386990884-AngelsCareUgandaLogo.webp",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function FrozenMatch({ childMatchId }: { childMatchId: string | undefined }) {
  const [frozenMatchId] = useState(childMatchId);
  return frozenMatchId ? <Match matchId={frozenMatchId} /> : null;
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
      zIndex: 10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      zIndex: 10,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Pure Apple-inspired Cubic Bezier curve
        opacity: { duration: 0.5 },
        scale: { duration: 0.6 },
        filter: { duration: 0.5 },
      },
    },
    exit: {
      opacity: shouldReduceMotion ? 0 : 0.3, // Slightly fade out to 30%
      scale: shouldReduceMotion ? 1 : 0.97, // Scale down to 97%
      filter: shouldReduceMotion ? "none" : "blur(4px)", // Add subtle blur on exit
      zIndex: 0, // Moves backward in depth, creating a layered depth effect
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 },
      },
    },
  };

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="w-full flex-grow flex flex-col relative"
        style={{
          transformOrigin: "center center",
          willChange: "transform, opacity, filter",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <FrozenMatch childMatchId={childMatchId} />
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Patches router dynamically to safely preserve match stores of exiting routes during exit transition animations
    if (
      router.stores?.matchStores &&
      !(router.stores.matchStores as any).__animated_outlet_patched
    ) {
      (router.stores.matchStores as any).__animated_outlet_patched = true;
      const matchStores = router.stores.matchStores;
      const originalGet = matchStores.get;
      const cache = new Map();

      matchStores.get = function (key: any) {
        const res = originalGet.call(matchStores, key);
        if (res) {
          cache.set(key, res);
          return res;
        }

        // Only return cached stores for deactivated matches (exiting views during transition)
        const activeMatches = router.state.matches || [];
        const pendingMatches = router.state.pendingMatches || [];
        const isActiveOrPending =
          activeMatches.some((m: any) => m.id === key) ||
          pendingMatches.some((m: any) => m.id === key);

        if (!isActiveOrPending && cache.has(key)) {
          return cache.get(key);
        }
        return res;
      };

      const originalGetMatch = router.getMatch;
      if (typeof originalGetMatch === "function") {
        const matchCache = new Map();
        router.getMatch = function (key: any) {
          const res = originalGetMatch.call(router, key);
          if (res) {
            matchCache.set(key, res);
            return res;
          }

          // Only return cached matches for deactivated views
          const activeMatches = router.state.matches || [];
          const pendingMatches = router.state.pendingMatches || [];
          const isActiveOrPending =
            activeMatches.some((m: any) => m.id === key) ||
            pendingMatches.some((m: any) => m.id === key);

          if (!isActiveOrPending && matchCache.has(key)) {
            return matchCache.get(key);
          }
          return res;
        };
      }

      const originalGetRouteMatchStore = router.stores.getRouteMatchStore;
      if (typeof originalGetRouteMatchStore === "function") {
        const routeMatchCache = new Map();
        router.stores.getRouteMatchStore = function (key: any) {
          const res = originalGetRouteMatchStore.call(router.stores, key);
          if (res) {
            routeMatchCache.set(key, res);
            return res;
          }

          // Only return cached route stores for deactivated views
          const activeMatches = router.state.matches || [];
          const pendingMatches = router.state.pendingMatches || [];
          const isActiveOrPending =
            activeMatches.some((m: any) => m.id === key || m.routeId === key) ||
            pendingMatches.some((m: any) => m.id === key || m.routeId === key);

          if (!isActiveOrPending && routeMatchCache.has(key)) {
            return routeMatchCache.get(key);
          }
          return res;
        };
      }
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main className="relative flex-grow flex flex-col overflow-x-hidden min-h-screen">
        <AnimatedOutlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
