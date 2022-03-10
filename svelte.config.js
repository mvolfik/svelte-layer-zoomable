import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    paths: { base: "/svelte-layer-zoomable" },
    prerender: {
      default: true,
    },
    package: {
      dir: "dist",
    },
  },
};

export default config;
