<script lang="ts">
  import resume from '$lib/assets/resume.pdf';
  import { onMount } from 'svelte';
  let scroller: HTMLDivElement;
  import { base } from '$app/paths';


  onMount(() => {
    // optional: auto-center on mount if the row is wider than the viewport
    const dx = (scroller.scrollWidth - scroller.clientWidth) / 2;
    if (dx > 0) scroller.scrollLeft = dx;
  });
</script>

<section class="main">
  <div class="nav-scroller" bind:this={scroller}>
    <ul class="nav-track">
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/about">About</a></li>
      <li><a href="{base}/projects">Projects</a></li>
      <li><a href="{base}/blog">Blog</a></li>
      <li><a href="{base}/contact">Contact</a></li>
      <li><a href={resume} target="_blank" rel="noopener" type="application/pdf">Resume</a></li>
    </ul>
  </div>
</section>

<style>
/* Bar */
.main {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  background: #2c2b2b;
  padding: 1.5rem 0;
}

/* Scroll container */
.nav-scroller {
  /* display: block; */
  display: flex; 
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  padding-inline: 1rem;       
  scrollbar-width: none;         /* Firefox */
  /* scrollbar-color: rgba(255,255,255,.5) transparent; */
}


/* The row of links */
.nav-track {
  justify-content: center;
  display: inline-flex;         
  gap: 3rem;
  margin: 0.3rem;
  padding: 0 0.5rem;
  list-style: none;
  flex-wrap: nowrap;             
  width: max-content;       
}

/* Items should NOT stretch */
.nav-track > li { flex: 0 0 auto; }

/* Links */
a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: .15em;
  position: relative;
  font-weight: 500;
  white-space: nowrap;           /* prevent wrapping mid-word */
  display: inline-block;         /* improves hit area + underline effect */
  padding-bottom: 6px;           /* gives room for the underline */
}
a::after {
  content: "";
  position: absolute; left: 50%; bottom: 0;
  width: 0; height: 2px; background: #fff;
  transition: width .3s ease, left .3s ease;
}
a:hover::after,
a:focus-visible::after { width: 100%; left: 0; }

@media (hover: none) {
  a { padding-block: 10px; }
}
</style>
