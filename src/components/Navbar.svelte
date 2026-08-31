<script>
  import { onMount } from 'svelte';
  import { Moon, Sun, Menu, X, Send } from '@lucide/svelte';

  let { isDark = false, toggleTheme = () => {}, activeSection = 'hero' } = $props();

  let isScrolled = $state(false);
  let mobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];
</script>

<header class="sticky top-0 left-0 right-0 z-40 bg-[#fff7ed]/95 dark:bg-[#121118]/95 backdrop-blur-md border-b-2 border-black/40 dark:border-white/20 transition-all">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
    
    <!-- Logo Badge (Soft Brutalism Pill) -->
    <a 
      href="#hero" 
      class="group flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 shadow-soft-sm hover:-translate-y-0.5 transition-all"
    >
      <div class="w-4 h-4 rounded-full bg-[#f97316] animate-pulse"></div>
      <div class="flex items-center gap-1.5">
        <span class="font-extrabold tracking-wide text-gray-900 dark:text-white text-sm font-display">
          HANIF<span class="text-[#f97316]">.DEV</span>
        </span>
        <span class="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f97316]/15 text-[#f97316] font-bold">
          GO
        </span>
      </div>
    </a>

    <!-- Desktop Nav Links (Pill Container) -->
    <nav class="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/70 dark:bg-zinc-800/70 border-2 border-black/30 dark:border-white/20 shadow-soft-sm font-sans">
      {#each navLinks as link}
        {@const isActive = activeSection === link.href.replace('#', '')}
        <a
          href={link.href}
          class={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            isActive
              ? 'bg-white dark:bg-zinc-700 text-[#f97316] shadow-sm border border-black/20 dark:border-white/20'
              : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-zinc-700/60 hover:text-black dark:hover:text-white'
          }`}
        >
          {link.name}
        </a>
      {/each}
    </nav>

    <!-- Right Action Buttons -->
    <div class="flex items-center gap-3">
      <!-- Theme Toggle Button -->
      <button
        onclick={toggleTheme}
        type="button"
        aria-label="Ubah tema"
        class="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-[#1a1921] text-gray-800 dark:text-gray-100 border-2 border-black/40 dark:border-white/30 shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
        title="Ganti Mode Gelap/Terang"
      >
        {#if isDark}
          <Sun class="w-4 h-4 text-[#fbbf24]" />
        {:else}
          <Moon class="w-4 h-4 text-gray-800" />
        {/if}
      </button>

      <!-- Get in Touch CTA -->
      <a
        href="#contact"
        class="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm border-3 border-black/75 dark:border-white/80 shadow-soft hover:-translate-y-1 active:translate-y-0.5 transition-all"
      >
        <Send class="w-3.5 h-3.5" />
        <span>Get in Touch</span>
      </a>

      <!-- Mobile Hamburger Toggle -->
      <button
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        type="button"
        aria-label="Menu"
        class="md:hidden w-10 h-10 rounded-xl bg-white dark:bg-[#1a1921] text-gray-800 dark:text-gray-100 border-2 border-black/40 dark:border-white/30 shadow-soft-sm flex items-center justify-center cursor-pointer"
      >
        {#if mobileMenuOpen}
          <X class="w-5 h-5" />
        {:else}
          <Menu class="w-5 h-5" />
        {/if}
      </button>
    </div>

  </div>

  <!-- Mobile Dropdown Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden px-6 py-4 border-t-2 border-black/30 dark:border-white/20 bg-[#fff7ed] dark:bg-[#121118] animate-in fade-in slide-in-from-top-2 duration-150">
      <div class="flex flex-col gap-2 font-sans">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={() => mobileMenuOpen = false}
            class="px-4 py-3 rounded-xl bg-white dark:bg-[#1a1921] border-2 border-black/40 dark:border-white/30 font-bold text-gray-800 dark:text-white flex items-center justify-between shadow-soft-sm hover:bg-[#f97316] hover:text-white transition-all"
          >
            <span>{link.name}</span>
            <span class="font-bold text-base">→</span>
          </a>
        {/each}
        <a
          href="#contact"
          onclick={() => mobileMenuOpen = false}
          class="mt-2 text-center py-3 rounded-xl bg-[#f97316] text-white font-bold text-sm border-3 border-black/75 dark:border-white/80 shadow-soft"
        >
          Get in Touch ✉️
        </a>
      </div>
    </div>
  {/if}
</header>

