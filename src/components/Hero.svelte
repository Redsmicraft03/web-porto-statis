<script>
  import { Terminal, ArrowRight, Mail, Database, Sparkles } from '@lucide/svelte';
  import Icons from './Icons.svelte';
  import { portfolioData } from '../data/portfolioData';

  const { personal } = portfolioData;
</script>

<section id="hero" class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      
      <!-- Left Column: Text & CTAs -->
      <div class="lg:col-span-7 flex flex-col items-start text-left">
        
        <!-- Neo Status Sticker -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-mono text-xs font-bold uppercase tracking-wider mb-6">
          <span class="w-2.5 h-2.5 bg-emerald-500 border border-black rounded-full animate-ping"></span>
          <span>{personal.status}</span>
        </div>

        <!-- Main Headline -->
        <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-5">
          Hai, Aku{' '}
          <span class="inline-block bg-[#FFE600] text-black px-3 py-0.5 border-2 border-black shadow-neo-sm my-1">
            {personal.name}
          </span>
          <span class="inline-block ml-1"></span>
        </h1>

        <!-- Tagline / Subtitle -->
        <div class="flex items-center gap-2.5 text-base sm:text-lg font-mono font-bold text-zinc-800 dark:text-zinc-200 mb-5">
          <div class="w-7 h-7 bg-black text-[#FFE600] border-2 border-black flex items-center justify-center">
            <Terminal class="w-4 h-4" />
          </div>
          <span>{personal.tagline}</span>
        </div>

        <!-- Bio Paragraph -->
        <p class="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mb-8">
          {personal.shortBio}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center gap-3.5 w-full sm:w-auto font-mono">
          <a
            href="#projects"
            class="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFE600] hover:bg-[#FFD600] text-black border-2 border-black shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm font-black text-sm uppercase tracking-wider transition-all w-full sm:w-auto"
          >
            <span>Lihat Proyek</span>
            <ArrowRight class="w-4 h-4 stroke-[3]" />
          </a>

          <a
            href={personal.emailUrl}
            class="flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-[#1E1E22] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-white shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm font-bold text-sm uppercase tracking-wider transition-all w-full sm:w-auto"
          >
            <Mail class="w-4 h-4 text-[#FF8A00]" />
            <span>Kirim Email</span>
          </a>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            class="p-3.5 bg-white dark:bg-[#1E1E22] text-black dark:text-white border-2 border-black dark:border-white shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm transition-all"
          >
            <Icons name="github" class="w-5 h-5" />
          </a>
        </div>

        <!-- Quick Stats Grid (Neo-Brutalist Data Blocks) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 w-full pt-6 border-t-2 border-black dark:border-zinc-800 font-mono">
          {#each personal.stats as stat}
            <div class="p-3 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-sm">
              <p class="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                {stat.label}
              </p>
              <p class="text-xs sm:text-sm font-black text-black dark:text-white">
                {stat.value}
              </p>
            </div>
          {/each}
        </div>

      </div>

      <!-- Right Column: Neo-Brutalist Profile Card & Live Terminal -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="w-full max-w-sm">
          
          <!-- Card Container -->
          <div class="bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-lg p-6 flex flex-col items-center text-center relative">
            
            <!-- Top Corner Tag -->
            <div class="absolute -top-3.5 -right-3.5 bg-[#FF8A00] text-black border-2 border-black shadow-neo-sm px-3 py-0.5 font-mono text-[10px] font-black uppercase rotate-3">
              ★ VERIFIED DEV
            </div>

            <!-- Profile Photo Frame -->
            <div class="relative mb-5 mt-2">
              <div class="w-44 h-44 border-2 border-black dark:border-white overflow-hidden shadow-neo-md bg-[#FFE600]">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  class="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <!-- Floating Tech Sticker 1 -->
              <div class="absolute -bottom-3 -right-3 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm px-3 py-1 font-mono text-xs font-black flex items-center gap-1.5 rotate-2">
                <span>🐹</span>
                <span>Go Specialist</span>
              </div>

              <!-- Floating Tech Sticker 2 -->
              <div class="absolute -top-2 -left-3 bg-[#06B6D4] text-black border-2 border-black shadow-neo-sm px-2.5 py-0.5 font-mono text-[11px] font-black flex items-center gap-1 -rotate-3">
                <Database class="w-3 h-3" />
                <span>REST & GORM</span>
              </div>
            </div>

            <!-- Card Info -->
            <h2 class="text-xl font-black font-display text-black dark:text-white mb-1">
              {personal.name}
            </h2>
            <p class="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 mb-5">
              LULUSAN S1 TEKNIK INFORMATIKA • UNINDRA
            </p>

            <!-- Neo Terminal Box -->
            <div class="w-full bg-[#0A0A0A] text-left font-mono text-xs border-2 border-black p-3.5 shadow-neo-sm">
              <div class="flex items-center justify-between pb-2 mb-2.5 border-b border-zinc-800">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 bg-red-500 border border-black inline-block"></span>
                  <span class="w-2.5 h-2.5 bg-yellow-400 border border-black inline-block"></span>
                  <span class="w-2.5 h-2.5 bg-green-500 border border-black inline-block"></span>
                </div>
                <span class="text-[10px] text-zinc-500 font-bold">bash // main.go</span>
              </div>
              <p class="text-[#22C55E] font-bold">$ go run main.go</p>
              <p class="text-[#FFE600] font-semibold">&gt; Fiber listening :8080 🐻</p>
              <p class="text-[#06B6D4] font-semibold">&gt; PostgreSQL DB [READY]</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>
