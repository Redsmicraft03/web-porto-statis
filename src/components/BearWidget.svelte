<script>
  import { Coffee, RefreshCw } from '@lucide/svelte';
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

<section class="py-12 border-t-2 border-black dark:border-zinc-800 bg-[#FFE600]/10 dark:bg-[#FFE600]/5">
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <div class="p-6 sm:p-7 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md flex flex-col sm:flex-row items-center justify-between gap-5">
      
      <!-- Bear Graphic & Mood -->
      <div class="flex items-center gap-4">
        <div class="w-13 h-13 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center text-3xl shadow-neo-sm shrink-0 select-none hover:rotate-6 transition-transform">
          🐻
        </div>
        <div>
          <div class="flex items-center gap-2 font-mono">
            <span class="text-xs font-black uppercase tracking-wider text-black dark:text-white">
              POJOK SANTAI BERUANG
            </span>
            <span class="text-[10px] px-2 py-0.5 bg-black text-[#FFE600] font-bold border border-black">
              {current.mood}
            </span>
          </div>
          <p class="text-xs sm:text-sm italic font-medium text-zinc-700 dark:text-zinc-300 mt-1">
            "{current.text}"
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2.5 shrink-0 font-mono">
        <button
          onclick={handleCoffee}
          type="button"
          class="flex items-center gap-1.5 px-3.5 py-2 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
          title="Beri secangkir kopi untuk developer"
        >
          <Coffee class="w-4 h-4 text-black stroke-[2.5]" />
          <span>{coffeeCount} KOPI</span>
        </button>

        <button
          onclick={nextQuote}
          type="button"
          class="p-2.5 bg-white dark:bg-[#252528] text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          title="Ganti quote"
        >
          <RefreshCw class={`w-4 h-4 stroke-[2.5] ${isRotating ? 'animate-spin' : ''}`} />
        </button>
      </div>

    </div>
  </div>
</section>
