<script>
    import Navbar from '$lib/Navbar.svelte';
  </script>
  
  <Navbar />
<section class="main">
  <h1>BLOG</h1>
</section>

<style>
.main {
  background-color: #343434;
  min-height: 100vh;   /* fill the viewport vertically */
  width: 100%;         /* stretch full width */
  margin: 0;           /* remove default margins */
  padding: 2rem;       /* add breathing room from edges */
  box-sizing: border-box;
  padding-top: 60px;
}

h1 {
  color: white;
}

</style>  