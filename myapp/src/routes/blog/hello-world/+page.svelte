<script>
    import Navbar from '$lib/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <section class="main">
    <article class="post">
      <header>
        <h1>Hello, World</h1>
        <p class="meta">{new Date('2025-10-05').toLocaleDateString()}</p>
      </header>
  
      <p>This is a sample post page. Use normal Svelte/HTML here.</p>
    </article>
  </section>
  
  <style>
    .main { background:#343434; min-height:100svh; padding:100px 2rem 2rem; box-sizing:border-box; }
    .post { max-width:820px; margin:0 auto; color:#eaeaea; }
    h1 { color:#fff; margin:0 0 .4rem; font-size:clamp(1.8rem,5vw,2.4rem); }
    .meta { color:#bdbdbd; margin:0 0 1rem; }
  </style>
  