import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "index.html", // SPA fallback for Firebase Hosting rewrites
    }),
    paths: { relative: true },
  },
};
