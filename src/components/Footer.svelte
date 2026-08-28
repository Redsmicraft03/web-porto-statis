<script>
  import { ArrowUp } from '@lucide/svelte';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

<footer class="py-10 border-t-2 border-black dark:border-zinc-800 bg-white dark:bg-[#18181B] font-mono">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
      
      <!-- Brand & Copyright -->
      <div>
        <div class="flex items-center justify-center sm:justify-start gap-2 text-base font-black font-display text-black dark:text-white mb-1">
          <span>HANIF WISANGGENI P</span>
          <span>🐻</span>
        </div>
        <p class="text-xs text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} • NEO-BRUTALIST ARCHITECTURE • CLEAN & HIGH PERFORMANCE.
        </p>
      </div>

      <!-- Center Badges -->
      <div class="flex items-center gap-2 text-xs font-bold">
        <span class="px-2 py-0.5 bg-[#FFE600] text-black border border-black shadow-neo-sm">
          SVELTE 5
        </span>
        <span>+</span>
        <span class="px-2 py-0.5 bg-black text-white border border-black shadow-neo-sm">
          GO ENGINE
        </span>
      </div>

      <!-- Back to Top -->
      <button
        onclick={scrollToTop}
        type="button"
        aria-label="Kembali ke atas"
        class="w-10 h-10 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
        title="Kembali ke atas"
      >
        <ArrowUp class="w-5 h-5 stroke-[3]" />
      </button>

    </div>
  </div>
</footer>
