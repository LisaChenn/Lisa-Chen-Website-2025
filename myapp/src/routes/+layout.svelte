<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
  
  </script>

<svelte:head>
  <!-- Browser tab icon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

  <!-- iOS home screen icon (optional) -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- (Optional) PWA manifest if you have one -->
  <!-- <link rel="manifest" href="/site.webmanifest" /> -->
</svelte:head>

  
  <slot />
  