<script>
  import { ChevronDown, HelpCircle } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  const { faqs = [] } = portfolioData;
  let activeFaq = $state(null);

  const toggleFaq = (index) => {
    activeFaq = activeFaq === index ? null : index;
  };
</script>

<section id="faq" class="py-16 md:py-24 border-t-2 border-black/30 dark:border-white/20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 text-gray-800 dark:text-white">
        <span class="w-2.5 h-2.5 rounded-full bg-[#06b6d4]"></span>
        <span>Tanya Jawab (FAQ)</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight">
        Pertanyaan yang Sering Diajukan
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
        Jawaban seputar ketersediaan kolaborasi, alur kerja rekayasa perangkat lunak, dan kapabilitas teknis.
      </p>
    </div>

    <!-- Accordion List -->
    <div class="space-y-4 font-sans">
      {#each faqs as item, idx}
        <div 
          class="bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-2xl overflow-hidden transition-all duration-200"
        >
          <button
            onclick={() => toggleFaq(idx)}
            type="button"
            class="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-[#fff7ed]/50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
          >
            <span class="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white font-display pr-4">
              {item.question}
            </span>
            <div class={`w-8 h-8 rounded-full bg-[#fff7ed] dark:bg-zinc-800 border-2 border-black/30 dark:border-white/20 flex items-center justify-center shrink-0 transition-transform duration-200 ${
              activeFaq === idx ? 'rotate-180 bg-[#f97316] text-white border-black/80' : 'text-gray-700 dark:text-gray-300'
            }`}>
              <ChevronDown class="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>

          {#if activeFaq === idx}
            <div class="px-5 sm:px-6 pb-6 pt-0 animate-in fade-in duration-150">
              <div class="pt-4 border-t-2 border-black/10 dark:border-white/10">
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                  {item.answer}
                </p>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

  </div>
</section>
