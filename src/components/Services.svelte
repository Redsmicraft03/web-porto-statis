<script>
  import { 
    Code2, 
    Database, 
    Layers, 
    Shield, 
    Terminal, 
    Globe,
    Zap,
    Cpu,
    ArrowRight
  } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  const iconMap = {
    Code2,
    Database,
    Layers,
    Shield,
    Terminal,
    Globe,
    Zap,
    Cpu
  };

  const { services = [] } = portfolioData;
</script>

<section id="services" class="py-16 md:py-24 border-t-2 border-black/30 dark:border-white/20 bg-white/40 dark:bg-black/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 text-gray-800 dark:text-white">
        <span class="w-2.5 h-2.5 rounded-full bg-[#f97316]"></span>
        <span>Layanan & Spesialisasi</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight">
        Backend & Systems Engineering
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
        Kombinasi performa Go, perancangan arsitektur data, dan keamanan untuk produk digital modern.
      </p>
    </div>

    <!-- Services Horizontal Carousel / Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
      {#each services as item, idx}
        {@const IconComp = iconMap[item.icon] || Code2}
        <div 
          class="bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-2xl p-6 sm:p-7 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Icon Box -->
            <div class={`w-14 h-14 rounded-2xl ${item.color || 'bg-[#f97316]'} border-3 border-black/75 dark:border-white/80 shadow-soft-sm flex items-center justify-center text-white mb-5`}>
              <svelte:component this={IconComp} class="w-6 h-6 stroke-[2.5]" />
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-extrabold text-gray-900 dark:text-white mb-2 font-display">
              {item.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between">
            <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400">
              0{idx + 1} // EXPERTISE
            </span>
            <span class="text-xs font-bold text-[#f97316] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Explore</span>
              <span>→</span>
            </span>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
