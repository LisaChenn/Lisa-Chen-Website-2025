<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
  
  </script>

<svelte:head>
<!--stops it from zooming in --->
  <meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />

  <!-- Browser tab icon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

  <!-- iOS home screen icon (optional) -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

  
  <slot />
  