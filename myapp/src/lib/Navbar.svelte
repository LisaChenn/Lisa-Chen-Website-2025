<script lang="ts">
  import resume from '$lib/assets/resume.pdf';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  let scroller: HTMLElement;
  import { base } from '$app/paths';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  let menuOpen = false;

  $: currentPath = $page.url.pathname.slice(base.length) || '/';
  $: isActive = (href: string) => (href === '/' ? currentPath === '/' : currentPath.startsWith(href));
  $: $page, (menuOpen = false);

  onMount(() => {
    // optional: auto-center on mount if the row is wider than the viewport (desktop/tablet only)
    if (window.matchMedia('(min-width: 721px)').matches) {
      const dx = (scroller.scrollWidth - scroller.clientWidth) / 2;
      if (dx > 0) scroller.scrollLeft = dx;
    }
  });
</script>

<section class="main">
  <div class="bar">
    <a class="wordmark" href="{base}/">LISA CHEN</a>

    <button
      class="menu-toggle"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      on:click={() => (menuOpen = !menuOpen)}>
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar"></span>
    </button>

    <nav class="nav-scroller" bind:this={scroller} class:open={menuOpen}>
      <ul class="nav-track">
        {#each links as { href, label }}
          <li>
            <a
              class="nav-link"
              href="{base}{href}"
              aria-current={isActive(href) ? 'page' : undefined}
              class:active={isActive(href)}>{label}</a>
          </li>
        {/each}
        <li>
          <a class="resume-link" href={resume} target="_blank" rel="noopener" type="application/pdf">Resume</a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<style>
/* Bar */
.main {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 1.15rem 0;
}

.bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: 1.5rem;
  position: relative;
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--text);
  text-transform: none;
  padding-bottom: 0;
  flex: 0 0 auto;
}
.wordmark::after { display: none; }

/* Hamburger (mobile only) */
.menu-toggle {
  display: none;
  margin-left: auto;
  flex: 0 0 auto;
  background: none;
  border: 0;
  padding: 0.5rem;
  cursor: pointer;
}
.menu-toggle__bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  margin: 5px 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.menu-toggle[aria-expanded='true'] .menu-toggle__bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle[aria-expanded='true'] .menu-toggle__bar:nth-child(2) { opacity: 0; }
.menu-toggle[aria-expanded='true'] .menu-toggle__bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Scroll container */
.nav-scroller {
  margin-left: auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  scrollbar-width: none;         /* Firefox */
}

/* The row of links */
.nav-track {
  display: inline-flex;
  align-items: center;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: nowrap;
  width: max-content;
}

/* Items should NOT stretch */
.nav-track > li { flex: 0 0 auto; }

/* Links */
.nav-link {
  color: var(--text);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: .1em;
  font-size: 0.8rem;
  position: relative;
  font-weight: 500;
  white-space: nowrap;           /* prevent wrapping mid-word */
  display: inline-block;         /* improves hit area + underline effect */
  padding-bottom: 6px;           /* gives room for the underline */
}
.nav-link::after {
  content: "";
  position: absolute; left: 0; bottom: 0;
  width: 0; height: 1px; background: var(--accent);
  transition: width .25s ease;
}
.nav-link:hover,
.nav-link.active { color: var(--accent); }
.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link.active::after { width: 100%; }

.resume-link {
  color: var(--text);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.4rem 0.9rem;
  white-space: nowrap;
  transition: border-color .2s ease, color .2s ease;
}
.resume-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

@media (hover: none) {
  .nav-link { padding-block: 10px; }
}

/* Mobile: collapse the nav into a dropdown panel under the bar */
@media (max-width: 720px) {
  .menu-toggle {
    display: block;
  }

  .nav-scroller {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-left: 0;
    max-height: 0;
    overflow: hidden;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    transition: max-height 0.25s ease;
  }

  .nav-scroller.open {
    max-height: 70vh;
    overflow-y: auto;
  }

  .nav-track {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 0.25rem;
    padding: 0.5rem 1.5rem 1.25rem;
  }

  .nav-track > li { width: 100%; }

  .nav-link {
    display: block;
    width: 100%;
    padding-block: 0.75rem;
  }
  .nav-link::after { display: none; }

  .resume-link {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>
