export const portfolioData = {
  personal: {
    name: "Hanif Wisanggeni P",
    nickname: "Hanif",
    tagline: "Backend Developer & Go Specialist",
    shortBio: "Lulusan S1 Teknik Informatika yang berfokus pada backend development, arsitektur microservices, RESTful API berperforma tinggi, dan optimasi database menggunakan ekosistem Go (Golang).",
    location: "Jakarta, Indonesia",
    status: "🟢 Terbuka untuk Kolaborasi & Proyek",
    email: "hanifwisanggeniprabowo6@gmail.com",
    emailUrl: "mailto:hanifwisanggeniprabowo6@gmail.com",
    instagramUrl: "https://instagram.com/hanif.wp_",
    githubUrl: "https://github.com/Redsmicraft03",
    avatar: "/images/aku.jpg",
    stats: [
      { label: "Spesialisasi Utama", value: "Go (Golang)" },
      { label: "Pendidikan", value: "S1 Teknik Informatika" },
      { label: "Status Karir", value: "Lulusan S1 (Siap Kerja)" },
      { label: "Fokus Proyek", value: "High-Performance API" },
    ]
  },
  
  about: {
    title: "Tentang Aku & Filosofi Coding",
    paragraphs: [
      "Halo! Saya Hanif, seorang pengembang perangkat lunak berorientasi sisi server (backend) yang senang merancang arsitektur sistem yang efisien, terstruktur, dan tahan uji.",
      "Saat ini saya mendedikasikan waktu untuk menguasai bahasa pemrograman Go (Golang) karena kecepatannya yang luar biasa, konkurensi (goroutines), serta ekosistemnya yang kokoh untuk sistem modern dan microservices.",
      "Saya percaya bahwa kode yang baik bukan hanya sekadar berjalan, namun juga bersih (Clean Code), mudah dirawat, terdokumentasi rapi, dan siap melayani lonjakan lalu lintas data."
    ],
    education: {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Indraprasta PGRI (UNINDRA)",
      period: "2022 — 2026 (Lulus)",
      description: "Menyelesaikan studi sarjana dengan pendalaman pada ilmu komputer, algoritma pemrograman, struktur data, rekayasa perangkat lunak, dan arsitektur basis data."
    },
    principles: [
      {
        title: "Clean Architecture",
        desc: "Pemisahan concerns yang jelas antara handler, service logic, repository, dan data models."
      },
      {
        title: "High Performance",
        desc: "Pemanfaatan concurrency, routing hemat memori, dan caching untuk latensi serendah mungkin."
      },
      {
        title: "Robust Database",
        desc: "Perancangan skema relasional terstruktur dengan indexing tepat dan ORM/Query builder efisien."
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "Backend & Core",
        items: [
          { name: "Go (Golang)", level: "Advanced", icon: "Code2", desc: "Goroutines, Channels, Standard Libs" },
          { name: "Fiber Framework", level: "Advanced", icon: "Zap", desc: "Fast HTTP routing & middleware" },
          { name: "GORM", level: "Intermediate", icon: "Database", desc: "ORM & relational data modeling" },
          { name: "RESTful API", level: "Advanced", icon: "Network", desc: "JWT Auth, Validation, Clean JSON" },
        ]
      },
      {
        name: "Database & Storage",
        items: [
          { name: "PostgreSQL", level: "Intermediate", icon: "Database", desc: "Relational schema & SQL queries" },
          { name: "MySQL", level: "Intermediate", icon: "HardDrive", desc: "Normalized schemas & indexing" },
          { name: "SQLite", level: "Intermediate", icon: "Server", desc: "Local development & embedded storage" },
        ]
      },
      {
        name: "Tools & DevOps",
        items: [
          { name: "Git & GitHub", level: "Intermediate", icon: "GitBranch", desc: "Version control & collaboration" },
          { name: "Postman", level: "Advanced", icon: "Send", desc: "API testing, docs, & mocking" },
          { name: "Linux / CLI", level: "Intermediate", icon: "Terminal", desc: "Bash scripting & server deployment" },
          { name: "Vercel / Cloud", level: "Intermediate", icon: "Cloud", desc: "Deployment & serverless pipelines" },
        ]
      },
      {
        name: "Frontend Basics",
        items: [
          { name: "React.js", level: "Intermediate", icon: "Cpu", desc: "Component-driven UI & hooks" },
          { name: "Tailwind CSS", level: "Intermediate", icon: "Palette", desc: "Utility-first modern styling" },
          { name: "HTML5 / JavaScript", level: "Advanced", icon: "Globe", desc: "Modern DOM manipulation" },
        ]
      }
    ]
  },

  projects: [
    {
      id: "perpustakaan-gratis",
      title: "Perpustakaan Gratis",
      category: "Fullstack / Backend",
      featured: true,
      image: "/images/perpus.png",
      tagline: "Eksplorasi Dunia Tanpa Batas — Platform Baca Buku Digital",
      description: "Platform perpustakaan digital interaktif untuk menemukan dan membaca ribuan koleksi buku, novel, dan bacaan menarik secara gratis dengan fitur pencarian instan, antarmuka modern, dan katalog terorganisir.",
      techStack: ["React.js", "Tailwind CSS", "RESTful API", "Cloudflare", "Responsive UI"],
      liveUrl: "https://perpustakaan.akio-server.my.id/",
      githubUrl: "https://github.com/Redsmicraft03",
      highlights: [
        "Katalog ribuan buku digital dengan fitur pencarian cepat berdasarkan judul, penulis, atau topik.",
        "Dukungan mode tampilan Gelap (Dark Mode) dan Terang (Light Mode) untuk kenyamanan membaca.",
        "Tampilan antarmuka modern, clean, dan sepenuhnya responsif di semua ukuran layar.",
        "Sistem penjelajahan buku terpopuler dan visualisasi rating pembaca yang informatif."
      ]
    },
    {
      id: "backend-weather",
      title: "Weather Info CLI & API Service",
      category: "CLI / Utility",
      featured: true,
      image: "/images/proyek2.png",
      tagline: "High-Efficiency Weather Forecast Consumer",
      description: "Aplikasi cuaca utilitas bergaya CLI & modul backend yang mengonsumsi OpenWeatherMap API untuk memberikan data cuaca real-time dengan parsing JSON cepat dan penanganan error yang andal.",
      techStack: ["Go (Golang)", "OpenWeatherMap API", "CLI", "JSON Parser"],
      liveUrl: "https://github.com/Redsmicraft03/backend-weather",
      githubUrl: "https://github.com/Redsmicraft03/backend-weather",
      highlights: [
        "Parsing data JSON multi-layer secara efisien menggunakan custom struct Go.",
        "Penanganan error network dan response caching sederhana.",
        "Desain antarmuka terminal interaktif yang bersih dan mudah digunakan."
      ]
    },
    {
      id: "encora",
      title: "ENCORA // Crypto Suite",
      category: "Fullstack / Backend",
      featured: true,
      image: "/images/encora.png",
      tagline: "ChaCha20-Poly1305 Cryptographic Suite & Go Backend",
      description: "Platform kriptografi berkemampuan tinggi dengan implementasi algoritma ChaCha20-Poly1305 pada backend Go. Menghadirkan antarmuka Neo-Brutalism, studio enkripsi & dekripsi berkas, terminal log live, dan 24-Hour Vault aman.",
      techStack: ["Go (Golang)", "ChaCha20-Poly1305", "RESTful API", "React.js", "Neo-Brutalism"],
      liveUrl: "https://encora.akio-server.my.id/",
      githubUrl: "https://github.com/Redsmicraft03",
      highlights: [
        "Mesin enkripsi dan dekripsi berkas performa tinggi menggunakan algoritma ChaCha20-Poly1305 di backend Go.",
        "Pemrosesan berkas cepat hingga 10MB per file dengan kemampuan batch hingga 5 file sekaligus dan unduh ZIP.",
        "Terminal log live real-time yang memantau interaksi dan status pemrosesan backend Go secara transparan.",
        "Fitur 24-Hour Vault terisolasi dengan fokus ketat pada privasi pengguna (Client-Side Privacy-First)."
      ]
    }
  ],

  socials: [
    {
      name: "Email",
      handle: "hanifwisanggeniprabowo6@gmail.com",
      url: "mailto:hanifwisanggeniprabowo6@gmail.com",
      icon: "Mail",
      color: "#D38A3A"
    },
    {
      name: "Instagram",
      handle: "@hanif.wp_",
      url: "https://instagram.com/hanif.wp_",
      icon: "Instagram",
      color: "#E1306C"
    },
    {
      name: "GitHub",
      handle: "Redsmicraft03",
      url: "https://github.com/Redsmicraft03",
      icon: "Github",
      color: "#333"
    }
  ],

  bearQuotes: [
    { text: "Seperti beruang yang tenang namun kuat, kode backend harus stabil dan berdaya tahan tinggi.", mood: "Tenang & Fokus ☕" },
    { text: "Simplicity is prerequisite for reliability. — Edsger W. Dijkstra", mood: "Filosofis 🐻" },
    { text: "Secangkir kopi hangat, terminal terbuka, dan Go routines siap dieksekusi.", mood: "Produktif 💻" },
    { text: "Menulis kode yang bersih hari ini adalah hadiah untuk diri kita di masa depan.", mood: "Semangat 🍯" }
  ]
};
