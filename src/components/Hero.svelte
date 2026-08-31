<script>
  import { Terminal, ArrowRight, Mail, Database, Sparkles, Code2, Server, Cpu } from '@lucide/svelte';
  import Icons from './Icons.svelte';
  import { portfolioData } from '../data/portfolioData';

  const { personal } = portfolioData;
</script>

<section id="hero" class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <!-- Status Pill Badge -->
    <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6 text-gray-800 dark:text-gray-100">
      <span class="w-2.5 h-2.5 rounded-full bg-[#f97316] animate-ping"></span>
      <span>{personal.status}</span>
    </div>

    <!-- Main Headline -->
    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
      Backend Tangguh,{' '}
      <span class="inline-block px-4 sm:px-6 py-1 sm:py-2 rounded-2xl bg-[#ec4899] text-white border-3 border-black/75 dark:border-white/80 shadow-soft rotate-[-1deg]">
        Arsitektur Bersih
      </span>
    </h1>

    <!-- Subtitle -->
    <p class="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
      Saya merancang sistem sisi server (backend) berperforma tinggi menggunakan ekosistem <strong>Go (Golang)</strong>, <strong>Fiber</strong>, dan database relasional modern.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center font-sans">
      <a
        href="#projects"
        class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold text-sm sm:text-base border-3 border-black/75 dark:border-white/80 shadow-soft hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        <span>Lihat Proyek</span>
        <ArrowRight class="w-4 h-4 stroke-[3]" />
      </a>

      <a
        href={personal.emailUrl}
        class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-[#1a1921] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-gray-800 dark:text-white font-extrabold text-sm sm:text-base border-3 border-black/75 dark:border-white/80 shadow-soft hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        <Mail class="w-4 h-4 text-[#f97316]" />
        <span>Kirim Email</span>
      </a>

      <a
        href={personal.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        class="w-12 h-12 rounded-xl bg-white dark:bg-[#1a1921] text-gray-800 dark:text-white border-3 border-black/75 dark:border-white/80 shadow-soft hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center shrink-0"
      >
        <Icons name="github" class="w-5 h-5" />
      </a>
    </div>

    <!-- Designer Portrait / Avatar with soft brutalism floating badge -->
    <div class="mt-12 flex justify-center">
      <div class="relative">
        <div class="w-40 h-40 sm:w-48 sm:h-48 border-3 border-black/75 dark:border-white/80 shadow-soft rounded-full overflow-hidden bg-[#fbbf24] p-1">
          <img
            src={personal.avatar}
            alt={personal.name}
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        
        <!-- Floating badge 1 (Purple - Go) -->
        <div class="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-[#8b5cf6] text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm flex items-center justify-center text-xl animate-bounce">
          🐹
        </div>

        <!-- Floating badge 2 (Cyan - Tech) -->
        <div class="absolute -top-2 -left-2 px-3 py-1 rounded-full bg-[#06b6d4] text-white font-bold font-mono text-[11px] border-2 border-black/75 dark:border-white/80 shadow-soft-sm">
          S1 INFORMATIKA
        </div>
      </div>
    </div>

    <!-- Quick Stats Grid (Soft Brutalism Pills) -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
      {#each personal.stats as stat, i}
        <div class="p-4 rounded-2xl bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-left hover:-translate-y-1 transition-all">
          <p class="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 font-sans">
            {stat.label}
          </p>
          <p class="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white font-display">
            {stat.value}
          </p>
        </div>
      {/each}
    </div>

    <!-- Soft Brutalism Browser / Dashboard Mockup Preview Window -->
    <div class="mt-14 max-w-5xl mx-auto text-left">
      <div class="bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft-md rounded-3xl overflow-hidden">
        
        <!-- Window Titlebar -->
        <div class="px-6 py-4 border-b-2 border-black/30 dark:border-white/20 bg-gray-50 dark:bg-zinc-800 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-3.5 h-3.5 rounded-full bg-red-500 border border-black/40"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-black/40"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-green-500 border border-black/40"></div>
          </div>
          <div class="px-4 py-1 rounded-full bg-white dark:bg-zinc-900 border border-black/20 dark:border-white/20 font-mono text-xs font-bold text-gray-700 dark:text-gray-300">
            hanif.runtime.go // server:8080
          </div>
          <div class="flex gap-2">
            <div class="w-6 h-2.5 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
            <div class="w-3 h-2.5 rounded-full bg-gray-300 dark:bg-zinc-600"></div>
          </div>
        </div>

        <!-- Window Body (Terminal & Architecture Highlights) -->
        <div class="p-6 sm:p-8 bg-[#0f0e17] text-white font-mono text-xs sm:text-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div class="md:col-span-7 space-y-2">
            <div class="flex items-center gap-2 text-emerald-400 font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>$ go run cmd/server/main.go</span>
            </div>
            <p class="text-zinc-400 font-medium">&gt; Initializing Fiber Engine with Clean Architecture...</p>
            <p class="text-[#fbbf24] font-semibold">&gt; PostgreSQL Connection Pool: Active (Max 50 Conns)</p>
            <p class="text-[#38bdf8] font-semibold">&gt; Route registered: POST /api/v1/auth/login [JWT Ready]</p>
            <p class="text-[#ec4899] font-semibold">&gt; Cryptographic Module ChaCha20-Poly1305 [LOADED]</p>
            <p class="text-emerald-400 font-bold mt-2">&gt; [OK] Server listening at http://localhost:8080 ⚡</p>
          </div>

          <div class="md:col-span-5 bg-zinc-900/90 rounded-2xl p-4 border border-zinc-700 flex flex-col gap-2.5 text-xs font-sans">
            <div class="flex items-center justify-between pb-2 border-b border-zinc-700">
              <span class="font-bold text-zinc-300">Sistem Performa</span>
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">99.9% Latency &lt; 5ms</span>
            </div>
            <div class="flex items-center gap-2">
              <Cpu class="w-4 h-4 text-[#f97316]" />
              <span class="text-zinc-300 text-xs">Low Memory Footprint & Goroutines</span>
            </div>
            <div class="flex items-center gap-2">
              <Server class="w-4 h-4 text-[#8b5cf6]" />
              <span class="text-zinc-300 text-xs">RESTful JSON & Strict Schema Validation</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

