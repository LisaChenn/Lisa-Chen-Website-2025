import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html'   // <-- required for GitHub Pages SPA
    }),
    paths: { base: '/Lisa-Chen-Website-2025', relative: true }
  }
};
