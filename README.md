# Node.js Express Starter Project

Ini adalah template proyek Node.js menggunakan Express dengan pengaturan sederhana dan beberapa library populer untuk mempermudah pengembangan.

## Fitur
- **Express**: Framework backend minimalis.
- **Morgan**: Logging HTTP request untuk debugging.
- **Cors**: Mengatur akses lintas origin.
- **Colors**: Memberikan warna pada log di console.
- **Nodemon**: Otomatis me-restart server saat ada perubahan kode.
- **Prettier**: Format kode secara konsisten.
- **dotenv**: Mengelola variabel lingkungan secara aman.

---

## Instalasi

1. Clone repository ini:

   ```bash
   git clone https://github.com/salak96/Restoran_app_express
   ```

2. Pindahkan ke direktori proyek:

   ```bash
   cd Restoran_app_express
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Mulai server:

   ```bash
   npm start
   ```

---

## Struktur Direktori Proyek

```plaintext
reservasi-restoran/
├── config/             # Konfigurasi database, dll.
│   └── db.js
├── controllers/        # Logika bisnis aplikasi
│   ├── authController.js
│   ├── restaurantController.js
│   └── userController.js
├── models/             # Model database (ORM)
│   ├── User.js
│   ├── Restaurant.js
│   └── Reservation.js
├── middleware/         # Middleware (autentikasi, dll.)
│   └── authMiddleware.js
├── routes/             # Routing API
│   ├── authRoutes.js
│   ├── restaurantRoutes.js
│   └── userRoutes.js
├── utils/              # Fungsi-fungsi utilitas
│   └── errorResponse.js
├── .env                # Variabel lingkungan
├── server.js           # Entry point aplikasi
└── package.json
```

---

## Penggunaan

1. Jalankan perintah `npm start` untuk menjalankan server Express.
2. Akses `http://localhost:3000` di browser untuk melihat hasil.

---

## Catatan Tambahan

- Jika ingin menjalankan proyek dalam mode pengembangan dengan Nodemon, gunakan perintah:
  ```bash
  npm run dev
  ```
- Pastikan file `.env` berisi konfigurasi berikut:
  ```plaintext
  PORT=3000
  NODE_ENV=development
  ```

---

## Terima Kasih

Terima kasih telah menggunakan template ini. Jangan ragu untuk memberikan saran atau kontribusi di repository ini.

