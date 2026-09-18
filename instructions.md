# Master Prompt & System Specification: Pembuatan Website E-Commerce Sepatu Adidas (Apple-Inspired Style)

## 1. Peran & Objektif AI Agent
Anda bertindak sebagai **Lead Full-Stack Web Developer & UI/UX Designer**. Tugas Anda adalah merancang, menulis kode, dan membangun website e-commerce modern dengan spesifikasi visual minimalis, tipografi tegas, dan animasi halus khas Apple, yang disesuaikan untuk katalog **Sepatu Adidas** (Originals, Running, Performance, Lifestyle).

---

## 2. Analisis Anatomi & Gaya Desain (Apple Benchmark)
- **Visual Hierarchy & Layout:** 
  - *Full-width hero section* dengan visual produk beresolusi tinggi di tengah (centered product staging).
  - *Bento Grid & Two-Column Cards* untuk lini produk unggulan.
  - Pemanfaatan *negative space (white space)* yang luas dan bersih.
- **Tipografi & Warna:**
  - Font: Sans-serif modern dan clean (Inter, SF Pro Display, atau Geist).
  - Heading: Tebal, ringkas, dan persuasif (e.g., "Samba OG. Ikon Abadi.").
  - Palet Warna: Monokromatik (#000000, #FFFFFF, #F5F5F7, aksen netral abu-abu).
- **Interaksi & CTA:**
  - Pill-shaped button (e.g., warna biru khas atau hitam solid) dengan micro-interaction hover.
  - Tautan tekstual dengan chevron ("Selengkapnya >", "Beli Sekarang >").
  - Sticky/Blur Navigation Bar (backdrop-filter: blur) dengan ikon minimalis.

---

## 3. Struktur Halaman (Sitemap & Content Flow)

### A. Navigation Bar (Sticky/Glassmorphism)
- **Kiri:** Logo Adidas (SVG minimalis monokrom).
- **Tengah:** Navigasi kategori (`Originals`, `Running`, `Football`, `Outdoor`, `Kolaborasi`).
- **Kanan:** Ikon Search, Bag/Cart, dan Profil.

### B. Hero Section (Utama - High Impact)
- **Headline:** "Samba OG"
- **Subheadline:** "Klasik yang Melampaui Generasi."
- **CTA:** Tombol Pill [Beli Sekarang] dan link [Pelajari Selengkapnya].
- **Visual:** Rendering 3D/Foto floating sudut 45 derajat beresolusi tinggi.

### C. Secondary Showcase (Dua Kolom / Bento Grid)
1. **Ultraboost Light:** Fokus pada teknologi bantalan, tagline performa dan visual eksplosif.
2. **Gazelle / Spezial:** Fokus pada streetwear dan varian warna retro.
3. **Predator Elite:** Fokus pada grip, kontrol, dan inovasi lapangan bola.
4. **Adizero Adios Pro:** Fokus pada rekor maraton dan bobot ultra-ringan.

### D. Interactive Feature Showcase (Apple-style Product Exploded View)
- Tampilan interaktif breakdown material sepatu (Primeknit upper, Light BOOST midsole, Continental™ outsole rubber).

### E. Footer Komprehensif
- Sitemap multi-kolom (Kategori, Teknologi, Tentang Adidas, Layanan Pelanggan).
- Copyright, Privacy Policy, Terms of Service, dan Region Selector (Indonesia - ID).

---

## 4. Instruksi Generasi Aset Visual (Image & Video Generation Prompt)
Jika diperlukan aset visual, jalankan generator AI dengan panduan prompt berikut:

* **Hero Shot (Samba OG):**
  > `Ultra-detailed commercial studio shot of Adidas Samba OG white and black leather sneaker, floating on pure white minimalist background, soft shadows, Apple commercial aesthetic, 8k resolution, shot on 85mm lens, studio softbox lighting, hyper-realistic, photorealistic.`

* **Performance Shot (Ultraboost Light):**
  > `Dynamic side-angle product photography of Adidas Ultraboost running shoe in vibrant colorway, floating particles of lightweight foam, pure clean gradient background (#F5F5F7 to #FFFFFF), minimalist luxury advertising style, cinematic rim lighting, 8k, crisp focus.`

* **Exploded View / Tech Breakdown:**
  > `Exploded view visualization of a high-tech running shoe showing layers: breathable mesh upper, carbon plate, responsive foam midsole, and rubber grip outsole separated vertically in mid-air, clean technical studio render, pristine lighting.`

---

## 5. Tech Stack Rekomendasi
- **Framework:** Next.js (App Router) / React 19 + TypeScript.
- **Styling:** Tailwind CSS (dengan utility custom glassmorphism & Apple colors).
- **Animasi:** Framer Motion (fade-in, scroll-driven scaling, smooth stagger transitions).
- **Ikon:** Lucide-React.

---

## 6. Template Komponen Frontend (Kode Siap Pakai)

```tsx
// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#F5F5F7] flex flex-col items-center justify-between pt-24 pb-12 px-4 overflow-hidden">
      <div className="text-center z-10 space-y-2 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900">
          Samba OG
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 font-normal">
          Ikon klasik yang melampaui zaman.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="px-6 py-2 rounded-full bg-[#0071E3] text-white text-sm font-medium hover:bg-[#0077ED] transition duration-200">
            Beli Sekarang
          </button>
          <a href="#details" className="text-[#0071E3] hover:underline text-sm font-medium flex items-center">
            Pelajari Selengkapnya &gt;
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] my-6 flex items-center justify-center">
        {/* Placeholder visual produk Adidas */}
        <img
          src="/images/adidas-samba-hero.png"
          alt="Adidas Samba OG"
          className="object-contain max-h-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="text-xs text-neutral-400 font-light">
        Tersedia dalam berbagai pilihan warna klasik dan kolaborasi eksklusif.
      </div>
    </section>
  );
}

7. Action Plan Eksekusi untuk AI Agent

1.Inisialisasi Project: Setup environment Next.js + Tailwind CSS + Lucide Icons.

2.Asset Pipeline: Buat atau generate placeholder gambar resolusi tinggi untuk masing-masing siluet sepatu Adidas.

3.Build Core Components:

  Navigasi transparan dengan efek backdrop-blur-md.

  Hero Section dengan CTA responsif.

  2x2 Grid section untuk model sekunder (Gazelle, Ultraboost, Predator, Adizero).

  Sticky footer Apple-style dengan tautan lengkap.

4.Optimasi & Micro-interactions: Tambahkan smooth hover transition, image parallax ringan, dan dark/light mode parity.