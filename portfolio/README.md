# Adam Juliansyah - Portfolio

Website portfolio pribadi untuk menampilkan profil, pengalaman kerja, dan proyek Adam Juliansyah. Dibangun menggunakan React (Vite) dengan struktur konten yang mudah diperbarui melalui satu sumber data.

## Tech stack
- React 19 + Vite 7
- CSS modular dengan tema gelap responsif
- Deploy target Netlify

## Prasyarat
- Node.js >= 22.12 atau >= 20.19 (dibutuhkan agar Vite bekerja tanpa peringatan)
- npm 10+

## Menjalankan secara lokal
```bash
cd portfolio
npm install
npm run dev
```
Server dev Vite akan berjalan di http://localhost:5173.

## Build untuk produksi
```bash
npm run build
```
Folder keluaran berada di `dist/`. Untuk pratinjau versi produksi jalankan `npm run preview` setelah build.

## Mengubah konten
- Data utama (bio, skill, pengalaman, proyek, pendidikan) ada di `src/data/profile.js`.
- Ganti foto profil di `public/profile.jpg` (ratio portrait disarankan).
- Dokumen CV yang diunduh dari tombol "Unduh CV" berada di `public/CV_adam-juliansyah.pdf`.

Perubahan teks di data file akan otomatis muncul setelah server dev di-refresh.

## Deploy ke Netlify
1. Jalankan `npm run build` atau gunakan build server Netlify dengan command `npm run build`.
2. Set directory publik ke `dist`.
3. Pastikan Node versi build minimal 22.12 (atau 20.19) agar proses tidak gagal.

Site siap dipublikasikan ke https://adamjuliansyah.netlify.app atau domain lain yang diinginkan.
