import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adri1197.github.io/portfolio/',
  base: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
  output: 'static',
});