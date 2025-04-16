import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ExpoCryptoUniversal',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: ['src/**/*.ts'],
      exclude: ['src/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
    }),
  ],
});
