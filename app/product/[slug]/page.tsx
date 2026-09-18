"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Menu,
  Minus,
  Moon,
  Plus,
  RotateCcw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Truck,
  UserRound,
  X,
} from "lucide-react";
import { productsData, ProductDetail } from "@/lib/products";
import { MegaMenu, navCategories } from "@/components/MegaMenu";
import { Footer } from "@/components/Footer";

function AdidasMark() {
  return (
    <span className="brand" aria-label="Adidas Pure Concept">
      <svg aria-hidden="true" viewBox="0 0 56 36" className="brand-mark">
        <path d="M3 31 16 8l7 4-11 19H3Z" />
        <path d="m18 31 14-25 7 4-12 21h-9Z" />
        <path d="M34 31 47 8l7 4-11 19h-9Z" />
      </svg>
      <span>Adidas Pure Concept</span>
    </span>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product: ProductDetail | undefined = productsData[slug];

  if (!product) {
    notFound();
  }

  // Component States
  const [theme, setTheme] = useState<"light" | "night">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[2] || 42);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLayer, setSelectedLayer] = useState<"upper" | "midsole" | "outsole">("upper");
  const [notice, setNotice] = useState("");
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const lifestyleCarouselRef = useRef<HTMLDivElement>(null);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("adidas-theme");
    if (savedTheme === "night") setTheme("night");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("adidas-theme", theme);
  }, [theme]);

  const announce = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3400);
  };

  const handleNavMouseEnter = (id: string) => {
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    setActiveNav(id);
  };

  const handleNavMouseLeave = () => {
    navTimeoutRef.current = setTimeout(() => {
      setActiveNav(null);
    }, 180);
  };

  const scrollCarousel = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (!ref.current) return;
    const scrollAmount = ref.current.clientWidth * 0.85;
    ref.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const addToBag = (productName: string) => {
    setCartCount((prev) => prev + 1);
    announce(`${productName} (Ukuran EU ${selectedSize}) ditambahkan ke tas.`);
    setPurchaseModalOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#content">Lewati ke konten utama</a>

      {/* Global Apple-Style Header */}
      <header
        className="site-header"
        onMouseEnter={() => {
          if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
        }}
        onMouseLeave={handleNavMouseLeave}
      >
        <nav className="nav-shell" aria-label="Navigasi utama">
          <Link
            href="/"
            className="brand-link"
            aria-label="Kembali ke beranda Adidas Pure Concept"
            onClick={() => setActiveNav(null)}
          >
            <AdidasMark />
          </Link>

          <div className="desktop-nav" role="menubar">
            {navCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`nav-item-btn ${activeNav === category.id ? "active-nav" : ""}`}
                onMouseEnter={() => handleNavMouseEnter(category.id)}
                onFocus={() => handleNavMouseEnter(category.id)}
                onClick={() => setActiveNav(activeNav === category.id ? null : category.id)}
                aria-expanded={activeNav === category.id}
                role="menuitem"
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <Link href="/" className="icon-button" aria-label="Cari produk">
              <Search aria-hidden="true" />
            </Link>
            <button
              className="icon-button bag-trigger"
              type="button"
              onClick={() => setPurchaseModalOpen(true)}
              aria-label={`Tas belanja, ${cartCount} produk`}
            >
              <ShoppingBag aria-hidden="true" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button
              className="icon-button theme-trigger"
              type="button"
              onClick={() => setTheme(theme === "light" ? "night" : "light")}
              aria-label="Ganti tema tampilan"
            >
              {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </button>
            <button
              className="icon-button menu-trigger"
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Global Mega Menu Dropdown */}
        <MegaMenu
          activeCategory={activeNav}
          onClose={() => setActiveNav(null)}
          onMouseEnter={() => {
            if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
          }}
        />

        {/* Mobile Menu Accordion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              className="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <Link href="/" className="flex items-center gap-2 py-3 font-semibold border-b border-neutral-200">
                <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
              </Link>
              {navCategories.map((cat) => {
                const isExpanded = mobileExpandedCat === cat.id;
                return (
                  <div key={cat.id} className="mobile-accordion-item">
                    <button
                      type="button"
                      className="mobile-accordion-trigger"
                      onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
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

      {/* Sticky Apple Product Sub-Navigation Bar (Matching Screenshots 2, 3, 4, 5) */}
      <div className="product-subnav-bar">
        <div className="product-subnav-container">
          <div className="product-subnav-left">
            <Link href="#overview" className="product-subnav-title">
              {product.name}
            </Link>
          </div>
          <div className="product-subnav-tabs">
            <a
              href="#overview"
              className={activeTab === "overview" ? "active-tab" : ""}
              onClick={() => setActiveTab("overview")}
            >
              Ringkasan
            </a>
            <a
              href="#highlights"
              className={activeTab === "highlights" ? "active-tab" : ""}
              onClick={() => setActiveTab("highlights")}
            >
              Keunggulan
            </a>
            <a
              href="#design"
              className={activeTab === "design" ? "active-tab" : ""}
              onClick={() => setActiveTab("design")}
            >
              Desain & Material
            </a>
            <a
              href="#lifestyle"
              className={activeTab === "lifestyle" ? "active-tab" : ""}
              onClick={() => setActiveTab("lifestyle")}
            >
              Varian & Gaya
            </a>
            <a
              href="#specs"
              className={activeTab === "specs" ? "active-tab" : ""}
              onClick={() => setActiveTab("specs")}
            >
              Spesifikasi Teknis
            </a>
          </div>
          <div className="product-subnav-action">
            <button
              type="button"
              className="button button-primary subnav-buy-btn"
              onClick={() => setPurchaseModalOpen(true)}
            >
              Beli Sekarang · {product.price}
            </button>
          </div>
        </div>
      </div>

      <main id="content" tabIndex={-1}>
        {/* Section 1: Hero Section (Apple-Style High Impact Staging) */}
        <section className="product-detail-hero" id="overview">
          <div className="product-detail-hero-copy">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1 className="product-detail-title">
              {product.heroHeadline}
              <span className="product-detail-accent"> {product.heroAccent}</span>
            </h1>
            <p className="product-detail-subtitle">{product.heroSubheadline}</p>

            <div className="product-detail-hero-actions">
              <button
                type="button"
                className="button button-primary buy-pill-large"
                onClick={() => setPurchaseModalOpen(true)}
              >
                Beli Sekarang <ArrowRight className="w-4 h-4 inline-block ml-1" />
              </button>
              <button
                type="button"
                className="button button-quiet"
                onClick={() => announce(`${product.name} disimpan ke daftar favorit.`)}
              >
                <Heart className="w-4 h-4 inline-block mr-1" /> Simpan ke Favorit
              </button>
            </div>

            {/* Quick Specs Strip */}
            <div className="product-quick-specs">
              {product.quickSpecs.map((spec) => (
                <div key={spec.label} className="quick-spec-item">
                  <span className="quick-spec-label">{spec.label}</span>
                  <strong className="quick-spec-value">{spec.value}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Product Center Staging with Color Swatches */}
          <div className="product-detail-stage">
            <motion.div
              className="product-detail-stage-inner"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="product-stage-glow" aria-hidden="true" />
              <img
                src={product.heroImage}
                alt={`${product.name} dalam resolusi ultra-tinggi`}
                className="product-detail-hero-image"
              />
            </motion.div>

            {/* Live Interactive Color Switcher */}
            <div className="product-detail-color-picker">
              <p>
                <strong>Warna Pilihan:</strong> <span>{selectedColor}</span>
              </p>
              <div className="swatches">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    className={`swatch ${color.swatchClass} ${
                      selectedColor === color.name ? "selected" : ""
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Pilih warna ${color.name}`}
                  >
                    {selectedColor === color.name && <Check className="w-3 h-3 text-white" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: "Keunggulan demi keunggulan." (Interactive Highlights Bento Carousel) */}
        <section className="product-highlights-section" id="highlights">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">INOVASI & TEKNOLOGI</p>
              <h2 className="section-headline">Keunggulan demi keunggulan.</h2>
            </div>
            <div className="carousel-nav-buttons">
              <button
                type="button"
                className="carousel-arrow-btn"
                onClick={() => scrollCarousel(carouselRef, "left")}
                aria-label="Geser ke kiri"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="carousel-arrow-btn"
                onClick={() => scrollCarousel(carouselRef, "right")}
                aria-label="Geser ke kanan"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bento-carousel-container" ref={carouselRef}>
            {product.highlights.map((hl) => (
              <article key={hl.id} className="bento-card-highlight">
                <div className="bento-card-top">
                  <span className="bento-tag">{hl.tag}</span>
                  {hl.stat && (
                    <span className="bento-stat-pill">
                      <strong>{hl.stat.value}</strong>
                    </span>
                  )}
                </div>

                <div className="bento-card-body">
                  <h3>{hl.headline}</h3>
                  <p>{hl.description}</p>
                </div>

                {hl.image && (
                  <div className="bento-card-media">
                    <img src={hl.image} alt={hl.headline} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Detailed Design & Craftsmanship Deep Dive */}
        <section className="product-design-deepdive" id="design">
          <div className="design-split-grid">
            <div className="design-images-col">
              <div className="design-image-card">
                <img
                  src={product.design.images[0] || product.heroImage}
                  alt="Detail jahitan dan lekukan produk"
                  className="design-macro-photo"
                />
              </div>
            </div>
            <div className="design-text-col">
              <p className="eyebrow">ARSITEKTUR & MATERIAL</p>
              <h2>{product.design.heading}</h2>
              <p className="design-lead">{product.design.subheading}</p>
              {product.design.paragraphs.map((p, idx) => (
                <p key={idx} className="design-paragraph">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Color Gallery & Lifestyle Showcase */}
        <section className="product-lifestyle-section" id="lifestyle">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">ESTETIKA & GAYA HIDUP</p>
              <h2 className="section-headline">{product.lifestyleHeading}</h2>
              <p className="section-subtitle">{product.lifestyleSubheading}</p>
            </div>
            <div className="carousel-nav-buttons">
              <button
                type="button"
                className="carousel-arrow-btn"
                onClick={() => scrollCarousel(lifestyleCarouselRef, "left")}
                aria-label="Geser gaya ke kiri"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="carousel-arrow-btn"
                onClick={() => scrollCarousel(lifestyleCarouselRef, "right")}
                aria-label="Geser gaya ke kanan"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lifestyle-carousel-container" ref={lifestyleCarouselRef}>
            {product.lifestyleCards.map((card) => (
              <div key={card.id} className="lifestyle-card">
                <div className="lifestyle-card-image-wrap">
                  <img src={card.image} alt={card.title} />
                  <span className="lifestyle-badge">{card.badge}</span>
                </div>
                <div className="lifestyle-card-meta">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Interactive Exploded View */}
        <section className="tech-section">
          <div className="tech-intro">
            <p className="eyebrow">ANATOMI TEKNOLOGI</p>
            <h2>Rasakan konstruksinya.</h2>
            <p>Setiap komponen terintegrasi secara mulus untuk menghasilkan kenyamanan dan performa terbaik.</p>
            <div className="tech-controls" role="group">
              {(["upper", "midsole", "outsole"] as const).map((layer, idx) => (
                <button
                  key={layer}
                  type="button"
                  className={selectedLayer === layer ? "active" : ""}
                  onClick={() => setSelectedLayer(layer)}
                >
                  <span>0{idx + 1}</span> {product.techLayers[layer].title}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLayer}
                className="tech-description"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span>0{selectedLayer === "upper" ? 1 : selectedLayer === "midsole" ? 2 : 3}</span>
                <div>
                  <h3>{product.techLayers[selectedLayer].title}</h3>
                  <p>{product.techLayers[selectedLayer].desc}</p>
                  <strong className="text-xs text-blue-400 block mt-2">
                    {product.techLayers[selectedLayer].stat}
                  </strong>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={`exploded-stage selected-${selectedLayer}`}>
            <span className="tech-label label-upper">01 / UPPER</span>
            <span className="tech-label label-midsole">02 / MIDSOLE</span>
            <span className="tech-label label-outsole">03 / OUTSOLE</span>
            <div className="shoe-layer layer-upper">
              <img src="/images/adidas-exploded-view.jpg" alt="Upper layer" />
            </div>
            <div className="shoe-layer layer-midsole"><span /></div>
            <div className="shoe-layer layer-outsole"><span /></div>
            <div className="stage-grid" aria-hidden="true" />
          </div>
        </section>

        {/* Section 6: Technical Specifications Accordion Table */}
        <section className="product-specs-section" id="specs">
          <div className="specs-container">
            <p className="eyebrow">LEMBAR SPESIFIKASI</p>
            <h2 className="section-headline">Spesifikasi Teknis Lengkap.</h2>
            <div className="specs-table">
              {product.technicalSpecs.map((spec, index) => (
                <div key={spec.label} className={`specs-row ${index % 2 === 0 ? "specs-row-alt" : ""}`}>
                  <span className="specs-label">{spec.label}</span>
                  <span className="specs-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Bottom Action Strip */}
        <section className="product-bottom-cta">
          <div className="product-bottom-cta-inner">
            <img src={product.heroImage} alt={product.name} className="bottom-cta-shoe" />
            <div>
              <p className="eyebrow">PESAN SEKARANG</p>
              <h2>{product.name}</h2>
              <p className="text-sm text-neutral-400 mt-1">{product.price} · Gratis Ongkir Seluruh Indonesia</p>
            </div>
            <button
              type="button"
              className="button button-primary buy-pill-large"
              onClick={() => setPurchaseModalOpen(true)}
            >
              Pilih Ukuran & Beli Sekarang <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </section>
      </main>

      {/* Apple-Style Shared Footer */}
      <Footer />

      {/* Quick Purchase / Size Selector Dialog */}
      <dialog
        className="utility-dialog"
        open={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
        aria-labelledby="purchase-dialog-title"
      >
        <button
          className="dialog-close"
          type="button"
          onClick={() => setPurchaseModalOpen(false)}
          aria-label="Tutup"
        >
          <X aria-hidden="true" />
        </button>

        <div className="dialog-content">
          <p className="eyebrow">PILIH UKURAN & PEMBELIAN</p>
          <h2 id="purchase-dialog-title">{product.name}</h2>
          <p className="text-xl font-bold text-neutral-900 mt-2">{product.price}</p>
          <p className="text-sm text-neutral-500 mt-1">Warna: {selectedColor}</p>

          <div className="size-selector-wrap mt-6">
            <label className="text-xs font-bold block mb-2">Pilih Ukuran Sepatu (EU):</label>
            <div className="size-grid">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-btn ${selectedSize === size ? "selected-size" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  EU {size}
                </button>
              ))}
            </div>
          </div>

          <div className="guarantee-points mt-6">
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <Truck className="w-4 h-4 text-blue-600" /> Pengiriman Gratis ke Seluruh Indonesia
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-600 mt-2">
              <RotateCcw className="w-4 h-4 text-blue-600" /> Garansi Pengembalian & Tukar Ukuran 30 Hari
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-600 mt-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> 100% Produk Original Garansi Resmi
            </div>
          </div>

          <button
            type="button"
            className="button button-primary dialog-button mt-6 w-full"
            onClick={() => addToBag(product.name)}
          >
            Tambahkan ke Tas · {product.price}
          </button>
        </div>
      </dialog>

      <p className="live-region" aria-live="polite" aria-atomic="true">{notice}</p>
    </>
  );
}
