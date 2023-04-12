import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind(), sitemap(), robotsTxt()],
  output: "server",
  adapter: netlify()
});