<script>
  import { 
    Code2, 
    Zap, 
    Database, 
    Network, 
    HardDrive, 
    Server, 
    GitBranch, 
    Send, 
    Terminal, 
    Cloud, 
    Cpu, 
    Palette, 
    Globe
  } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  const iconMap = {
    Code2,
    Zap,
    Database,
    Network,
    HardDrive,
    Server,
    GitBranch,
    Send,
    Terminal,
    Cloud,
    Cpu,
    Palette,
    Globe
  };

  const { skills } = portfolioData;

  const categoryColors = [
    { bg: 'bg-[#f97316]', badge: 'bg-[#f97316]/15 text-[#f97316]' },
    { bg: 'bg-[#8b5cf6]', badge: 'bg-[#8b5cf6]/15 text-[#8b5cf6]' },
    { bg: 'bg-[#34d399]', badge: 'bg-[#34d399]/20 text-[#059669] dark:text-[#34d399]' },
    { bg: 'bg-[#ec4899]', badge: 'bg-[#ec4899]/15 text-[#db2777] dark:text-[#f472b6]' }
  ];
</script>

<section id="skills" class="py-16 md:py-24 border-t-2 border-black/30 dark:border-white/20 bg-white/30 dark:bg-black/10">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 text-gray-800 dark:text-white">
        <span class="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></span>
        <span>Tech Stack & Tools</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight">
        Keahlian & Ekosistem Perangkat
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
        Kumpulan bahasa, kerangka kerja, basis data, dan utilitas pendukung rekayasa backend.
      </p>
    </div>

    <!-- Skills Category Grid (Soft Brutalism Dual Column) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each skills.categories as cat, catIdx}
        {@const colorScheme = categoryColors[catIdx % categoryColors.length]}
        <div class="p-6 sm:p-8 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
          <div>
            <!-- Category Header -->
            <div class="flex items-center justify-between mb-6 pb-4 border-b-2 border-black/10 dark:border-white/10">
              <h3 class="text-lg sm:text-xl font-extrabold font-display text-gray-900 dark:text-white flex items-center gap-3">
                <span class={`w-4 h-4 rounded-full ${colorScheme.bg}`}></span>
                <span>{cat.name}</span>
              </h3>
              <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 border border-black/30 dark:border-white/20 text-gray-700 dark:text-gray-300">
                {cat.items.length} TOOLS
              </span>
            </div>

            <!-- Items Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
              {#each cat.items as item}
                {@const IconComp = iconMap[item.icon] || Code2}
                <div class="p-3.5 bg-[#fff7ed]/60 dark:bg-zinc-800/60 rounded-2xl border-2 border-black/30 dark:border-white/20 shadow-soft-sm hover:bg-white dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all">
                  <div class="flex items-start gap-3">
                    <div class={`w-9 h-9 rounded-xl ${colorScheme.bg} text-white border-2 border-black/75 dark:border-white/80 flex items-center justify-center shrink-0 shadow-soft-sm`}>
                      <svelte:component this={IconComp} class="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between gap-1">
                        <h4 class="font-extrabold text-xs text-gray-900 dark:text-white truncate">
                          {item.name}
                        </h4>
                        <span class={`text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full ${
                          item.level === 'Advanced' 
                            ? 'bg-[#34d399]/20 text-[#059669] dark:text-[#34d399]' 
                            : 'bg-[#06b6d4]/20 text-[#0891b2] dark:text-[#38bdf8]'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                      <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 truncate font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>

