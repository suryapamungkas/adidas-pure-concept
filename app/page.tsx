"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  Minus,
  Moon,
  Plus,
  RotateCcw,
  Search,
  ShoppingBag,
  Sun,
  Truck,
  UserRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { MegaMenu, navCategories } from "@/components/MegaMenu";
import { Footer } from "@/components/Footer";

type Panel = "search" | "bag" | "profile" | null;
type TechLayer = "upper" | "midsole" | "outsole";

const products = [
  {
    name: "Ultraboost Light",
    slug: "/product/ultraboost-light",
    eyebrow: "ENERGY RETURN",
    description: "Respons tanpa jeda, dari langkah pertama hingga garis akhir.",
    price: "Rp3.000.000",
    image: "/images/adidas-ultraboost.jpg",
    tone: "citrus",
  },
  {
    name: "Gazelle Indoor",
    slug: "/product/gazelle-indoor",
    eyebrow: "RETRO, REFINED",
    description: "Arsip yang kembali hidup untuk setiap ritme kota.",
    price: "Rp1.800.000",
    image: "/images/adidas-gazelle.jpg",
    tone: "cloud",
  },
  {
    name: "Predator Elite",
    slug: "/product/predator-elite",
    eyebrow: "CONTROL REDEFINED",
    description: "Kontrol tajam saat momen membutuhkan lebih dari sekadar cepat.",
    price: "Rp4.500.000",
    image: "/images/adidas-predator.jpg",
    tone: "ink",
  },
  {
    name: "Adizero Adios Pro 4",
    slug: "/product/adizero-adios-pro",
    eyebrow: "MADE TO RACE",
    description: "Ringan luar biasa. Dibangun untuk hari ketika rekor terasa dekat.",
    price: "Rp4.200.000",
    image: "/images/adidas-adizero.jpg",
    tone: "rose",
  },
];

const techCopy: Record<TechLayer, { title: string; copy: string; number: string }> = {
  upper: {
    number: "01",
    title: "Primeknit upper",
    copy: "Rasa terkunci yang lentur. Rajutan presisi mengikuti ritme langkah tanpa menambah beban.",
  },
  midsole: {
    number: "02",
    title: "Light BOOST midsole",
    copy: "Ratusan kapsul energi bekerja sebagai satu kesatuan untuk bantalan yang terasa hidup.",
  },
  outsole: {
    number: "03",
    title: "Continental™ Rubber",
    copy: "Daya cengkeram yang dirancang untuk memberi rasa yakin di setiap permukaan kota.",
  },
};

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

export default function Home() {
  const [theme, setTheme] = useState<"light" | "night">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [cartCount, setCartCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Cloud White / Core Black");
  const [selectedLayer, setSelectedLayer] = useState<TechLayer>("upper");
  const [notice, setNotice] = useState("");
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallaxY = useTransform(heroProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("adidas-theme");
    if (savedTheme === "night") setTheme("night");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("adidas-theme", theme);
  }, [theme]);

  // Keyboard support: Escape closes Mega Menu & Dialogs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveNav(null);
        if (panel) closePanel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [panel]);

  const handleNavMouseEnter = (id: string) => {
    if (navTimeoutRef.current) {
      clearTimeout(navTimeoutRef.current);
    }
    setActiveNav(id);
  };

  const handleNavMouseLeave = () => {
    navTimeoutRef.current = setTimeout(() => {
      setActiveNav(null);
    }, 180);
  };

  const handleHeaderMouseEnter = () => {
    if (navTimeoutRef.current) {
      clearTimeout(navTimeoutRef.current);
    }
  };

  const announce = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3400);
  };

  const openPanel = (nextPanel: Exclude<Panel, null>) => {
    setActiveNav(null);
    setPanel(nextPanel);
    window.requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  const closePanel = () => {
    dialogRef.current?.close();
    setPanel(null);
  };

  const addToBag = (productName: string) => {
    setCartCount((count) => count + 1);
    announce(`${productName} ditambahkan ke tas.`);
  };

  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    announce("Terima kasih. Anda akan menerima kabar terbaru dari Adidas Pure Concept.");
  };

  return (
    <>
      <a className="skip-link" href="#content">Lewati ke konten utama</a>

      <header
        className="site-header"
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleNavMouseLeave}
      >
        <nav className="nav-shell" aria-label="Navigasi utama">
          <a
            href="#top"
            className="brand-link"
            aria-label="Beranda Adidas Pure Concept"
            onClick={() => setActiveNav(null)}
          >
            <AdidasMark />
          </a>

          {/* Desktop Navigation with Apple-Style Mega Menu triggers */}
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
            <button
              className="icon-button search-trigger"
              type="button"
              onClick={() => openPanel("search")}
              aria-label="Cari produk"
            >
              <Search aria-hidden="true" />
            </button>
            <button
              className="icon-button bag-trigger"
              type="button"
              onClick={() => openPanel("bag")}
              aria-label={`Tas belanja, ${cartCount} produk`}
            >
              <ShoppingBag aria-hidden="true" />
              {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
            </button>
            <button
              className="icon-button profile-trigger"
              type="button"
              onClick={() => openPanel("profile")}
              aria-label="Akun saya"
            >
              <UserRound aria-hidden="true" />
            </button>
            <button
              className="icon-button theme-trigger"
              type="button"
              onClick={() => setTheme(theme === "light" ? "night" : "light")}
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

        {/* Apple-Style Interactive Mega Menu Dropdown */}
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

      <main id="content" tabIndex={-1}>
        {/* Hero Section (Samba OG) */}
        <section className="hero" id="top" aria-labelledby="samba-title" ref={heroRef}>
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">ORIGINALS / 1950 — NOW</p>
            <h1 id="samba-title">Samba OG</h1>
            <p className="hero-subtitle">Klasik yang melampaui generasi.</p>
            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => addToBag("Samba OG")}
              >
                Beli sekarang <ArrowRight aria-hidden="true" />
              </button>
              <Link className="text-link" href="/product/samba-og">
                Pelajari selengkapnya <ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="hero-product-wrap">
            <motion.div
              className="hero-product-stage"
              initial={{ opacity: 0, rotate: -9, y: 28 }}
              animate={{ opacity: 1, rotate: -4, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: heroParallaxY }}
            >
              <span className="product-glow" aria-hidden="true" />
              <img
                className="hero-shoe"
                src="/images/adidas-samba-hero.jpg"
                alt="Sepatu bergaya Samba warna putih dan hitam"
              />
              <span className="product-caption">CLOUD WHITE / CORE BLACK</span>
            </motion.div>
          </div>
          <div className="hero-footer">
            <span>Direkayasa untuk hari ini. Diingat selamanya.</span>
            <a href="#originals" aria-label="Gulir ke koleksi pilihan">
              Gulir untuk menjelajah <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* Sub-Hero 1: Apple Benchmark Showcase (Ultraboost Light) - Matching Screenshot 1 */}
        <section className="sub-hero-card" id="running" aria-labelledby="ultraboost-headline">
          <div className="sub-hero-copy">
            <p className="eyebrow">RUNNING INNOVATION</p>
            <h2 id="ultraboost-headline">Ultraboost Light</h2>
            <p className="sub-hero-tagline">Kini dengan Light BOOST dan Continental™.</p>
            <p className="sub-hero-note">Bantalan 30% lebih ringan dengan pengembalian energi maksimal.</p>
            <div className="sub-hero-actions">
              <Link
                href="/product/ultraboost-light"
                className="button button-primary"
              >
                Beli Sekarang
              </Link>
              <Link href="/product/ultraboost-light" className="text-link">
                Pelajari Selengkapnya <ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="sub-hero-image-stage">
            <img
              src="/images/adidas-ultraboost.jpg"
              alt="Sepatu lari Adidas Ultraboost Light melayang"
            />
          </div>
        </section>

        {/* Sub-Hero 2: Apple Benchmark Showcase (Predator Elite) */}
        <section className="sub-hero-card" id="football" aria-labelledby="predator-headline">
          <div className="sub-hero-copy">
            <p className="eyebrow">CONTROL REDEFINED</p>
            <h2 id="predator-headline">Predator Elite</h2>
            <p className="sub-hero-tagline">Kini dengan Strikeskin dan ControlFrame 2.0.</p>
            <p className="sub-hero-note">Akurasi tajam saat momen membutuhkan lebih dari sekadar cepat.</p>
            <div className="sub-hero-actions">
              <Link
                href="/product/predator-elite"
                className="button button-primary"
              >
                Beli Sekarang
              </Link>
              <Link href="/product/predator-elite" className="text-link">
                Pelajari Selengkapnya <ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="sub-hero-image-stage">
            <img
              src="/images/adidas-predator.jpg"
              alt="Sepatu sepak bola Adidas Predator Elite"
            />
          </div>
        </section>

        <section className="service-strip" aria-label="Layanan pelanggan">
          <div><Truck aria-hidden="true" /><span><strong>Pengiriman ekspres</strong> Untuk pesanan pilihan.</span></div>
          <div><RotateCcw aria-hidden="true" /><span><strong>30 hari pengembalian</strong> Belanja lebih tenang.</span></div>
          <div><Heart aria-hidden="true" /><span><strong>Member adiClub</strong> Dapatkan akses lebih awal.</span></div>
        </section>

        <motion.section
          className="intro-section"
          id="originals"
          aria-labelledby="collection-title"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">DIBUAT UNTUK SETIAP CARA ANDA BERGERAK</p>
          <div className="intro-heading">
            <h2 id="collection-title">Pilih ritme Anda.</h2>
            <p>Desain ikonik, teknologi tanpa kompromi, dan energi untuk menjadikan setiap langkah milik Anda.</p>
          </div>
        </motion.section>

        {/* 2x2 Bento Product Grid with direct Detail page links */}
        <section className="product-grid" aria-label="Koleksi unggulan">
          {products.map((product, index) => (
            <motion.article
              className={`product-card ${product.tone}`}
              key={product.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-copy">
                <p className="eyebrow">{product.eyebrow}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="card-actions">
                  <Link href={product.slug} className="text-link">
                    Selengkapnya <ChevronRight aria-hidden="true" />
                  </Link>
                  <button className="text-link" type="button" onClick={() => addToBag(product.name)}>
                    Tambahkan <Plus aria-hidden="true" />
                  </button>
                  <span>{product.price}</span>
                </div>
              </div>
              <div className="card-image-wrap">
                <Link href={product.slug} aria-label={`Lihat detail ${product.name}`}>
                  <img
                    src={product.image}
                    alt={`${product.name} dalam tampilan produk`}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </Link>
              </div>
              <span className="card-index" aria-hidden="true">0{index + 1}</span>
            </motion.article>
          ))}
        </section>

        {/* Interactive Samba Detail Section */}
        <motion.section
          className="samba-detail"
          id="details"
          aria-labelledby="details-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="detail-image-wrap">
            <img src="/images/adidas-samba-hero.jpg" alt="Detail sepatu klasik putih dengan tiga garis" loading="lazy" />
            <span className="detail-stamp" aria-hidden="true">1950<br />NOW</span>
          </div>
          <div className="detail-copy">
            <p className="eyebrow">SEBUAH IKON, DIBUAT UNTUK SEKARANG</p>
            <h2 id="details-title">Asli dari awal.</h2>
            <p>
              Dimulai dari lapangan indoor. Tumbuh menjadi bahasa universal untuk mereka yang bergerak dengan cara sendiri.
              Samba OG mempertahankan semua karakter yang membuatnya abadi—kulit lembut, gum sole, dan garis yang langsung dikenali.
            </p>
            <div className="color-picker" role="group" aria-labelledby="color-label">
              <p id="color-label"><strong>Warna pilihan</strong><span>{selectedColor}</span></p>
              <div className="swatches">
                {[
                  ["Cloud White / Core Black", "white-black"],
                  ["Core Black / Cloud White", "black-white"],
                  ["Cream White / Gum", "cream-gum"],
                ].map(([label, swatch]) => (
                  <button
                    key={label}
                    type="button"
                    className={`swatch ${swatch} ${selectedColor === label ? "selected" : ""}`}
                    onClick={() => setSelectedColor(label)}
                    aria-pressed={selectedColor === label}
                    aria-label={label}
                  >
                    {selectedColor === label && <Check aria-hidden="true" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="detail-actions">
              <Link href="/product/samba-og" className="button button-primary">
                Pelajari Detail Lengkap <ArrowRight aria-hidden="true" />
              </Link>
              <button
                type="button"
                className="button button-quiet"
                onClick={() => announce("Samba OG disimpan ke daftar favorit.")}
              >
                <Heart aria-hidden="true" /> Simpan
              </button>
            </div>
          </div>
        </motion.section>

        {/* Interactive Exploded View Tech Breakdown */}
        <section className="tech-section" id="outdoor" aria-labelledby="tech-title">
          <div className="tech-intro">
            <p className="eyebrow">MATERIAL YANG BEKERJA BERSAMA</p>
            <h2 id="tech-title">Rasakan konstruksinya.</h2>
            <p>Setiap lapisan ada untuk satu alasan: membantu Anda melangkah lebih jauh dengan rasa yang tetap ringan.</p>
            <div className="tech-controls" role="group" aria-label="Pilih bagian sepatu untuk dipelajari">
              {(Object.keys(techCopy) as TechLayer[]).map((layer) => (
                <button
                  key={layer}
                  type="button"
                  className={selectedLayer === layer ? "active" : ""}
                  onClick={() => setSelectedLayer(layer)}
                  aria-pressed={selectedLayer === layer}
                >
                  <span>{techCopy[layer].number}</span>{techCopy[layer].title}
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
                <span>{techCopy[selectedLayer].number}</span>
                <div>
                  <h3>{techCopy[selectedLayer].title}</h3>
                  <p>{techCopy[selectedLayer].copy}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={`exploded-stage selected-${selectedLayer}`} aria-label="Tampilan terurai teknologi sepatu" role="img">
            <span className="tech-label label-upper">01 / PRIMEKNIT</span>
            <span className="tech-label label-midsole">02 / LIGHT BOOST</span>
            <span className="tech-label label-outsole">03 / CONTINENTAL™</span>
            <div className="shoe-layer layer-upper">
              <img src="/images/adidas-exploded-view.jpg" alt="Lapisan upper" />
            </div>
            <div className="shoe-layer layer-midsole"><span /></div>
            <div className="shoe-layer layer-outsole"><span /></div>
            <div className="stage-grid" aria-hidden="true" />
          </div>
        </section>

        {/* adiClub Campaign */}
        <section className="campaign" id="collabs" aria-labelledby="campaign-title">
          <div className="campaign-copy">
            <p className="eyebrow">ADI CLUB</p>
            <h2 id="campaign-title">Lebih dekat dengan yang berikutnya.</h2>
            <p>Dapatkan akses awal, keuntungan member, dan undangan ke pengalaman yang dibuat khusus untuk Anda.</p>
            <a className="button button-light" href="#newsletter">
              Bergabung sekarang <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="campaign-art" aria-hidden="true">
            <span>///</span><span>///</span><span>///</span>
          </div>
        </section>

        {/* Newsletter Section */}
        <motion.section
          className="newsletter"
          id="newsletter"
          aria-labelledby="newsletter-title"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="eyebrow">JANGAN LEWATKAN LANGKAH BERIKUTNYA</p>
            <h2 id="newsletter-title">Dapatkan kabar yang berarti.</h2>
          </div>
          <form onSubmit={submitNewsletter}>
            <label htmlFor="email">Email Anda</label>
            <div className="email-row">
              <input id="email" name="email" type="email" placeholder="nama@contoh.com" autoComplete="email" required />
              <button type="submit" aria-label="Daftar newsletter"><ArrowRight aria-hidden="true" /></button>
            </div>
            <p>Dengan mendaftar, Anda menyetujui <a href="#privacy">Kebijakan Privasi</a> kami.</p>
          </form>
        </motion.section>
      </main>

      {/* Apple-Style Shared Footer */}
      <Footer />

      {/* Interactive Modal Dialogs (Search, Cart, Profile) */}
      <dialog ref={dialogRef} className="utility-dialog" onClose={() => setPanel(null)} aria-labelledby="dialog-title">
        <button className="dialog-close" type="button" onClick={closePanel} aria-label="Tutup"><X aria-hidden="true" /></button>
        {panel === "search" && (
          <div className="dialog-content">
            <p className="eyebrow">PENCARIAN</p>
            <h2 id="dialog-title">Temukan yang Anda cari.</h2>
            <label htmlFor="dialog-search">Kata kunci</label>
            <div className="search-box">
              <Search aria-hidden="true" />
              <input id="dialog-search" autoFocus placeholder="Cari Samba, running, atau koleksi..." />
            </div>
            <p className="dialog-note">Coba: Samba OG, Ultraboost, atau Adizero.</p>
          </div>
        )}
        {panel === "bag" && (
          <div className="dialog-content">
            <p className="eyebrow">TAS BELANJA</p>
            <h2 id="dialog-title">Tas Anda{cartCount > 0 ? ` · ${cartCount} item` : " masih kosong"}.</h2>
            {cartCount > 0 ? (
              <>
                <div className="bag-item">
                  <img src="/images/adidas-samba-hero.jpg" alt="Samba OG" />
                  <div>
                    <strong>Samba OG</strong>
                    <span>Cloud White / Core Black</span>
                    <span>Rp2.200.000</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCartCount(Math.max(0, cartCount - 1));
                      announce("Satu item dihapus dari tas.");
                    }}
                    aria-label="Hapus satu item Samba OG"
                  >
                    <Minus aria-hidden="true" />
                  </button>
                </div>
                <button
                  className="button button-primary dialog-button"
                  type="button"
                  onClick={() => announce("Checkout akan tersedia saat sistem pembayaran terhubung.")}
                >
                  Lanjut ke pembayaran <ArrowRight aria-hidden="true" />
                </button>
              </>
            ) : (
              <p className="dialog-note">Saatnya mencari pasangan baru untuk langkah Anda.</p>
            )}
          </div>
        )}
        {panel === "profile" && (
          <div className="dialog-content">
            <p className="eyebrow">ADI CLUB</p>
            <h2 id="dialog-title">Masuk untuk melanjutkan.</h2>
            <p className="dialog-note">Akses pesanan, daftar favorit, dan keuntungan member dalam satu tempat.</p>
            <button
              className="button button-primary dialog-button"
              type="button"
              onClick={() => announce("Autentikasi belum dihubungkan untuk demo ini.")}
            >
              Masuk atau daftar <ArrowRight aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>

      <p className="live-region" aria-live="polite" aria-atomic="true">{notice}</p>
    </>
  );
}
