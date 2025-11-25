# 💰 Sistem Pencatatan Keuangan

---

## 📋 Deskripsi Project

**Sistem Pencatatan Keuangan** adalah aplikasi web modern yang dirancang khusus untuk memudahkan pencatatan dan pelaporan keuangan organisasi. Website ini dibangun dengan fokus pada kemudahan penggunaan, keamanan data, dan transparansi keuangan organisasi.                              

### 📌 Informasi Project

| Aspek | Detail |
|-------|--------|
| **Nama Project** | Sistem Pencatatan Keuangan|
| **Author** | Aziza Firdaus |
| **NPM** | 23552011059 |
| **Kelas** | TIF RP 23 CNS B - Web Programming 1 |
| **Institusi** | Universitas Teknologi Bandung |
| **Versi** | 1.0.0 |
| **Tahun** | 2025 |

---

## ✨ Fitur Utama

### Halaman Utama (Homepage)
- Hero section dengan gradient aesthetic yang memukau
- 6 information cards dengan icon menarik (Laporan, Pemasukan, Pengeluaran, Anggaran, Audit, Kontak)
- Informasi lengkap tentang keuangan organisasi
- Call-to-action button untuk login
- Fully responsive design di semua perangkat

### Halaman Detail Informasi
- Detail komprehensif untuk setiap kategori informasi
- Smooth transition animations
- Navigation yang mudah kembali ke halaman utama
- Content yang clean dan readable
- Format informasi yang terstruktur

### Sistem Autentikasi

##### Login Page
- Form login dengan username & password
- Validasi ketat menggunakan IF statements
- Error messages yang user-friendly dan informatif
- Redirect otomatis ke dashboard setelah login sukses
- Link ke halaman registrasi untuk akun baru

##### Register Page
- Form pendaftaran untuk akun baru
- Validasi lengkap setiap field form
- Password confirmation check
- Deteksi duplicate username & email
- Keamanan password yang terenkripsi

### Dashboard Keuangan
- Welcome message yang personalized dengan nama user
- Statistics cards menampilkan (Total Pemasukan, Total Pengeluaran, Saldo Kas)
- Transactions table dengan status badges berwarna
- Data visualization yang professional
- Logout button untuk keluar dari sistem

### Dark Mode / Light Mode
- Toggle theme button di header aplikasi
- Smooth color transition saat berganti tema
- Persistent preference tersimpan ke LocalStorage
- Full dark mode support di semua halaman aplikasi

### Responsive Design
- Mobile-first approach dalam design
- Support untuk semua screen sizes (320px - 1920px)
- Touch-friendly interface untuk mobile devices
- Grid & Flexbox layout yang adaptive
- Tested di berbagai ukuran layar

---

## 🛠️ Teknologi yang Digunakan

### Frontend Stack
```
📌 HTML5        - Semantic markup & structure
📌 CSS3          - Modern styling dengan:
                   • CSS Grid & Flexbox
                   • Gradients & Animations
                   • CSS Variables untuk theme
                   • Responsive Media Queries
                   • Dark Mode Support
📌 JavaScript    - Vanilla JS (Tanpa Framework)
                   • OOP Classes untuk struktur code
                   • State Management terpusat
                   • Event Handling yang efisien
                   • LocalStorage API untuk persistence
```

---

## 📁 Struktur Project

```
bendahara-keuangan-app/
│
├── 📄 index.html                   # File HTML utama (entry point)
├── 📄 package.json                 # Project metadata & config
├── 📄 README.md                    # Dokumentasi (file ini)
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 src/                         # Source code folder
│   ├── 📁 css/                     # Stylesheet files
│   │   ├── variables.css           # CSS variables & theme
│   │   ├── main.css                # Main styles & layout
│   │   ├── components.css          # Component styles
│   │   ├── animations.css          # Animation library
│   │   └── responsive.css          # Media queries
│   │
│   ├── 📁 js/                      # JavaScript files
│   │   ├── app.js                  # Entry point aplikasi
│   │   ├── state.js                # State management
│   │   ├── auth.js                 # Authentication logic
│   │   ├── navigation.js           # Page navigation
│   │   ├── components.js           # UI components
│   │   │
│   │   └── 📁 utils/               # Utility functions
│   │       ├── constants.js        # Constants & enums
│   │       ├── helpers.js          # Helper functions
│   │       ├── validators.js       # Form validators
│   │       └── storage.js          # LocalStorage manager
│   │
│   └── 📁 data/                    # Data files
│       └── detailData.js           # Detail content data
│
├── 📁 assets/                      # Static assets folder
│   ├── 📁 images/                  # Images & icons
│   │   ├── founders/               # Founder profile photos
│   │   ├── courses/                # Course thumbnails
│   │   └── hero/                   # Hero section images
│   │
│   └── 📁 fonts/                   # Custom fonts
│
└── 📁 docs/                        # Documentation folder
    ├── SETUP.md                    # Setup guide lengkap
    ├── ARCHITECTURE.md             # Architecture docs
    └── COMPONENTS.md               # Components guide
```

---

## 💻 Validasi Form dengan IF Statements

### Alur Login Validation
```javascript
IF username kosong
   → Tampilkan error: "Username tidak boleh kosong"

ELSE IF password kosong
   → Tampilkan error: "Password tidak boleh kosong"

ELSE IF format username invalid
   → Tampilkan error: "Format username tidak valid"

ELSE IF password < 6 karakter
   → Tampilkan error: "Password minimal 6 karakter"

ELSE IF user tidak ditemukan di database
   → Tampilkan error: "Username atau password salah"

ELSE IF password tidak sesuai dengan yang tersimpan
   → Tampilkan error: "Username atau password salah"

ELSE
   → Login BERHASIL
   → Tampilkan success message
   → Simpan session user
   → Redirect ke Dashboard
```

### Alur Register Validation
```javascript
IF username kosong
   → Error: "Username tidak boleh kosong"

ELSE IF username < 3 karakter
   → Error: "Username minimal 3 karakter"

ELSE IF username tidak sesuai format
   → Error: "Username hanya boleh alfanumerik, dash, dan underscore"

ELSE IF email kosong
   → Error: "Email tidak boleh kosong"

ELSE IF email invalid (tidak ada @)
   → Error: "Format email tidak valid"

ELSE IF password kosong
   → Error: "Password tidak boleh kosong"

ELSE IF password < 6 karakter
   → Error: "Password minimal 6 karakter"

ELSE IF password ≠ confirm password
   → Error: "Konfirmasi password tidak cocok"

ELSE IF username sudah terdaftar
   → Error: "Username sudah terdaftar"

ELSE IF email sudah terdaftar
   → Error: "Email sudah terdaftar"

ELSE
   → Register BERHASIL
   → Simpan akun ke database
   → Tampilkan success message
   → Redirect ke Login
```

---

## 🎉 Terima Kasih
Happy coding! 🚀

---

<div align="center">

### Dibuat dengan ❤️ untuk Himatif UTB

**Versi 1.0.0** — 2025

</div>


