<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="apple-mobile-web-app-capable" content="yes" />

  <link rel="icon" type="image/png" sizes="32x32" href={`${base}/favicon-32x32.png`} />
  <link rel="icon" type="image/png" sizes="16x16" href={`${base}/favicon-16x16.png`} />
  <link rel="apple-touch-icon" href={`${base}/apple-touch-icon.png`} />
  <link rel="manifest" href={`${base}/site.webmanifest`} />
</svelte:head>

<slot />
