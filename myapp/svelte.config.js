import adapter from '@sveltejs/adapter-static';

const base = '/Lisa-Chen-Website-2025'; // project site base

export default {
  kit: {
    adapter: adapter({ pages: 'docs', assets: 'docs', fallback: '404.html' }),
    paths: { base, relative: true } // relative helps with asset URLs on Pages
  }
};
