import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, RoutesRenderer, useLocation } from "@/lib/router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { routesConfig } from "@/routes-config";
import { AnimatePresence, motion } from "motion/react";

const queryClient = new QueryClient();

function AppContent() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <SiteNav />
      <main className="relative flex-grow flex flex-col overflow-x-hidden pt-0 selection:bg-coral/25 selection:text-coral">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col"
          >
            <RoutesRenderer routes={routesConfig} />
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}
