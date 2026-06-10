import React, { createContext, useContext, useState, useEffect } from "react";

// Context to provide our custom router instance and state
const RouterContext = createContext<{
  pathname: string;
  navigate: (to: string) => void;
}>({
  pathname: typeof window !== "undefined" ? window.location.pathname : "/",
  navigate: () => {},
});

export const OutletContext = createContext<React.ReactNode>(null);

// custom redirect helper
export function redirect(options: { to: string; replace?: boolean }) {
  const err = new Error("redirect");
  (err as any)._redirect = options;
  return err;
}

// custom createFileRoute creator
export function createFileRoute(path: string) {
  return function (config: {
    component?: React.ComponentType<any>;
    beforeLoad?: () => void;
    head?: () => any;
  }) {
    const component = config?.component;
    if (component) {
      (component as any).path = path;
      (component as any).head = config.head;
      (component as any).beforeLoad = config.beforeLoad;
    }
    return {
      component: component,
      beforeLoad: config?.beforeLoad,
      head: config?.head,
      path: path,
    };
  };
}

export function Router({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (typeof window === "undefined") return;
    window.history.pushState(null, "", to);
    setPathname(to);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function RoutesRenderer({ routes }: { routes: Record<string, any> }) {
  const { pathname, navigate } = useContext(RouterContext);

  // Normalization
  let currentPath = pathname;
  if (currentPath.endsWith("/") && currentPath !== "/") {
    currentPath = currentPath.slice(0, -1);
  }

  // Handle redirects or default layout routes
  if (currentPath === "/about") {
    currentPath = "/about/our-vision";
  } else if (currentPath === "/projects") {
    currentPath = "/projects/school";
  }

  // Find routing components in routes mapping
  let layoutPath: string | null = null;
  let childPath: string | null = null;

  if (currentPath.startsWith("/about/")) {
    layoutPath = "/about";
    childPath = currentPath;
  } else if (currentPath.startsWith("/projects/")) {
    layoutPath = "/projects";
    childPath = currentPath;
  } else if (currentPath.startsWith("/hope-stories/")) {
    layoutPath = "/hope-stories";
    childPath = currentPath;
  } else if (currentPath === "/hope-stories") {
    layoutPath = "/hope-stories";
    childPath = "/hope-stories/index";
  }

  // Execute beforeLoad if present
  const runBeforeLoad = (pathKey: string) => {
    const routeObj = routes[pathKey];
    if (routeObj && routeObj.beforeLoad) {
      try {
        routeObj.beforeLoad();
      } catch (err: any) {
        if (err && err._redirect) {
          const redirectTo = err._redirect.to;
          setTimeout(() => navigate(redirectTo), 0);
          return true;
        }
        console.error("beforeLoad error:", err);
      }
    }
    return false;
  };

  // Check redirects
  if (childPath) {
    if (runBeforeLoad(childPath)) return null;
  } else {
    if (runBeforeLoad(currentPath)) return null;
  }

  let element: React.ReactNode = null;

  if (layoutPath) {
    const LayoutComponent =
      routes[layoutPath]?.component || routes[layoutPath];
    const ChildComponent =
      routes[childPath || ""]?.component ||
      routes[childPath || ""] ||
      routes["/404"]?.component ||
      routes["/404"];

    const childNode = ChildComponent ? <ChildComponent /> : null;

    if (LayoutComponent) {
      element = (
        <OutletContext.Provider value={childNode}>
          <LayoutComponent />
        </OutletContext.Provider>
      );
    } else {
      element = childNode;
    }
  } else {
    const routeObj = routes[currentPath] || routes["/404"];
    const Component = routeObj?.component || routeObj || (() => <div>404 Not Found</div>);
    element = <Component />;
  }

  return <>{element}</>;
}

export function Outlet() {
  const childContent = useContext(OutletContext);
  return <>{childContent}</>;
}

export function useLocation() {
  const context = useContext(RouterContext);
  return { pathname: context.pathname };
}

export function useNavigate() {
  const context = useContext(RouterContext);
  return context.navigate;
}

export function useRouter() {
  const context = useContext(RouterContext);
  return {
    navigate: context.navigate,
    invalidate: () => {},
  };
}

export function Link({
  to,
  children,
  className,
  onClick,
  activeOptions,
  ...props
}: any) {
  const context = useContext(RouterContext);
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (
      !to ||
      to.startsWith("http") ||
      props.target === "_blank" ||
      to.startsWith("#")
    ) {
      return;
    }
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0
    ) {
      e.preventDefault();
      context.navigate(to);
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
