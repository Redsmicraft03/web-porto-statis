<script>
  import { Eye, ArrowUpRight, Layers, ExternalLink } from '@lucide/svelte';
  import { portfolioData } from '../data/portfolioData';

  let { onSelectProject = () => {} } = $props();

  const { projects } = portfolioData;
  let filter = $state('All');

  const categories = ['All', 'Fullstack / Backend', 'CLI / Utility'];

  let filteredProjects = $derived(
    filter === 'All' 
      ? projects 
      : projects.filter(p => p.category.includes(filter) || (filter === 'Fullstack / Backend' && p.category.includes('Backend')))
  );

  const badgeColors = ['bg-[#34d399]', 'bg-[#8b5cf6]', 'bg-[#fbbf24]'];
</script>

<section id="projects" class="py-16 md:py-24 border-t-2 border-black/30 dark:border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading & Counter Pill -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
      <div class="text-center md:text-left">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 text-gray-800 dark:text-white">
          <span class="w-2.5 h-2.5 rounded-full bg-[#34d399]"></span>
          <span>Selected Projects</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight">
          Karya & Implementasi Nyata
        </h2>
      </div>

      <!-- Pill Badge Counter -->
      <span class="px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold font-mono text-gray-800 dark:text-white">
        {filteredProjects.length} Works Displayed
      </span>
    </div>

    <!-- Category Filters (Soft Brutalism Pill Filter Group) -->
    <div class="flex justify-center md:justify-start items-center gap-2.5 mb-12 flex-wrap font-sans">
      {#each categories as cat}
        <button
          onclick={() => filter = cat}
          type="button"
          class={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border-2 border-black/40 dark:border-white/30 cursor-pointer ${
            filter === cat
              ? 'bg-[#f97316] text-white border-black/80 dark:border-white/80 shadow-soft-sm font-extrabold -translate-y-0.5'
              : 'bg-white dark:bg-[#1a1921] text-gray-700 dark:text-gray-300 hover:bg-[#fff7ed] dark:hover:bg-zinc-800 shadow-soft-sm'
          }`}
        >
          {cat === 'All' ? 'Semua Proyek' : cat}
        </button>
      {/each}
    </div>

    <!-- Projects Grid (Soft Brutalism 3-Column Cards) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProjects as project, i (project.id)}
        {@const colorClass = badgeColors[i % badgeColors.length]}
        <div
          class="bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-transform duration-300 group"
        >
          <div>
            <!-- Project Image Frame with floating circular modal button -->
            <div class="relative h-52 sm:h-56 w-full overflow-hidden border-b-2 border-black/30 dark:border-white/20 bg-zinc-900">
              <button
                type="button"
                class="w-full h-full p-0 border-0 bg-transparent block text-left cursor-pointer"
                onclick={() => onSelectProject(project)}
                aria-label={`Lihat detail arsitektur ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </button>
              
              <!-- Category Pill -->
              <span class={`absolute top-4 left-4 px-3.5 py-1 rounded-full ${colorClass} text-white font-sans text-[11px] font-extrabold uppercase tracking-wider shadow-soft-sm pointer-events-none`}>
                {project.category}
              </span>

              <!-- Floating Circular Details Button -->
              <button
                onclick={() => onSelectProject(project)}
                type="button"
                aria-label="Lihat Detail"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white dark:bg-[#1a1921] text-gray-900 dark:text-white border-2 border-black/75 dark:border-white/80 flex items-center justify-center shadow-soft-sm hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
                title="Buka Preview Modal"
              >
                <ExternalLink class="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <!-- Project Meta Content -->
            <div class="p-6 sm:p-7">
              <h3 class="text-xl sm:text-2xl font-extrabold font-display text-gray-900 dark:text-white mb-1.5">
                {project.title}
              </h3>
              
              <p class="text-xs font-mono font-bold text-[#f97316] mb-3 uppercase tracking-tight">
                {project.tagline}
              </p>

              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              <!-- Tech stack badges (Soft Pills) -->
              <div class="flex flex-wrap gap-1.5 font-sans">
                {#each project.techStack as tech}
                  <span
                    class="px-2.5 py-1 rounded-lg bg-[#fff7ed] dark:bg-zinc-800 border border-black/20 dark:border-white/20 text-[11px] font-bold text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="p-6 sm:p-7 pt-0 flex items-center gap-3 font-sans">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all"
            >
              <span>Buka Website</span>
              <ArrowUpRight class="w-4 h-4 stroke-[3]" />
            </a>

            <button
              onclick={() => onSelectProject(project)}
              type="button"
              class="px-3.5 py-3 rounded-xl bg-white dark:bg-[#252528] text-gray-900 dark:text-white border-3 border-black/75 dark:border-white/80 shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Detail Arsitektur"
            >
              <Layers class="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>

