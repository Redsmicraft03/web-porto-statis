<script>
  import { Coffee, RefreshCw, Sparkles } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  let { onShowToast = () => {} } = $props();

  const { bearQuotes } = portfolioData;
  let quoteIdx = $state(0);
  let coffeeCount = $state(3);
  let isRotating = $state(false);

  const nextQuote = () => {
    isRotating = true;
    setTimeout(() => {
      quoteIdx = (quoteIdx + 1) % bearQuotes.length;
      isRotating = false;
    }, 200);
  };

  const handleCoffee = () => {
    coffeeCount += 1;
    onShowToast('☕ Beruang Hanif menyeruput kopi hangat! Energi coding +100%');
  };

  let current = $derived(bearQuotes[quoteIdx]);
</script>

<section class="py-12 border-t-2 border-black/30 dark:border-white/20 bg-[#fff7ed]/40 dark:bg-black/10">
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <div class="p-6 sm:p-8 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
      
      <!-- Bear Graphic & Mood -->
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-[#fbbf24] border-3 border-black/75 dark:border-white/80 flex items-center justify-center text-3xl shadow-soft-sm shrink-0 select-none hover:rotate-6 transition-transform">
          🐻
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-extrabold uppercase tracking-wider text-gray-900 dark:text-white font-display">
              Pojok Santai Beruang
            </span>
            <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-[#f97316]/15 text-[#f97316] font-bold font-mono">
              {current.mood}
            </span>
          </div>
          <p class="text-xs sm:text-sm italic font-medium text-gray-600 dark:text-gray-300 mt-1">
            "{current.text}"
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 shrink-0">
        <button
          onclick={handleCoffee}
          type="button"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0.5 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
          title="Beri secangkir kopi untuk developer"
        >
          <Coffee class="w-4 h-4 stroke-[2.5]" />
          <span>{coffeeCount} Kopi</span>
        </button>

        <button
          onclick={nextQuote}
          type="button"
          class="w-10 h-10 rounded-xl bg-white dark:bg-[#252528] text-gray-800 dark:text-white border-2 border-black/40 dark:border-white/30 shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0.5 flex items-center justify-center transition-all cursor-pointer"
          title="Ganti quote"
        >
          <RefreshCw class={`w-4 h-4 stroke-[2.5] ${isRotating ? 'animate-spin' : ''}`} />
        </button>
      </div>

    </div>
  </div>
</section>

