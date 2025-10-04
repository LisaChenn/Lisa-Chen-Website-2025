<script lang="ts">
  import { onMount } from 'svelte';
  let scroller: HTMLDivElement;

  // Optional: start scrolled to the middle if items overflow
  onMount(() => {
    const dx = (scroller.scrollWidth - scroller.clientWidth) / 2;
    if (dx > 0) scroller.scrollLeft = dx;
  });
</script>

<section class="main">
  <div class="nav-scroller" bind:this={scroller}>
    <ul class="nav-track">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</section>

  
  <style>
   /* Bar */
.main {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  background: #2c2b2b;
  padding: 2rem 0;
}

/* Center the scroller itself, and allow horizontal scroll */
.nav-scroller {
  display: flex;                /* lets us center the inner track */
  justify-content: center;      /* center when it doesn't overflow */
  overflow-x: auto;             /* scroll when it does overflow */
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;        /* Firefox: hide bar */
}
.nav-scroller::-webkit-scrollbar { display: none; } /* WebKit: hide */

/* The actual row of links */
.nav-track {
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0 1rem;
  list-style: none;
  flex-wrap: nowrap;            /* one row */
  width: max-content;           /* can grow beyond viewport */
}

.nav-track > li { flex: 0 0 auto; } /* don't shrink items */

/* Links */
a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: .15em;
  padding: .5rem 1rem;
  position: relative;
  font-weight: 500;
}
a::after {
  content: "";
  position: absolute; left: 50%; bottom: 0;
  width: 0; height: 2px; background: #fff;
  transition: width .3s ease, left .3s ease;
}
a:hover::after { width: 100%; left: 0; }


  </style>
  