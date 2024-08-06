import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://lifo123.github.io/',
  base: 'Project',
  outDir: 'Build',
  build: {
    assets: 'assets'
  }
});