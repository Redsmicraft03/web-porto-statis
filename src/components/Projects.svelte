<script>
  import { Eye, ArrowUpRight, Layers } from '@lucide/svelte';
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
</script>

<section id="projects" class="py-16 md:py-24 border-t-2 border-black dark:border-zinc-800 bg-zinc-50/40 dark:bg-[#151518]/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-12">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-mono text-xs font-black uppercase tracking-wider mb-3">
        <span>🚀</span>
        <span>Showcase Proyek</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-black font-display tracking-tight">
        Karya & Implementasi Nyata
      </h2>
      <p class="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
        Implementasi nyata sistem server, enkripsi kriptografi, dan layanan web modern.
      </p>
    </div>

    <!-- Category Filters -->
    <div class="flex justify-center items-center gap-2.5 mb-12 flex-wrap font-mono">
      {#each categories as cat}
        <button
          onclick={() => filter = cat}
          type="button"
          class={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border-2 border-black cursor-pointer ${
            filter === cat
              ? 'bg-[#FFE600] text-black shadow-neo-sm font-black -translate-x-0.5 -translate-y-0.5'
              : 'bg-white dark:bg-[#18181B] text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-neo-sm'
          }`}
        >
          {cat === 'All' ? 'SEMUA PROYEK' : cat}
        </button>
      {/each}
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProjects as project (project.id)}
        <div
          class="bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md flex flex-col justify-between overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200"
        >
          <div>
            <!-- Project Image Frame -->
            <div class="relative h-48 sm:h-52 w-full overflow-hidden border-b-2 border-black bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
              
              <!-- Category Neo Sticker -->
              <span class="absolute top-3.5 left-3.5 px-2.5 py-1 bg-black text-[#FFE600] font-mono text-[10px] font-black uppercase tracking-wider border border-black shadow-neo-sm">
                {project.category}
              </span>

              <!-- Quick Details Button -->
              <button
                onclick={() => onSelectProject(project)}
                type="button"
                aria-label="Lihat Detail"
                class="absolute top-3.5 right-3.5 w-8 h-8 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center shadow-neo-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                title="Lihat Detail Arsitektur"
              >
                <Eye class="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <!-- Project Meta Content -->
            <div class="p-6">
              <h3 class="text-xl font-black font-display text-black dark:text-white mb-1.5">
                {project.title}
              </h3>
              
              <p class="text-xs font-mono font-bold text-[#FF8A00] dark:text-[#FFE600] mb-3 uppercase tracking-tight">
                {project.tagline}
              </p>

              <p class="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed mb-5">
                {project.description}
              </p>

              <!-- Tech stack badges -->
              <div class="flex flex-wrap gap-1.5 mb-2 font-mono">
                {#each project.techStack as tech}
                  <span
                    class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-zinc-600 text-[10px] font-bold text-black dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="p-6 pt-0 flex items-center gap-2.5 font-mono">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#FFE600] hover:bg-[#FFD600] text-black border-2 border-black shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 text-xs font-black uppercase tracking-wider transition-all"
            >
              <span>Buka Proyek</span>
              <ArrowUpRight class="w-4 h-4 stroke-[3]" />
            </a>

            <button
              onclick={() => onSelectProject(project)}
              type="button"
              class="p-2.5 bg-white dark:bg-[#252528] text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
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
