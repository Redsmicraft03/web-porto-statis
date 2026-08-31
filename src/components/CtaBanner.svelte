<script>
  import { ArrowRight, Sparkles, Send } from '@lucide/svelte';
</script>

<section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-[#ec4899] border-3 border-black/75 dark:border-white/80 shadow-soft-md rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden">
      
      <!-- Decorative Floating Circles -->
      <div class="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/15 pointer-events-none"></div>
      <div class="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-black/10 pointer-events-none"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-2xl mx-auto font-sans">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-xs font-extrabold uppercase tracking-wider mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Siap Mulai Proyek Baru?</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display mb-4 tracking-tight leading-tight">
          Bangun Sistem Backend yang Cepat & Andal
        </h2>

        <p class="text-white/90 text-sm sm:text-base mb-8 leading-relaxed font-medium">
          Mari diskusikan bagaimana perancangan arsitektur Go (Golang), optimasi basis data, dan RESTful API modern dapat membawa proyek Anda ke level berikutnya.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-gray-900 font-extrabold text-sm sm:text-base border-3 border-black/75 shadow-soft hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Send class="w-4 h-4 text-[#ec4899]" />
            <span>Mulai Diskusi</span>
          </a>

          <a
            href="#projects"
            class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 text-white font-extrabold text-sm sm:text-base border-3 border-white/80 shadow-soft-sm hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <span>Eksplorasi Proyek</span>
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
