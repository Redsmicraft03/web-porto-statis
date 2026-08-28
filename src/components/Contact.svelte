<script>
  import { Mail, Copy, Check, Send, MapPin, ExternalLink } from '@lucide/svelte';
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
      onShowToast('Silakan isi nama dan pesan Anda.');
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

<section id="contact" class="py-16 md:py-24 border-t-2 border-black dark:border-zinc-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-mono text-xs font-black uppercase tracking-wider mb-3">
        <span>💬</span>
        <span>Let's Connect</span>
      </div>
      <h2 class="text-3xl sm:text-4xl font-black font-display tracking-tight">
        Mari Berdiskusi & Berkolaborasi
      </h2>
      <p class="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
        Tertarik kolaborasi proyek backend, freelance, atau arsitektur sistem? Kirim pesan langsung di bawah.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left Column: Direct Links & Info Cards -->
      <div class="lg:col-span-5 flex flex-col gap-4">
        
        <!-- Location & Availability Card -->
        <div class="p-6 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center shadow-neo-sm">
              <MapPin class="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h4 class="text-base font-black font-mono text-black dark:text-white uppercase">
                {personal.location}
              </h4>
              <p class="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                WIB (UTC+7) // REMOTE & ONSITE
              </p>
            </div>
          </div>

          <div class="p-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-700 flex items-center justify-between font-mono">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-emerald-500 border border-black rounded-full animate-ping"></span>
              <span class="text-xs font-black text-black dark:text-[#FFE600] uppercase">
                STATUS: SIAP PROYEK
              </span>
            </div>
            <span class="text-[11px] font-bold text-zinc-500">2026</span>
          </div>
        </div>

        <!-- Communication Channels -->
        <div class="p-6 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md space-y-3 font-mono">
          <h4 class="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            // KANAL KOMUNIKASI
          </h4>

          <!-- Email Item -->
          <div class="flex items-center justify-between p-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-700 shadow-neo-sm hover:bg-[#FFE600]/20 transition-all">
            <a 
              href={personal.emailUrl} 
              class="flex items-center gap-3 flex-1 min-w-0"
            >
              <div class="w-8 h-8 bg-[#FF8A00] text-black border border-black flex items-center justify-center shrink-0">
                <Mail class="w-4 h-4 stroke-[2.5]" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-black text-black dark:text-white uppercase">
                  Email
                </p>
                <p class="text-[11px] text-zinc-600 dark:text-zinc-400 truncate">
                  {personal.email}
                </p>
              </div>
            </a>
            <button
              onclick={handleCopyEmail}
              type="button"
              title="Salin alamat email"
              class="p-2 bg-white dark:bg-[#252528] text-black dark:text-white border border-black hover:bg-[#FFE600] transition-colors ml-2 cursor-pointer shrink-0 shadow-neo-sm"
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
            class="flex items-center justify-between p-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-700 shadow-neo-sm hover:bg-pink-500/10 hover:border-pink-500 transition-all"
          >
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-[#EC4899] text-black border border-black flex items-center justify-center shrink-0">
                <Icons name="instagram" class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-black text-black dark:text-white uppercase">
                  Instagram
                </p>
                <p class="text-[11px] text-zinc-600 dark:text-zinc-400">
                  @hanif.wp_
                </p>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-zinc-500 stroke-[2.5]" />
          </a>

          <!-- GitHub Item -->
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-700 shadow-neo-sm hover:bg-[#FFE600]/20 transition-all"
          >
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-black text-white border border-black flex items-center justify-center shrink-0">
                <Icons name="github" class="w-4 h-4" />
              </div>
              <div>
                <p class="text-xs font-black text-black dark:text-white uppercase">
                  GitHub
                </p>
                <p class="text-[11px] text-zinc-600 dark:text-zinc-400">
                  @Redsmicraft03
                </p>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-zinc-500 stroke-[2.5]" />
          </a>

        </div>

      </div>

      <!-- Right Column: Interactive Email Composer -->
      <div class="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md">
        <div class="flex items-center justify-between mb-6 pb-4 border-b-2 border-black dark:border-zinc-800">
          <div>
            <h3 class="text-xl font-black font-display text-black dark:text-white">
              Kirim Pesan Langsung ✉️
            </h3>
            <p class="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-0.5">
              Pesan dikirim ke <strong class="text-black dark:text-[#FFE600]">{personal.email}</strong>
            </p>
          </div>
          <div class="w-10 h-10 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center shadow-neo-sm">
            <Mail class="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        <form onsubmit={handleSubmit} class="space-y-4 font-mono">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1.5" for="sender-name">
                Nama Anda *
              </label>
              <input
                id="sender-name"
                type="text"
                required
                bind:value={formName}
                placeholder="Contoh: Budi Santoso"
                class="w-full px-3.5 py-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-600 text-xs sm:text-sm text-black dark:text-white focus:bg-white dark:focus:bg-[#1C1C1E] focus:outline-none shadow-neo-sm font-sans"
              />
            </div>

            <div>
              <label class="block text-xs font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1.5" for="sender-email">
                Email Anda
              </label>
              <input
                id="sender-email"
                type="email"
                bind:value={formEmail}
                placeholder="nama@perusahaan.com"
                class="w-full px-3.5 py-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-600 text-xs sm:text-sm text-black dark:text-white focus:bg-white dark:focus:bg-[#1C1C1E] focus:outline-none shadow-neo-sm font-sans"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1.5" for="sender-message">
              Isi Pesan atau Penawaran Proyek *
            </label>
            <textarea
              id="sender-message"
              rows="4"
              required
              bind:value={formMessage}
              placeholder="Halo Hanif, saya tertarik untuk mendiskusikan sistem backend API..."
              class="w-full px-3.5 py-3 bg-zinc-50 dark:bg-[#121212] border-2 border-black dark:border-zinc-600 text-xs sm:text-sm text-black dark:text-white focus:bg-white dark:focus:bg-[#1C1C1E] focus:outline-none shadow-neo-sm font-sans resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FFE600] hover:bg-[#FFD600] text-black border-2 border-black shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer"
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
