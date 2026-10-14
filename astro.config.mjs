import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eneriz-daniel.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
  server: { host: true, port: 4321 },
});
