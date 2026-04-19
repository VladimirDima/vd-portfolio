"use client";

import Link, { LinkProps } from "next/link";
import { usePageTransition } from "../context/PageTransitionContext";

type TransitionLinkProps = Omit<LinkProps, "onClick"> & {
  children: React.ReactNode;
  className?: string;
};

const TransitionLink = ({
  href,
  children,
  className,
  ...rest
}: TransitionLinkProps) => {
  const { beginExit } = usePageTransition();

  const resolveHref = () => {
    if (typeof href === "string") {
      return href;
    }

    const pathname = href.pathname ?? "";
    const query = href.search ?? "";
    const hash = href.hash ?? "";

    return `${pathname}${query}${hash}`;
  };

  return (
    <Link
      href={href}
      scroll={false}
      className={className}
      {...rest}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        beginExit(resolveHref());
      }}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
