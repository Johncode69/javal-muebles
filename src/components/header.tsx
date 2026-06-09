"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Inicio",    href: "/" },
  { label: "Catálogo",  href: "/catalogo" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros",  href: "/nosotros" },
  { label: "Contacto",  href: "/contacto" },
];

const CATALOG_LINKS = [
  { label: "Todo el Catálogo",  href: "/catalogo" },
  { label: "Dormitorios",       href: "/catalogo/dormitorios" },
  { label: "Salas",             href: "/catalogo/salas" },
  { label: "Comedores",         href: "/catalogo/comedores" },
  { label: "Cocinas",           href: "/catalogo/cocinas" },
  { label: "Closets",           href: "/catalogo/closets" },
  { label: "Baños",             href: "/catalogo/banos" },
  { label: "Estudios",          href: "/catalogo/estudios" },
  { label: "Exteriores",        href: "/catalogo/exteriores" },
  { label: "Revestimientos",    href: "/catalogo/revestimientos" },
  { label: "Accesorios",        href: "/catalogo/accesorios" },
];

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
    <path d="M14 2C14 2 8 6.5 8 14C8 17.5 9.5 20.5 12 22.5C10 20 9 17 9 14C9 8.5 14 4.5 14 4.5C14 4.5 19 8.5 19 14C19 17 18 20 16 22.5C18.5 20.5 20 17.5 20 14C20 6.5 14 2 14 2Z" fill="#C9A84C" />
    <path d="M14 7C14 7 10 10.5 10 14C10 16.5 11.5 18.5 14 20C16.5 18.5 18 16.5 18 14C18 10.5 14 7 14 7Z" fill="#C9A84C" opacity="0.5" />
    <circle cx="14" cy="14" r="2" fill="#C9A84C" />
  </svg>
);

export function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#171719] flex flex-col"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.74, 0, 0.15, 0.99] }}
          >
            <button
              className="absolute top-7 right-[clamp(24px,4vw,48px)] text-white/50 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <X size={20} />
            </button>

            <nav className="flex flex-col justify-center h-full container-henge gap-3">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "clamp(40px,6vw,80px)", fontWeight: 400, textTransform: "uppercase", lineHeight: 1.1 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="container-henge pb-10">
              <p className="label text-white/25">Remodelaciones & Carpintería Arquitectónica</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Catalog dropdown ── */}
      <AnimatePresence>
        {catalogOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCatalogOpen(false)}
            />
            <motion.div
              className="fixed top-[90px] left-0 right-0 z-50 bg-[#0e0e0e] border-b border-white/10"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="container-henge py-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {CATALOG_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCatalogOpen(false)}
                    className="label text-white/50 hover:text-[#C9A84C] transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Search bar ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed top-[90px] left-0 right-0 z-50 bg-[#0e0e0e] border-b border-white/10 flex items-center container-henge py-5 gap-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Search size={14} className="text-white/30 flex-shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Buscar productos..."
              className="flex-1 bg-transparent label text-white placeholder:text-white/25 outline-none"
            />
            <button onClick={() => setSearchOpen(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main header bar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 h-[90px] flex items-center justify-between transition-all duration-400",
          /* Henge uses same side padding as content */
          "container-henge",
          scrolled ? "bg-[#171719]/96 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo />
          <span
            className="text-white text-[15px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
          >
            ORIGEN STUDIO
          </span>
        </Link>

        {/* Right controls — henge style: search | PRODUCTOS | ☰ */}
        <div className="flex items-center gap-7">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Buscar"
          >
            <Search size={15} />
          </button>

          <button
            onClick={() => setCatalogOpen(!catalogOpen)}
            className={cn(
              "nav-link transition-colors duration-200 hidden md:block",
              catalogOpen ? "text-[#C9A84C]" : "text-white hover:text-white/70"
            )}
          >
            {catalogOpen ? "Cerrar" : "Catálogo"}
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-white/60 hover:text-white transition-colors flex flex-col gap-[5px] group"
            aria-label="Menú"
          >
            <span className="block w-5 h-px bg-current transition-all duration-300 group-hover:w-6" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </header>
    </>
  );
}
