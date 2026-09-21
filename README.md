<img width="1920" height="1080" alt="Screenshot 2026-09-18 130707" src="https://github.com/user-attachments/assets/9e5fb345-2fde-4573-b8cb-19bde76fe491" />

﻿# Adidas Pure Concept

> **Pure Adidas Digital E-Commerce Experience**  
> Eksplorasi desain web e-commerce modern orisinal yang memadukan siluet ikonik sepatu Adidas dengan estetika visual minimalis, tipografi presisi, dan interaksi digital mutakhir.

---

## 👨‍💻 Owner & Author

- **Author / Developer**: **Nur Hidayat Surya Pamungkas**
- **Repository**: [adidas-pure-concept](https://github.com/suryapamungkas/adidas-pure-concept)
- **Lisensi**: MIT License

---

## ✨ Fitur Utama

- **✨ Pure Sticky Header & Interactive Mega Menu**
  - Efek *glassmorphism* (`backdrop-filter: blur`) dengan kontras bersih.
  - Dropdown navigasi multi-kolom interaktif untuk kategori: *Originals, Running, Football, Outdoor, Kolaborasi, dan Dukungan*.
  - Transisi instan dan mulus antar kategori (*zero-delay switching* dengan Framer Motion).
- **👟 Hero Staging & Bento Grid Showcase**
  - Tampilan hero fotorealistik *Samba OG* beresolusi tinggi dengan interaksi warna dinamis.
  - Bento grid sekunder untuk model performa: *Ultraboost Light, Predator Elite, Adizero Adios Pro, dan Gazelle Indoor*.
- **🔬 Interactive Exploded View (Tech Breakdown)**
  - Tampilan interaktif lapisan sepatu (*Primeknit Upper*, *Light BOOST™ Midsole*, *Continental™ Rubber Outsole*).
- **🌓 Light & Night Mode Parity**
  - Penggantian tema tampilan (terang dan gelap) dengan persistensi `localStorage`.
- **🛍️ Modal Belanja Interaktif & Size Selector**
  - Drawer pencarian cepat, keranjang belanja (bag), profil akun, dan modal pemilihan ukuran sepatu.
- **♿ Aksesibilitas Penuh (A11y)**
  - Dukungan navigasi keyboard (Escape dismiss, focus-visible outline).
  - ARIA menuitem, aria-expanded, dan dynamic live announcement region.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Modern CSS Layers
- **Animasi & Transisi**: [Framer Motion 13](https://www.framer.com/motion/)
- **Ikon**: [Lucide React](https://lucide.dev/)

---

## 📁 Struktur Direktori

```text
adidas-pure-concept/
├── app/
│   ├── globals.css            # Desain sistem monokromatik, token warna, dan utilitas responsif
│   ├── layout.tsx             # Root layout & metadata website
│   ├── page.tsx               # Halaman beranda interaktif Adidas Pure Concept
│   └── product/
│       └── [slug]/
│           └── page.tsx       # Halaman detail produk (Samba, Ultraboost, dll.)
├── components/
│   ├── Footer.tsx             # Footer direktori multi-kolom komprehensif
│   └── MegaMenu.tsx           # Dropdown Mega Menu interaktif berkinerja tinggi
├── lib/
│   └── products.ts            # Data katalog produk, spesifikasi & varian warna
├── public/
│   └── images/                # Aset gambar visual produk resolusi tinggi
├── LICENSE                    # Lisensi resmi MIT
├── package.json               # Konfigurasi dependensi dan skrip proyek
├── tsconfig.json              # Konfigurasi TypeScript
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Memulai Proyek (Getting Started)

### Prasyarat
- **Node.js**: versi 18.18.0 atau lebih baru (direkomendasikan Node.js 20 LTS ke atas)
- **npm** atau **pnpm / yarn**

### 1. Kloning Repositori
```bash
git clone https://github.com/suryapamungkas/adidas-pure-concept.git
cd adidas-pure-concept
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 4. Membangun untuk Produksi (Production Build)
```bash
npm run build
npm run start
```

---

## 🌐 Panduan Deploy ke GitHub & Hosting

### Inisialisasi Git Lokal
```bash
git init
git add .
git commit -m "feat: initial commit Adidas Pure Concept"
```

### Menghubungkan ke Repositori GitHub
```bash
git branch -M main
git remote add origin https://github.com/suryapamungkas/adidas-pure-concept.git
git push -u origin main
```

### Rekomendasi Deployment (Hosting)
Proyek Next.js ini siap di-deploy secara instan (Zero-Config) ke:
- **[Vercel](https://vercel.com/)**: Hubungkan repositori GitHub Anda ke Vercel untuk otomatisasi CI/CD deploy tercepat.
- **[Netlify](https://www.netlify.com/)** atau **Node.js VPS (PM2 / Docker)**.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT License** — lihat berkas [LICENSE](LICENSE) untuk rincian lengkap.

Hak Cipta © 2026 **Nur Hidayat Surya Pamungkas**. Seluruh hak cipta dilindungi undang-undang.
