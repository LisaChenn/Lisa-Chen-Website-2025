import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const base = '/Lisa-Chen-Website-2025'; // must match svelte.config.js

export default defineConfig({
  plugins: [sveltekit()],
  base
});
