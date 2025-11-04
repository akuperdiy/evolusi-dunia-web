# 🚀 Panduan Upload ke GitHub & Setup GitHub Pages

## Langkah 1: Buat Repository Baru di GitHub

1. Login ke [GitHub.com](https://github.com)
2. Klik tombol **"+"** di pojok kanan atas → pilih **"New repository"**
3. Isi detail repository:
   - **Repository name**: `evolusi-dunia-web` (atau nama lain yang Anda suka)
   - **Description**: "Timeline interaktif evolusi teknologi web dari 1989-2017"
   - Pilih **Public** (agar GitHub Pages gratis)
   - **Jangan** centang "Initialize with README" (karena kita sudah punya file)
4. Klik **"Create repository"**

## Langkah 2: Upload File ke GitHub

### Cara 1: Menggunakan GitHub Desktop (Paling Mudah)

1. Download dan install [GitHub Desktop](https://desktop.github.com/)
2. Buka GitHub Desktop → **File** → **Add Local Repository**
3. Klik **"Choose"** dan pilih folder `Project Kelompok Website`
4. Jika folder belum ada di Git, klik **"Create a Repository"**
5. Isi commit message: `"Initial commit: Website timeline sejarah teknologi web"`
6. Klik **"Commit to main"**
7. Klik **"Publish repository"** → pilih repository yang sudah dibuat
8. Tunggu hingga upload selesai

### Cara 2: Menggunakan Command Line (Git)

Buka terminal/command prompt di folder `Project Kelompok Website`, lalu jalankan:

```bash
# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Buat commit pertama
git commit -m "Initial commit: Website timeline sejarah teknologi web"

# Ganti USERNAME dan REPO-NAME dengan yang sesuai
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Upload ke GitHub
git push -u origin main
```

### Cara 3: Upload Manual (Tanpa Git)

1. Buka repository yang baru dibuat di GitHub
2. Klik **"uploading an existing file"**
3. Drag & drop semua file dari folder `Project Kelompok Website` ke halaman GitHub
4. Klik **"Commit changes"**

## Langkah 3: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab **Settings** (di bagian atas repository)
3. Scroll ke bawah, cari bagian **"Pages"** di sidebar kiri
4. Di bagian **"Source"**, pilih:
   - Branch: **main**
   - Folder: **/ (root)**
5. Klik **Save**
6. Tunggu 1-2 menit, GitHub akan membuat website Anda

## Langkah 4: Akses Website

Website Anda akan tersedia di:
```
https://USERNAME.github.io/REPO-NAME/
```

Contoh:
- Jika username: `ferdiansyah` dan repo: `evolusi-dunia-web`
- URL: `https://ferdiansyah.github.io/evolusi-dunia-web/`

## ✅ Checklist

- [ ] Repository dibuat di GitHub
- [ ] Semua file sudah di-upload
- [ ] GitHub Pages sudah diaktifkan
- [ ] Website bisa diakses via URL GitHub Pages
- [ ] Landing page (`index.html`) terbuka dengan benar
- [ ] Link ke timeline bekerja
- [ ] Semua halaman detail bisa dibuka

## 🔧 Troubleshooting

**Website tidak muncul setelah 5 menit?**
- Pastikan branch `main` sudah ada dan berisi file
- Pastikan folder yang dipilih di Settings adalah `/ (root)`
- Coba refresh halaman Settings

**File tidak ter-upload?**
- Pastikan semua file ada di folder yang benar
- Pastikan `.gitignore` tidak memblokir file penting
- Coba upload ulang dengan menghapus dan menambah file lagi

**Link tidak bekerja?**
- Pastikan semua file HTML ada di root folder
- Pastikan path relatif benar (misalnya `timeline.html`, bukan `/timeline.html`)
- Pastikan file `main.css` ada di `assets/styles/main.css`

## 📝 Catatan Penting

- Website akan otomatis update setiap kali Anda push perubahan ke GitHub
- Perubahan biasanya muncul dalam 1-2 menit
- GitHub Pages gratis untuk repository public
- URL website akan selalu: `https://USERNAME.github.io/REPO-NAME/`

---

**Selamat! Website Anda sekarang bisa di-demo langsung! 🎉**

