<script>
  import { ArrowUp, Heart } from '@lucide/svelte';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

<footer class="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-3 border-black/75 dark:border-white/20 bg-[#fff7ed] dark:bg-[#121118] font-sans">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      
      <!-- Brand & Tagline -->
      <div class="md:col-span-1">
        <div class="flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm w-fit mb-4">
          <div class="w-3.5 h-3.5 rounded-full bg-[#f97316]"></div>
          <span class="font-extrabold tracking-wide text-gray-900 dark:text-white font-display text-sm">
            HANIF<span class="text-[#f97316]">.DEV</span>
          </span>
        </div>
        <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
          Bold backend engineering meets soft aesthetics. Merancang sistem server dengan arsitektur bersih dan performa tinggi.
        </p>
      </div>

      <!-- Quick Nav -->
      <div>
        <h4 class="font-extrabold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider font-display">
          Navigasi
        </h4>
        <ul class="space-y-2 text-xs sm:text-sm font-medium">
          <li><a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">Tentang Saya</a></li>
          <li><a href="#services" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">Layanan & Spesialisasi</a></li>
          <li><a href="#skills" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">Tech Stack</a></li>
          <li><a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">Selected Projects</a></li>
        </ul>
      </div>

      <!-- Social Links -->
      <div>
        <h4 class="font-extrabold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider font-display">
          Terhubung
        </h4>
        <ul class="space-y-2 text-xs sm:text-sm font-medium">
          <li><a href="https://github.com/Redsmicraft03" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">GitHub @Redsmicraft03</a></li>
          <li><a href="https://instagram.com/hanif.wp_" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">Instagram @hanif.wp_</a></li>
          <li><a href="mailto:hanifwisanggeniprabowo6@gmail.com" class="text-gray-600 dark:text-gray-300 hover:text-[#f97316] transition">Email Langsung</a></li>
        </ul>
      </div>

      <!-- Contact & Back to Top -->
      <div class="flex flex-col justify-between">
        <div>
          <h4 class="font-extrabold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wider font-display">
            Lokasi
          </h4>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
            Jakarta, Indonesia
          </p>
          <p class="text-xs font-mono text-[#f97316] font-bold">
            WIB (UTC+7) // Open for Work
          </p>
        </div>

        <div class="mt-6 sm:mt-0 flex items-center justify-between sm:justify-start gap-3">
          <button
            onclick={scrollToTop}
            type="button"
            aria-label="Kembali ke atas"
            class="px-4 py-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp class="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>

    </div>

    <!-- Bottom Copyright -->
    <div class="pt-8 border-t-2 border-black/20 dark:border-white/20 text-center text-xs text-gray-500 dark:text-gray-400 font-medium flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>
        © {new Date().getFullYear()} Hanif Wisanggeni P. Soft Brutalism Portfolio.
      </p>
      <div class="flex items-center gap-2">
        <span class="px-3 py-1 rounded-full bg-white dark:bg-[#1a1921] border border-black/20 dark:border-white/20 font-mono text-[10px] font-bold text-gray-700 dark:text-gray-300">
          SVELTE 5
        </span>
        <span class="px-3 py-1 rounded-full bg-white dark:bg-[#1a1921] border border-black/20 dark:border-white/20 font-mono text-[10px] font-bold text-gray-700 dark:text-gray-300">
          GO FIBER ENGINE
        </span>
      </div>
    </div>

  </div>
</footer>

