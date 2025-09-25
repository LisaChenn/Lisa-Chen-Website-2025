<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
  
	// This makes the whole site prerenderable (static)
	export const prerender = true;
  </script>
  
  <svelte:head>
	<link rel="icon" href={favicon} />
  </svelte:head>
  
  <slot />
  