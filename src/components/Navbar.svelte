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
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];
</script>

<header class="sticky top-0 left-0 right-0 z-40 px-4 py-3 sm:py-4 transition-all">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo sm:shadow-neo-md px-4 sm:px-6 py-3 flex items-center justify-between transition-all">
      
      <!-- Logo Badge -->
      <a 
        href="/" 
        class="group flex items-center gap-2.5 font-mono font-black text-lg tracking-tight text-black dark:text-white"
      >
        <div class="w-9 h-9 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center text-lg shadow-neo-sm group-hover:rotate-6 transition-transform">
          🐻
        </div>
        <div class="flex flex-col">
          <span class="leading-none font-extrabold text-base tracking-wider font-display">
            HANIF<span class="text-[#FF8A00] dark:text-[#FFE600]">.DEV</span>
          </span>
          <span class="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest">
            GO BACKEND
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-2 font-mono">
        {#each navLinks as link}
          {@const isActive = activeSection === link.href.replace('#', '')}
          <a
            href={link.href}
            class={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
              isActive
                ? 'bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-black'
                : 'text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border-2 border-transparent hover:border-black dark:hover:border-white'
            }`}
          >
            {link.name}
          </a>
        {/each}
      </nav>

      <!-- Right Action Buttons -->
      <div class="flex items-center gap-2.5 font-mono">
        <!-- Theme Toggle Button -->
        <button
          onclick={toggleTheme}
          type="button"
          aria-label="Ubah tema"
          class="w-9 h-9 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          title="Ganti Mode Gelap/Terang"
        >
          {#if isDark}
            <Sun class="w-4 h-4 text-[#FFE600]" />
          {:else}
            <Moon class="w-4 h-4 text-black" />
          {/if}
        </button>

        <!-- Quick Contact Action -->
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#FFE600] hover:bg-[#FFD600] text-black border-2 border-black shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 text-xs font-bold uppercase tracking-wider transition-all"
        >
          <Send class="w-3.5 h-3.5" />
          <span>Hubungi</span>
        </a>

        <!-- Mobile Hamburger Toggle -->
        <button
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          type="button"
          aria-label="Menu"
          class="md:hidden w-9 h-9 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-white shadow-neo-sm cursor-pointer"
        >
          {#if mobileMenuOpen}
            <X class="w-4 h-4" />
          {:else}
            <Menu class="w-4 h-4" />
          {/if}
        </button>
      </div>

    </div>

    <!-- Mobile Dropdown Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden mt-2 p-4 bg-white dark:bg-[#18181B] border-2 border-black dark:border-white shadow-neo-md flex flex-col gap-2 font-mono animate-in fade-in slide-in-from-top-2 duration-150">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={() => mobileMenuOpen = false}
            class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white hover:bg-[#FFE600] hover:text-black hover:border-black flex items-center justify-between transition-colors"
          >
            <span>{link.name}</span>
            <span class="font-bold">→</span>
          </a>
        {/each}
        <a
          href="#contact"
          onclick={() => mobileMenuOpen = false}
          class="mt-2 text-center py-2.5 bg-[#FFE600] text-black border-2 border-black shadow-neo-sm font-bold text-xs uppercase tracking-wider"
        >
          Hubungi Saya 🐻
        </a>
      </div>
    {/if}
  </div>
</header>
