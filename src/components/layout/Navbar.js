"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="#hero" className={cn(
          "flex items-center gap-2 text-lg font-semibold tracking-tighter transition-colors duration-300",
          scrolled ? "text-black" : "text-white"
        )}>
          <span>EasyRabbit</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors duration-300 hover:opacity-75 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden transition-colors",
            scrolled ? "text-black" : "text-white"
          )}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white px-6 py-4 shadow-xl border-t border-gray-100"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-base font-medium text-gray-900 border-b border-gray-100 last:border-0 hover:text-gray-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
