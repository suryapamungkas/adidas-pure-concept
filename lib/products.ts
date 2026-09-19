export interface ProductColor {
  name: string;
  swatchClass: string;
  image: string;
}

export interface ProductHighlight {
  id: string;
  type: "tech" | "lifestyle" | "performance" | "material";
  tag: string;
  headline: string;
  description: string;
  image?: string;
  stat?: { value: string; label: string };
}

export interface LifestyleCard {
  id: string;
  badge: string;
  title: string;
  image: string;
  description: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  eyebrow: string;
  heroHeadline: string;
  heroAccent: string;
  heroSubheadline: string;
  price: string;
  heroImage: string;
  category: "Originals" | "Running" | "Football" | "Outdoor";
  summary: string;
  colors: ProductColor[];
  sizes: number[];
  quickSpecs: Array<{ label: string; value: string }>;
  highlights: ProductHighlight[];
  design: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    images: string[];
  };
  lifestyleHeading: string;
  lifestyleSubheading: string;
  lifestyleCards: LifestyleCard[];
  techLayers: {
    upper: { title: string; desc: string; stat: string };
    midsole: { title: string; desc: string; stat: string };
    outsole: { title: string; desc: string; stat: string };
  };
  technicalSpecs: Array<{ label: string; value: string }>;
}

export const productsData: Record<string, ProductDetail> = {
  "samba-og": {
    slug: "samba-og",
    name: "Samba OG",
    eyebrow: "ORIGINALS / 1950 — SEKARANG",
    heroHeadline: "Ikon Abadi.",
    heroAccent: "Melampaui generasi.",
    heroSubheadline: "Kini hadir dengan material kulit full-grain premium dan gum sole klasik yang tak lekang oleh zaman.",
    price: "Rp2.200.000",
    heroImage: "/images/adidas-samba-hero.jpg",
    category: "Originals",
    summary: "Diciptakan pertama kali untuk lapangan sepak bola indoor berlapis es pada tahun 1950, Samba OG telah bertransformasi menjadi ikon streetwear global yang tak tertandingi.",
    colors: [
      {
        name: "Cloud White / Core Black",
        swatchClass: "white-black",
        image: "/images/adidas-samba-hero.jpg",
      },
      {
        name: "Core Black / Cloud White",
        swatchClass: "black-white",
        image: "/images/adidas-samba-hero.jpg",
      },
      {
        name: "Cream White / Preloved Ink",
        swatchClass: "cream-gum",
        image: "/images/adidas-samba-hero.jpg",
      },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    quickSpecs: [
      { label: "Bobot", value: "310 gram" },
      { label: "Material", value: "Full-Grain Leather & Suede" },
      { label: "Sol Luar", value: "Low-Profile Gum Rubber" },
      { label: "Gaya", value: "Classic Low-Top" },
    ],
    highlights: [
      {
        id: "hl-1",
        type: "tech",
        tag: "T-TOE HERITAGE",
        headline: "Pelindung Suede T-Toe Asli.",
        description: "Lapisan suede khas berbentuk 'T' di bagian ujung kaki memberikan daya tahan legendaris sekaligus estetika retro yang otentik.",
        image: "/images/adidas-samba-hero.jpg",
        stat: { value: "1950", label: "Tahun debut orisinal" },
      },
      {
        id: "hl-2",
        type: "lifestyle",
        tag: "KENYAMANAN HARIAN",
        headline: "Kenyamanan hingga 16 jam aktif.",
        description: "Insole empuk dengan cetakan anatomis kaki menjaga langkah Anda tetap ringan sepanjang hari dari pagi hingga malam.",
        image: "/images/adidas-gazelle.jpg",
        stat: { value: "16 jam", label: "Rasa nyaman berlanjut" },
      },
      {
        id: "hl-3",
        type: "material",
        tag: "KULIT PREMIUM",
        headline: "Kulit Full-Grain Bersertifikasi LWG.",
        description: "Diproduksi dari penyamakan kulit berkelanjutan yang menghemat air dan mengurangi emisi jejak karbon hingga 30%.",
        image: "/images/adidas-samba-hero.jpg",
      },
      {
        id: "hl-4",
        type: "performance",
        tag: "GUM SOLE TRACTION",
        headline: "Cengkeraman multi-arah pada lantai kota.",
        description: "Pola tapak herringbone orisinal menawarkan traksi presisi di setiap permukaan aspal dan lantai perkotaan.",
        image: "/images/adidas-exploded-view.jpg",
      },
    ],
    design: {
      heading: "Desain yang presisi hingga milimeter terkecil.",
      subheading: "Setiap kurva Samba OG dirancang untuk mempertahankan proporsi ramping ikonik yang menjadikannya kanvas gaya universal.",
      paragraphs: [
        "Samba OG mempertahankan siluet ramping dan profil rendah yang membuatnya begitu mudah dipadukan dengan berbagai gaya busana. Dari denim vintage hingga celana tailoring modern, Samba beradaptasi tanpa kehilangan karakternya.",
        "Dibuat dengan lebih dari 20% material daur ulang pada bagian lining dan detail lidah, menyatukan warisan masa lalu dengan standar keberlanjutan masa kini.",
      ],
      images: [
        "/images/adidas-samba-hero.jpg",
        "/images/adidas-gazelle.jpg",
      ],
    },
    lifestyleHeading: "Tiga warna abadi yang membuat gaya Anda hidup.",
    lifestyleSubheading: "Setiap pasang Samba OG dilengkapi tali cadangan dengan warna senada dan dust bag khusus edisi Originals.",
    lifestyleCards: [
      {
        id: "ls-1",
        badge: "Samba OG Unisex",
        title: "Kultur Terrace & Streetwear",
        image: "/images/adidas-samba-hero.jpg",
        description: "Padukan dengan gaya kasual harian Anda untuk siluet yang bersih dan berkelas.",
      },
      {
        id: "ls-2",
        badge: "Samba Special Edition",
        title: "Detail Foil Emas & Gum Sole",
        image: "/images/adidas-gazelle.jpg",
        description: "Aksen branding foil emas 'SAMBA' di panel samping menambah sentuhan kemewahan vintage.",
      },
    ],
    techLayers: {
      upper: {
        title: "Full-Grain Leather Upper & Suede T-Toe",
        desc: "Kulit lembut yang lentur mengikuti kontur kaki dengan daya tahan tinggi terhadap goresan.",
        stat: "100% Leather Working Group",
      },
      midsole: {
        title: "Low-Profile EVA Cushioning",
        desc: "Bantalan busa ringan yang memberikan peredam benturan tanpa membuat sepatu terasa tebal.",
        stat: "Profil rendah 14mm",
      },
      outsole: {
        title: "Heritage Gum Rubber Cupsole",
        desc: "Sol karet alami tanpa jejak (non-marking) dengan cengkeraman herringbone multi-arah.",
        stat: "Daya rekat maksimal",
      },
    },
    technicalSpecs: [
      { label: "Kategori Produk", value: "Lifestyle / Retro Sneaker" },
      { label: "Material Bagian Atas (Upper)", value: "Kulit Asli (Full-Grain) & Aksen Suede" },
      { label: "Lapisan Dalam (Lining)", value: "Kulit Sintetis & Tekstil Lembut" },
      { label: "Bantalan (Midsole)", value: "Die-cut EVA Cushioning" },
      { label: "Sol Luar (Outsole)", value: "Karet Alami Gum Non-Marking" },
      { label: "Penutup", value: "Tali Sepatu Katun Klasik (Lace Closure)" },
      { label: "Berat Sepatu", value: "310 gram (Ukuran 42)" },
      { label: "Kode Produk Resmi", value: "B75806 / B75807" },
      { label: "Garansi", value: "100% Produk Original adidas Indonesia" },
    ],
  },

  "ultraboost-light": {
    slug: "ultraboost-light",
    name: "Ultraboost Light",
    eyebrow: "RUNNING / PERFORMANCE INNOVATION",
    heroHeadline: "Perkasa berkecepatan tinggi.",
    heroAccent: "30% lebih ringan berkat Light BOOST™.",
    heroSubheadline: "Rasakan pengembalian energi tanpa henti dari langkah pertama hingga garis finis maraton Anda.",
    price: "Rp3.000.000",
    heroImage: "/images/adidas-ultraboost.jpg",
    category: "Running",
    summary: "Ultraboost Light adalah lompatan terbesar dalam sejarah bantalan lari adidas. Menggunakan material Light BOOST dengan jejak karbon terendah yang pernah kami ciptakan.",
    colors: [
      {
        name: "Solar Yellow / Core Black",
        swatchClass: "white-black",
        image: "/images/adidas-ultraboost.jpg",
      },
      {
        name: "Cloud White / Crystal White",
        swatchClass: "black-white",
        image: "/images/adidas-ultraboost.jpg",
      },
      {
        name: "Core Black / Solar Red",
        swatchClass: "cream-gum",
        image: "/images/adidas-ultraboost.jpg",
      },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    quickSpecs: [
      { label: "Bobot", value: "293 gram" },
      { label: "Drop Midsole", value: "10 mm (Tumit 22mm / Ujung 12mm)" },
      { label: "Teknologi", value: "Light BOOST™ + LEP Evolution" },
      { label: "Sol Luar", value: "Continental™ Better Rubber" },
    ],
    highlights: [
      {
        id: "ub-1",
        type: "tech",
        tag: "LIGHT BOOST™ ENGINE",
        headline: "Bantalan 30% lebih ringan.",
        description: "Molekul busa Light BOOST generasi baru memadukan kepadatan ultra-rendah dengan daya pegas tertinggi di kelasnya.",
        image: "/images/adidas-ultraboost.jpg",
        stat: { value: "+4% Energi", label: "Peningkatan daya dorong" },
      },
      {
        id: "ub-2",
        type: "performance",
        tag: "CONTINENTAL™ TRACTION",
        headline: "Cengkeraman juara di aspal basah.",
        description: "Kompon karet Continental™ memastikan daya rekat 32% lebih baik dibandingkan karet biasa pada permukaan hujan.",
        image: "/images/adidas-exploded-view.jpg",
        stat: { value: "32% Grip", label: "Lebih kuat saat basah" },
      },
      {
        id: "ub-3",
        type: "material",
        tag: "PRIMEKNIT+ FORGED",
        headline: "Rajutan presisi tanpa jahitan menekan.",
        description: "Teknologi Primeknit+ beradaptasi dengan pemuaian alami kaki saat berlari jarak jauh untuk mencegah lecet.",
        image: "/images/adidas-ultraboost.jpg",
      },
      {
        id: "ub-4",
        type: "tech",
        tag: "LEP SYSTEM 2.0",
        headline: "Linear Energy Push untuk dorongan ekstra.",
        description: "Struktur penguat pada sol bawah meningkatkan kekakuan lentur kaki depan untuk transisi yang lebih bertenaga.",
        image: "/images/adidas-adizero.jpg",
      },
    ],
    design: {
      heading: "Direkayasa untuk kecepatan dan kenyamanan tanpa batas.",
      subheading: "Setiap gram dihilangkan dengan presisi laboratorium untuk memberi sensasi melayang di setiap kilometer.",
      paragraphs: [
        "Ultraboost Light diuji bersama ribuan pelari dari seluruh dunia untuk menghasilkan kurva sol yang memandu transisi dari tumit ke jari secara mulus dan alami.",
        "Sepatu ini memiliki jejak karbon 10% lebih rendah dibanding generasi sebelumnya, menggunakan benang berkinerja tinggi yang mengandung setidaknya 50% Parley Ocean Plastic.",
      ],
      images: [
        "/images/adidas-ultraboost.jpg",
        "/images/adidas-exploded-view.jpg",
      ],
    },
    lifestyleHeading: "Varian warna performa yang mencuri perhatian.",
    lifestyleSubheading: "Tampil menonjol saat latihan pagi maupun perlombaan maraton resmi.",
    lifestyleCards: [
      {
        id: "ub-ls-1",
        badge: "Daily Mileage",
        title: "Bantalan Maksimal untuk Long Run",
        image: "/images/adidas-ultraboost.jpg",
        description: "Melindungi sendi dan lutut Anda di setiap jarak 5K, 10K, Half Marathon hingga Full Marathon.",
      },
      {
        id: "ub-ls-2",
        badge: "Night Visibility",
        title: "Detail Reflektif 360 Derajat",
        image: "/images/adidas-adizero.jpg",
        description: "Elemen reflektif di bagian heel counter dan 3-stripes menjaga keselamatan Anda saat berlari di malam hari.",
      },
    ],
    techLayers: {
      upper: {
        title: "Primeknit+ Textile Upper",
        desc: "Rajutan berpori mikro dengan sirkulasi udara optimal untuk menjaga kaki tetap sejuk.",
        stat: "50% Parley Ocean Plastic",
      },
      midsole: {
        title: "Light BOOST™ Midsole Foam",
        desc: "Ratusan kapsul energi yang menyerap hentakan dan mengembalikannya sebagai daya dorong.",
        stat: "30% lebih ringan",
      },
      outsole: {
        title: "Continental™ Better Rubber",
        desc: "Karet alam ramah lingkungan dengan daya cengkeram kelas dunia di segala medan jalan.",
        stat: "Daya tahan 1000+ KM",
      },
    },
    technicalSpecs: [
      { label: "Tipe Pelari", value: "Netral / Daily Training & Race" },
      { label: "Bantalan Utama", value: "Light BOOST™ Technology" },
      { label: "Material Upper", value: "adidas Primeknit+ Textile" },
      { label: "Plat Stabilitas", value: "Linear Energy Push (LEP) 2.0" },
      { label: "Sol Luar", value: "Continental™ Natural Rubber" },
      { label: "Drop Midsole", value: "10 mm (Heel: 22mm / Forefoot: 12mm)" },
      { label: "Bobot", value: "293 gram (Ukuran 42)" },
      { label: "Jejak Karbon", value: "9.2 kg CO2e per pasang" },
      { label: "Garansi", value: "100% Produk Original adidas Indonesia" },
    ],
  },

  "predator-elite": {
    slug: "predator-elite",
    name: "Predator Elite",
    eyebrow: "FOOTBALL / ULTIMATE CONTROL",
    heroHeadline: "Akurasi mematikan.",
    heroAccent: "Kini dengan sirip karet Strikeskin.",
    heroSubheadline: "Kontrol tajam saat detik krusial membutuhkan penyelesaian akhir tanpa ampun di depan gawang.",
    price: "Rp4.500.000",
    heroImage: "/images/adidas-predator.jpg",
    category: "Football",
    summary: "Predator Elite adalah simbol supremasi sepak bola modern. Diciptakan khusus untuk pemain yang menentukan hasil pertandingan melalui akurasi umpan dan tembakan berpresisi tinggi.",
    colors: [
      {
        name: "Core Black / Solar Red / White",
        swatchClass: "black-white",
        image: "/images/adidas-predator.jpg",
      },
      {
        name: "Cloud White / Lucid Blue / Solar Orange",
        swatchClass: "white-black",
        image: "/images/adidas-predator.jpg",
      },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    quickSpecs: [
      { label: "Bobot", value: "205 gram" },
      { label: "Tipe Lapangan", value: "Firm Ground (Rumput Alami)" },
      { label: "Teknologi Kontrol", value: "Strikeskin 3D Rubber Fins" },
      { label: "Sol Plat", value: "Controlframe 2.0" },
    ],
    highlights: [
      {
        id: "pred-1",
        type: "tech",
        tag: "STRIKESKIN FINS",
        headline: "Sirip karet 3D di zona tendang.",
        description: "Elemen karet berpola presisi menghasilkan putaran bola (spin) ekstra dan kontak bola yang lengket saat menembak.",
        image: "/images/adidas-predator.jpg",
        stat: { value: "3D Fins", label: "Kontrol spin bola maksimal" },
      },
      {
        id: "pred-2",
        type: "performance",
        tag: "HYBRIDTOUCH 2.0",
        headline: "Sentuhan lembut sintetis suede mikro.",
        description: "Material sintetis mutakhir yang meniru kelembutan kulit kangguru tanpa menyerap air saat lapangan basah.",
        image: "/images/adidas-exploded-view.jpg",
      },
      {
        id: "pred-3",
        type: "tech",
        tag: "CONTROLFRAME 2.0",
        headline: "Akselerasi dan stabilitas 360 derajat.",
        description: "Outsole ultra-ringan dengan konfigurasi pul khusus untuk traksi instan saat berputar dan mengubah arah lari.",
        image: "/images/adidas-predator.jpg",
        stat: { value: "205g", label: "Bobot super ringan" },
      },
      {
        id: "pred-4",
        type: "material",
        tag: "PRIMEKNIT COLLAR",
        headline: "Kuncian kerah elastis yang presisi.",
        description: "Kerah rajutan Primeknit memeluk pergelangan kaki dengan aman untuk rasa menyatu antara kaki dan sepatu.",
        image: "/images/adidas-exploded-view.jpg",
      },
    ],
    design: {
      heading: "DNA Predator yang terlahir kembali lebih ganas.",
      subheading: "Memadukan nostalgia legendaris era Zidane dan Beckham dengan teknologi mutakhir abad ke-21.",
      paragraphs: [
        "Predator Elite dirancang tanpa bobot berlebih. Penempatan strategis sirip Strikeskin memaksimalkan area kontrol tanpa menambah beban sedikit pun.",
        "Pilihan lidah lipat klasik (Fold-Over Tongue) dengan tali strap elastis memberikan area tendang yang bersih dan mulus.",
      ],
      images: [
        "/images/adidas-predator.jpg",
        "/images/adidas-exploded-view.jpg",
      ],
    },
    lifestyleHeading: "Senjata para pengubah jalannya pertandingan.",
    lifestyleSubheading: "Dipakai oleh pemain elit dunia di panggung Liga Champions dan Piala Dunia.",
    lifestyleCards: [
      {
        id: "pred-ls-1",
        badge: "Matchday Elite",
        title: "Performa Rumput Alami (FG)",
        image: "/images/adidas-predator.jpg",
        description: "Dirancang khusus untuk traksi optimal di lapangan rumput alami berstandar internasional.",
      },
      {
        id: "pred-ls-2",
        badge: "Striker Precision",
        title: "Finishing & Curling Shot",
        image: "/images/adidas-exploded-view.jpg",
        description: "Eksekusi tendangan bebas melengkung dan tembakan jarak jauh dengan lengkungan tajam.",
      },
    ],
    techLayers: {
      upper: {
        title: "HybridTouch 2.0 with Strikeskin",
        desc: "Sintetis premium elastis dengan sirip karet 3D untuk daya rekat bola maksimal.",
        stat: "Zona kontrol 100%",
      },
      midsole: {
        title: "Molded Sockliner with Arch Support",
        desc: "Insole anatomi yang mengunci tumit dan mendistribusikan tekanan pul secara merata.",
        stat: "Anti slip inner",
      },
      outsole: {
        title: "Controlframe 2.0 FG Outsole",
        desc: "Plat sol bertenaga tinggi dengan struktur rangka eksternal pengunci tumit.",
        stat: "Traksi akselerasi instan",
      },
    },
    technicalSpecs: [
      { label: "Posisi Pemain", value: "Gelandang Serang / Striker / Playmaker" },
      { label: "Tipe Lapangan", value: "Firm Ground (FG) Lapangan Kering" },
      { label: "Material Utama", value: "HybridTouch 2.0 Synthetic Upper" },
      { label: "Teknologi Grip", value: "Strikeskin 3D Rubber Fins" },
      { label: "Kerah Sepatu", value: "Primeknit Two-Piece Collar" },
      { label: "Konfigurasi Pul", value: "Studs Tri-Star & Conical" },
      { label: "Bobot Sepatu", value: "205 gram (Ukuran 42)" },
      { label: "Kode Produk", value: "IG7724 / IE1802" },
      { label: "Garansi", value: "100% Produk Original adidas Indonesia" },
    ],
  },

  "adizero-adios-pro": {
    slug: "adizero-adios-pro",
    name: "Adizero Adios Pro 4",
    eyebrow: "MARATHON / RECORD BREAKER",
    heroHeadline: "Diciptakan untuk menang.",
    heroAccent: "Pemecah rekor maraton dunia.",
    heroSubheadline: "Ringan luar biasa dengan batang karbon EnergyRods 2.0 dan busa tercepat Lightstrike Pro.",
    price: "Rp4.200.000",
    heroImage: "/images/adidas-adizero.jpg",
    category: "Running",
    summary: "Adizero Adios Pro 4 adalah puncak rekayasa kecepatan lari jarak jauh. Dirancang bersama para atlet pemegang rekor dunia untuk mengubah setiap detik menjadi podium kemenangan.",
    colors: [
      {
        name: "Coral Fusion / White / Black",
        swatchClass: "white-black",
        image: "/images/adidas-adizero.jpg",
      },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    quickSpecs: [
      { label: "Bobot", value: "200 gram" },
      { label: "Drop Midsole", value: "6.5 mm (Heel 39.5mm / Toe 33mm)" },
      { label: "Karbon", value: "Full-Length EnergyRods 2.0" },
      { label: "Busa", value: "Dual-Layer Lightstrike Pro" },
    ],
    highlights: [
      {
        id: "adi-1",
        type: "tech",
        tag: "ENERGYRODS 2.0",
        headline: "Struktur Karbon Meniru Tulang Kaki.",
        description: "Batang karbon terpadu yang mengikuti susunan metatarsal kaki untuk propulsi tak tertandingi tanpa membatasi kelenturan alami.",
        image: "/images/adidas-adizero.jpg",
        stat: { value: "Full Carbon", label: "EnergyRods terintegrasi" },
      },
      {
        id: "adi-2",
        type: "performance",
        tag: "LIGHTSTRIKE PRO",
        headline: "Busa dengan pantulan energi tertinggi.",
        description: "Dua lapisan busa super Lightstrike Pro memberikan bantalan tebal yang mematuhi batas World Athletics (39.5mm).",
        image: "/images/adidas-exploded-view.jpg",
        stat: { value: "39.5mm", label: "Stack height legal WA" },
      },
      {
        id: "adi-3",
        type: "material",
        tag: "LIGHTWEIGHT MESH",
        headline: "Upper seringan udara dengan kuncian presisi.",
        description: "Bahan mesh berbobot mikro yang hampir transparan memastikan sirkulasi udara maksimal selama 42.195 kilometer.",
        image: "/images/adidas-adizero.jpg",
        stat: { value: "200g", label: "Bobot ultra ringan" },
      },
    ],
    design: {
      heading: "Setiap gram dihitung untuk kemenangan.",
      subheading: "Rocker geometry di bagian depan mendorong kaki ke depan secara otomatis di setiap langkah maraton.",
      paragraphs: [
        "Adizero Adios Pro 4 telah memenangkan lebih dari 50% podium World Marathon Majors sejak debutnya.",
        "Traksi Continental™ Rubber di bagian depan dan patch karet ringan di tumit memberikan cengkeraman percaya diri di setiap tikungan tajam.",
      ],
      images: [
        "/images/adidas-adizero.jpg",
        "/images/adidas-exploded-view.jpg",
      ],
    },
    lifestyleHeading: "Dibuat untuk hari ketika rekor pribadi terasa dekat.",
    lifestyleSubheading: "Pilihan utama pelari maraton profesional dan pemburu Personal Best (PB).",
    lifestyleCards: [
      {
        id: "adi-ls-1",
        badge: "Race Day Super Shoe",
        title: "Efisiensi Energi 42.195 KM",
        image: "/images/adidas-adizero.jpg",
        description: "Menjaga otot kaki tetap segar di kilometer 30 ke atas saat perlombaan mencapai puncaknya.",
      },
    ],
    techLayers: {
      upper: {
        title: "Celermesh 2.0 Ultra-Light Upper",
        desc: "Mesh tenun mikro yang sangat ringan dengan struktur penguat internal internal.",
        stat: "Zero water retention",
      },
      midsole: {
        title: "Dual Lightstrike Pro & EnergyRods 2.0",
        desc: "Kombinasi busa peredam getaran dan batang karbon yang menghasilkan transisi secepat kilat.",
        stat: "Daya pegas 85%+",
      },
      outsole: {
        title: "Continental™ Forefoot + Light Textile Rubber",
        desc: "Karet tipis berdaya cengkeram ekstrem di zona dorong utama.",
        stat: "Traksi tikungan tajam",
      },
    },
    technicalSpecs: [
      { label: "Kategori Lomba", value: "Marathon / Half Marathon / Road Racing" },
      { label: "Plat Penggerak", value: "Full-Length Carbon EnergyRods 2.0" },
      { label: "Busa Midsole", value: "Dual Layer Lightstrike Pro" },
      { label: "Material Upper", value: "Celermesh Synthetic Ultra-Light" },
      { label: "Drop Midsole", value: "6.5 mm (Tumit 39.5mm / Depan 33mm)" },
      { label: "Kepatuhan World Athletics", value: "Disetujui Resmi (Stack < 40mm)" },
      { label: "Bobot Sepatu", value: "200 gram (Ukuran 42)" },
      { label: "Kode Produk", value: "JR9832 / JR9834" },
      { label: "Garansi", value: "100% Produk Original adidas Indonesia" },
    ],
  },

  "gazelle-indoor": {
    slug: "gazelle-indoor",
    name: "Gazelle Indoor",
    eyebrow: "ORIGINALS / RETRO REFINED",
    heroHeadline: "Arsip hidup.",
    heroAccent: "Untuk ritme kota modern.",
    heroSubheadline: "Suede beludru premium dengan sol gum transparan yang memperlihatkan keindahan klasik sejak 1968.",
    price: "Rp1.800.000",
    heroImage: "/images/adidas-gazelle.jpg",
    category: "Originals",
    summary: "Lahir sebagai sepatu latihan multifungsi dalam ruangan, Gazelle Indoor kini menjadi simbol ekspresi diri dan mode jalanan yang paling digemari para kreator dunia.",
    colors: [
      {
        name: "Green Suede / Cloud White / Gum",
        swatchClass: "cream-gum",
        image: "/images/adidas-gazelle.jpg",
      },
      {
        name: "Blue Fusion / White / Gum",
        swatchClass: "white-black",
        image: "/images/adidas-gazelle.jpg",
      },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    quickSpecs: [
      { label: "Bobot", value: "320 gram" },
      { label: "Material", value: "Premium Suede Leather" },
      { label: "Sol Luar", value: "Translucent Gum Rubber" },
      { label: "Gaya", value: "Low-Top Terrace Classic" },
    ],
    highlights: [
      {
        id: "gz-1",
        type: "material",
        tag: "PREMIUM SUEDE",
        headline: "Suede bertekstur beludru mewah.",
        description: "Bahan suede pilihan memberikan saturasi warna cerah yang kaya dan sentuhan rasa yang lembut di tangan.",
        image: "/images/adidas-gazelle.jpg",
      },
      {
        id: "gz-2",
        type: "tech",
        tag: "TRANSLUCENT GUM",
        headline: "Sol Gum semi-transparan yang khas.",
        description: "Ciri khas Gazelle Indoor dengan dinding sol karet tembus pandang yang membungkus bagian samping sepatu.",
        image: "/images/adidas-gazelle.jpg",
        stat: { value: "1968", label: "Tahun kelahiran siluet" },
      },
    ],
    design: {
      heading: "Warna yang bersuara di setiap langkah.",
      subheading: "Gazelle Indoor selalu menjadi pilihan bagi mereka yang berani menampilkan warna otentik mereka.",
      paragraphs: [
        "Kombinasi kontras antara 3-Stripes kulit putih bersih dan upper suede warna kaya menciptakan daya tarik visual yang kuat.",
        "Lidah sepatu bertekstur emboss trefoil klasik memberikan detail vintage yang sangat dihargai para kolektor sneakers.",
      ],
      images: [
        "/images/adidas-gazelle.jpg",
        "/images/adidas-samba-hero.jpg",
      ],
    },
    lifestyleHeading: "Varian warna ekspresif untuk melengkapi gaya Anda.",
    lifestyleSubheading: "Sangat fleksibel untuk padu padan gaya kasual, denim, rok, hingga celana pendek.",
    lifestyleCards: [
      {
        id: "gz-ls-1",
        badge: "Vintage Streetwear",
        title: "Estetika Terrace & Britpop",
        image: "/images/adidas-gazelle.jpg",
        description: "Sepatu yang membentuk sejarah musik dan mode jalanan di berbagai dekade.",
      },
    ],
    techLayers: {
      upper: {
        title: "Velvet Suede Leather",
        desc: "Suede lembut berkualitas tinggi dengan aksen kulit sintetis pada 3-stripes dan heel tab.",
        stat: "Suede premium 100%",
      },
      midsole: {
        title: "Cushioned Insole",
        desc: "Alas insole tekstil lembut untuk kenyamanan melangkah sepanjang hari.",
        stat: "Nyaman harian",
      },
      outsole: {
        title: "Translucent Gum Rubber",
        desc: "Sol karet transparan dengan logo Trefoil tertanam di bagian bawah.",
        stat: "Non-slip grip",
      },
    },
    technicalSpecs: [
      { label: "Kategori Produk", value: "Lifestyle / Street Culture" },
      { label: "Material Atas", value: "Suede Kulit Asli & Synthetic Leather" },
      { label: "Sol Luar", value: "Translucent Gum Rubber Cupsole" },
      { label: "Lidah Sepatu", value: "Molded Ecotex Tongue with Trefoil Logo" },
      { label: "Penutup", value: "Lace Closure" },
      { label: "Bobot", value: "320 gram (Ukuran 42)" },
      { label: "Kode Produk", value: "H06122 / IE7002" },
      { label: "Garansi", value: "100% Produk Original adidas Indonesia" },
    ],
  },
};

export interface FeaturedProduct {
  name: string;
  slug: string;
  eyebrow: string;
  description: string;
  price: string;
  image: string;
  tone: "citrus" | "cloud" | "ink" | "rose";
}

export const featuredProducts: FeaturedProduct[] = [
  {
    name: productsData["ultraboost-light"].name,
    slug: "/product/ultraboost-light",
    eyebrow: "ENERGY RETURN",
    description: "Respons tanpa jeda, dari langkah pertama hingga garis akhir.",
    price: productsData["ultraboost-light"].price,
    image: productsData["ultraboost-light"].heroImage,
    tone: "citrus",
  },
  {
    name: productsData["gazelle-indoor"].name,
    slug: "/product/gazelle-indoor",
    eyebrow: "RETRO, REFINED",
    description: "Arsip yang kembali hidup untuk setiap ritme kota.",
    price: productsData["gazelle-indoor"].price,
    image: productsData["gazelle-indoor"].heroImage,
    tone: "cloud",
  },
  {
    name: productsData["predator-elite"].name,
    slug: "/product/predator-elite",
    eyebrow: "CONTROL REDEFINED",
    description: "Kontrol tajam saat momen membutuhkan lebih dari sekadar cepat.",
    price: productsData["predator-elite"].price,
    image: productsData["predator-elite"].heroImage,
    tone: "ink",
  },
  {
    name: productsData["adizero-adios-pro"].name,
    slug: "/product/adizero-adios-pro",
    eyebrow: "MADE TO RACE",
    description: "Ringan luar biasa. Dibangun untuk hari ketika rekor terasa dekat.",
    price: productsData["adizero-adios-pro"].price,
    image: productsData["adizero-adios-pro"].heroImage,
    tone: "rose",
  },
];

export function getAllProductSlugs(): string[] {
  return Object.keys(productsData);
}

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return productsData[slug];
}

