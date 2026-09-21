"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export interface NavCategory {
  id: string;
  label: string;
  href: string;
  eyebrows: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  primaryLinks: Array<{
    title: string;
    href: string;
    badge?: string;
  }>;
  secondaryLinks: Array<{
    title: string;
    href: string;
  }>;
  tertiaryLinks: Array<{
    title: string;
    href: string;
  }>;
  bottomLinks?: Array<{
    title: string;
    href: string;
  }>;
  featured?: {
    tag: string;
    title: string;
    subtitle: string;
    image: string;
    price: string;
    href: string;
  };
}

export const navCategories: NavCategory[] = [
  {
    id: "originals",
    label: "Originals",
    href: "#originals",
    eyebrows: {
      primary: "Jelajahi Originals",
      secondary: "Kategori & Lini",
      tertiary: "Cerita & Fitur",
    },
    primaryLinks: [
      { title: "Jelajahi Semua Originals", href: "/#originals" },
      { title: "Samba OG", href: "/product/samba-og", badge: "Ikon" },
      { title: "Gazelle Indoor", href: "/product/gazelle-indoor" },
      { title: "Handball Spezial", href: "/product/samba-og" },
      { title: "Campus 00s", href: "/product/samba-og", badge: "Populer" },
      { title: "Stan Smith", href: "/product/samba-og" },
      { title: "Superstar 82", href: "/product/samba-og" },
    ],
    bottomLinks: [
      { title: "Bandingkan Model Sepatu", href: "/product/samba-og#specs" },
      { title: "Panduan Ukuran & Fit Samba", href: "/product/samba-og#specs" },
    ],
    secondaryLinks: [
      { title: "Sepatu Pria", href: "/#originals" },
      { title: "Sepatu Wanita", href: "/#originals" },
      { title: "Retro T-Toe Series", href: "/product/samba-og" },
      { title: "Terrace & Street Culture", href: "/#originals" },
      { title: "Originals Apparel & Tracksuit", href: "/#collabs" },
      { title: "Koleksi Vintage 1970s", href: "/product/samba-og" },
      { title: "Aksesoris & Tas Classic", href: "/#originals" },
    ],
    tertiaryLinks: [
      { title: "Kisah di Balik Samba (1950 — Now)", href: "/product/samba-og#design" },
      { title: "Perawatan Material Kulit & Suede", href: "/product/samba-og#design" },
      { title: "Drop Eksklusif adiClub", href: "/#collabs" },
      { title: "Pameran Arsip adidas Heritage", href: "/#collabs" },
    ],
    featured: {
      tag: "HIGHLIGHT BULAN INI",
      title: "Samba OG Klasik",
      subtitle: "Material leather premium dengan gum rubber sole abadi.",
      image: "/images/adidas-samba-hero.jpg",
      price: "Rp2.200.000",
      href: "/product/samba-og",
    },
  },
  {
    id: "running",
    label: "Running",
    href: "#running",
    eyebrows: {
      primary: "Jelajahi Running",
      secondary: "Kategori & Jarak",
      tertiary: "Teknologi Lari",
    },
    primaryLinks: [
      { title: "Jelajahi Semua Sepatu Lari", href: "/#running" },
      { title: "Ultraboost Light", href: "/product/ultraboost-light", badge: "Energi" },
      { title: "Adizero Adios Pro 4", href: "/product/adizero-adios-pro", badge: "Rekor" },
      { title: "Supernova Rise", href: "/product/ultraboost-light" },
      { title: "Adizero Boston 12", href: "/product/adizero-adios-pro" },
      { title: "Adizero Takumi Sen 10", href: "/product/adizero-adios-pro" },
      { title: "4DFWD 3 Pulse", href: "/product/ultraboost-light" },
    ],
    bottomLinks: [
      { title: "Shoe Finder (Temukan Sepatu Lari Anda)", href: "/product/ultraboost-light#specs" },
      { title: "Kalkulator Pace & Rekomendasi Jarak", href: "/product/ultraboost-light#specs" },
    ],
    secondaryLinks: [
      { title: "Marathon & Hari Lomba (Race Day)", href: "/product/adizero-adios-pro" },
      { title: "Daily Training & Long Run", href: "/product/ultraboost-light" },
      { title: "Speed & Interval Workout", href: "/product/adizero-adios-pro" },
      { title: "Trail Running & Off-Road", href: "/#outdoor" },
      { title: "Running Apparel & Windbreaker", href: "/#running" },
      { title: "Kaos Kaki Lari & Hydration Pack", href: "/#running" },
    ],
    tertiaryLinks: [
      { title: "Light BOOST™ Midsole Technology", href: "/product/ultraboost-light#highlights" },
      { title: "EnergyRods 2.0 Carbon Rods", href: "/product/adizero-adios-pro#highlights" },
      { title: "Continental™ Outsole Traction", href: "/product/ultraboost-light#highlights" },
      { title: "Primeknit+ Adaptive Upper", href: "/product/ultraboost-light#highlights" },
      { title: "Program Latihan Komunitas Lari", href: "/#collabs" },
    ],
    featured: {
      tag: "PERFORMANCE INNOVATION",
      title: "Ultraboost Light",
      subtitle: "30% lebih ringan dengan pengembalian energi maksimal.",
      image: "/images/adidas-ultraboost.jpg",
      price: "Rp3.000.000",
      href: "/product/ultraboost-light",
    },
  },
  {
    id: "football",
    label: "Football",
    href: "#football",
    eyebrows: {
      primary: "Jelajahi Football",
      secondary: "Kategori Lapangan",
      tertiary: "Inovasi Sepak Bola",
    },
    primaryLinks: [
      { title: "Jelajahi Semua Sepatu Bola", href: "/#football" },
      { title: "Predator Elite", href: "/product/predator-elite", badge: "Akurasi" },
      { title: "F50 Elite", href: "/product/predator-elite", badge: "Speed" },
      { title: "Copa Pure 2", href: "/product/predator-elite" },
      { title: "Predator Club & League", href: "/product/predator-elite" },
      { title: "Koleksi Futsal & Turf", href: "/product/predator-elite" },
    ],
    bottomLinks: [
      { title: "Panduan Tipe Sol Lapangan (FG/AG/TF/IC)", href: "/product/predator-elite#specs" },
      { title: "Koleksi Kiper & Sarung Tangan Predator", href: "/product/predator-elite" },
    ],
    secondaryLinks: [
      { title: "Firm Ground (FG - Rumput Alami)", href: "#football" },
      { title: "Artificial Grass (AG - Rumput Sintetis)", href: "#football" },
      { title: "Turf & Mini Soccer (TF)", href: "#football" },
      { title: "Indoor Court (IC - Lapangan Futsal)", href: "#football" },
      { title: "Jersey Klub Dunia & Tim Nasional", href: "#football" },
      { title: "Bola Pertandingan Resmi FIFA", href: "#football" },
    ],
    tertiaryLinks: [
      { title: "Strikeskin 3D Rubber Fins", href: "#outdoor" },
      { title: "HybridTouch 2.0 Sintetis Premium", href: "#outdoor" },
      { title: "Sprintframe 360 Agility Outsole", href: "#outdoor" },
      { title: "Primeknit Laceless Technology", href: "#outdoor" },
    ],
    featured: {
      tag: "MATCHDAY WEAPON",
      title: "Predator Elite FG",
      subtitle: "Grip mematikan untuk kontrol bola presisi di setiap detik.",
      image: "/images/adidas-predator.jpg",
      price: "Rp4.500.000",
      href: "#football",
    },
  },
  {
    id: "outdoor",
    label: "Outdoor",
    href: "#outdoor",
    eyebrows: {
      primary: "Jelajahi Outdoor & Terrex",
      secondary: "Aktivitas Luar Ruang",
      tertiary: "Material Tangguh",
    },
    primaryLinks: [
      { title: "Jelajahi Semua Terrex", href: "#outdoor" },
      { title: "Terrex Free Hiker 2", href: "#outdoor", badge: "Hiking" },
      { title: "Terrex Agravic Speed Ultra", href: "#outdoor" },
      { title: "Terrex Swift R3 GORE-TEX", href: "#outdoor" },
      { title: "Terrex Trailmaker 2.0", href: "#outdoor" },
    ],
    bottomLinks: [
      { title: "Bandingkan Sepatu Trekking & Trail", href: "#outdoor" },
      { title: "Panduan Perlindungan Cuaca Ekstrem", href: "#outdoor" },
    ],
    secondaryLinks: [
      { title: "Hiking & Trekking Gunung", href: "#outdoor" },
      { title: "Trail Ultra-Marathon & Off-Road", href: "#outdoor" },
      { title: "All-Weather & Perlindungan Hujan", href: "#outdoor" },
      { title: "Jaket & Celana GORE-TEX®", href: "#outdoor" },
      { title: "Backpack & Perlengkapan Outdoor", href: "#outdoor" },
    ],
    tertiaryLinks: [
      { title: "Membran GORE-TEX® Tahan Air", href: "#outdoor" },
      { title: "Continental™ Mountain Lug Grip", href: "#outdoor" },
      { title: "Exploded Tech Breakdown Material", href: "#outdoor" },
      { title: "Inisiatif Parley Ocean Plastic", href: "#outdoor" },
    ],
    featured: {
      tag: "EXPLODED TECH VIEW",
      title: "Konstruksi Multi-Lapis",
      subtitle: "Primeknit, Light BOOST, dan Continental rubber terintegrasi.",
      image: "/images/adidas-exploded-view.jpg",
      price: "Inovasi 2026",
      href: "#outdoor",
    },
  },
  {
    id: "collabs",
    label: "Kolaborasi",
    href: "#collabs",
    eyebrows: {
      primary: "Lini Kolaborasi",
      secondary: "Lini Spesial & Desainer",
      tertiary: "Cerita & Komunitas",
    },
    primaryLinks: [
      { title: "Jelajahi Semua Kolaborasi", href: "#collabs" },
      { title: "Wales Bonner x adidas", href: "#collabs", badge: "Eksklusif" },
      { title: "Bad Bunny x adidas", href: "#collabs" },
      { title: "Sporty & Rich", href: "#collabs" },
      { title: "Pharrell Williams Humanrace", href: "#collabs" },
      { title: "Song for the Mute", href: "#collabs" },
    ],
    bottomLinks: [
      { title: "Jadwal Rilis Drop (Release Calendar)", href: "#newsletter" },
      { title: "adiClub Exclusive Raffle & Undian", href: "#collabs" },
    ],
    secondaryLinks: [
      { title: "Y-3 Yohji Yamamoto", href: "#collabs" },
      { title: "adidas Consortium", href: "#collabs" },
      { title: "Stella McCartney Performance", href: "#collabs" },
      { title: "Fear of God Athletics", href: "#collabs" },
      { title: "Edisi Arsip Terbatas", href: "#collabs" },
    ],
    tertiaryLinks: [
      { title: "Behind the Design: Wales Bonner", href: "#collabs" },
      { title: "Visi Kreatif Bad Bunny di Originals", href: "#collabs" },
      { title: "Keuntungan Member adiClub", href: "#collabs" },
    ],
    featured: {
      tag: "COMMUNITY REWARDS",
      title: "adiClub Access",
      subtitle: "Dapatkan akses prioritas untuk setiap drop edisi terbatas.",
      image: "/images/adidas-adizero.jpg",
      price: "Gratis Gabung",
      href: "#collabs",
    },
  },
  {
    id: "dukungan",
    label: "Dukungan",
    href: "#privacy",
    eyebrows: {
      primary: "Jelajahi Dukungan",
      secondary: "Dapatkan Bantuan",
      tertiary: "adiClub & Akun",
    },
    primaryLinks: [
      { title: "Pusat Bantuan Utama", href: "#privacy" },
      { title: "Status Pesanan & Lacak Paket", href: "#privacy" },
      { title: "Pengembalian 30 Hari Bebas Biaya", href: "#privacy" },
      { title: "Pengiriman & Estimasi Waktu", href: "#privacy" },
      { title: "Temukan Toko Resmi adidas", href: "#privacy" },
      { title: "Panduan Ukuran & Konversi Sepatu", href: "#details" },
    ],
    bottomLinks: [
      { title: "Syarat & Ketentuan Pembelian", href: "#privacy" },
      { title: "Kebijakan Garansi Resmi adidas", href: "#privacy" },
    ],
    secondaryLinks: [
      { title: "Live Chat Dukungan (08:00 - 22:00)", href: "#privacy" },
      { title: "WhatsApp Customer Care", href: "#privacy" },
      { title: "Email Dukungan Resmi", href: "#privacy" },
      { title: "Klaim Produk Cacat / Garansi", href: "#privacy" },
      { title: "Verifikasi Keaslian Produk", href: "#privacy" },
      { title: "Pertanyaan Umum (FAQ)", href: "#privacy" },
    ],
    tertiaryLinks: [
      { title: "Keuntungan Member adiClub", href: "#collabs" },
      { title: "Cek Poin & Voucher Saya", href: "#privacy" },
      { title: "Akun & Ubah Kata Sandi", href: "#privacy" },
      { title: "Pengaturan Privasi & Data", href: "#privacy" },
      { title: "Aksesibilitas & Bantuan Khusus", href: "#privacy" },
    ],
    featured: {
      tag: "LAYANAN RESMI",
      title: "Jaminan Keaslian 100%",
      subtitle: "Pengiriman cepat ke seluruh Indonesia & 30 hari pengembalian.",
      image: "/images/adidas-samba-hero.jpg",
      price: "Dukungan 24/7",
      href: "#privacy",
    },
  },
];

interface MegaMenuProps {
  activeCategory: string | null;
  onClose: () => void;
  onNavigate?: (href: string) => void;
  onMouseEnter?: () => void;
}

export function MegaMenu({ activeCategory, onClose, onNavigate, onMouseEnter }: MegaMenuProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const current = navCategories.find((cat) => cat.id === activeCategory);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <>
      {/* Backdrop rendered to document.body via Portal so it doesn't get trapped in header's backdrop-filter containing block */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {activeCategory && current && (
              <motion.div
                className="mega-menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={onClose}
                onMouseEnter={onClose}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Mega Menu Dropdown Panel inside header */}
      <AnimatePresence>
        {activeCategory && current && (
          <motion.div
            className="mega-menu-panel"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="region"
            aria-label={`Menu ${current.label}`}
            onMouseEnter={onMouseEnter}
          >
            <div className="mega-menu-inner">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={current.id}
                  className="mega-menu-grid"
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Column 1: Primary Links */}
                  <div className="mega-col mega-col-primary">
                    <p className="mega-eyebrow">{current.eyebrows.primary}</p>
                    <ul className="mega-primary-list">
                      {current.primaryLinks.map((item, idx) => (
                        <motion.li
                          key={item.title}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.02 }}
                        >
                          <a
                            href={item.href}
                            className="mega-primary-link"
                            onClick={(e) => handleClick(e, item.href)}
                          >
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="mega-badge">{item.badge}</span>
                            )}
                          </a>
                        </motion.li>
                      ))}
                    </ul>

                    {current.bottomLinks && current.bottomLinks.length > 0 && (
                      <div className="mega-bottom-links">
                        {current.bottomLinks.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="mega-sub-link"
                            onClick={(e) => handleClick(e, item.href)}
                          >
                            {item.title} <ChevronRight className="w-3 h-3 inline-block" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Column 2: Secondary Categorized Links */}
                  <div className="mega-col mega-col-secondary">
                    <p className="mega-eyebrow">{current.eyebrows.secondary}</p>
                    <ul className="mega-secondary-list">
                      {current.secondaryLinks.map((item, idx) => (
                        <motion.li
                          key={item.title}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 0.04 + idx * 0.015 }}
                        >
                          <a
                            href={item.href}
                            className="mega-secondary-link"
                            onClick={(e) => handleClick(e, item.href)}
                          >
                            {item.title}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Tertiary Topics + Interactive Product Card */}
                  <div className="mega-col mega-col-tertiary">
                    <p className="mega-eyebrow">{current.eyebrows.tertiary}</p>
                    <ul className="mega-tertiary-list">
                      {current.tertiaryLinks.map((item, idx) => (
                        <motion.li
                          key={item.title}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 0.08 + idx * 0.015 }}
                        >
                          <a
                            href={item.href}
                            className="mega-tertiary-link"
                            onClick={(e) => handleClick(e, item.href)}
                          >
                            {item.title}
                          </a>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Featured Mini Showcase Card */}
                    {current.featured && (
                      <motion.div
                        className="mega-featured-card"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, delay: 0.12 }}
                      >
                        <a
                          href={current.featured.href}
                          className="mega-featured-inner"
                          onClick={(e) => handleClick(e, current.featured!.href)}
                        >
                          <div className="mega-featured-image-wrap">
                            <Image
                              src={current.featured.image}
                              alt={current.featured.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 320px"
                              className="mega-featured-image"
                            />
                            <span className="mega-featured-tag">
                              <Sparkles className="w-3 h-3 inline-block mr-1" />
                              {current.featured.tag}
                            </span>
                          </div>
                          <div className="mega-featured-meta">
                            <h4>{current.featured.title}</h4>
                            <p>{current.featured.subtitle}</p>
                            <div className="mega-featured-cta">
                              <span>{current.featured.price}</span>
                              <span className="mega-cta-link">
                                Jelajahi <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
