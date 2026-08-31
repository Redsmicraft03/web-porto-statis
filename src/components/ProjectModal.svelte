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
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
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

    <!-- Modal Dialog Card (Soft Brutalism Frame) -->
    <div class="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#1a1921] border-3 border-black/80 dark:border-white/80 shadow-soft-xl rounded-3xl z-10 overscroll-contain overflow-hidden">
      
      <!-- Top Fixed Circular Close Button -->
      <button
        onclick={onClose}
        type="button"
        aria-label="Tutup modal"
        class="absolute top-4 right-4 z-40 w-11 h-11 rounded-full bg-white dark:bg-[#1a1921] text-gray-800 dark:text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm flex items-center justify-center hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Tutup (ESC)"
      >
        <X class="w-5 h-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
      </button>

      <!-- Scrollable Modal Content Container -->
      <div class="overflow-y-auto flex-1 overscroll-contain font-sans">
        
        <!-- Modal Header Image -->
        <div class="relative h-60 sm:h-72 w-full bg-zinc-900 border-b-2 border-black/30 dark:border-white/20 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            class="w-full h-full object-cover object-top"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div class="absolute bottom-5 left-6 right-20 text-white">
            <span class="px-3.5 py-1 rounded-full bg-[#f97316] text-white text-[11px] font-extrabold uppercase tracking-wider mb-2.5 inline-block shadow-soft-sm">
              {project.category}
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
              {project.title}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-300 font-medium mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div class="p-6 sm:p-8 space-y-6">
          <!-- Description -->
          <div>
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#f97316] mb-2 flex items-center gap-2">
              <Sparkles class="w-3.5 h-3.5 stroke-[2.5]" />
              <span>// DESKRIPSI LENGKAP</span>
            </h4>
            <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <!-- Highlights & Key Features -->
          {#if project.highlights && project.highlights.length > 0}
            <div>
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#8b5cf6] mb-3 flex items-center gap-2">
                <Layers class="w-3.5 h-3.5 stroke-[2.5]" />
                <span>// FITUR & ARSITEKTUR UTAMA</span>
              </h4>
              <ul class="space-y-3">
                {#each project.highlights as item}
                  <li class="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <span class="w-5 h-5 rounded-full bg-[#34d399] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-soft-sm font-bold text-xs">
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
            <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-[#ec4899] mb-2.5">
              // TEKNOLOGI DIGUNAKAN
            </h4>
            <div class="flex flex-wrap gap-2">
              {#each project.techStack as tech}
                <span
                  class="px-3 py-1.5 rounded-xl bg-[#fff7ed] dark:bg-zinc-800 border-2 border-black/30 dark:border-white/20 text-xs font-bold text-gray-900 dark:text-zinc-200 shadow-soft-sm"
                >
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="p-4 sm:p-5 bg-gray-50 dark:bg-zinc-900 border-t-2 border-black/20 dark:border-white/20 flex flex-wrap items-center justify-between gap-3 shrink-0 font-sans">
        <div class="text-xs text-gray-500 dark:text-gray-400 font-bold hidden sm:block">
          DEV: <strong>HANIF WISANGGENI P</strong> 🐻
        </div>

        <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onclick={onClose}
            type="button"
            class="px-4 py-2.5 rounded-xl bg-white dark:bg-[#1a1921] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-white border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Tutup
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1a1921] text-gray-800 dark:text-white border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
          >
            <Icons name="github" class="w-4 h-4" />
            <span>Source</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm text-xs font-extrabold uppercase tracking-wider hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
          >
            <span>Live Website</span>
            <ExternalLink class="w-3.5 h-3.5 stroke-[3]" />
          </a>
        </div>
      </div>

    </div>
  </div>
{/if}

