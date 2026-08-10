<script lang="ts">
  import resume from '$lib/assets/resume.pdf';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  let scroller: HTMLDivElement;
  import { base } from '$app/paths';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  $: currentPath = $page.url.pathname.slice(base.length) || '/';
  $: isActive = (href: string) => (href === '/' ? currentPath === '/' : currentPath.startsWith(href));

  onMount(() => {
    // optional: auto-center on mount if the row is wider than the viewport
    const dx = (scroller.scrollWidth - scroller.clientWidth) / 2;
    if (dx > 0) scroller.scrollLeft = dx;
  });
</script>

<section class="main">
  <div class="nav-scroller" bind:this={scroller}>
    <a class="wordmark" href="{base}/">LISA CHEN</a>
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

/* Scroll container */
.nav-scroller {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  padding-inline: 1.5rem;
  scrollbar-width: none;         /* Firefox */
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--text);
  text-transform: none;
  padding-bottom: 0;
  margin-right: auto;
  flex: 0 0 auto;
}
.wordmark::after { display: none; }

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
</style>
