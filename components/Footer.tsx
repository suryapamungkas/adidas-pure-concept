"use client";

import React from "react";
import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Footnotes / Disclaimers (Apple Style) */}
        <div className="footer-disclaimers">
          <p>
            1. Pengembalian gratis 30 hari berlaku untuk produk dalam kondisi baru dengan tag dan kemasan asli.
          </p>
          <p>
            Fitur dan ketersediaan koleksi dapat berubah sewaktu-waktu. Beberapa siluet edisi terbatas mungkin hanya tersedia melalui sistem undian aplikasi adiClub resmi di wilayah tertentu.
          </p>
        </div>

        {/* Multi-Column Apple Directory */}
        <div className="footer-directory">
          <div className="footer-col">
            <h3>Belanja dan Belajar</h3>
            <ul>
              <li><Link href="/product/samba-og">Samba OG</Link></li>
              <li><Link href="/product/ultraboost-light">Ultraboost Light</Link></li>
              <li><Link href="/product/predator-elite">Predator Elite</Link></li>
              <li><Link href="/product/adizero-adios-pro">Adizero Adios Pro</Link></li>
              <li><Link href="/product/gazelle-indoor">Gazelle Indoor</Link></li>
              <li><Link href="/#outdoor">Koleksi Terrex Outdoor</Link></li>
              <li><Link href="/#collabs">Kolaborasi Eksklusif</Link></li>
            </ul>

            <h3 className="mt-4">Dompet & Pembayaran</h3>
            <ul>
              <li><Link href="/#privacy">Metode Pembayaran Resmi</Link></li>
              <li><Link href="/#privacy">Cicilan 0% & Promo Bank</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Akun & Member</h3>
            <ul>
              <li><Link href="/#collabs">Kelola Akun adiClub</Link></li>
              <li><Link href="/#privacy">Status Pesanan & Pengiriman</Link></li>
              <li><Link href="/#collabs">Poin & Hadiah Member</Link></li>
            </ul>

            <h3 className="mt-4">Inovasi Performa</h3>
            <ul>
              <li><Link href="/product/ultraboost-light">Light BOOST™ Cushioning</Link></li>
              <li><Link href="/product/predator-elite">Strikeskin 3D Fins</Link></li>
              <li><Link href="/product/adizero-adios-pro">EnergyRods 2.0 Carbon</Link></li>
              <li><Link href="/product/samba-og">Primeknit & Suede Craft</Link></li>
              <li><Link href="/product/ultraboost-light">Continental™ Traction</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Untuk Bisnis</h3>
            <ul>
              <li><Link href="/#top">adidas untuk Korporasi & Bisnis</Link></li>
              <li><Link href="/#top">Pemesanan Tim & Grosir</Link></li>
            </ul>

            <h3 className="mt-4">Untuk Komunitas & Olahraga</h3>
            <ul>
              <li><Link href="/#collabs">adidas Runners Community</Link></li>
              <li><Link href="/#collabs">Akademi Sepak Bola & Grassroots</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Nilai-nilai Keberlanjutan</h3>
            <ul>
              <li><Link href="/#privacy">Aksesibilitas</Link></li>
              <li><Link href="/#outdoor">Inisiatif Parley Ocean Plastic</Link></li>
              <li><Link href="/#outdoor">Material Daur Ulang Primegreen</Link></li>
              <li><Link href="/#privacy">Privasi dan Keamanan Data</Link></li>
              <li><Link href="/#privacy">Rantai Pasokan Beretika</Link></li>
            </ul>

            <h3 className="mt-4">Tentang Kami</h3>
            <ul>
              <li><Link href="/#top">Tentang Nur Hidayat Surya Pamungkas</Link></li>
              <li><Link href="/#top">Ruang Berita & Press Release</Link></li>
              <li><Link href="/#top">Karier & Budaya Perusahaan</Link></li>
              <li><Link href="/#top">Hubungan Investor</Link></li>
              <li><Link href="/#top">Hubungi Layanan Pelanggan</Link></li>
            </ul>
          </div>
        </div>

        {/* Store Locator Link */}
        <div className="footer-retailer">
          <p>
            <Link href="/#top" className="text-link">Temukan toko resmi atau retailer mitra</Link> di dekat Anda. Atau hubungi 0800-1-ADIDAS (bebas pulsa).
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-legal-bar">
          <div className="footer-copyright-text">
            Hak cipta © 2026 Adidas Pure Concept by Nur Hidayat Surya Pamungkas. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="footer-legal-links">
            <Link href="/#privacy">Kebijakan Privasi</Link>
            <span className="legal-divider">|</span>
            <Link href="/#privacy">Ketentuan Penggunaan</Link>
            <span className="legal-divider">|</span>
            <Link href="/#privacy">Legal</Link>
            <span className="legal-divider">|</span>
            <Link href="/#privacy">Peta Situs</Link>
          </div>
          <div className="footer-region">
            <button type="button" className="region-btn">
              Indonesia
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
