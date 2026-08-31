<script>
  import { User, GraduationCap, Compass, Check, Code2, Sparkles, BookOpen } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  const { about } = portfolioData;
</script>

<section id="about" class="py-16 md:py-24 border-t-2 border-black/30 dark:border-white/20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 text-gray-800 dark:text-white">
        <span class="w-2.5 h-2.5 rounded-full bg-[#ec4899]"></span>
        <span>Tentang Developer</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight">
        Filosofi & Rekayasa Sisi Server
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
        Perjalanan rekayasa backend, dedikasi arsitektur bersih, dan performa tinggi.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      <!-- Main Bio Card -->
      <div class="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-black/10 dark:border-white/10">
            <div class="w-13 h-13 rounded-2xl bg-[#ec4899] text-white border-3 border-black/75 dark:border-white/80 flex items-center justify-center shadow-soft-sm shrink-0">
              <User class="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 class="text-xl font-extrabold font-display text-gray-900 dark:text-white">
                Halo, Senang Berkenalan!
              </h3>
              <p class="text-xs font-mono font-bold text-[#f97316]">
                // GO BACKEND ENGINEER & S1 INFORMATIKA
              </p>
            </div>
          </div>

          <div class="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
            {#each about.paragraphs as p}
              <p>{p}</p>
            {/each}
          </div>
        </div>

        <!-- Principles Cards (Soft Brutalism 3-Column) -->
        <div class="mt-8 pt-6 border-t-2 border-black/10 dark:border-white/10">
          <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3.5 flex items-center gap-2">
            <Sparkles class="w-3.5 h-3.5 text-[#fbbf24]" />
            <span>PRINSIP UTAMA REKAYASA KODE</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans">
            {#each about.principles as pr, idx}
              <div class={`p-4 rounded-2xl border-2 border-black/40 dark:border-white/30 shadow-soft-sm ${
                idx === 0 ? 'bg-[#fff7ed] dark:bg-zinc-800/80' : idx === 1 ? 'bg-[#fdf2f8] dark:bg-zinc-800/80' : 'bg-[#f5f3ff] dark:bg-zinc-800/80'
              }`}>
                <p class="font-extrabold text-xs text-gray-900 dark:text-white mb-1">
                  {pr.title}
                </p>
                <p class="text-[11px] text-gray-600 dark:text-gray-300 leading-snug">
                  {pr.desc}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Column: Education & Highlight Card -->
      <div class="lg:col-span-5 flex flex-col gap-6">
        
        <!-- Education Box -->
        <div class="p-6 sm:p-7 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#06b6d4] text-white border-3 border-black/75 dark:border-white/80 flex items-center justify-center shadow-soft-sm">
                <GraduationCap class="w-6 h-6 stroke-[2.5]" />
              </div>
              <span class="px-3.5 py-1 rounded-full bg-[#121118] text-[#fbbf24] font-mono text-xs font-bold border border-black shadow-soft-sm">
                {about.education.period}
              </span>
            </div>

            <h3 class="text-xl font-extrabold font-display text-gray-900 dark:text-white mb-1">
              {about.education.degree}
            </h3>
            <p class="text-xs font-mono font-bold text-[#f97316] mb-3">
              {about.education.institution}
            </p>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              {about.education.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-gray-100 dark:border-zinc-800 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Check class="w-4 h-4" />
            <span>Predikat Kelulusan S1 Informatika</span>
          </div>
        </div>

        <!-- Quick Tech Insight Card (Soft Brutalism Vibrant Highlight) -->
        <div class="p-6 sm:p-7 rounded-3xl bg-[#fbbf24] text-gray-900 border-3 border-black/75 shadow-soft relative overflow-hidden">
          <div class="flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider mb-2">
            <Compass class="w-4 h-4 stroke-[2.5] text-black" />
            <span>KENAPA MEMILIH GOLANG?</span>
          </div>
          <p class="text-xs sm:text-sm font-semibold leading-relaxed mb-4 text-gray-900">
            Kompilasi cepat ke binary tunggal tanpa beban JVM/interpreter berat, konkurensi native (goroutines), serta standar pustaka yang matang menjadikannya fondasi ideal untuk sistem microservices modern.
          </p>
          <div class="flex flex-wrap gap-2 text-[10px] font-mono font-extrabold">
            <span class="px-2.5 py-1 rounded-lg bg-black text-white border border-black">#GOROUTINES</span>
            <span class="px-2.5 py-1 rounded-lg bg-black text-white border border-black">#CLEAN_ARCH</span>
            <span class="px-2.5 py-1 rounded-lg bg-black text-white border border-black">#FIBER_SPEED</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

