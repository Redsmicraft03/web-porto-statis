<script>
  import { onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Skills from './components/Skills.svelte';
  import Projects from './components/Projects.svelte';
  import ProjectModal from './components/ProjectModal.svelte';
  import Contact from './components/Contact.svelte';
  import BearWidget from './components/BearWidget.svelte';
  import Footer from './components/Footer.svelte';

  // Theme state: default to dark or load from localStorage
  let isDark = $state(true);
  let activeSection = $state('hero');
  let selectedProject = $state(null);
  let toastMessage = $state(null);
  let toastTimer = null;

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark = saved === 'dark';
    }
  }

  $effect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  const toggleTheme = () => {
    isDark = !isDark;
  };

  const showToast = (msg) => {
    toastMessage = msg;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastMessage = null;
    }, 3500);
  };

  onMount(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            activeSection = sectionId;
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="min-h-screen flex flex-col relative text-[#121212] dark:text-[#F4F4F5]">
  <!-- Top Marquee Banner (Minimalist Neo-Brutalist Technical Ribbon) -->
  <div class="w-full bg-[#FFE600] text-black border-b-2 border-black py-1.5 px-4 overflow-hidden select-none font-mono text-[11px] font-bold tracking-wider z-40">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <div class="flex items-center gap-3">
        <span class="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
        <span>HANIF.DEV // GOLANG BACKEND SPECIALIST</span>
      </div>
      <div class="hidden sm:flex items-center gap-4 text-[10px]">
        <span>CHACHA20-POLY1305</span>
        <span>•</span>
        <span>CLEAN ARCHITECTURE</span>
        <span>•</span>
        <span>HIGH-PERFORMANCE API</span>
      </div>
      <div class="font-bold uppercase tracking-widest text-[10px] bg-black text-[#FFE600] px-2 py-0.5 border border-black">
        v2.0 SVELTE
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <Navbar 
    {isDark} 
    {toggleTheme} 
    {activeSection} 
  />

  <!-- Main Content Sections -->
  <main class="flex-1 z-10">
    <Hero />
    <About />
    <Skills />
    <Projects onSelectProject={(project) => selectedProject = project} />
    <BearWidget onShowToast={showToast} />
    <Contact onShowToast={showToast} />
  </main>

  <!-- Footer -->
  <Footer />

  <!-- Project Details Modal -->
  {#if selectedProject}
    <ProjectModal 
      project={selectedProject} 
      onClose={() => selectedProject = null} 
    />
  {/if}

  <!-- Toast Notification (Neo-Brutalist Badge) -->
  {#if toastMessage}
    <div class="fixed bottom-6 right-6 z-50 px-5 py-3 bg-[#FFE600] text-black border-2 border-black shadow-neo-md flex items-center gap-3 font-mono font-bold text-xs sm:text-sm animate-in slide-in-from-bottom-4 duration-200">
      <span class="text-base">🐻</span>
      <span>{toastMessage}</span>
    </div>
  {/if}
</div>
