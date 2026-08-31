<script>
  import { onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Services from './components/Services.svelte';
  import About from './components/About.svelte';
  import Skills from './components/Skills.svelte';
  import Projects from './components/Projects.svelte';
  import CtaBanner from './components/CtaBanner.svelte';
  import Faq from './components/Faq.svelte';
  import ProjectModal from './components/ProjectModal.svelte';
  import Contact from './components/Contact.svelte';
  import BearWidget from './components/BearWidget.svelte';
  import Footer from './components/Footer.svelte';

  // Theme state: default to light mode or load from localStorage
  let isDark = $state(false);
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
      const sections = ['hero', 'about', 'services', 'skills', 'projects', 'faq', 'contact'];
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

<div class="min-h-screen flex flex-col relative text-gray-900 dark:text-gray-100 selection:bg-[#f97316] selection:text-white">
  
  <!-- Top Marquee Banner (Soft Brutalism Pastel Ribbon) -->
  <div class="w-full bg-[#f97316] text-white border-b-2 border-black/30 dark:border-white/20 py-2 px-4 overflow-hidden select-none font-sans text-xs font-extrabold tracking-wider z-40">
    <div class="flex items-center justify-between max-w-7xl mx-auto">
      <div class="flex items-center gap-3">
        <span class="inline-block w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
        <span>HANIF.DEV // GOLANG BACKEND SPECIALIST & S1 INFORMATIKA</span>
      </div>
      <div class="hidden sm:flex items-center gap-4 text-xs font-mono">
        <span>CLEAN ARCHITECTURE</span>
        <span>•</span>
        <span>HIGH-CONCURRENCY API</span>
        <span>•</span>
        <span>CHACHA20-POLY1305</span>
      </div>
      <div class="font-extrabold uppercase tracking-widest text-[10px] bg-white text-[#f97316] px-2.5 py-0.5 rounded-full border border-black/30 shadow-soft-sm">
        SOFT BRUTALISM v2.0
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
    <Services />
    <About />
    <Skills />
    <Projects onSelectProject={(project) => selectedProject = project} />
    <CtaBanner />
    <Faq />
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

  <!-- Toast Notification (Soft Brutalism Pill Badge) -->
  {#if toastMessage}
    <div class="fixed bottom-6 right-6 z-50 px-5 py-3.5 bg-white dark:bg-[#1a1921] text-gray-900 dark:text-white border-3 border-black/75 dark:border-white/80 shadow-soft-lg rounded-2xl flex items-center gap-3 font-sans font-extrabold text-xs sm:text-sm animate-in slide-in-from-bottom-4 duration-200">
      <span class="text-lg">🐻</span>
      <span>{toastMessage}</span>
    </div>
  {/if}
</div>

