"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

/** Total time for stagger-out + buffer (matches exit stagger on pages) */
const EXIT_NAVIGATION_MS = 920;

type PageTransitionContextValue = {
  isExiting: boolean;
  beginExit: (href: string) => void;
};

const PageTransitionContext =
  createContext<PageTransitionContextValue | null>(null);

export const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);
  const pendingHref = useRef<string | null>(null);

  /**
   * Clear exit mode only after the URL actually changes — never before router.push.
   * Also drop any stale pending href if navigation finished another way (e.g. browser back).
   */
  useLayoutEffect(() => {
    pendingHref.current = null;
    setIsExiting(false);
  }, [pathname]);

  useEffect(() => {
    if (!isExiting) {
      return;
    }

    const id = window.setTimeout(() => {
      const href = pendingHref.current;
      if (!href) {
        return;
      }

      pendingHref.current = null;

      if (href.startsWith("/projects")) {
        sessionStorage.setItem("portfolioEnter", "project");
      } else {
        sessionStorage.setItem("portfolioEnter", "home");
      }

      router.push(href);
    }, EXIT_NAVIGATION_MS);

    return () => window.clearTimeout(id);
  }, [isExiting, router]);

  const beginExit = useCallback((href: string) => {
    if (!href) {
      return;
    }

    pendingHref.current = href;
    setIsExiting(true);
  }, []);

  const value = useMemo(
    () => ({
      isExiting,
      beginExit,
    }),
    [isExiting, beginExit],
  );

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);

  if (!ctx) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider",
    );
  }

  return ctx;
};
