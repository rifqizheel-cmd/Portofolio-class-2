# VIBECODING_JOURNAL

**Nama:** Muhammad Rifqi Alhilali

**Kelas:** XI

**Nama Proyek:** Website Portfolio Personal

**AI Assistant:** ChatGPT

---

## 1. Definisi Stack & Arsitektur

### Stack yang Digunakan
- **Environment:** ReactJS + Vite
- **Routing:** react-router-dom v7
- **Styling:** CSS Murni (Vanilla CSS)
- **State Management:** useState, useEffect
- **Data Storage:** localStorage untuk guestbook
- **Icons:** react-icons

### Alasan Pemisahan Komponen

Komponen dipisahkan untuk alasan berikut:

1. **Reusability** - Komponen seperti Navbar dan Footer dapat digunakan ulang di semua halaman
2. **Maintainability** - Kode lebih mudah dipelihara karena setiap file memiliki tanggung jawab tunggal
3. **Readability** - Struktur kode lebih bersih dan mudah dibaca
4. **Separation of Concerns** - Pemisahan logika, tampilan, dan data

### Struktur Folder

```
src/
├── assets/
│   ├── profile.png
│   ├── react.svg
│   └── skill-icons/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── pages/
│   ├── Home.jsx + Home.css
│   ├── About.jsx + About.css
│   ├── Project.jsx + Project.css
│   └── Contact.jsx + Contact.css
├── data/
│   ├── profile.js
│   ├── skills.js
│   └── projects.js
├── App.jsx
└── main.jsx
```

### Routing Architecture

Menggunakan BrowserRouter dengan Routes dan Route:

```jsx
// main.jsx
<BrowserRouter>
  <App />
</BrowserRouter>

// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/project" element={<Project />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

## 2. Strategi Prompting

### Prompt 1 - Inisialisasi Project
```
Buatkan website Portfolio Personal menggunakan ReactJS + Vite dengan:
- react-router-dom untuk routing
- CSS Murni (tanpa Tailwind/Bootstrap)
- 4 halaman: Home, About, Project, Contact
- Data profil, skills, dan projects dari file lokal JS
```

### Prompt 2 - Styling & Design
```
Buatkan UI modern dengan:
- Tema Dark Blue, Sky Blue, White
- Hero section dengan avatar glow effect
- Card-based layout untuk skills dan projects
- Smooth animations dan hover effects
- Responsive design untuk mobile & desktop
```

### Prompt 3 - Contact Form dengan localStorage
```
Implementasikan fitur guestbook dengan:
- Form: Nama, Email, Pesan
- Data tersimpan di localStorage
- Pengguna dapat melihat dan menghapus pesan
- setMessages([...messages, newMessage]) untuk tambah
- messages.filter() untuk hapus
```

### Evaluasi Prompt
Prompt yang diberikan cukup spesifik menghasilkan output yang sesuai. AI membantu dalam struktur dasar namun tetap perlu penyesuaian manual untuk matching dengan design system yang diinginkan.

---

## 3. Log Problem Solving

### Bug 1: Routing Tidak Berfungsi

**Masalah:**
Halaman tidak berubah saat klik link navigasi. Error "Cannot read property 'pathname' of undefined" muncul di console.

**Penyebab:**
BrowserRouter belum dibungkus dengan benar atau Route belum didefinisikan dengan element prop yang benar.

**Solusi:**
Pastikan struktur yang benar:

```jsx
// main.jsx - BrowserRouter harus membungkus App
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// App.jsx - Gunakan element prop, bukan component
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### Bug 2: useLocation Hook Error

**Masalah:**
`useLocation()` used outside of Router context error.

**Penyebab:**
useLocation digunakan di Navbar sebelum Routes didefinisikan.

**Solusi:**
Pastikan Navbar berada di dalam BrowserRouter scope, bukan di luar.

### Bug 3: localStorage Tidak Persisten

**Masalah:**
Data guestbook hilang saat page direfresh.

**Penyebab:**
useEffect untuk load dari localStorage tidak memiliki dependency array yang benar.

**Solusi:**
```jsx
useEffect(() => {
  const saved = localStorage.getItem('guestbook_messages');
  if (saved) {
    setMessages(JSON.parse(saved));
  }
}, []); // Empty dependency - run once on mount
```

### Contoh Prompt untuk Bug Fix
```
Bagaimana cara memperbaiki "Cannot read property 'pathname' of undefined" 
saat menggunakan useLocation di React Router DOM?
```

---

## 4. Refleksi & Kesimpulan

### Pembelajaran Utama

1. **Routing Fundamentals** - Memahami bahwa BrowserRouter harus membungkus seluruh aplikasi dan Route menggunakan `element` prop bukan `component`

2. **Component Architecture** - Pemisahan komponen membuat kode lebih terorganisir dan mudah dipelihara

3. **State Management** - useState dan useEffect penting untuk mengelola data dan side effects

4. **localStorage** - localStorage dapat digunakan untuk persistensi data sederhana di client-side

### Saran untuk Development Future

1. Selalu test routing setelah inisialisasi project
2. Gunakan ESLint untuk menangkap error sejak dini
3. Buat komponen通用的 yang dapat reuse di multiple pages
4. Dokumentasikan struktur project untuk kolaborasi tim

---

*Journal ini dibuat sebagai dokumentasi proses development menggunakan metode Vibecoding dengan bantuan AI Assistant ChatGPT.*
