"use client";

import { ModeToggle } from "@/components/layout/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { PORTFOLIO } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="glass rounded-3xl border border-border/50 px-4 py-3 shadow-lg shadow-black/5">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-sm font-semibold tracking-tight sm:text-base">
            {PORTFOLIO.site.name}
          </Link>
          <div className="flex items-center gap-2">
            {/* Social icons — always visible */}
            <a
              href={PORTFOLIO.socialLinks.linkedin.href}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 rounded-full"
              )}
            >
              <Icons.linkedin className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO.socialLinks.github.href}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 rounded-full"
              )}
            >
              <Icons.github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={PORTFOLIO.socialLinks.x.href}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 rounded-full"
              )}
            >
              <Icons.x className="size-4" />
              <span className="sr-only">X</span>
            </a>
            <ModeToggle />

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "relative size-8 rounded-full md:hidden"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-4 w-4 flex-col items-center justify-center gap-[3px]">
                <motion.span
                  className="block h-[1.5px] w-3.5 rounded-full bg-foreground"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 4.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-[1.5px] w-3.5 rounded-full bg-foreground"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-[1.5px] w-3.5 rounded-full bg-foreground"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -4.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop nav — hidden on mobile */}
        <nav className="mt-3 hidden flex-wrap items-center gap-2 md:flex">
          {PORTFOLIO.navigation.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                download={item.download ? "Vaibhav_Saini_Resume.pdf" : undefined}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full px-3"
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full px-3"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-40 mt-2 rounded-2xl border border-border/50 bg-card/95 p-4 shadow-xl shadow-black/10 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {PORTFOLIO.navigation.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      download={item.download ? "Vaibhav_Saini_Resume.pdf" : undefined}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={closeMobile}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
