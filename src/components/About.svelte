<script>
  import { User, GraduationCap, Compass, Check } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  const { about } = portfolioData;
</script>

<section id="about" class="py-16 md:py-24 border-t-2 border-black dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#151518]/50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-mono text-xs font-black uppercase tracking-wider mb-3">
        <span>🐾</span>
        <span>Tentang Developer</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-black font-display tracking-tight">
        Visi & Rekayasa Sisi Server
      </h2>
      <p class="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
        Perjalanan rekayasa backend, dedikasi arsitektur bersih, dan performa tinggi.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Main Bio Card -->
      <div class="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-6 pb-4 border-b-2 border-black dark:border-zinc-800">
            <div class="w-11 h-11 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center shadow-neo-sm">
              <User class="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 class="text-lg font-black font-display text-black dark:text-white">
                Halo, Senang Berkenalan!
              </h3>
              <p class="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
                // BACKEND ENGINEER PASSIONATE
              </p>
            </div>
          </div>

          <div class="space-y-3.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
            {#each about.paragraphs as p}
              <p>{p}</p>
            {/each}
          </div>
        </div>

        <!-- Principles Cards -->
        <div class="mt-8 pt-6 border-t-2 border-black dark:border-zinc-800">
          <h4 class="text-xs font-mono font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3.5">
            // PRINSIP REKAYASA SISTEM
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {#each about.principles as pr}
              <div class="p-3.5 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-700 shadow-neo-sm">
                <p class="font-black font-mono text-xs text-black dark:text-[#FFE600] mb-1">
                  {pr.title}
                </p>
                <p class="text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug">
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
        <div class="p-6 sm:p-7 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-[#06B6D4] text-black border-2 border-black flex items-center justify-center shadow-neo-sm">
              <GraduationCap class="w-5 h-5 stroke-[2.5]" />
            </div>
            <span class="px-2.5 py-1 bg-black text-[#FFE600] font-mono text-[11px] font-bold border-2 border-black shadow-neo-sm">
              {about.education.period}
            </span>
          </div>

          <h3 class="text-lg font-black font-display text-black dark:text-white mb-1">
            {about.education.degree}
          </h3>
          <p class="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 mb-3">
            {about.education.institution}
          </p>
          <p class="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {about.education.description}
          </p>
        </div>

        <!-- Quick Tech Insight Card -->
        <div class="p-6 bg-[#FFE600] text-black border-2 border-black shadow-neo-md relative overflow-hidden">
          <div class="flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider mb-2">
            <Compass class="w-4 h-4 stroke-[2.5]" />
            <span>KENAPA MEMILIH GOLANG?</span>
          </div>
          <p class="text-xs font-bold leading-relaxed mb-4 text-black">
            Kompilasi cepat ke binary tunggal tanpa runtime overhead berat, konkurensi native (goroutines), serta standar pustaka yang matang menjadikannya pilihan ideal untuk microservices modern.
          </p>
          <div class="flex flex-wrap gap-2 text-[10px] font-mono font-black">
            <span class="px-2 py-1 bg-black text-white border border-black">#GOROUTINES</span>
            <span class="px-2 py-1 bg-black text-white border border-black">#CLEAN_ARCH</span>
            <span class="px-2 py-1 bg-black text-white border border-black">#FIBER_SPEED</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
