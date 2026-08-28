<script>
  import { onMount } from 'svelte';
  import { X, ExternalLink, CheckCircle2, Layers, Sparkles } from '@lucide/svelte';
  import Icons from './Icons.svelte';

  let { project = null, onClose = () => {} } = $props();

  onMount(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

{#if project}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
    role="dialog"
    aria-modal="true"
  >
    <!-- Backdrop Click Listener -->
    <button 
      class="fixed inset-0 w-full h-full bg-transparent border-0 cursor-default" 
      onclick={onClose}
      tabindex="-1"
      aria-label="Tutup latar belakang"
    ></button>

    <!-- Modal Dialog Card (Neo-Brutalist Frame) -->
    <div class="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-[#18181B] border-3 border-black dark:border-white shadow-neo-xl z-10 overscroll-contain">
      
      <!-- Top Fixed High-Contrast Close Button (Stays visible on scroll) -->
      <button
        onclick={onClose}
        type="button"
        aria-label="Tutup modal"
        class="absolute top-3.5 right-3.5 z-40 w-10 h-10 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Tutup (ESC)"
      >
        <X class="w-6 h-6 stroke-[3] group-hover:rotate-90 transition-transform duration-200" />
      </button>

      <!-- Scrollable Modal Content Container -->
      <div class="overflow-y-auto flex-1 overscroll-contain">
        
        <!-- Modal Header Image -->
        <div class="relative h-56 sm:h-72 w-full bg-zinc-900 border-b-2 border-black shrink-0">
          <img
            src={project.image}
            alt={project.title}
            class="w-full h-full object-cover object-top"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div class="absolute bottom-4 left-5 right-16 sm:left-6 sm:right-16 text-white font-mono">
            <span class="px-2.5 py-1 bg-[#FFE600] text-black text-[10px] font-black uppercase tracking-wider mb-2 inline-block border border-black shadow-neo-sm">
              {project.category}
            </span>
            <h3 class="text-2xl sm:text-3xl font-black font-display leading-tight text-white">
              {project.title}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-300 font-semibold mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div class="p-6 sm:p-8 space-y-6">
          <!-- Description -->
          <div>
            <h4 class="text-xs font-mono font-black uppercase tracking-wider text-[#FF8A00] dark:text-[#FFE600] mb-2 flex items-center gap-2">
              <Sparkles class="w-3.5 h-3.5 stroke-[2.5]" />
              <span>// DESKRIPSI LENGKAP</span>
            </h4>
            <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          <!-- Highlights & Key Features -->
          {#if project.highlights && project.highlights.length > 0}
            <div>
              <h4 class="text-xs font-mono font-black uppercase tracking-wider text-[#FF8A00] dark:text-[#FFE600] mb-3 flex items-center gap-2">
                <Layers class="w-3.5 h-3.5 stroke-[2.5]" />
                <span>// FITUR & ARSITEKTUR UTAMA</span>
              </h4>
              <ul class="space-y-2.5 font-sans">
                {#each project.highlights as item}
                  <li class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <span class="w-5 h-5 bg-[#22C55E] text-black border border-black flex items-center justify-center shrink-0 mt-0.5 shadow-neo-sm">
                      ✓
                    </span>
                    <span class="pt-0.5">{item}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- Tech Stack -->
          <div>
            <h4 class="text-xs font-mono font-black uppercase tracking-wider text-[#FF8A00] dark:text-[#FFE600] mb-2.5">
              // TEKNOLOGI DIGUNAKAN
            </h4>
            <div class="flex flex-wrap gap-2 font-mono">
              {#each project.techStack as tech}
                <span
                  class="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-zinc-600 text-xs font-bold text-black dark:text-zinc-200 shadow-neo-sm"
                >
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 sm:p-5 bg-zinc-50 dark:bg-[#121212] border-t-2 border-black dark:border-zinc-700 flex flex-wrap items-center justify-between gap-3 shrink-0 font-mono">
        <div class="text-xs text-zinc-600 dark:text-zinc-400 font-bold hidden sm:block">
          DEV: <strong>HANIF WISANGGENI P</strong> 🐻
        </div>

        <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onclick={onClose}
            type="button"
            class="px-4 py-2.5 bg-white dark:bg-[#1E1E22] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Tutup
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 px-4 py-2.5 bg-white dark:bg-[#1E1E22] text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm text-xs font-bold uppercase tracking-wider hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <Icons name="github" class="w-4 h-4" />
            <span>Source</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 px-5 py-2.5 bg-[#FFE600] hover:bg-[#FFD600] text-black border-2 border-black shadow-neo-sm text-xs font-black uppercase tracking-wider hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <span>Website</span>
            <ExternalLink class="w-3.5 h-3.5 stroke-[3]" />
          </a>
        </div>
      </div>

    </div>
  </div>
{/if}
