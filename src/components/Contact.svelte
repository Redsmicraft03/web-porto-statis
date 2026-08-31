<script>
  import { Mail, Copy, Check, Send, MapPin, ExternalLink, MessageSquare } from '@lucide/svelte';
  import Icons from './Icons.svelte';
  import { portfolioData } from '../data/portfolioData';

  let { onShowToast = () => {} } = $props();

  const { personal } = portfolioData;
  let copiedEmail = $state(false);

  let formName = $state('');
  let formEmail = $state('');
  let formMessage = $state('');
  let isSubmitting = $state(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    copiedEmail = true;
    setTimeout(() => copiedEmail = false, 2000);
    onShowToast('Email berhasil disalin ke clipboard! 📋');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formMessage) {
      onShowToast('Silakan lengkapi nama dan pesan Anda.');
      return;
    }

    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      const subject = encodeURIComponent(`Pesan Portofolio dari ${formName}`);
      const body = encodeURIComponent(`Halo Hanif,\n\nNama: ${formName}\nEmail Pengirim: ${formEmail || 'Tidak dicantumkan'}\n\nPesan:\n${formMessage}\n\n---\nDikirim via formulir portofolio.`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      formName = '';
      formEmail = '';
      formMessage = '';
      onShowToast('Membuka aplikasi email untuk mengirim pesan... ✉️');
    }, 400);
  };
</script>

<section id="contact" class="py-16 md:py-24 border-t-2 border-black/30 dark:border-white/20 bg-white/40 dark:bg-black/20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 text-gray-800 dark:text-white">
        <span class="w-2.5 h-2.5 rounded-full bg-[#f97316]"></span>
        <span>Get in Touch</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight">
        Mari Berdiskusi & Berkolaborasi
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
        Tertarik kolaborasi proyek backend Go, freelance, atau arsitektur sistem? Kirim pesan langsung di bawah.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left Column: Direct Links & Info Cards -->
      <div class="lg:col-span-5 flex flex-col gap-5">
        
        <!-- Location & Availability Card -->
        <div class="p-6 sm:p-7 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-2xl bg-[#f97316] text-white border-3 border-black/75 dark:border-white/80 flex items-center justify-center shadow-soft-sm shrink-0">
              <MapPin class="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h4 class="text-base sm:text-lg font-extrabold font-display text-gray-900 dark:text-white">
                {personal.location}
              </h4>
              <p class="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                WIB (UTC+7) // REMOTE & HYBRID
              </p>
            </div>
          </div>

          <div class="p-3.5 rounded-2xl bg-[#fff7ed] dark:bg-zinc-800/80 border-2 border-black/30 dark:border-white/20 flex items-center justify-between font-sans">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span class="text-xs font-extrabold text-gray-900 dark:text-white">
                STATUS: SIAP PROYEK & KARIR
              </span>
            </div>
            <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              AVAILABLE
            </span>
          </div>
        </div>

        <!-- Communication Channels -->
        <div class="p-6 sm:p-7 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl space-y-3 font-sans">
          <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
            <MessageSquare class="w-3.5 h-3.5 text-[#f97316]" />
            <span>KANAL KOMUNIKASI RESMI</span>
          </h4>

          <!-- Email Item -->
          <div class="flex items-center justify-between p-3.5 rounded-2xl bg-[#fff7ed]/70 dark:bg-zinc-800/70 border-2 border-black/30 dark:border-white/20 shadow-soft-sm hover:bg-white dark:hover:bg-zinc-800 transition-all">
            <a 
              href={personal.emailUrl} 
              class="flex items-center gap-3.5 flex-1 min-w-0"
            >
              <div class="w-9 h-9 rounded-xl bg-[#f97316] text-white border-2 border-black/75 dark:border-white/80 flex items-center justify-center shrink-0">
                <Mail class="w-4 h-4 stroke-[2.5]" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-extrabold text-gray-900 dark:text-white">
                  Email
                </p>
                <p class="text-[11px] text-gray-500 dark:text-gray-400 truncate font-mono">
                  {personal.email}
                </p>
              </div>
            </a>
            <button
              onclick={handleCopyEmail}
              type="button"
              title="Salin alamat email"
              class="w-8 h-8 rounded-lg bg-white dark:bg-zinc-700 text-gray-800 dark:text-white border border-black/40 dark:border-white/30 flex items-center justify-center hover:bg-[#f97316] hover:text-white transition-colors ml-2 cursor-pointer shrink-0 shadow-soft-sm"
            >
              {#if copiedEmail}
                <Check class="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              {:else}
                <Copy class="w-3.5 h-3.5 stroke-[2.5]" />
              {/if}
            </button>
          </div>

          <!-- Instagram Item -->
          <a
            href={personal.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-3.5 rounded-2xl bg-[#fdf2f8]/70 dark:bg-zinc-800/70 border-2 border-black/30 dark:border-white/20 shadow-soft-sm hover:bg-white dark:hover:bg-zinc-800 transition-all"
          >
            <div class="flex items-center gap-3.5">
              <div class="w-9 h-9 rounded-xl bg-[#ec4899] text-white border-2 border-black/75 dark:border-white/80 flex items-center justify-center shrink-0">
                <Icons name="instagram" class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold text-gray-900 dark:text-white">
                  Instagram
                </p>
                <p class="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                  @hanif.wp_
                </p>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-gray-400 stroke-[2.5]" />
          </a>

          <!-- GitHub Item -->
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/70 border-2 border-black/30 dark:border-white/20 shadow-soft-sm hover:bg-white dark:hover:bg-zinc-800 transition-all"
          >
            <div class="flex items-center gap-3.5">
              <div class="w-9 h-9 rounded-xl bg-gray-900 text-white border-2 border-black/75 dark:border-white/80 flex items-center justify-center shrink-0">
                <Icons name="github" class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-extrabold text-gray-900 dark:text-white">
                  GitHub
                </p>
                <p class="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                  @Redsmicraft03
                </p>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-gray-400 stroke-[2.5]" />
          </a>

        </div>

      </div>

      <!-- Right Column: Interactive Email Composer -->
      <div class="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-[#1a1921] border-3 border-black/75 dark:border-white/80 shadow-soft rounded-3xl font-sans">
        <div class="flex items-center justify-between mb-6 pb-4 border-b-2 border-black/10 dark:border-white/10">
          <div>
            <h3 class="text-xl sm:text-2xl font-extrabold font-display text-gray-900 dark:text-white">
              Kirim Pesan Langsung ✉️
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Kirim pertanyaan atau tawaran ke <strong class="text-[#f97316]">{personal.email}</strong>
            </p>
          </div>
          <div class="w-11 h-11 rounded-2xl bg-[#f97316] text-white border-3 border-black/75 dark:border-white/80 flex items-center justify-center shadow-soft-sm shrink-0">
            <Mail class="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        <form onsubmit={handleSubmit} class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2" for="sender-name">
                Nama Anda *
              </label>
              <input
                id="sender-name"
                type="text"
                required
                bind:value={formName}
                placeholder="Contoh: Budi Santoso"
                class="w-full px-4 py-3 rounded-xl bg-[#fff7ed]/60 dark:bg-zinc-800/60 border-2 border-black/40 dark:border-white/30 text-xs sm:text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-zinc-800 focus:outline-none shadow-soft-sm transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2" for="sender-email">
                Email Anda
              </label>
              <input
                id="sender-email"
                type="email"
                bind:value={formEmail}
                placeholder="nama@perusahaan.com"
                class="w-full px-4 py-3 rounded-xl bg-[#fff7ed]/60 dark:bg-zinc-800/60 border-2 border-black/40 dark:border-white/30 text-xs sm:text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-zinc-800 focus:outline-none shadow-soft-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2" for="sender-message">
              Isi Pesan atau Penawaran Proyek *
            </label>
            <textarea
              id="sender-message"
              rows="4"
              required
              bind:value={formMessage}
              placeholder="Halo Hanif, saya tertarik untuk mendiskusikan sistem backend API..."
              class="w-full px-4 py-3 rounded-xl bg-[#fff7ed]/60 dark:bg-zinc-800/60 border-2 border-black/40 dark:border-white/30 text-xs sm:text-sm text-gray-900 dark:text-white focus:bg-white dark:focus:bg-zinc-800 focus:outline-none shadow-soft-sm resize-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white border-3 border-black/75 dark:border-white/80 shadow-soft hover:-translate-y-0.5 active:translate-y-0.5 font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer"
          >
            {#if isSubmitting}
              <span>Menyiapkan Email...</span>
            {:else}
              <Send class="w-4 h-4 stroke-[3]" />
              <span>Kirim Pesan via Email ✉️</span>
            {/if}
          </button>
        </form>
      </div>

    </div>

  </div>
</section>

