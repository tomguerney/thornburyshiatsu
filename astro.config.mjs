import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  site: 'https://thornburyshiatsu.com.au',
  integrations: [tailwind(), compress()],
});
