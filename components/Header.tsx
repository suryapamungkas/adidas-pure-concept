"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { AdidasMark } from "@/components/AdidasMark";
import { MegaMenu, navCategories } from "@/components/MegaMenu";

export interface HeaderProps {
  cartCount?: number;
  onOpenSearch?: () => void;
  onOpenBag?: () => void;
  onOpenProfile?: () => void;
}

export function Header({
  cartCount = 0,
  onOpenSearch,
  onOpenBag,
  onOpenProfile,
}: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "night">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("adidas-theme");
    if (savedTheme === "night") {
      setTheme("night");
      document.documentElement.dataset.theme = "night";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "night" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("adidas-theme", nextTheme);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveNav(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavMouseEnter = (id: string) => {
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    setActiveNav(id);
  };

  const handleNavMouseLeave = () => {
    navTimeoutRef.current = setTimeout(() => {
      setActiveNav(null);
    }, 180);
  };

  const handleHeaderMouseEnter = () => {
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
  };

  return (
    <header
      className="site-header"
      onMouseEnter={handleHeaderMouseEnter}
      onMouseLeave={handleNavMouseLeave}
    >
      <nav className="nav-shell" aria-label="Navigasi utama">
        <Link
          href="/"
          className="brand-link"
          aria-label="Beranda Adidas Pure Concept"
          onClick={() => setActiveNav(null)}
        >
          <AdidasMark />
        </Link>

        {/* Desktop Navigation with Interactive Mega Menu triggers */}
        <div className="desktop-nav" role="menubar">
          {navCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`nav-item-btn ${activeNav === category.id ? "active-nav" : ""}`}
              onMouseEnter={() => handleNavMouseEnter(category.id)}
              onFocus={() => handleNavMouseEnter(category.id)}
              onClick={() => {
                setActiveNav(activeNav === category.id ? null : category.id);
              }}
              aria-expanded={activeNav === category.id}
              aria-haspopup="true"
              role="menuitem"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          {onOpenSearch ? (
            <button
              className="icon-button search-trigger"
              type="button"
              onClick={onOpenSearch}
              aria-label="Cari produk"
            >
              <Search aria-hidden="true" />
            </button>
          ) : (
            <Link href="/#content" className="icon-button" aria-label="Cari produk">
              <Search aria-hidden="true" />
            </Link>
          )}

          {onOpenBag ? (
            <button
              className="icon-button bag-trigger"
              type="button"
              onClick={onOpenBag}
              aria-label={`Tas belanja, ${cartCount} produk`}
            >
              <ShoppingBag aria-hidden="true" />
              {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
            </button>
          ) : (
            <Link href="/#content" className="icon-button" aria-label={`Tas belanja, ${cartCount} produk`}>
              <ShoppingBag aria-hidden="true" />
              {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
            </Link>
          )}

          {onOpenProfile && (
            <button
              className="icon-button profile-trigger"
              type="button"
              onClick={onOpenProfile}
              aria-label="Akun saya"
            >
              <UserRound aria-hidden="true" />
            </button>
          )}

          <button
            className="icon-button theme-trigger"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Gunakan tampilan gelap" : "Gunakan tampilan terang"}
          >
            {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </button>

          <button
            className="icon-button menu-trigger"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Interactive Mega Menu Dropdown */}
      <MegaMenu
        activeCategory={activeNav}
        onClose={() => setActiveNav(null)}
        onMouseEnter={handleHeaderMouseEnter}
      />

      {/* Mobile Accordion Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navCategories.map((cat) => {
              const isExpanded = mobileExpandedCat === cat.id;
              return (
                <div key={cat.id} className="mobile-accordion-item">
                  <button
                    type="button"
                    className="mobile-accordion-trigger"
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="mobile-accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {cat.primaryLinks.map((link) => (
                          <a
                            key={link.title}
                            href={link.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileExpandedCat(null);
                            }}
                          >
                            {link.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
