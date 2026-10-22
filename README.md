# Danau Toba

Website statis berbahasa Indonesia untuk memperkenalkan keindahan Danau Toba, budaya Batak, galeri, artikel, dan informasi kontak.

## Menjalankan proyek

Tidak diperlukan proses build atau instalasi dependensi. Buka `index.html` langsung di browser, atau jalankan server lokal dari folder proyek, misalnya dengan ekstensi Live Server di VS Code.

## Struktur proyek

- `index.html` — struktur halaman dan konten.
- `style/style.css` — gaya utama, tata letak, dan animasi.
- `style/responsive.css` — penyesuaian tampilan untuk perangkat kecil.
- `javascript/script.js` — interaksi menu navigasi, tombol hamburger, dan status navbar saat halaman digulir.
- `assets/` — gambar lokal yang digunakan situs.

## Navigasi mobile dan animasi

- Tombol hamburger membuka dan menutup menu navigasi pada layar berukuran 768 px atau lebih kecil. Menu dapat ditutup dengan memilih tautan atau menekan tombol Escape. Status tombol diumumkan melalui atribut aksesibilitas `aria-expanded` dan `aria-label`.
- Animasi CSS mencakup kemunculan konten hero, gerakan panah berulang pada tombol ajakan, gerakan mengambang lembut pada gambar tentang, serta transisi buka/tutup menu.
- Pengaturan `prefers-reduced-motion` menghentikan animasi bagi pengunjung yang memilih pengurangan gerakan pada sistemnya.

## Teknologi

- HTML5, CSS3, dan JavaScript tanpa framework.
- Remix Icon dan Google Fonts dimuat dari CDN.
