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
</script>

<section id="skills" class="py-16 md:py-24 border-t-2 border-black dark:border-zinc-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-mono text-xs font-black uppercase tracking-wider mb-3">
        <span>⚡</span>
        <span>Tech Stack</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-black font-display tracking-tight">
        Keahlian & Arsitektur
      </h2>
      <p class="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
        Kumpulan perkakas, bahasa, dan pustaka teruji untuk membangun backend yang tangguh.
      </p>
    </div>

    <!-- Skills Category Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each skills.categories as cat}
        <div class="p-6 sm:p-7 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-5 pb-3 border-b-2 border-black dark:border-zinc-800">
              <h3 class="text-base sm:text-lg font-black font-mono uppercase tracking-wide flex items-center gap-2">
                <span class="w-3 h-3 bg-[#FFE600] border-2 border-black inline-block"></span>
                {cat.name}
              </h3>
              <span class="text-xs font-mono font-bold px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-zinc-600">
                {cat.items.length} TOOLS
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {#each cat.items as item}
                {@const IconComp = iconMap[item.icon] || Code2}
                <div class="p-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-700 shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  <div class="flex items-start gap-2.5">
                    <div class="w-8 h-8 bg-[#FFE600] text-black border border-black flex items-center justify-center shrink-0">
                      <svelte:component this={IconComp} class="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between gap-1">
                        <h4 class="font-bold font-mono text-xs text-black dark:text-white truncate">
                          {item.name}
                        </h4>
                        <span class={`text-[9px] font-mono font-black px-1.5 py-0.2 border border-black ${
                          item.level === 'Advanced' 
                            ? 'bg-[#22C55E] text-black' 
                            : 'bg-[#06B6D4] text-black'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                      <p class="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5 truncate">
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
