import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a.nav-link");
    if (!navLinks.length) return;

    const setActive = (link) => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    };

    const handleClick = (event) => {
      setActive(event.currentTarget);
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    if (window.location.hash) {
      const current = Array.from(navLinks).find(
        (link) => link.getAttribute("href") === window.location.hash,
      );
      if (current) {
        setActive(current);
      }
    }

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Govinda Roy | Kinetic Architect</title>
      </Head>
      <main>
        <nav className="fixed top-0 w-full z-50 bg-[#0c0e12]/60 backdrop-blur-xl border-b border-[#46484d]/20 shadow-[0px_20px_40px_rgba(0,212,236,0.06)]">
          <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto font-['Space_Grotesk'] tracking-tight">
            <span className="text-xl font-bold tracking-tighter text-[#f6f6fc]">
              Govinda Roy
            </span>
            <div className="hidden md:flex items-center space-x-8">
              <a
                className="nav-link active transition-all cubic-bezier(0.23,1,0.32,1)"
                href="#"
              >
                Home
              </a>
              <a
                className="nav-link transition-all cubic-bezier(0.23,1,0.32,1)"
                href="#work"
              >
                Work
              </a>
              <a
                className="nav-link transition-all cubic-bezier(0.23,1,0.32,1)"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="nav-link transition-all cubic-bezier(0.23,1,0.32,1)"
                href="#banners"
              >
                Banners
              </a>
              <a
                className="nav-link transition-all cubic-bezier(0.23,1,0.32,1)"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 text-primary text-xs font-bold tracking-[0.1em] uppercase">
                  <span className="material-symbols-outlined text-[14px] leading-none">
                    location_on
                  </span>
                  Based in Bangladesh
                </div>
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-on-surface">
                  Architecting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary headline-glow">
                    Digital Experiences
                  </span>
                </h1>
                <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  Full Stack Developer specialized in building robust web
                  solutions and high-performance Rich Media Ads. Crafting the
                  intersection of performance and aesthetics.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    className="group relative px-8 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-bold rounded shadow-lg transition-all hover:scale-105 active:scale-95"
                    href="#work"
                  >
                    Explore My Work
                  </a>
                  <a
                    className="px-8 py-4 border border-primary/30 text-primary font-bold rounded hover:bg-primary/5 transition-all"
                    href="#contact"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="flex-1 hidden lg:block">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 rounded-full border border-outline-variant/30 animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-80 group">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute w-24 h-24 border-2 border-primary/50 rounded-full animate-[spin_8s_linear_infinite]"></div>
                        <div className="absolute w-16 h-16 bg-gradient-to-br from-primary to-primary-dim rounded-full shadow-[0_0_40px_rgba(0,229,255,0.6)] group-hover:scale-110 transition-transform duration-500"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-24 h-24 glass-panel rounded-xl border-primary/30 -rotate-12 animate-[bounce_4s_ease-in-out_infinite] flex items-center justify-center group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          code
                        </span>
                      </div>
                      <div className="absolute bottom-10 right-0 w-20 h-20 glass-panel rounded-xl border-secondary/30 rotate-12 animate-[bounce_5s_ease-in-out_infinite_1s] flex items-center justify-center group-hover:-translate-x-6 group-hover:translate-y-2 transition-transform duration-700">
                        <span className="material-symbols-outlined text-secondary text-2xl">
                          terminal
                        </span>
                      </div>
                      <div className="absolute top-1/2 -right-4 w-16 h-16 glass-panel rounded-full border-tertiary/30 animate-[pulse_3s_ease-in-out_infinite] flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                        <div className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_10px_#70aaff]"></div>
                      </div>
                      <div className="absolute inset-0 border border-primary/10 rounded-full scale-125 group-hover:scale-150 transition-transform duration-1000"></div>
                      <div className="absolute inset-0 border border-white/5 rounded-full scale-150 animate-[spin_20s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full top-0 opacity-0 group-hover:opacity-100 group-hover:animate-[bounce_2s_linear_infinite] transition-opacity pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 bg-surface-container-low" id="work">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20">
              <label className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
                Chronology
              </label>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2">
                Professional Journey
              </h2>
            </div>
            <div className="relative space-y-16">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 md:-translate-x-1/2"></div>
              <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="md:w-1/2 md:text-right md:pr-12 group">
                  <div className="inline-block px-4 py-2 bg-surface-container-high rounded-lg mb-4 text-secondary font-headline font-bold">
                    2022 — Present
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface">
                    Full Stack Developer
                  </h3>
                  <p className="text-on-surface-variant font-medium mb-4">
                    Planet Nine BV
                  </p>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                    Developing high-end web applications and innovative Rich
                    Media advertising solutions. Focused on performance
                    optimization and scalable architecture.
                  </p>
                </div>
                <div className="absolute left-[-8px] md:left-1/2 top-0 md:top-auto w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,229,255,0.8)] z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 glass-panel rounded-xl border-l-4 border-l-primary">
                    <span
                      className="material-symbols-outlined text-primary mb-4"
                      style={{ fontSize: "32px" }}
                    >
                      rocket_launch
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] px-2 py-1 bg-surface-container-highest rounded text-outline">
                        LARAVEL
                      </span>
                      <span className="text-[10px] px-2 py-1 bg-surface-container-highest rounded text-outline">
                        VUE.JS
                      </span>
                      <span className="text-[10px] px-2 py-1 bg-surface-container-highest rounded text-outline">
                        GSAP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row-reverse gap-8 items-start md:items-center">
                <div className="md:w-1/2 md:pl-12">
                  <div className="inline-block px-4 py-2 bg-surface-container-high rounded-lg mb-4 text-secondary font-headline font-bold">
                    2020 — 2022
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface">
                    Junior Software Engineer
                  </h3>
                  <p className="text-on-surface-variant font-medium mb-4">
                    Solution Art Ltd
                  </p>
                  <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                    Contributed to core product features and maintenance of
                    enterprise software solutions. Specialized in PHP backend
                    services and frontend integration.
                  </p>
                </div>
                <div className="absolute left-[-8px] md:left-1/2 top-0 md:top-auto w-4 h-4 rounded-full bg-tertiary md:-translate-x-1/2 shadow-[0_0_15px_rgba(112,170,255,0.5)] z-10"></div>
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="p-6 glass-panel rounded-xl border-r-4 border-r-tertiary">
                    <span
                      className="material-symbols-outlined text-tertiary mb-4"
                      style={{ fontSize: "32px" }}
                    >
                      architecture
                    </span>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="text-[10px] px-2 py-1 bg-surface-container-highest rounded text-outline">
                        PHP
                      </span>
                      <span className="text-[10px] px-2 py-1 bg-surface-container-highest rounded text-outline">
                        JAVASCRIPT
                      </span>
                      <span className="text-[10px] px-2 py-1 bg-surface-container-highest rounded text-outline">
                        MYSQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32" id="skills">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <label className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
                  Core Competencies
                </label>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2">
                  The Toolkit
                </h2>
              </div>
              <div className="hidden md:block h-[1px] flex-grow mx-8 bg-outline-variant/20 mb-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="group p-6 glass-panel rounded-xl hover:bg-surface-bright transition-all duration-300 border-b-2 border-transparent hover:border-primary">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">javascript</span>
                </div>
                <h4 className="font-bold text-on-surface">JavaScript</h4>
                <p className="text-xs text-on-surface-variant mt-2">
                  ES6+, Asynchronous Patterns
                </p>
              </div>
              <div className="group p-6 glass-panel rounded-xl hover:bg-surface-bright transition-all duration-300 border-b-2 border-transparent hover:border-secondary">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">data_object</span>
                </div>
                <h4 className="font-bold text-on-surface">PHP / Laravel</h4>
                <p className="text-xs text-on-surface-variant mt-2">
                  API Design, Backend Architecture
                </p>
              </div>
              <div className="group p-6 glass-panel rounded-xl hover:bg-surface-bright transition-all duration-300 border-b-2 border-transparent hover:border-tertiary">
                <div className="w-12 h-12 bg-tertiary/10 rounded flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <h4 className="font-bold text-on-surface">Vue.js</h4>
                <p className="text-xs text-on-surface-variant mt-2">
                  SFC, Pinia, Composition API
                </p>
              </div>
              <div className="group p-6 glass-panel rounded-xl hover:bg-surface-bright transition-all duration-300 border-b-2 border-transparent hover:border-primary">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">animation</span>
                </div>
                <h4 className="font-bold text-on-surface">GSAP</h4>
                <p className="text-xs text-on-surface-variant mt-2">
                  Kinetic UI, Timeline Control
                </p>
              </div>
              <div className="group p-6 glass-panel rounded-xl hover:bg-surface-bright transition-all duration-300 border-b-2 border-transparent hover:border-secondary">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <h4 className="font-bold text-on-surface">Node.js</h4>
                <p className="text-xs text-on-surface-variant mt-2">
                  Express, Serverless Apps
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-32 bg-surface-container-lowest overflow-hidden"
          id="banners"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <label className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
                  High Performance
                </label>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2">
                  Digital Advertising Showcase
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-sm mt-4 md:mt-0 italic border-l-2 border-primary/30 pl-4">
                Kinetic motion and architectural precision for the modern web
                advertising landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-12 group">
                <div className="glass-panel p-4 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,229,255,0.05)]">
                  <div className="bg-surface-container w-full h-48 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:bg-surface-container-high transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                    <span className="text-outline-variant font-headline font-bold text-xl uppercase tracking-widest opacity-40">
                      970 x 250
                    </span>
                    <div className="absolute bottom-4 right-4 text-[10px] font-mono text-primary/60 bg-black/40 px-2 py-1 rounded">
                      LARGE_LEADERBOARD_CORE
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center px-2">
                    <span className="text-xs font-bold text-on-surface/60">
                      Billboard / Super Leaderboard
                    </span>
                    <div className="h-[1px] flex-grow mx-4 bg-outline-variant/20"></div>
                    <span className="text-xs font-mono text-secondary">
                      HTML5 / GSAP
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 group h-full">
                <div className="glass-panel p-4 rounded-xl border-tertiary/20 hover:border-tertiary/50 transition-all duration-500 h-full flex flex-col">
                  <div className="bg-surface-container w-full flex-grow rounded-lg flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-tertiary/5 to-transparent"></div>
                    <span className="text-outline-variant font-headline font-bold text-xl uppercase tracking-widest opacity-40 rotate-90">
                      300 x 600
                    </span>
                    <div className="absolute top-4 left-4 text-[10px] font-mono text-tertiary/60 bg-black/40 px-2 py-1 rounded">
                      HALF_PAGE_V1
                    </div>
                  </div>
                  <div className="mt-4 px-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-on-surface/60">
                        Half Page Ad
                      </span>
                      <span className="text-xs font-mono text-tertiary">
                        Interactive
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="glass-panel p-4 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-500">
                    <div className="bg-surface-container aspect-square rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                      <span className="text-outline-variant font-headline font-bold text-xl uppercase tracking-widest opacity-40">
                        300 x 250
                      </span>
                    </div>
                    <div className="mt-3 text-[10px] font-mono text-outline uppercase tracking-tighter">
                      Medium Rectangle / MPU
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="glass-panel p-4 rounded-xl border-secondary/20 hover:border-secondary/50 transition-all duration-500">
                    <div className="bg-surface-container aspect-[336/280] rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent"></div>
                      <span className="text-outline-variant font-headline font-bold text-xl uppercase tracking-widest opacity-40">
                        336 x 280
                      </span>
                    </div>
                    <div className="mt-3 text-[10px] font-mono text-outline uppercase tracking-tighter">
                      Large Rectangle
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 group">
                  <div className="glass-panel p-4 rounded-xl border-outline-variant/30 hover:border-primary/50 transition-all duration-500">
                    <div className="bg-surface-container h-24 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                      <span className="text-outline-variant font-headline font-bold text-xl uppercase tracking-widest opacity-40">
                        728 x 90
                      </span>
                    </div>
                    <div className="mt-3 flex justify-between text-[10px] font-mono text-outline uppercase">
                      <span>Standard Leaderboard</span>
                      <span className="text-primary/60">GWD READY</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12 group mt-8">
                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                  <div className="glass-panel p-4 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-500 w-full md:w-48">
                    <div className="bg-surface-container h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/5 to-transparent"></div>
                      <span className="text-outline-variant font-headline font-bold text-xl uppercase tracking-widest opacity-40 rotate-90 whitespace-nowrap">
                        160 x 600
                      </span>
                    </div>
                    <div className="mt-3 text-center text-[10px] font-mono text-outline uppercase">
                      Skyscraper
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="p-8 glass-panel rounded-2xl border-l-4 border-primary">
                      <h4 className="text-2xl font-headline font-bold mb-4">
                        Ad Tech Mastery
                      </h4>
                      <p className="text-on-surface-variant leading-relaxed">
                        Specializing in lightweight, high-performance Rich Media
                        banners for major platforms like Google DV360, Adform,
                        and Sizmek. Every unit is optimized for sub-150kb
                        initial loads without compromising on kinetic fluidity.
                      </p>
                      <div className="flex gap-4 mt-6">
                        <div className="px-3 py-1 bg-surface-container-highest text-primary text-[10px] font-black rounded uppercase tracking-widest">
                          GSAP Timeline
                        </div>
                        <div className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-black rounded uppercase tracking-widest">
                          SVG Morphing
                        </div>
                        <div className="px-3 py-1 bg-surface-container-highest text-tertiary text-[10px] font-black rounded uppercase tracking-widest">
                          Dynamic Feed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 p-12 glass-panel rounded-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <label className="text-primary font-bold text-xs tracking-widest uppercase">
                    Expertise 01
                  </label>
                  <h3 className="text-4xl font-headline font-bold mt-4 mb-6">
                    Full Stack Solutions
                  </h3>
                  <p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">
                    Building scalable backend infrastructures paired with
                    pixel-perfect frontend implementations. Expert in MVC
                    patterns and modern reactive frameworks.
                  </p>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">
                      dns
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      developer_board
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      cloud
                    </span>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"></div>
              </div>
              <div className="lg:col-span-4 p-8 bg-surface-container-high rounded-2xl border border-outline-variant/10">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                      ad_units
                    </span>
                    <h3 className="text-2xl font-headline font-bold mb-4">
                      Rich Media & Performance Ads
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      High-impact interactive advertising that prioritizes
                      performance without sacrificing creative fidelity.
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-outline-variant/20">
                    <span className="text-xs font-label text-outline uppercase tracking-tighter">
                      Technology Focus
                    </span>
                    <p className="font-bold text-on-surface mt-1">
                      Google Web Designer, GreenSock, Canvas
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-12 h-64 relative rounded-2xl overflow-hidden shadow-2xl shadow-[0_0_50px_rgba(0,229,255,0.15)]">
                <img
                  alt="High-resolution digital architecture background with sleek dark aesthetic and neon blue glowing code lines"
                  className="w-full h-full object-cover opacity-60"
                  data-alt="High-resolution digital architecture background with sleek dark aesthetic and neon blue glowing code lines"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZnTNqvFm36yeqdWrgVmc9oeTcV7MJyXnEw4Ah7jeG6AZ8HrbhnV698MJ7br8LXrGiqCWzy5586dCoFLKuM0jSNLeKaGHcZWrWWl1CjzZYg_WRMfwNfKcnenGkO7xsY9-AYN9-3s3P-6o6k6FCXt2KXwENyCmlbgBjalE6x8W9p9OoCG2CEvFm4ng5aBOPb0lc61LxgfVGz1TyQKr-6VWrfp-L5EvNnEFu_W7yoq6MDowGh_vJkJ5hgof_wQtltkyMB-HHXlb-gM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-primary/10"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-headline font-bold">
                    Ready for the Next Chapter in Bangladesh
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32" id="contact">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-block p-4 rounded-full bg-surface-container-high mb-8">
              <span className="material-symbols-outlined text-primary text-4xl">
                alternate_email
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8">
              Let's build something{" "}
              <span className="text-primary italic">extraordinary</span>{" "}
              together.
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
              Currently based in Bangladesh and open to new global opportunities
              and collaborations. Reach out for projects, hiring, or just a
              technical chat.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                className="px-10 py-5 bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-black rounded shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all"
                href="mailto:contact@govindaroy.com"
              >
                SEND AN EMAIL
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
